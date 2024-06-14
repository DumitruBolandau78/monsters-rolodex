import './App.css';
import React from 'react';
import { Component } from 'react';
import CardList from '../CardList';
import SearchBox from '../SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ monsters: users }))
  }

  changeHandler = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render(){
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1> Monsters Rolodex </h1>
        <SearchBox placeholder='Search monsters' changeHandler={this.changeHandler} />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
