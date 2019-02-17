import React, { Component } from 'react';
import Background from './img/codes.jpeg';
import './Contact.css';

class Contact extends Component {
    render() {
        const values = [
                            {icon: 'send', name: 'Email', href: "mailto:kevinvanduc@gmail.com"},
                            {icon: 'logo-linkedin', name: 'LinkedIn', href: "https://www.linkedin.com/in/kngovand/"},
                            {icon: 'logo-github', name: 'GitHub', href: "https://github.com/kngovand"}
                        ];

        const myStyles = {
            backgroundImage: `url( ${Background} )`,
            height: '50vh',
            backgroundSize: 'cover'
                        }
     
        const mapValues = values.map (value => {
            return(
                <div id = "Contact" className = "space">
                    <span><a href={value.href} target="_blank"><ion-icon name={value.icon}></ion-icon></a></span>
                </div>
            )
        });

        return(
                <div className = "contact">
                    <h3>Thanks for stopping by!</h3>
                    <h2>Contact</h2>
                    <div className ="row">
                        {mapValues} 
                    </div>
                    <p>Copyright Kevin Ngovanduc</p>
                </div>
        )
    }
}

export default Contact;