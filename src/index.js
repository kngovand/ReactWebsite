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
                <Navigation/>
                <Header title="Kevin N." button ="Get Started" />
                <About />
                <Projects />
                <Resume />
                <Project />
                <Contact />
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
