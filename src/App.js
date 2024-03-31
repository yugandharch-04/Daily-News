import './App.css';
// snippet used 'rcc'
import React, { Component } from 'react'
import {BrowserRouter as Router , Routes , Route} from 'react-router-dom'
import Navbar_section from './components/Navbar_section';
import News from './components/News';
import About from './components/About';

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar_section/>
      <Router>
        <Routes>
          <Route path="/" element={<News/>} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
      
      </>
    )
  }
}



























//this is function based part
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
