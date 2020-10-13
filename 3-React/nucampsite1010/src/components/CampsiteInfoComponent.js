import React from 'react'

class CampsiteInfo extends React.Component {
    constructor(props) {
        super(props)
    }


    render () {
        if(this.props.campsite !== null) {
            console.log('nice, this exists')
            return <div className='row' />
        } else {
            return <div />
        }

        
    }
}

export default CampsiteInfo;