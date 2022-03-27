import React, { Component } from "react";
import Radio from "./components/Radio";
import TableWithFunction from "./components/TabelWithFuncttion";
// import Tables from "./components/Tables";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      paramterSelected: "",
    };
    this.compaerParameter = this.compaerParameter.bind(this);
  }

  compaerParameter(parameter) {
    if (parameter === "name") {
      this.setState({ paramterSelected: "name" });
    } else {
      this.setState({ paramterSelected: "birth" });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <center>
          <h1>Birthday Records</h1>
        </center>
        <Radio
          compaerParameter={this.compaerParameter}
          paramterSelected={this.state.paramterSelected}
        />
        {/* <Tables paramterSelected={this.state.paramterSelected} /> */}
        <TableWithFunction paramterSelected={this.state.paramterSelected} />
      </div>
    );
  }
}
