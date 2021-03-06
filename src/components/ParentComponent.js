import React from 'react';
import Form from './Form'
// import { render } from 'react-dom';
import DisplayData from './DisplayData';

export default class ParentComponent extends React.Component{
    state={
        firstName:"",
        lastName:"",
    }

    // handleFirstNameChange = event =>{
    //     this.setState({
    //         firstName: event.target.value
    //     })
    // }

    // handleLastNameChange = event =>{
    //     this.setState({
    //         lastName: event.target.value
    //     })
    // }

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }


    render(){
        return(
            <div>
                <Form 
                formData={this.state} 
                handleChange={this.handleChange}
                // handleFirstNameChange={this.handleFirstNameChange}
                // handleLastNameChange={this.handleLastNameChange}
                />
                <DisplayData formData={this.state}/>

            </div>
        )

    }
}

