import React, { Component } from 'react';

import './Project.css';

class Project extends Component {
    render() {
        const values = [
            {icon: 'color-wand', name: 'Dynamic', description: 'Using components, props, and states'},

            {icon: 'contacts', name: 'Fluid', description: 'Focused on user design'},

                          {icon: 'albums', name: 'Responsive', description: 'Works on most resolutions and devices'}

                        ];

     

        const mapValues = values.map (value => {
            return(
                <div>
                    <span><ion-icon name={value.icon}></ion-icon></span>
                    <h4>{value.name}</h4>
                    <p>{value.description}</p>
                </div>
            )
        });



        return(
            <div className="project">
                <h3>About this website</h3>
                <h2>Written in React JS</h2>
                <div className ="row">
                    {mapValues} 
                </div>
            </div>
        )
    }
}

export default Project;