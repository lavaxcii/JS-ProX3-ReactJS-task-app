import './App.css'
import React, { Component } from 'react'
import Overview from './components/Overview'

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      task: '',
      taskArray: []
    }

    this.submitTask = this.submitTask.bind(this)
    this.updateTask = this.updateTask.bind(this)
  }

  updateTask(event) {
    this.setState({
      task: event.target.value
    })
  }

  submitTask = () => {
    this.setState(prevState => ({
      taskArray: [...prevState.taskArray, this.state.task]
    }))
  }

  render() {
    return (
      <div>
        <input type="text" onChange={this.updateTask} />
        <button onClick={() => this.submitTask()} >Add task</button>
        <Overview taskArray={this.state.taskArray} />
      </div>
    )
  }
}

export default App