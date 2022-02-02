import React, { Component } from 'react';

export default class Formval extends Component {
    constructor(props){
        super(props)
        this.state={
            name:'',
            phone:'',
            email:'',
        }
        this.handleChange = this.handleChange.bind(this);  
        this.handleChange2 = this.handleChange2.bind(this);
        this.handleChange3 = this.handleChange3.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({name:event.target.value})
    }
    handleChange2(event) {
        this.setState({phone:event.target.value})
    }
    handleChange3(event) {
        this.setState({email:event.target.value})
    }
    handleSubmit() {
        if(handleChange2<8)
        alert("enter the right phone number")
    }
    handleSubmit(event) {
        if (this.handleChange2.length<10 && this.handleChange2.length>=11){
            alert('wrong phone number')
            return false
        }
        else {
            alert(`Values are:` + this.state.name + this.state.phone + this.state.email)
        }

        }
  render() {
    return(
        <div>
            <form onSubmit={this.handleSubmit}> 
                <label>Enter Your Name</label><br/>
                <input type='text' value={this.state.name} onChange={this.handleChange} required/><br/>
                <label>Enter Your Phone Number</label><br/>
                <input type='number' value={this.state.phone} onChange={this.handleChange2} required/><br/>
                <label>Enter Your Email</label><br/>
                <input type='email' value={this.state.email} onChange={this.handleChange3} required/><br/>
                <input type='submit' value='submit'/>
            </form>
        </div>
    )
  }
}
