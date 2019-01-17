import React, {Component} from 'react';
import Background from './img/codes.jpeg';
import './Projects.css';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '100vh',
    backgroundSize: 'cover',
    
}

class Projects extends Component {

    render() {
        return(
            <div style={myStyles}>

            </div>
        )
    }
}

export default Projects;