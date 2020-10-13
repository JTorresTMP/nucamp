import React, { useState } from 'react'
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle
} from 'reactstrap'


const Directory = ({campsites}) => {
    const [selectedCamp, setSelectedCamp] = useState(null)
    console.table(campsites) //Console.table is magical

    const onCampSiteSelect = (campsite) => {
        setSelectedCamp(campsite)
    }

    const renderSelectedCampsite = (campsite) => {
        console.log(campsite)
        if (campsite) {
            return (
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        return <div />
    }

    return (
        <div className="container">
            <div className="row">
                {campsites.map(camp => {
                    return <CampGrid key={camp.id} campsite={camp} 
                    onCampSiteSelect={onCampSiteSelect} /> //Gotta pass in cb
                })}
            </div>
            <div className="row">
                <div className="col-md-5 m-1">
                    {renderSelectedCampsite(selectedCamp)}
                </div>
            </div>
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