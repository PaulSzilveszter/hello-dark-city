import React from "react";
import "./styles/App.css"

import Background from "./components/Background";
import Header from "./components/Header";
import Mid from "./components/Mid";
import Footer from "./components/Footer";

export default class App extends React.Component{

  render(){
    return(
    <div id="App">

      <Background/>
      <Header/>
      <Mid/>
      <Footer/>

    </div>
    )
  }

}