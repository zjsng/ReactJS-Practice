import PropTypes from "prop-types";
import React, { Component } from "react";

/*
  Question 2
*/
const Grocery = (props) => {
  const array = props.arrayOfObj.grocery;
  const { id, type, name } = array;
  console.log(props);
  return (
    array.map((value) => {
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

/*
  Question 3
*/
// class Grocery extends Component {
//   // array = this.props.grocery;
//   //console.log(props.data.grocery);
//   render() {
//     return (
//       this.props.grocery.map((value) => {
//         return (
//           <div key={value.id}>
//             <p>ID: {value.id}</p>
//             <p>Type: {value.type}</p>
//             <p>Name: {value.name}</p>
//           </div>
//         );
//       })
//     )
//   }
// }

Grocery.propTypes = {
  arrayOfObj: PropTypes.shape({
    grocery: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        type: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired
      })
    ).isRequired
  }).isRequired
  // grocery: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.number.isRequired,
  //     type: PropTypes.string.isRequired,
  //     name: PropTypes.string.isRequired
  //   })
  // ).isRequired
};

export default Grocery;