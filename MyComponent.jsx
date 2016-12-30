import React from 'react';
var MyComponent = React.createClass({
  getInitialState: function () {
    return {
     editing: false
    }
  },
  editForm: function(){
    this.setState({ editing: true })
  },
  save: function () {
    this.props.children = this.refs.myTextArea.value;
    this.setState({ editing: false })
  },
  showEditForm: function () {
    return(
      <div>
        <textarea ref="myTextArea" defaultValue={this.props.children}></textarea>
        <button onClick={this.save} type="submit"> Save </button>
      </div>
    )
  },
  showNormalForm: function () {
    return(
      <div>
        <h2> {this.props.children} </h2>
        <button onClick={this.editForm} type="submit"> Edit </button>
        <button type="submit"> Remove  </button>
      </div>
    )
  },
  render: function () {
    if(this.state.editing){
      return this.showEditForm();
    }else{
      return this.showNormalForm();
    }
  }
});

var BoardComponent = React.createClass({
  getInitialState: function () {
    return {
      comments: [
        "I like comments",
        "I do not like the comment",
        "It's enough"
      ]
    }
  },
  render: function () {

    return (
      <div>
        {
          this.state.comments.map(function (item,i) {
            return (<MyComponent key={i}> {item} </MyComponent>)
          })
        }
      </div>
    )
  }
});

export default BoardComponent;