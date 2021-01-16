import React from 'react';
import { Link } from 'react-router-dom';

export default class Navbar extends React.Component {
    render() {
        return(
            <div>
                <ul id='nav'>
                  <li><Link to='/'>Praneeth Kanna</Link></li>
                  <li><Link to='/projects'>Projects</Link></li>
                  <li><Link to='/contact'>Contact</Link></li>
                </ul>
            </div>
        );
    }
  }