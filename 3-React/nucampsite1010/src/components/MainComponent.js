import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import DirectoryCLS from './DirectoryComponent';
import CampsiteInfoCLS from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites'

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
        // console.log('In state', this.state.selectedCampsite)
        // console.log('Filtered:', this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite))
        return (
            <div>
                <Navbar dark color="primary">
                    <div className="container">
                        <NavbarBrand href="/">NuCamp</NavbarBrand>
                    </div>
                </Navbar>
                <DirectoryCLS campsites={this.state.campsites} onClick={campsiteId => this.onCampsiteSelect(campsiteId.id)}/>
                <CampsiteInfoCLS campsite={this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite)[0]} />
            </div>
        );
    };
}

export default Main;