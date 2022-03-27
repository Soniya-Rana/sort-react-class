import React, { Component } from "react";

export default class Table extends Component {
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
        //sort this.people array by name
        this.setState({
          sortedArray: this.people.sort((a, b) => {
            const person1 = a.name.toLowerCase();
            const person2 = b.name.toLowerCase();
            return person1 < person2 ? -1 : person1 > person2 ? 1 : 0;
          }),
        });
      } else if (paramterSelected === "birth") {
        //sort this.people array by birth

        this.setState({
          sortedArray: this.people.sort(function (a, b) {
            return new Date(a.birth) - new Date(b.birth);
          }),
        });
      }
    }
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
