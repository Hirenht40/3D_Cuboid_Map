
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/");
  }

  function handleClick1() {
    navigate("/location");
  }
  
  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-dark " >
    <a className="navbar-brand text-warning" href="#" >‎ ‎ Cuboid</a>
  
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <a className="nav-link cursor-pointer"  onClick={handleClick}>Home </a>
        </li>
        <li className="nav-item active ">
          <a className="nav-link" onClick={handleClick1}>Let's Create!</a>
        </li>
      </ul>
     
    </div>
  </nav>
  );
};

export default Navbar;
