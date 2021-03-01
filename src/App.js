import { Component } from 'react';
import './App.css';
import { CardList } from './Components/card-list/card-list.component';
import { SearchBox } from './Components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchState: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ monsters: data });
      });
  }

  handleSearch = (e) => {
    this.setState({ searchState: e.target.value });
  }

  render() {
    const { monsters, searchState } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchState.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters Palace</h1>
        <SearchBox
          placeholder="Search Monsters"
          searchHandler={this.handleSearch}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
