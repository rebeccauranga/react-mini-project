import React from 'react'

class SavedRoutines extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            routine: []
        }
    }
    render() {

        return (
            <div>
                <h1>Saved Routines</h1>
            </div>
        )
    }
}      

export default SavedRoutines