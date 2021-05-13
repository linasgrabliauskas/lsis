import React from 'react';
import './Footer.css';
import navStyle from './Navigation.module.css';
import Navigation from './Navigation';

function Footer() {
  const date = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Navigation className={`${navStyle.nav} ${navStyle.small}`} />
      <p className='copy-rights'>{date} ©️ Visos teisės saugomos</p>
    </footer>
  );
}

export default Footer;
