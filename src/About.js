import React, { Component } from 'react';

import './About.css';

class About extends Component {
    render() {

        return(
            <div className="about">
                <h1>About Me</h1>
    
                <img src="http://oi66.tinypic.com/2znmtko.jpg" width="253" height="330"></img>
 
            
                    <h2>Background</h2>
                    <p>Originally raised in Reston, VI, I moved to Littleton, CO over 15 years ago. Although my family
                    has French roots, my nationality is Vietnamese and Laotian, which I am very proud of. I see Colorado as
                    my home and do not plan on going anywhere! I originally went to school for Business, but I realized that
                    I really enjoyed Computer Science, which is why I am now pursuing a career in programming.</p>

                    <h2>Personal life</h2>
                
                    <p>Some of my passions are skiing and snowboarding; I wouldn't be a true Coloradan if I said otherwise!
                    I also love cooking, working on cars, travelling, and hip-hop culture. I also love to rock climb, but I
                    have taken a hiatus due to a recent injury. I used to play competitive chess when I was younger, I just
                    started playing again (feel free to challenge me on Chess.com!). I am fluent in both French and English,
                    we speak both languages at home everyday. If you'd like to know more about me, please ask!</p>

            </div>

        )
    }
}

export default About;