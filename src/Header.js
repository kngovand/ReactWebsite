import React, {Component} from 'react';
import Background from './img/pexels.jpeg';
import './Header.css';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '80vh',
    backgroundSize: 'cover'
}

class Header extends Component {


    
    render() {


        return(
            <div>
            <header style={myStyles}>
            <h1>{this.props.title}</h1>
            <p>Welcome to my portfolio website.</p>
            <a href="#button">{this.props.button}</a>
            </header>
            </div>
        )
    }
}

export default Header;