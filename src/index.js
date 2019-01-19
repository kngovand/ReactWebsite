import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Navigation from './Navigation';
import Header from './Header';
import Project from './Project';
import About from './About';
import Resume from './Resume';
import Projects from './Projects';
import Contact from './Contact';
import Scrollspy from 'react-scrollspy';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';


import * as serviceWorker from './serviceWorker';

class App extends Component {
    render() {
        return(
            <div>
               
                <Header title="Hello!" button ="Get Started" />
                <Project />
                <Projects />
                <Resume />
                <About />
                <Contact />

            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
