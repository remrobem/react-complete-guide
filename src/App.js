import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';


// this is a statelful component 
// uses class, not function
// best practice is to use stateless as much as possible
// and have as few stateful components as possible
class App extends Component {
  state = {
    persons: [
      { name: 'Rob', age: 888 },
      { name: 'Sammy', age: 555 },
      { name: 'Wanda', age: 333 }
    ],
    userName: 'Willie'
  };

  switchNameHandler = (newName) => {
    this.setState( {
      persons: [
        { name: newName, age: 200 },
        { name: 'Sam', age: 300},
        { name: 'Wanda', age: 400 }
      ]
    } )
  }

  nameChangeHandler = (event) => {
    this.setState(
      {
        persons: [
          { name: 'Rob', age: 888 },
          { name: event.target.value, age: 555 },
          { name: 'Wanda', age: 333 }
        ]
      }
    )
  };

  userNameChangeHandler = (event) => {
    this.setState({ userName: event.target.value })
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    const userInputStyle = {
      backgroundColor: 'lightSkyBlue',
      font: 'inherit',

      padding: '8px',
      cursor: 'pointer'
    }

    const newPersons = [
      { name: 'Robert*', age: 888 },
      { name: 'Samuel*', age: 555 },
      { name: 'WandaWanda*', age: 333 }
    ];
    return (
      <div className="App">
        <h1>I am a React App</h1>
        {/* don't use () in OnClick function name */}
        {/* need to bind to pass data */}
        <button
          style={style}
          onClick={this.switchNameHandler.bind(this, newPersons)}>Switch Name</button>
        {/* alternative to bind but React may render more often then needed(perfromance problem) */}
        <button
          style={style}
          onClick={(event) => this.switchNameHandler(newPersons)}>Switch Name2</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age} />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Rob!')}
          changed={this.nameChangeHandler}
        >My Hobby is eating</Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age} />
        <UserInput changed={this.userNameChangeHandler} userName={this.state.userName} style={userInputStyle} />
        <UserOutput userName={this.state.userName} />

      </div>
    );
  }
}

export default App;
