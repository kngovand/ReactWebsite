import React, { Component } from 'react';
import Background from './img/codes.jpeg';

import './Contact.css';

class Contact extends Component {
    render() {
        const values = [
            {icon: 'send', name: 'GitHub', description: 'Using components, props, and states'},

            {icon: 'logo-linkedin', name: 'LinkedIn', description: 'Focused on user design'},

                          {icon: 'logo-github', name: 'Email', description: 'Works on most resolutions and devices'}

                        ];


                        const myStyles = {
                            backgroundImage: `url( ${Background} )`,
                            height: '50vh',
                            backgroundSize: 'cover'
                        }
     

        const mapValues = values.map (value => {
            return(
                <div id = "Contact" className = "space">
                    <span><ion-icon name={value.icon}></ion-icon></span>
                    </div>
              
            )
        });



        return(
            
            <div style = {myStyles}>
                    <div className = "contact">
                        <h3>Thanks for stopping by!</h3>
                        <h2>Contact</h2>
                        <div className ="row">
                            {mapValues} 
                        </div>
                    </div>
               
            </div>
   
         
        )
    }
}

export default Contact;