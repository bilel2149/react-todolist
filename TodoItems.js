import React, { Component } from 'react';

export default class TodoItems extends Component {
  render() {
    return (
      <div className="todoitems">
        { this.props.children }
      </div>
    )
  }
}
