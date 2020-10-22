import React, { useState } from 'react'
import Directory from './DirectoryComp'
import CampsiteInfo from './CampInfoComp'
import NavbarComp from './NavbarComp'
import { CAMPSITES } from '../../shared/campsites'
import { COMMENTS } from '../../shared/comments'
import { PARTNERS } from '../../shared/partners'
import { PROMOTIONS } from '../../shared/promotions'
import Header from './HeaderComp'
import Footer from './FooterComp'
import Home from './HomeComp'
import Contact from './ContactComp'
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
                        return campsite.id === +match.args.campsiteId
                    })[0]}
                    comments={comments.filter(comment => {
                        return comment.campsiteId === +match.args.campsiteId
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
            </Switch>
            <Footer />
        </div>
    )
}

export default Main;