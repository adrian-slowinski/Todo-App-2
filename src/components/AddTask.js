import React, {Component} from 'react';

class AddTask extends Component {

  minDate = new Date().toISOString().slice(0, 10);

  state = { 
    text: '',
    checked: false,
    date: this.minDate
   }

   handleText = (e) => {
     this.setState({
       text: e.target.value
     })
   }

   handleCheckbox = (e) => {
     this.setState({
       checked: e.target.checked
     })
   }

   handleClick = (e) => {
     console.log("Dodaj")
     const {text, checked, date} = this.state;
     if(text.length > 2) {
       const add = this.props.add(text, checked, date);
       if (add) {
         this.setState({
           text: '',
           checked: false,
           date: date
         })
       }
     }
   }

   handleDate = (e) => {
     this.setState({
       date: e.target.value
     })
   }

  render() { 
    let maxDate = this.minDate.slice(0,4) * 1 + 1;
    maxDate = maxDate + "-12-31"
    console.log(maxDate)
    return ( 
      <div>
        <input 
          type="text" 
          placholder="dodaj zadanie" 
          value={this.state.text}
          onChange={this.handleText}
          />
        <input 
          type="checkbox" 
          checked={this.state.checked} 
          id="important"
          onChange={this.handleCheckbox}
          />
        <label htmlFor="important">Priorytet</label>
        <br/>
        <label htmlFor="date">Do kiedy zrobić</label>
        <br />
        <input type="date" value={this.state.date}  min={this.minDate} max={maxDate}
        onChange={this.handleDate}/>
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
     );
  }
}

export default AddTask;
 