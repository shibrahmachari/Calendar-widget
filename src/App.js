
import React from "react";

import Calendar from "./components/Calendar/Calendar";
import Navbar from "./components/Navbar/Nav";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div id="logo">
          </div>
        </header>
        <main>
          <div className = "nav">
          <Navbar />
          </div>
          
          <Calendar />
        </main>
      </div>
    );
  }
}

export default App;
