import React from 'react'
import { 
    Card, 
    CardImg, 
    CardTitle, 
    CardText, 
    CardBody, 
    Breadcrumb,
    BreadcrumbItem 
} from 'reactstrap'
import { Link } from 'react-router-dom'

const CampsiteInfo = ({campsite, comments: commentz}) => {
    console.log('Prop passed in: ', campsite, commentz)
    const renderCampsite = (campsite) => {
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

    const renderComments = (comments) => {
        if (comments) {
            return (
                <div className='col-md-5 m-1'>
                    <h4>Comments</h4>
                    {comments.map(comment => {
                        return (
                            <div key={comment.id}>
                                <p>{comment.text}</p>
                                <p>-- {' '}
                                {comment.author} {new Intl.DateTimeFormat(
                                'en-US', { year: 'numeric', month: 'short', 
                                day: '2-digit'})
                                .format(new Date(Date.parse(comment.date)))}
                                </p>
                            </div>
                        )
                    })}
                </div>
            )
        }
    }

    
    if(campsite !== null) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to="/directory">Directory</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{campsite.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <h2>{campsite.name}</h2>
                        <hr />
                    </div>
                </div>
                <div className='row'>
                    {renderCampsite(campsite)}
                    {renderComments(commentz)}
                </div>
            </div>
        )
    } else {
        return <div></div>
    }
}

export default CampsiteInfo;