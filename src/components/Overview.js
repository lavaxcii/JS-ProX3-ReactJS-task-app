import React, { Component } from 'react'

class Overview extends Component {
  constructor(props) {
    super(props)
    this.state = {
      
    }
  }
  render() {
    return (
      <div>
        {this.props.taskArray.map(task => {
          return <h2 key={task + this.props.taskArray.length}>{task}</h2>
        })}
      </div>
    )
  }
}

export default Overview