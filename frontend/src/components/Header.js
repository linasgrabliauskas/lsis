import React, { useState, useRef} from 'react';
import { Link } from 'react-router-dom';
import navStyle from './Navigation.module.css';
import Navigation from './Navigation';
import './Header.css';

function Header() {
  const [toggle, setToggle] = useState(false);
  const burger = useRef();

  const toggleNavbar = () => {
    setToggle(!toggle);
    burger.current.classList.toggle('active');
  };

  const hideToggle = () => {
    setToggle(false);
    burger.current.classList.remove('active');
  };

  return (
    <header className='header'>
      <div className='logo-container'>
        <Link onClick={hideToggle} className='logo' to='/'>LSIS</Link>
      </div>
      <Navigation
        className={toggle ? navStyle.active : navStyle.nav}
        toggleNavbar={hideToggle}
      />
      <div className='burger' onClick={toggleNavbar} ref={burger}>
        <span className='line line1'> </span>
        <span className='line line2'> </span>
        <span className='line line3'> </span>
      </div>
    </header>
  );
}

export default Header;
