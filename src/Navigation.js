import React, { Component } from 'react';
//import './App.css';

import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
        <nav>
            <h2>React project</h2>
        </nav>
        <ul>
            <li>Home</li>
            <li>Projects</li>
            <li>Resume</li>
            <li>About</li>
            <li>Contact</li>


            
        </ul>
    );
  }
}

export default Navigation;