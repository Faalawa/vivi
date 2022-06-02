import React from 'react';
import './Home.css';
import ReactPlayer from 'react-player';


function Home() {
    return(
      <header className="App">
      <div className="App-header">
        <ReactPlayer
        url='https://www.youtube.com/watch?v=33HfDvKjb1s' rel="0" autoplay="autoplay" loop="loop" />
      </div>
      <div>
          <br></br>
      <p>Vivian Chidid,
         a Senegalese pop singer 
    released her first album in 1999. Her music combines traditional Senegalese mbalax music with elements of U.S. rap and R&B.</p>
      </div>
      <div>
        <br></br>
        <br></br>
        <br></br>
        <img className="image" src="https://5000hits.com/files/images/covers/default/9Hw7K2U9.jpg" alt="" />
      </div>
      
      </header>
    );
}

export default Home;