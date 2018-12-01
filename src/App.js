import React, { Component } from 'react';
import Validation from './Validation';
import Character from './Character';
import './App.css';

class App extends Component {
  state = {
    value: ''
  }

  handleInputChange = (event) => {
    let newValue = event.target.value;
    this.setState({ value: newValue });
  }

  handleCharacterClick = (index) => {
    const characters = this.state.value.split('');
    characters.splice(index, 1);
    const updated = characters.join('');
    this.setState({value: updated});
  }

  render() {
    const { value } = this.state;
    let characters = [...value];
    let showCharacters = null;
    let showValue = null;

    if (characters.length > 0) {
      showCharacters = (
        <div>
          {characters.map((char, index) => {
            return <Character
              letter={char}
              key={index}
              click={() => this.handleCharacterClick(index)}/>
          })}
        </div>
      )
    }

    if (value !== '') {
      showValue = (
        <p>Input Value: {value}</p>
      )
    }

    return (
      <div className="App">
        <h1>Challenge 2</h1>
        <input 
          type="text" 
          onChange={this.handleInputChange} 
          value={value} />
        <p>Input Length: {value.length}</p>
        {showValue}
        <Validation
          value={value}
        />        
        {showCharacters}
      </div>
    );
  }
}

export default App;
