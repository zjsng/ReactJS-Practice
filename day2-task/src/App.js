import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';
import data from "./data";
import Grocery from "./Grocery";

/*
  Question 1
*/
// const App = () => {
  
//   const array = data.results;
//   console.log(array);

//   const modal = document.querySelector(".modal");
//   const closeButton = document.querySelector(".close-button");

//   function toggleModal() {
//     modal.classList.toggle("show-modal");
//   }

//   const onMouseDownHandler = (data) => {
//     document.getElementsByClassName("display")[0].innerHTML = JSON.stringify(data, null, 2);
//     console.log(data);

//     toggleModal();
//   }

//   closeButton.addEventListener("click", toggleModal);

//   return (
//     <div>
//       <ul>
//         {array.map((person) => {
//           return (
//             <li onMouseDown={() => onMouseDownHandler(person)}>
//               <img src={person.picture.thumbnail} /><br />
//               Name: {person.name.first} {person.name.last}<br />
//               Email: {person.email}
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }

/*
  Question 2
*/
// class App extends Component {
//   state = {
//     grocery: [
//       {
//         id: 1,
//         type: "vegetable",
//         name: "potato"
//       },
//       {
//         id: 2,
//         type: "vegetable",
//         name: "tomato"
//       },
//       {
//         id: 3,
//         type: "vegetable",
//         name: "onion"
//       },
//       {
//         id: 4,
//         type: "fruit",
//         name: "bananas"
//       },
//       {
//         id: 5,
//         type: "fruit",
//         name: "strawberries"
//       },
//     ]
//   }
  
//   render() {
//     return (
//       <Grocery grocery={this.state.grocery}/>
//     );
//   }
// }

/*
  Question 3
*/
class App extends Component {
  state = {
    grocery: [
      {
        id: 1,
        type: "vegetable",
        name: "potato"
      },
      {
        id: 2,
        type: "vegetable",
        name: "tomato"
      },
      {
        id: "WrongType",
        type: "vegetable",
        name: "onion"
      },
      {
        id: 4,
        type: "fruit",
        name: "bananas"
      },
      {
        id: 5,
        type: "fruit",
        name: "strawberries"
      },
    ]
  }
  
  render() {
    return (
      <Grocery grocery={this.state.grocery}/>
    );
  }
}

export default App;
