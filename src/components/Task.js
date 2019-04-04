import React from 'react';

const Task = (props) => {
  const style = {
    color: 'tomato',
  }

  const {text, id, date, active, important, finishDate} = props.task

  if (active) {
    return ( 
      <div>
        <p>
          {id}. 
          <strong style={important ? style : null}> {text} </strong>
          do {date}
          <button onClick={() => props.change(id)}>Zrobione</button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
     );
  } else {
    const finish = new Date(finishDate).toLocaleString()
    return (
      <>
      <p>
          {id}. 
          <strong> {text} </strong>
          - potwierdzenie wykonania {finish} 
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </>
    )
  }

}
 
export default Task;