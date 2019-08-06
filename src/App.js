import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {



// class App extends Component {
//   state = {
//     persons: [
//       { name: 'Rob', age: 888 },
//       { name: 'Sammy', age: 555 },
//       { name: 'Wanda', age: 333 }
//     ]
//   };

//   switchNameHandler = () => {
//     // console.log('clicked')
//     this.setState(
//       {
//         persons: [
//           { name: 'Robert', age: 888 },
//           { name: 'Samuel', age: 555 },
//           { name: 'WandaWanda', age: 333 }
//         ]
//       }
//     )
//   };

  // render() {
    return (
      <div className="App">
        <h1>I am a React App</h1>
        {/* don't use () in OnClick function name */}
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age} />
      </div>
    );
  }
// }

// export default App;
export default app;
