import React, { Component } from 'react';

import './Resume.css';

class Resume extends Component {
    


    render() {



        return(
            <div id = "Resume" className ="resume">
                <div id ="myModal" className="modal">
                <span class = "close">&times;</span>
                </div>
                <h3>Resume</h3>
                <h2>Click on me!</h2>
           </div>

        )



        
    }
}

export default Resume;