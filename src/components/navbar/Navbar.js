import React, { Component } from 'react';
import { Link } from 'react-router';
import './Navbar.css';

export default class Navbar extends Component {
  render() {
    const links = ['home', 'fun things', 'résumé']
      .map((slug) => (
          <li className="nav__nav-items__item">
            <Link to={ slug }>
            { slug.split('-').join(' ') }
            </Link>
          </li>
      ))
    return (
      <nav>
        <div className="nav__logo">
          <div className="nav__logo-image">
            <div className="nav__logo-image-main"></div>
            <div className="nav__logo-image-text">Braden Casperson</div>
          </div>
          <div className="nav__logo-background"></div>
        </div>
        <ul className="nav__nav-items">
          { links }
          <li className="nav__nav-items__item">
            <Link to="contact" className="nav__nav-items__item--contact">contact me</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
