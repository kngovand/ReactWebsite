import React, { Component } from 'react';
import Scrollspy from 'react-scrollspy';
//import './App.css';

import './Navigation.css';

class Navigation extends Component {
    render() {
        const sections = ['About', 'Projects', 'Resume', 'Contact'];
        const mapLinks = sections.map (section => {
            return(
                <li><a href = {"#" + section}>{section}</a></li>
            )
        });

        return(
            <nav>
                <h2 className = 'logo'>{this.props.logoTitle}</h2>
                <ul>
                    <Scrollspy items = {['About', 'Projects', 'Resume', 'Contact']} currentClassName = "is-current">
                        {mapLinks}
                    </Scrollspy>
                </ul>
            </nav>
        )
    }
}

export default Navigation;