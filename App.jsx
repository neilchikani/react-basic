import React from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          "id": 1,
          "name": "Foo",
          "age": "20"
        },

        {
          "id": 2,
          "name": "Bar",
          "age": "30"
        },

        {
          "id": 3,
          "name": "Baz",
          "age": "40"
        }
      ]
    }
  }

  render() {
    return (
      <div>
        <Header name="Nilay"/>
        <table>
          <tbody>
          {this.state.data.map((person, i) => <TableRow key = {i} data = {person} />)}
          </tbody>
        </table>
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header {this.props.name}</h1>
      </div>
    );
  }
}

class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
      </tr>
    );
  }
}

export default App;