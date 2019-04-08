import React from 'react';
import Task from './Task'

const TaskList = (props) => { 

  const active = props.tasks.filter((task) => task.active)
  const done = props.tasks.filter((task) => !task.active)
  console.log(active)
  console.log(done)

  // done.sort((a, b) => b.finishDate - a.finishDate)

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate){
        return 1
      } else if (a.finishDate > b.finishDate){  
        return -1
      } else {
        return 0
      }
    })
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if(a < b) return -1;
      if(a > b) return 1;
      return 0
    })
  }

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