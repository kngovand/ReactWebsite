import React, { Component } from 'react';
import Background from './img/pexels.jpeg';
import './Resume.css';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '175vh',
    backgroundSize: 'cover'
}

class Resume extends Component {
    render() {
        return(
            <div id = "Resume" className ="resume" style = {myStyles}>
                <p align = "center">
                    <h3>Resume</h3>
                    <h2>Download the .pdf file <a href="https://docs.google.com/document/d/1cUN_Iw5sNYl3RTd86qAYAbFFWUTg9a6eI1HixzAx55g/export?format=pdf" download> here</a></h2>
                    <iframe src="https://docs.google.com/document/d/e/2PACX-1vTtNnrrZpcdLC-HwJFdVRgeUWFD0urUgtczfBl3BoKrtPR1P5GcxRBNCPT2-xgeiMDhwSTdjZFE5izY/pub?embedded=true" width="830" height="1010"></iframe>
                </p>        
            </div>
        );
    }
}

export default Resume;