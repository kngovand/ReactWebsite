import React, { Component } from 'react';
import Background from './img/keyboard.jpg';

import './About.css';

class About extends Component {
    render() {

        const myStyles = {
            backgroundImage: `url( ${Background} )`,
            height: '100vh',
            backgroundSize: 'cover',
            
        }

        return(
            <div id ="About" className="about" style = {myStyles}>
                <h3>About Me</h3>
                    <h2>Background</h2>
                    <p>Originally from Reston VI, I moved to Colorado when I was young. Enrolled as a Business major initially,
                    I took a python class where I found a new passion for coding. Now, I'm currently going to MSU-Denver for a Computer Science degree. </p>

                    <h2>Personal Life</h2>            
                    <p>I see myself as an outdoors person; if I'm not working, I'm probably outside! I love to snowboard, I wouldn't be
                        a true Coloradan if I said otherwise. I also like to cook, I am the designated chef de cuisine during the holidays.
                        Check out my food gallery!
                    </p>
            </div>

        )
    }
}

export default About;