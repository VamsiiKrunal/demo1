import React, { Component } from 'react'

 class Car extends Component {
  constructor(){
    super()
    this.state={name:'krunal'}
  }
  render() {
    return (
      <div>Car {this.state.name}</div>
    )
  }
}
export default Car

