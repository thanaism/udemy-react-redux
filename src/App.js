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

const App = () => {
  const profiles = [
    {name: 'Taro', age:10},
    {name: 'Hanako', age:5},
    {name: 80}
  ];
  return (
    <React.Fragment>
      {/* <User 
        name={"Taro"} 
        age={10}
      />
      <User 
        name={"Hanako"} 
        age={5}
      /> */}
      {
        profiles.map((profile, index)=>{
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </React.Fragment>
  );
}

const User = (props) => {
  return <div>I am {props.name} and {props.age} years old!</div>;
}

// User.defaultProps = {
//   age: 1
// }
User.propTypes = {
  name: propTypes.string
}
export default App;
