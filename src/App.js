import React from "react";
//import { Container, Row, Col } from 'reactstrap';
import Calendar from "./components/Calendar/Calendar";
import Navbar from "./components/Navbar/Nav";
import dp from "./dp.jpg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          <div className=" top-nav">
            <div className="name-left">
              <h2>Franks Planner</h2>
            </div>
            <div className="user-right">
              <h5>Frank Guerrero</h5>
              <img src={dp} className="user-dp"></img>
            </div>
          </div>
          {/*  */}
        </header>
        <main>
          <div className="nav">
            <Navbar />
          </div>
          <div className="left-calendar">
            <div style={{ height: "500px" }}>
              <Calendar />
            </div>

            <button>hi</button>
            <button>hi</button>
            <button>hi</button>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
