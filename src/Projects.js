import React, {Component} from 'react';
import {Tabs, Tab} from 'react-mdl';
import Background from './img/blue.jpg';
import './Projects.css';
import {Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton} from 'react-mdl';

const myStyles = {
    backgroundImage: `url( ${Background} )`,
    height: '100vh',
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
                <Card shadow ={5} style={{minWidth: '450', margin: 'auto'}}>
                    <CardTitle style={{color: '#fff', height: '176px', background: 'url() center / cover'}}></CardTitle>
                    <CardText> asdasd </CardText>
                </Card>
            )
        }
        else if(this.state.activeTab === 1) {
            return(
                <p>this is stuff 2</p>
            )
        }
        else if(this.state.activeTab === 2) {
            return(
                <p>this is stuff 3</p>
            )
        }
        else if(this.state.activeTab === 3) {
            return(
                <p>this is stuff 4</p>
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
                <div className ="content">(this.toggleCategories())</div>
                </Cell>

                </Grid>
                    {this.toggleCategories()}
                </section>
                </div>


            </div>
        )
    }
}

export default Projects;