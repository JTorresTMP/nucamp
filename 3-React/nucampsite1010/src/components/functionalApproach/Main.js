import React, { useState } from 'react'
import Directory from './Directory'
import CampsiteInfo from './CampInfo'
// import NavbarComp from './NavbarComp'
import { CAMPSITES } from '../../shared/campsites'
import { COMMENTS } from '../../shared/comments'
import { PARTNERS } from '../../shared/partners'
import { PROMOTIONS } from '../../shared/promotions'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import { Switch, Route, Redirect } from 'react-router-dom';

const Main = (props) => {
    const [campsites, setCampsites] = useState(CAMPSITES)
    const [comments, setComments] = useState(COMMENTS)
    const [partners, setPartners] = useState(PARTNERS)
    const [promotions, setPromotions] = useState(PROMOTIONS)
    const [selected, setSelected] = useState(null)

    const onCampsiteSelect = (campID) => {
        setSelected(campID)
    }

    //These 3 lines are not needed, I just want React to not shout at me
    const unusedVars = [setCampsites, setComments, setPartners,
        setPromotions, selected, onCampsiteSelect]
    console.log(unusedVars && false)

    const HomePage = () => {
        return (
            <div>
                <Home 
                campsite={campsites
                    .filter(campsite => campsite.featured)[0]}
                promotion={promotions
                    .filter(promotion => promotion.featured)[0]}
                partner={partners
                    .filter(partner => partner.featured)[0]}/>
            </div>
        )
    }

    //Need to double check to see what this function is actually doing
    const CampsiteWithID = ({match}) => {
        return (
            <div>
                <CampsiteInfo
                    campsite={campsites.filter(campsite => {
                        return campsite.id === +match.params.campsiteId
                    })[0]}
                    comments={comments.filter(comment => {
                        return comment.campsiteId === +match.params.campsiteId
                    })}
                />
            </div>
        )
    }

    return (
        <div>
            <Header />
            <Switch>
                <Route path='/home' component={HomePage} />
                <Route exact path='/directory' 
                    render={() => <Directory campsites={campsites} />} />
                <Route exact path='/contactus' component={Contact} />
                <Route path='/directory/:campsiteId' component={CampsiteWithID} />
                <Route exact path='/about' render={() => {
                    return <About partners={partners} />}} />
                <Redirect to='/home' />
            </Switch>
            <Footer />
        </div>
    )
}

export default Main;