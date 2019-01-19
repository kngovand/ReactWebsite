import React, {Component} from 'react';
import Background from './img/snow2.jpeg';
import './Header.css';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '78vh',
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