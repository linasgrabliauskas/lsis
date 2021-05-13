import React from 'react';
import { Link } from 'react-router-dom';
import { RiAdminLine } from 'react-icons/ri';
import ScrollToTop from './ScrollToTop';

function Navigation(props) {
  return (
    <nav className={props.className}>
      <ul>

        <li onClick={props.toggleNavbar}>
          <ScrollToTop><Link to='/apie-mus'>Apie mus</Link></ScrollToTop>
        </li>
        <li onClick={props.toggleNavbar}>
          <ScrollToTop><Link to='/formalus-ugdymas'> Formalus ugdymas </Link></ScrollToTop>
        </li>
        <li onClick={props.toggleNavbar}>
          <ScrollToTop><Link to='/neformalus-ugdymas'> Neformalus ugdymas </Link></ScrollToTop>
        </li>
        <li onClick={props.toggleNavbar}>
          <ScrollToTop><Link to='/dokumentacija'> Dokumentacija </Link></ScrollToTop>
        </li>
        <li onClick={props.toggleNavbar}>
          <ScrollToTop><Link to='/kontaktai'> Kontaktai </Link></ScrollToTop>
        </li>
        {localStorage.getItem('lsis-auth') && (
          <li onClick={props.toggleNavbar}>
            <ScrollToTop><Link to='/admin'><RiAdminLine style={{ fontSize: '1.2rem' }} /></Link></ScrollToTop>
          </li>
        )}
      </ul>
    </nav>
  );
}

export default Navigation
