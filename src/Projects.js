import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import Background from './img/blue.jpg';
import './Projects.css';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '90vh',
    backgroundSize: 'cover',
}

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = {activeTab: 0};
    }

    toggleCategories() {
        if(this.state.activeTab === 0) {
            return(
 
                <Card shadow={0} style={{width: '900px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://proxy.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.idevie.com%2Fwp-content%2Fuploads%2F2015%2F12%2FReact.js_logo.svg_.png&f=1) center/ cover'}}></CardTitle>
                    <CardText>
                        I rewrote my portfolio website in React JS as a learning experience. I wanted to see how props, states, and components worked together
                        in order to code dynamically. My Ruby website loads static HTML pages from the navigation bar, the focus of this project was to code dynamically.
                        React MDL was one of the libraries I used in order to help me implement the user interface.  
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                </Card>
            )
        }
        else if(this.state.activeTab === 1) {
            return(
                <Card shadow={0} style={{width: '900px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(http://yagudaev.com/wp-content/uploads/2010/03/php-cover.jpg) center/ cover no-repeat #46B6AC', backgroundColor: 'black'}}></CardTitle>
                    <CardText>

                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                </Card>
            )
        }
        else if(this.state.activeTab === 2) {
            return(
                <Card shadow={0} style={{width: '900px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://reliablesite.net/hosting-news/wp-content/uploads/increasewebsitespeed.png) center / cover'}}></CardTitle>
                    <CardText>
                        This project was intended to provide a Business Finance Database using MySQL and MySQL Workbench. This database is fully funcional, with 
                        many features such as inserting data, functioned on triggers and procedures, and worked with foreign keys so all of the tables were updated accordingly.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                </Card>
            )
        }
        else if(this.state.activeTab === 3) {
            return(
                <Card shadow={0} style={{width: '900px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://cdn-images-1.medium.com/max/1200/1*qpJr-2XB1jf21_MxmHwg-g.png) center / cover'}}></CardTitle>
                    <CardText>
                        The objective of this application was to inform MSU-Denver students about activities and events throughout Auraria Campus. As an authentication feature, we utilized
                        Amazon's Firebase API as a login function, and Google Maps API to display the maps. After the user is logged in, they are able to either view, edit, or delete 'cards'
                        that display the current events taking place.  
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                </Card>
            )
        }

        else if(this.state.activeTab === 4) {
            return(
                <Card shadow={0} style={{width: '900px', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '200px', background: 'url(https://www.webfx.com/blog/wp-content/uploads/2016/07/coding-ftp.png) center / cover'}}></CardTitle>
                    <CardText>
                        In Dr. Beaty's Software Development class, our group was responsible for unit testing and creating automated browser tests that ran on Dr. Dollard's
                        Academic banner system. Using C# with asp.net, we utilized mocking techniques with NUnit that tested the functionality of each class, and used
                        tools such as Selenium WebKit to test the javascript on the website.
                    </CardText>
                    <CardActions border>
                        <Button colored>Github</Button>
                    </CardActions>
                </Card>
            )
        }
    }

    render() {
        return(
            <div id = "Projects" className = "projects" style = {myStyles} >
                <h3>Portfolio</h3>
                <h2>A strong focus on web applications</h2>
                <div className = "category-tabs">
                    <Tabs backgroundColor="white" styleactiveTab= {this.state.activeTab} onChange={(tabId) => this.setState({activeTab: tabId})} ripple>
                        <Tab>React Website</Tab>
                        <Tab>Ruby App</Tab>
                        <Tab>Finance DB</Tab>
                        <Tab>Android Maps</Tab>
                        <Tab>Banner System</Tab>
                    </Tabs>

                    <section className ="projects-grid">
                        <Grid className = "projects-grid">
                            <Cell col = {12}>
                                <div className ="content">{this.toggleCategories()}</div>
                            </Cell>
                        </Grid>
                    </section>

                </div>
            </div>
        )
    }
}

export default Projects;