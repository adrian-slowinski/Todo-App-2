import React from 'react';
import Task from './Task'

const TaskList = (props) => { 

  const active = props.tasks.filter((task) => task.active)
  const done = props.tasks.filter((task) => !task.active)
  console.log(active)
  console.log(done)

  const activeTasks = active.map((task) => {
    return (
      <Task key={task.id} task={task} 
        delete={props.delete}
        change={props.change}
      /> 
    )
  }) 
  const doneTasks = done.map((task) => {
    return (
      <Task key={task.id} task={task} 
        delete={props.delete}
        change={props.change}
      /> 
    )
  }) 

  return ( 
    <React.Fragment>
      <h1>Lista tasków ({active.length})</h1>
      {activeTasks.length > 0 ? activeTasks : `Nie masz żadnych zadań`}

      <h4>Zadania zrobione ({done.length})</h4>
      {done.length > 5 && <span>Wyświetlone jest jedynie 5 ostatnich elementów</span>}
      {doneTasks.slice(0,5)}
    </React.Fragment>
   );
}
 
export default TaskList;