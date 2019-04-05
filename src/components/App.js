import React, { Component } from 'react'; 
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {

  counter = 5

  state = {
    tasks: [
      {
        id: 0,
        text: 'Sprzątanie auta',
        date: '2019-04-12',
        important: true,
        active: true,
        finishDate: null
      },
      {
        id: 1,
        text: 'Sprzątanie auta',
        date: '2019-04-12',
        important: false,
        active: true,
        finishDate: null
      },
      {
        id: 2,
        text: 'Sprzątanie auta',
        date: '2019-04-12',
        important: true,
        active: true,
        finishDate: null
      },
    ]
  }

  deleteTask = (id) => {
    console.log(`Delete ${id} `)

    // First Method
    // const tasks = [...this.state.tasks]
    // const index = tasks.findIndex((task) => 
    //   task.id === id
    // )
    // tasks.splice(index, 1)
    // this.setState({
      //   tasks
      // })
      
    //Second Method
    let tasks = [...this.state.tasks]
    tasks = tasks.filter(task => task.id !== id)
    this.setState({
      tasks
    })
  }

  changeTaskStatus = (id) => {
    console.log(`Done ${id} `)

    const tasks = [...this.state.tasks]
    tasks.forEach((task) => {
      if (task.id === id){
        task.active = false
        task.finishDate = new Date().getTime()
      }
    })
    this.setState({
      tasks
    })
  }

  addTask = (text, date, important) => { 
    const task = {
      id: this.counter,
      text: text,
      date: date,
      important: important,
      active: true,
      finishDate: null
    }
    this.counter++
    console.log(task, this.counter);

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task]
    }))

    return true;
  }

  render() {
    return (
      <div className="App">
        To do APP
        <AddTask add={this.addTask} />
        <TaskList 
          tasks={this.state.tasks}
          delete={this.deleteTask}
          change={this.changeTaskStatus}
        />
      </div>
    );
  }
}

export default App;
