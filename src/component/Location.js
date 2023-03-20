import React, { Component } from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import MapComponent from "./GoogleMaps"
import './Location.css';
import SearchIcon from '@mui/icons-material/Search';
import ViewInArIcon from '@mui/icons-material/ViewInAr';




class MapContainer extends Component {

    

    
  constructor(props) {
    
    super(props);
    this.state = {

      location: '',
      center: {
        lat: 37.7749,
        lng: -122.4194
      },
      markers: []
      
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    this.autocomplete = null;
    this.searchInput = React.createRef();
    this.handleMapDragend = this.handleMapDragend.bind(this);
  }

  

  componentDidMount() {
    const { google } = this.props;
    this.autocomplete = new google.maps.places.Autocomplete(this.searchInput.current);
    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    if (place.geometry) {
      const position = {
        lat: place.geometry.location.lat(),
        lng: place.geometry.location.lng()
      };

      this.setState({
        location: place.formatted_address,
        center: position,
        markers: [{ position }]
      });
    }
  }

  handleSearch(e) {
    e.preventDefault();
    const { google } = this.props;
    const { location } = this.state;

    const geocoder = new google.maps.Geocoder();
    geocoder.geocode({ address: location }, (results, status) => {
      if (status === 'OK') {
        const position = {
          lat: results[0].geometry.location.lat(),
          lng: results[0].geometry.location.lng()
        };

        this.setState({
          center: position,
          markers: [{ position }]
        });
      } else {
        console.log('Geocode was not successful for the following reason: ' + status);
      }
    });
  }

  handleMapDragend(mapProps, map) {
    const lat = map.center.lat();
    const lng = map.center.lng();
    this.setState({
      center: { lat, lng },
      markers: [{ position: { lat, lng } }]
    });
  }

  render() {
    const { google } = this.props;
    const { center, markers } = this.state;
    

    return (
      <div>
      <div className='static_map'>
            <MapComponent  lat={center.lat} lng={center.lng} />
            </div>
            <div className='mai_map'>

        <form onSubmit={this.handleSearch}>
          <input className='input'
            type="text"
            placeholder="Enter a location"
            value={this.state.location}
            onChange={e => this.setState({ location: e.target.value })}
            ref={this.searchInput}
          />
          <SearchIcon className='serach' onClick={this.handleSearch}/>
        </form>
        <Map
          google={google}
          zoom={7}
          center={center}
          style={{ height: '89%', width: '100%' }}
          mapTypeId={this.state.mapTypeId} // add this line

   
          onDragend={this.handleMapDragend}
        >
          {markers.map((marker, index) => (
            <Marker key={index} position={marker.position} />
          ))}
        </Map>
        </div>
      </div>
    );
  }
}



export default GoogleApiWrapper({
    apiKey: `${process.env.REACT_APP_APIKEY}`
  })(MapContainer);