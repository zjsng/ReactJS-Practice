import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateArrayOfObject } from './Actions';

export class SampleUIComponent extends Component {


  updateBtnHandler = () => {
    const newPerson = { gender: "male", firstName: "Luke", lastName: "McCoy", email: "luke.mccoy@example.com" }
    this.props.updateArray(newPerson);
  }

  render() {
    return (
      <>
        <h1>Display Array of Object</h1>
        <pre>{JSON.stringify(this.props.arrayOfObjects, null, 2)}</pre>
        <button onClick={this.updateBtnHandler}>Update Array of Object in Store</button>
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    arrayOfObjects: state.arrOfObj,
    darkTheme: state.useDarkTheme
  }
}

const mapDispatchToProps = dispatch => {
  return {
    updateArray: val => dispatch(updateArrayOfObject(val))
  }
}

// const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(SampleUIComponent);