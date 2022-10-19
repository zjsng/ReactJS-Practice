import PropTypes from "prop-types";
import React, { Component } from "react";

/*
  Question 2
*/
// const Grocery = (props) => {
//   const array = props.grocery;
//   const { id, type, name } = array;
//   //console.log(props.data.grocery);
//   return (
//     array.map((value) => {
//       console.log(value);
//       return (
//         <div key={value.id}>
//           <p>ID: {value.id}</p>
//           <p>Type: {value.type}</p>
//           <p>Name: {value.name}</p>
//         </div>
//       );
//     })
//   )
// }

/*
  Question 3
*/
class Grocery extends Component {
  // array = this.props.grocery;
  //console.log(props.data.grocery);
  render() {
    return (
      this.props.grocery.map((value) => {
        return (
          <div key={value.id}>
            <p>ID: {value.id}</p>
            <p>Type: {value.type}</p>
            <p>Name: {value.name}</p>
          </div>
        );
      })
    )
  }
}

Grocery.propTypes = {
  grocery: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired
    })
  ).isRequired,
};

export default Grocery;