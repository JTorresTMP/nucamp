import React, { Component } from 'react';
import DirectoryCLS from './DirectoryComponent';
import CampsiteInfoCLS from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites'
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent';
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    render() {

        const HomePage = () => {
            return <Home />
        }
        // console.log('In state', this.state.selectedCampsite)
        // console.log('Filtered:', this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite))
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <DirectoryCLS campsites={this.state.campsites} />} />
                    <Redirect to='/home' />
                </Switch>
                {/* <DirectoryCLS campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId)}/>
                <CampsiteInfoCLS campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} /> */}
                <Footer />
            </div>
        );
    };
}

export default Main;