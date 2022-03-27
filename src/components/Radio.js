import React, { Component } from "react";

export default class Radio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checkedName: false,
      checkedAge: false,
      typeChoosed: "",
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(type) {
    if (type === "name") {
      this.setState({
        checkedAge: false,
        checkedName: true,
        typeChoosed: "name",
      });
    } else if (type === "birth") {
      this.setState({
        checkedAge: true,
        checkedName: false,
        typeChoosed: "birth",
      });
    }
  }

  componentDidUpdate(prevProp, prevState) {
    if (
      prevState.checkedName !== this.state.checkedName ||
      prevState.checkedAge !== this.state.checkedAge ||
      prevState.typeChoosed !== this.state.typeChoosed
    ) {
      const { compaerParameter } = this.props;
      compaerParameter(this.state.typeChoosed);
      console.log(this.state.typeChoosed);
    }
  }
  render() {
    return (
      <div className="radioButtons d-flex justify-content-center">
        <div className="left">
          <input
            name="name"
            checked={this.state.checkedName}
            onChange={() => this.onChange("name")}
            type="radio"
          />
          <label className="fw-bold">
            &nbsp;&nbsp;Sort by name &nbsp;&nbsp;&nbsp;&nbsp;
          </label>
        </div>
        <div className="right">
          <input
            name="birth"
            checked={this.state.checkedAge}
            onChange={() => this.onChange("birth")}
            type="radio"
          />
          <label className="fw-bold">&nbsp;&nbsp;Sort by age</label>
        </div>
      </div>
    );
  }
}
