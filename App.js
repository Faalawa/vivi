import React from 'react';
import './App.css';
import Home from './components/Home';
import Gallery from './components/Gallery';
import Events from './components/Events';
// import Info from "./Info";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link

} from 'react-router-dom';

class App extends React.Component {

  render(){
    return(
      <div>
        {/* <h1>This is my App</h1> */}

        <Router>
          <div>
            <nav className="nav">
              <Link to="/">Home</Link>
              <Link to="/Events">Events</Link>
              <Link to="/Gallery">Gallery</Link>
            </nav>
          </div>

          <Routes>
            <Route path="/" element={<Home />}>
         
              
            </Route>

            <Route path="/Events" element={<Events />}>
           
          
            </Route>

            <Route path="/Gallery" element={<Gallery />}>
           
            
            </Route>

          </Routes>
    
        </Router>

      </div>
    );
  }
}

export default App;






