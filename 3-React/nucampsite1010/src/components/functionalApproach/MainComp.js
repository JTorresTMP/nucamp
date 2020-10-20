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
        return <div></div>
    }

    const CampsiteWithID = () => {
        return <div></div>
    }

    return (
        <div>
            {/* <NavbarComp /> */}
            <Header />
            <Directory campsites={campsites} 
            onClick={campsiteID => onCampsiteSelect(campsiteID.id)} />
            <Footer />
        </div>
    )
}

export default Main;