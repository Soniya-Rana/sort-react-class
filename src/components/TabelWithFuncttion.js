import React, { Component } from "react";

export default class TableWithFunction extends Component {
  constructor(props) {
    super(props);
    this.people = [
      {
        name: "Veronica Mize",
        birth: "11/29/2011",
      },
      {
        name: "Cecilia Olsson",
        birth: "09/16/1992",
      },
      {
        name: "Peter Parker",
        birth: "01/16/1992",
      },
      {
        name: "Jimmy Shergil",
        birth: "12/12/2001",
      },
      {
        name: "Alexander Alfred",
        birth: "02/09/1891",
      },
      {
        name: "Janice Shroyer",
        birth: "12/01/1982",
      },
      {
        name: "Ralph White",
        birth: "11/30/2011",
      },
      {
        name: "Deborah T. Decker",
        birth: "10/31/1999",
      },
    ];
    this.state = {
      sortedArray: [],
    };
  }

  componentDidMount() {
    this.setState({
      sortedArray: this.people,
    });
  }

  componentDidUpdate(prevProp, prevState) {
    const { paramterSelected } = this.props;
    if (prevProp.paramterSelected !== this.props.paramterSelected) {
      if (paramterSelected === "name") {
        //sort this.people array by calling compareNames
        this.setState({
          sortedArray: this.people.sort(this.compareNames),
        });
      } else if (paramterSelected === "birth") {
        //sort this.people array by calling compareDates
        this.setState({
          sortedArray: this.people.sort(this.compareDates),
        });
      }
    }
  }

  compareDates(person1, person2) {
    return new Date(person1.birth) - new Date(person2.birth);
  }

  compareNames(person1, person2) {
    const personA = person1.name.toLowerCase();
    const personB = person2.name.toLowerCase();
    return personA < personB ? -1 : personA > personB ? 1 : 0;
  }

  render() {
    return (
      <div className="table-div w-lg">
        <table className="table table-striped table-bordered table-hover full-width">
          <thead>
            <tr>
              <th className="course-name">Person Name</th>
              <th className="duration">Date of Birth</th>
            </tr>
          </thead>
          <tbody>
            {this.state.sortedArray.map((person) => {
              return (
                <tr key={person.name}>
                  <td>{person.name}</td>
                  <td>{person.birth}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}
