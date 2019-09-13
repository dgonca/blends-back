import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Select from 'react-select'

function setUpOptions(oil){
    return {label: oil.name, value: oil.name}
  }

class NewBlendForm extends React.Component {
  // let oilsOptions = this.props.oilsList.map(setUpOptions);

  constructor(props){
    super(props)
    this.state = {
      name: '',
      useCase: '',
      oils: []
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleMultiChange = this.handleMultiChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);


  }

  handleInputChange(event){
      const target = event.target;
      const value = target.value;
      const name = target.name;

      this.setState({
        [name]: value
      });
    }


  handleMultiChange(option){
    this.setState({
      oils: option
    })
    console.log(this.state.oils);
  }

  handleSubmit(e){
    e.preventDefault();
    let name = this.state.name;
    let useCase = this.state.useCase;
    let oils = this.state.oils;
    this.props.handleNewBlend(name, useCase, oils);
    this.setState({
      name: ' ',
      useCase: ' ',
      oils: []
    })
  }

render(){
  return (
    <form onSubmit={this.handleSubmit} className="new-blend-form">
      <h3 className="item"> Add a New Blend </h3>
      <label>Name Your Blend
        <br/>
        <input type="text"
                 name="name"
                 className="item"
                 value={this.state.name}
                 onChange={this.handleInputChange}
                 placeholder="Name Your Blend" required />
      </label>
      <br/>

      <label>What's the Blend Good For?
      <br/>
        <input type="text"
                   name="useCase"
                   value={this.state.value}
                   onChange={this.handleInputChange}
                   className="item"
                   placeholder="Use Case" required />
      </label>
      <br/>

      <label>Choose the Oils
      <br/>
        <Select options = {this.props.oilsList.map(setUpOptions)}
                     placeholder = "Oils"
                     value={this.state.oils}
                     onChange={this.handleMultiChange}
                     name="oils"
                     isMulti isSearchable
                     className = 'select-box item' />
      </label>

      <input type="submit" value="Add Blend"/>
    </form>
  )
}

}

export default NewBlendForm;
