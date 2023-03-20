import React, { useState, useEffect } from 'react';
import html2canvas from 'html2canvas';
import CuboidComponent from "./MapPage"
import Popup from 'reactjs-popup';
import CancelIcon from '@mui/icons-material/Cancel';


function MapComponent({ lat, lng }) {
  const [mapSrc, setMapSrc] = useState('');

  const [open, setOpen] = useState(false);
  const closeModal = () => setOpen(false);

  const handleSearch = () => {
    console.log(lat, lng);
    const apiKey = `${process.env.REACT_APP_APISTATKEY}`;
    console.log(apiKey)
    const mapUrl = `https://maps.googleapis.com/maps/api/staticmap?latlng=${lat},${lng}&size=250x250&zoom=7&markers=color:red%7C${lat},${lng}&maptype=map&key=${apiKey}`;
    setMapSrc(mapUrl);
  };

  useEffect(() => {
    handleSearch();
  }, [lat, lng]);

  return (
    <div className='cuboid'>
      {mapSrc && <img src={mapSrc} alt="Map" id="capture" />}
      <button type="button" className="capture" onClick={() => setOpen(o => !o)}>
       Capture
      </button>
      <Popup className='cuboid' open={open} onClose={closeModal}>
        <div className="modal">
          <a className="close" onClick={closeModal}>
            &times;
          </a>
        </div>
     <CancelIcon  className='close' onClick={closeModal}/>
       
        <CuboidComponent image={mapSrc} />
      </Popup>
    </div>
  );
}

export default MapComponent;
















