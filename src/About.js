import React, { Component } from 'react';
import Background from './img/keyboard.jpg';
import './About.css';

class About extends Component {
    render() {

        const myStyles = {
            backgroundImage: `url( ${Background} )`,
            height: '75vh',
            backgroundSize: 'cover',
        }

        return(
            <div id ="About" className="about" style = {myStyles}>
                <h3>About</h3>
                <h2>A professional perspective</h2>            
                    <p>
                        Driven by results, fast learner, and always open to ideas. Dedicated to seeing through any task given and perfectionist. 
                        Experienced in many fields of programming, such as user interfaces, web & mobile applications, and databases. 
                        Understands that the programming world is constantly evolving and trying to keep up with it!
                    </p>
                <h2>Background & personal life</h2>
                    <p>
                        Originally from Reston VI, I moved to Colorado over 20 years ago. Currently attending MSU-Denver for a Computer Science degree.
                        I see myself as an outdoors person; if I'm not working I'm probably outside! I love to snowboard, I wouldn't be
                        a true Coloradan if I said otherwise. I also like to cook, I am the designated chef de cuisine during the holidays.
                    </p>
            </div>
        )
    }
}

export default About;