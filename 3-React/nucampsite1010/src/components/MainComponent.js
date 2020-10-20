import React, { Component } from 'react';
import DirectoryCLS from './DirectoryComponent';
import CampsiteInfoCLS from './CampsiteInfoComponent';
import { CAMPSITES } from '../shared/campsites'
import { COMMENTS } from '../shared/comments';
import { PARTNERS } from '../shared/partners';
import { PROMOTIONS } from '../shared/promotions';
import Header from './HeaderComponent'
import Footer from './FooterComponent'
import Home from './HomeComponent';
import Contact from './ContactComponent'
import { Switch, Route, Redirect } from 'react-router-dom';




class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campsites: CAMPSITES,
            comments: COMMENTS,
            partners: PARTNERS,
            promotions: PROMOTIONS,
            selectedCampsite: null
        };
    }

    onCampsiteSelect(campsiteId) {
        this.setState({selectedCampsite: campsiteId});
    }

    render() {

        const HomePage = () => {
            return (
                <Home
                campsite={this.state.campsites.filter(campsite => campsite.featured)[0]}
                promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
                partner={this.state.partners.filter(partner => partner.featured)[0]}
                />
            )
        }
        const CampsiteWithId = ({match}) => {
            return (
                <CampsiteInfoCLS 
                    campsite={this.state.campsites.filter(campsite => campsite.id === +match.params.campsiteId)[0]}
                    comments={this.state.comments.filter(comment => comment.campsiteId === +match.params.campsiteId)}
                />
            );
        };  
        // console.log('In state', this.state.selectedCampsite)
        // console.log('Filtered:', this.state.campsites.filter(campsite => campsite.id === this.state.selectedCampsite))
        return (
            <div>
                <Header />
                <Switch>
                    <Route path='/home' component={HomePage} />
                    <Route exact path='/directory' render={() => <DirectoryCLS campsites={this.state.campsites} />} />
                    <Route exact path='/contactus' component={Contact} />
                    <Route path='/directory/:campsiteId' component={CampsiteWithId} />
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