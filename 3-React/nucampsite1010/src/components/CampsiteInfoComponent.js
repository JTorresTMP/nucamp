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

    renderComments(comments) {
        if (comments) {
            return (
                <div className='col-md-5 m-1'>
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (
                            <>
                                <p>{comment.text}</p>
                                <p>- {comment.author} {' '}
                                {new Intl.DateTimeFormat('en-US', 
                                { year: 'numeric', month: 'short', day: '2-digit'})
                                .format(new Date(Date.parse(comment.date)))}</p>
                            </>
                        )
                    })}
                </div>
            )
        }
        return <div></div>
    }

    render () {
        if(this.props.campsite !== null) {
            console.log('nice, this exists')
            return (
                <div className='row'>
                    {this.renderCampsite(this.props.campsite)}
                    {this.renderComments(this.props.campsite.comments)}
                </div>
            )
        } else {
            return <div />
        }
    }
}

export default CampsiteInfo;