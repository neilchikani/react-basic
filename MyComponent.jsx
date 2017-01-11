import React from 'react';
var MyComponent = React.createClass({
  getInitialState: function () {
    return {
      editing: false
    }
  },
  editForm: function () {
    this.setState({editing: true})
  },
  save: function () {
    this.props.editCommentText(this.refs.myTextArea.value, this.props.index);
    this.setState({editing: false})
  },
  removeForm: function () {
    this.props.removeCommentText(this.props.index);
  },
  showEditForm: function () {
    return (
      <div>
        <textarea ref="myTextArea" defaultValue={this.props.children}></textarea>
        <button onClick={this.save} type="submit"> Save</button>
      </div>
    )
  },
  showNormalForm: function () {
    return (
      <div>
        <h2> {this.props.children} </h2>
        <button onClick={this.editForm} type="submit"> Edit</button>
        <button onClick={this.removeForm} type="submit"> Remove</button>
      </div>
    )
  },
  render: function () {
    if (this.state.editing) {
      return this.showEditForm();
    } else {
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
  addComment: function (text) {
    var arr = this.state.comments;
    arr.push(text);
    this.setState({comments: arr});
  },
  editComment: function (newText, i) {
    var arr = this.state.comments;
    arr.splice(i, 1, newText);
    this.setState({comments: arr});
  },
  removeComment: function (i) {
    var arr = this.state.comments;
    arr.splice(i, 1);
    this.setState({comments: arr});
  },
  render: function () {
    var that = this;
    return (
      <div>
        <button onClick={this.addComment.bind(null, "Hello")} type="submit"> Add Component</button>
        {
          this.state.comments.map(function (item, i) {
            return (<MyComponent key={i} index={i} removeCommentText={that.removeComment}
                                 editCommentText={that.editComment}> {item} </MyComponent>)
          })
        }
      </div>
    )
  }
});

export default BoardComponent;