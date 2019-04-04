import React from 'react';

const Task = (props) => {

  const {text, id, date} = props.task
  return ( 
    <div>
      <p>
        {id}. 
        <strong> {text} </strong>
        do {date}
        <button onClick={() => props.change(id)}>Zrobione</button>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    </div>
   );
}
 
export default Task;