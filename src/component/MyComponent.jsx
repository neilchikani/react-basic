import React from 'react';

class InputComponent extends React.Component{
  constructor(props) {
    super(props);
    this.updateInputData = this.updateInputData.bind(this);
  }
  updateInputData(e){
    this.props.inputUpdate(e.target.value)
  }
  render(){
    return(
      <input type="text" onChange={ this.updateInputData } defaultValue={ this.props.username } />
    )
  }
}

class MyComponent extends React.Component{
  constructor(props) {
    super(props);
    this.update = this.update.bind(this);
    this.state = {
      data: [
        {
          "id":1,
          "name":"Foo",
          "age":"20"
        },

        {
          "id":2,
          "name":"Bar",
          "age":"30"
        },

        {
          "id":3,
          "name":"Baz",
          "age":"40"
        }
      ],
      username: "Hello"
    };
  };
  update(username){
    this.setState({
      username: username
    });
  }
  render() {
    return (
      <div>
        <InputComponent username={ this.state.username } inputUpdate={ this.update } />
        <h2> { this.state.username } </h2>
      </div>
    );
  }
}

export default MyComponent;