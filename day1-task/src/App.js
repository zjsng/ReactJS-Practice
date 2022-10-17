import React, { Component } from "react";
import logo from './logo.svg';
import './App.css';

// Default Generated App() function for React 18
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// Question 3
class App extends Component {
  state = {
    // Array of Objects for Question 2
    employees: [
      {
        firstName: "John",
        lastName: "Wick",
        age: 24,
        designation: "HR"
      },
      {
        firstName: "Alex",
        lastName: "Hansen",
        age: 25,
        designation: "Frontend Developer"
      },
      {
        firstName: "Dennis",
        lastName: "Chan",
        age: 26,
        designation: "Backend Developer"
      },
      {
        firstName: "Kenny",
        lastName: "Yu",
        age: 37,
        designation: "Manager"
      }
    ],
    // Object for Question 3
    project: {
      name: "ReactJS Capstone Project",
      client: "Accenture",
      budget: 10000
    }
  }

  // Handler Function for Question 3
  handleClick = () => {
    this.setState({
      project: {
        name: "ReactJS Developer Training",
        client: "Accenture (SG)",
        budget: 25000
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Week 2 Day 1 Task!</h1>
        <h2>Question 2</h2>
        <ul>
          {this.state.employees.map((value) => { return <li>{JSON.stringify(value)}</li> })}
        </ul>
        <h2>Question 3</h2>
        <p>The current project is {this.state.project.name} for {this.state.project.client} with a budget of ${this.state.project.budget}.</p>
        <button onClick={this.handleClick}>Update</button>
      </div>
      
    )
  }
}

export default App;