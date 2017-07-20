import React from 'react';


class MyComponent extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      data: 0
    };
  };
  render() {
    return (
      <div>
        <h2> Hello React </h2>
      </div>
    );
  }
}

export default MyComponent;