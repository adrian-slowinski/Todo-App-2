import React from 'react';
import Task from './Task'

const TaskList = (props) => { 
  
  const tasks = props.tasks.map((task) => {
    return (
      <Task key={task.id} task={task} 
        delete={props.delete}
        change={props.change}
      /> 
    )
  }) 

  return ( 
    <React.Fragment>
      <h1>Lista tasków</h1>
      {tasks}

      <h4>Zadania zrobione (0) </h4>
    </React.Fragment>
   );
}
 
export default TaskList;