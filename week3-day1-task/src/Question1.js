import React from "react";
import Axios from "axios";

import DisplayData from "./DisplayData"

class Question1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { users: [] };
  }

  componentDidMount = () => {
    console.log("Now in componentDidMount()...");

    Axios.get("https://randomuser.me/api/?results=5")
      .then(response => {
        //console.log(response.data.results);
        this.setState({ users: response.data.results });
      })
      .catch(err => { console.log(err) });
  }

  render() {
    return (
      <div>
        <DisplayData data={this.state} />
      </div>
    );
  }
}

export default Question1;