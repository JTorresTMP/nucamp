import React from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'

class CampsiteInfo extends React.Component {
    constructor(props) {
        super(props)
    }

    renderCampsite(campsite) {
        return (
            <div className='col-md-5 m-1'>
                <Card>
                    <CardImg top src={campsite.image} alt={campsite.name} />
                    <CardBody>
                        <CardTitle>{campsite.name}</CardTitle>
                        <CardText>{campsite.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    } 

    render () {
        if(this.props.campsite !== null) {
            console.log('nice, this exists')
            return <div className='row'>{this.renderCampsite(this.props.campsite)}</div>
        } else {
            return <div />
        }
    }
}

export default CampsiteInfo;