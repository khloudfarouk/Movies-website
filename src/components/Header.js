import React, { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/language";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Header = () => {
  const watchListCount = useSelector(state => state.watchList.count);
  const { toggleLanguage } = useContext(LanguageContext);

  const handleLanguageToggle = () => {
    toggleLanguage(); 
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{ position: "fixed", top: 0, left: 0, width: "100%", zIndex: 1000 }}>
      <div className="container-fluid">
      
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">

          <li className="nav-item">
              <Link className="nav-link active" to="/register" style={{ fontSize: "22px", fontWeight: "bold" }}>
                SignUp !
              </Link>

            </li> 
            <li className="nav-item">
              <Link className="nav-link active" to="/" style={{ fontSize: "22px", fontWeight: "bold" }}>
                Movie List
              </Link>
            </li>
            
            <li className="nav-item">
              <Link className="nav-link" to="/watch" style={{ fontSize: "22px", fontWeight: "bold" }}>
                Watch List ({watchListCount})
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            <li className="nav-item dropdown">
              <button className="btn btn-link dropdown-toggle " id="navbarDropdown" data-bs-toggle="dropdown" aria-expanded="false" style={{ fontSize: '22px', fontWeight: 'bold' , textDecoration:'none', color:'white'}}>
                Language
              </button>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><button className="dropdown-item" onClick={handleLanguageToggle} value="ar">Arabic</button></li>
                <li><button className="dropdown-item" onClick={handleLanguageToggle} value="en">English</button></li>
              </ul>
            </li>
            
          </ul>
          
        </div>
      </div>
    </nav>
  );
}

export default Header;
