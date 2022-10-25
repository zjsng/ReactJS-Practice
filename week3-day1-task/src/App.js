import React from "react";
import Axios from "axios";

import DisplayData from "./DisplayData"
import ScoreUpdater from "./ScoreUpdater";

class App extends React.Component {
  constructor(props) {
    super(props);
    // For Question 1
    // this.state = { users: [] };
  }

  // For Question 1
  // componentDidMount = () => {
  //   console.log("Now in componentDidMount()...");

  //   Axios.get("https://randomuser.me/api/?results=5")
  //     .then(response => {
  //       //console.log(response.data.results);
  //       this.setState({ users: response.data.results });
  //     })
  //     .catch(err => { console.log(err) });
  // }

  shouldComponentUpdate = () => {
    console.log("Test");
    return false;
  }

  render() {
    // For Question 1
    // return (
    //   <div>
    //     <DisplayData data={this.state} />
    //   </div>
    // );

    // For Question 2
    return (
      <ScoreUpdater />
    );
  }
}

export default App;