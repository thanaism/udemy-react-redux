import React from 'react';
import propTypes from 'prop-types';

// class App extends React.Component{
//   render(){
//     return (
//       React.createElement(
//         'div',
//         null,
//         'Hello, React!'
//       )
//     );
//   }
// }

const App = () => (<Counter></Counter>)

class Counter extends React.Component {
  constructor(props){
    super(props);
    this.state = {count: 0};
  }

  handlePlusButton = () => {
    this.setState({count: this.state.count + 1});
  }

  handleMinusButton = () => {
    this.setState({count: this.state.count - 1});
  }

  render () {
    // console.log('render');
    return (
      <React.Fragment>
        <div>count: {this.state.count}</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handleMinusButton}>-1</button>
      </React.Fragment>
    );
  }
}

export default App;
