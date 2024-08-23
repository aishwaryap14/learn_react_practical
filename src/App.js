// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react'
import ReactDOM  from 'react-dom/client'

const heading = React.createElement("h1", {id:"headiing"}, "Hello Aishwarya, how are you?");
//React Element
const jsxHeading = <h1 id = "heading">Hi Aishwarya</h1>

console.log(jsxHeading)

const root = ReactDOM.createRoot(document.getElementById("root"))

//React componenet
const HeadingComponent = () => {
  return <h1>namaste everyone from functional componenet</h1>
};

const HeadingComponent1 = () => (
  <div id = "container">
    <h1 className='heading'>namaste All </h1>
  </div>
);
//both the above syntax for HeadingComponent and HeadingComponent1 are works same 

// root.render(jsxHeading);
//we can render react component as below 
root.render(<HeadingComponent/>)