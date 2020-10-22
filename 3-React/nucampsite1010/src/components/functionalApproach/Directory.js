import React, { useState } from 'react'
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle
} from 'reactstrap'
import CampsiteInfo from './CampInfo'


const Directory = ({campsites}) => {
    const [selectedCamp, setSelectedCamp] = useState(null)
    console.table(campsites) //Console.table is magical

    const onCampSiteSelect = (campsite) => {
        setSelectedCamp(campsite)
    }

    return (
        <div className="container">
            <div className="row">
                {campsites.map(camp => {
                    return <CampGrid key={camp.id} campsite={camp} 
                    onCampSiteSelect={onCampSiteSelect} /> //Gotta pass in cb
                })}
            </div>
            <CampsiteInfo campsite={selectedCamp} />
        </div>
    )
}

const CampGrid = ({campsite, onCampSiteSelect}) => {
    return (
        <div className="col-md-5 m-1">
            <Card onClick={() => onCampSiteSelect(campsite)}>
                <CardImg width="100%" src={campsite.image} alt={campsite.name}/>
                <CardImgOverlay>
                    <CardTitle>{campsite.name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </div>
    )
}

export default Directory;