import * as ActionTypes from './ActionTypes'
import { baseUrl } from '../shared/baseUrl'
import axios from 'axios'


export const addComment = comment => ({
    type: ActionTypes.ADD_COMMENT,
    payload: comment
});

export const postComment = (campsiteId, rating, author, text) => dispatch => {
    
    const newComment = {
        campsiteId: campsiteId,
        rating: rating,
        author: author,
        text: text
    };
    newComment.date = new Date().toISOString();

    return fetch(baseUrl + 'comments', {
            method: "POST",
            body: JSON.stringify(newComment),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => { throw error; }
        )
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error => {
            console.log('post comment', error.message);
            alert('Your comment could not be posted\nError: ' + error.message);
        });
};

export const postFeedback = (feedback) => {
    //feedback is undefined
    console.log('Just making sure this is actually being called')
    console.log(feedback)

    axios.post(baseUrl + 'feedback', feedback)
    .then(res => {
        console.log(res)
        alert('Thank you for your feedback!')
        return res;
    })
    .catch(err => alert(`There was an error: ${err}`))

    // return fetch(baseUrl + 'feedback', {
    //     method: 'POST',
    //     body: JSON.stringify(feedback),
    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // })
    // .then(res => {
    //     if (res.ok) {
    //         console.log(res)
    //         return res;
    //     } else {
    //         const error = new Error(`StatusCode: ${res.status}, ${res.statusText}`)
    //         error.response = res;
    //         throw error;
    //     }
    // }, 
    // error => {throw error})
    // .then(response => response.json())
    // // .then(res => alert(`Thank you for your feedback, it is ${res}`))
    // .catch(error => {
    //     console.log('Error: ', error.message);
    //     alert(`There was an issue yo`)
    // })
}


export const fetchCampsites = () => (dispatch) => {
    dispatch(campsitesLoading())

    return fetch(baseUrl + 'campsites')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(campsites => dispatch(addCampsites(campsites)))
        .catch(error => dispatch(campsitesFailed(error.message)));
}

export const fetchComments = () => dispatch => {    
    return fetch(baseUrl + 'comments')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(error => dispatch(commentsFailed(error.message)));
};

export const fetchPartners = () => dispatch => {
    return fetch(baseUrl + 'partners')
    .then(response => {
        if (response.ok) {
            return response;
        } else {
            const error = new Error(`Error ${response.status}: ${response.statusText}`);
            error.response = response;
            throw error;
        }
    },
    error => {
        const errMsg = new Error(error.message);
        throw errMsg;
    })
    .then(res => res.json())
    .then(partners => dispatch(addPartners(partners)))
    .then(res => console.log('This succeeded'))
    .catch(error => dispatch(partnersFailed(error.message)))
}


export const commentsFailed = errMess => ({
    type: ActionTypes.COMMENTS_FAILED,
    payload: errMess
});

export const addComments = comments => ({
    type: ActionTypes.ADD_COMMENTS,
    payload: comments
});

export const campsitesLoading = () => ({
    type: ActionTypes.CAMPSITES_LOADING
})

export const campsitesFailed = errMess => ({
    type: ActionTypes.CAMPSITES_FAILED,
    payload: errMess
})

export const addCampsites = campsites => ({
    type: ActionTypes.ADD_CAMPSITES,
    payload: campsites
})

//PROMOTIONS

export const fetchPromotions = () => dispatch => {
    dispatch(promotionsLoading());

    return fetch(baseUrl + 'promotions')
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    const error = new Error(`Error ${response.status}: ${response.statusText}`);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                const errMess = new Error(error.message);
                throw errMess;
            }
        )
        .then(response => response.json())
        .then(promotions => dispatch(addPromotions(promotions)))
        .catch(error => dispatch(promotionsFailed(error.message)));
};

export const promotionsLoading = () => ({
    type: ActionTypes.PROMOTIONS_LOADING
});

export const promotionsFailed = errMess => ({
    type: ActionTypes.PROMOTIONS_FAILED,
    payload: errMess
});

export const addPromotions = promotions => ({
    type: ActionTypes.ADD_PROMOTIONS,
    payload: promotions
});

export const addPartners = partners => ({
    type: ActionTypes.ADD_PARTNERS,
    payload: partners
})

export const partnersLoading = () => ({
    type: ActionTypes.PARTNERS_LOADING
})

export const partnersFailed = errMess => ({
    type: ActionTypes.PARTNERS_FAILED,
    payload: errMess
})