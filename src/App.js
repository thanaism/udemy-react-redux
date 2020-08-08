import React from 'react';

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

const App = () => {
  return (
    <React.Fragment>
      <div>functional component!</div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </React.Fragment>
  );
}

const Cat = () => {
  return <div>Meow!</div>;
}

export default App;
