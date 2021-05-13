import React from 'react';
import { Link } from 'react-router-dom';
import ScrollToTop from './ScrollToTop';

function Button(props) {
  if (props.path) {
    return (
      <ScrollToTop>
        <Link to={props.path}>
          <button className={`${props.className}`}>{props.text}</button>
        </Link>
      </ScrollToTop>
    )
  } else {
    return (
      <button onClick={props.onClick} className={`${props.className}`}>
        {props.text}
      </button>
    );
  }
}

export default Button;
