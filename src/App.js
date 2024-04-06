import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import Banner from "./Components/Banner/Banner";
import Posters from "./Components/Rowposts/Posters";
import './App.css'
import {originals,actions,RomanceMovies,HorrorMovies,Documentaries,ComedyMovies} from  '../src/urls.js'



function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner/>
      <Posters link={originals} title="Originals"/>
      <Posters link={actions} title="Action Movies" isSmall/>
      <Posters link={RomanceMovies}  title="Romance" isSmall/>
      <Posters link={HorrorMovies} title="Horror" isSmall/>
      <Posters link={Documentaries} title="Documentaries" isSmall/>
      <Posters link={ComedyMovies} title="Comedy Movies" isSmall/>



    </div>
  );
}

export default App;
