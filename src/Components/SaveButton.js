import React from 'react';



class SaveButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
    // let oldItems = JSON.parse(localStorage.getItem('lowerExercises')) || {};

// console.log(this.props) 
    // function save (prop) {
    //     if (prop.exercises ==='l') {
    //         localStorage.setItem('lowerExercises', prop.exercises)
    //     } else if (prop.type === 'c') {
    //         localStorage.setItem('cardioExercises', prop.exercises)
    //     } else if (prop.type==='u') {
    //         localStorage.setItem('upperExercises', prop.exercises) 
    //     }
    // } 
   
        return (
            <div>
                <button onClick={this._save}>Save</button>
                <a href="https://ctt.ac/8wRC0" target="blank"> Share your workout! </a>
            </div>
        )
    }
    _save = () => {
        if (this.props.type === '') {
            return null
        } else if (this.props.type ==='l') {
            localStorage.setItem('lowerExercises', this.props.exercises)
            if (localStorage.key(1)=== 'loweExercises') {
                let oldItems = JSON.parse(localStorage.getItem('lowerExercises'));
                console.log(oldItems)
            }
        } else if (this.props.type === 'c') {
            localStorage.setItem('cardioExercises', this.props.exercises)
        } else if (this.props.type==='u') {
            localStorage.setItem('upperExercises', this.props.exercises) 
        }
    } 
}

export default SaveButton