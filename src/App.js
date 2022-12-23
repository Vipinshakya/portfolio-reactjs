
import React from "react";
import Header from "./components/Header";
import './App.css'
import Intro from './components/Intro/Intro'
import Services from "./components/services";
import Portfolio from "../src/components/card/portfolio"
import Footer from "./components/footer"


function App(){
    return(
        <div className="my">
            <Header/>
        <Intro/>
           <Services/>
          <Portfolio/>
          <Footer/>  

        </div>
    )
       
    };

export default App;