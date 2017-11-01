import React from 'react';
import heap from './Heaps';
class TSPRunner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOption: 0,
      selectedOption: 'heaps',
      result: {}};
      
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.handleNumberChange = this.handleNumberChange.bind(this);
  }
  
  handleOptionChange(changeEvent) {
    this.setState({
      selectedOption: changeEvent.target.value,
    });
  }
  handleNumberChange(changeEvent) {
    this.setState({
      numberOption: changeEvent.target.value
    });
  }
  handleFormSubmit(formSubmitEvent) {
    formSubmitEvent.preventDefault();
    if (this.state.selectedOption === 'heaps' && this.state.numberOption > 11) {
      return alert("That Number is too big! Please select Nearest Neighbor to get a result")
    } else {
      const heapResult = heap(this.state.numberOption);
      // console.log(heapResult);
      console.log(this.props.onComplete(heapResult));
    }

    console.log('You have selected:', this.state.selectedOption);
  }
  render() {
    return (
      <div>
        <h3>TSP Runner</h3>
        <form onSubmit={this.handleFormSubmit}>
          <label>
            <input type="radio" value="heaps" checked={this.state.selectedOption === 'heaps'} onChange={this.handleOptionChange}/>
            Heaps Algorithm
          </label>
          <label>
            <input type="radio" value="nearest" checked={this.state.selectedOption === 'nearest'} onChange={this.handleOptionChange}/>
            Nearest Neighbor
          </label>
          <input type="number" value={this.state.numberOption} placeholder="Number of Cities" onChange={this.handleNumberChange}/>
          <button type="submit">Run</button>
        </form>
      </div>
    );
  }
}

export default TSPRunner;