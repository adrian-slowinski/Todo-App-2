import React, {Component} from 'react';

class AddTask extends Component {
  state = { 
    text: '',
    checked: false,
    date: '2019-04-04'
   }
  render() { 
    return ( 
      <div>
        <input 
          type="text" 
          placholder="dodaj zadanie" 
          value={this.state.text}/>
        <input 
          type="checkbox" 
          checked={this.state.checked} 
          id="important"/>
        <label htmlFor="important">Priorytet</label>
        <br/>
        <label htmlFor="date">Do kiedy zrobić</label>
        <br />
        <input type="date" value={this.state.date}  min="2019-04-04" max="2021-04-04"/>
        <button>Dodaj</button>
      </div>
     );
  }
}

export default AddTask;
 