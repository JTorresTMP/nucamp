import React from 'react'
import {
    Card,
    CardImg,
    CardBody,
    CardTitle,
    CardText
} from 'reactstrap'

function RenderCampsite({campsite}) {
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

function RenderComments({comments}) {
    if (comments) {
        return (
            <div className='col-md-5 m-1'>
                <h4>Comments</h4>
                {comments.map(comment => {
                    return (
                        <div key={comment.text}>
                            <p>{comment.text}</p>
                            <p>- {comment.author} {' '}
                            {new Intl.DateTimeFormat('en-US', 
                            { year: 'numeric', month: 'short', day: '2-digit'})
                            .format(new Date(Date.parse(comment.date)))}</p>
                        </div>
                    )
                })}
            </div>
        )
    }
    return <div></div>
}


function CampsiteInfo(props) {
    if (props.campsite) {
        return (
            <div className="container">
                <div className="row">
                    <RenderCampsite campsite={props.campsite} />
                    <RenderComments comments={props.comments} />
                </div>
            </div>
        );
    }
    return <div />;
}





// class CampsiteInfoCLS extends React.Component {
//     constructor(props) {
//         super(props)
//     }

//     renderCampsite(campsite) {
//         return (
//             <div className='col-md-5 m-1'>
//                 <Card>
//                     <CardImg top src={campsite.image} alt={campsite.name} />
//                     <CardBody>
//                         <CardTitle>{campsite.name}</CardTitle>
//                         <CardText>{campsite.description}</CardText>
//                     </CardBody>
//                 </Card>
//             </div>
//         )
//     } 

//     renderComments(comments) {
//         if (comments) {
//             return (
//                 <div className='col-md-5 m-1'>
//                     <h4>Comments</h4>
//                     {comments.map(comment => {
//                         return (
//                             <div key={comment.text}>
//                                 <p>{comment.text}</p>
//                                 <p>- {comment.author} {' '}
//                                 {new Intl.DateTimeFormat('en-US', 
//                                 { year: 'numeric', month: 'short', day: '2-digit'})
//                                 .format(new Date(Date.parse(comment.date)))}</p>
//                             </div>
//                         )
//                     })}
//                 </div>
//             )
//         }
//         return <div></div>
//     }

//     render () {
//         if(this.props.campsite) {
//             console.log('nice, this exists')
//             return (
//                 <div className="container">
//                     <div className="row">
//                         {this.renderCampsite(this.props.campsite)}
//                         {this.renderComments(this.props.campsite.comments)}
//                     </div>
//                 </div>
//             )
//         } else {
//             console.log('hmm', this.props.campsite)
//             return <div />
//         }
//     }
// }

export default CampsiteInfo;