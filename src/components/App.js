import React, { Component } from 'react'; 
import AddTask from './AddTask';
import TaskList from './TaskList';
import './App.css';

class App extends Component {

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
        important: true,
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
  }

  changeTaskStatus = (id) => {
    console.log(`Done ${id} `)
  }

  render() {
    return (
      <div className="App">
        To do APP
        <AddTask/>
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
