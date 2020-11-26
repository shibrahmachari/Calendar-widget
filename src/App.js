import React from "react";

import Calendar from "./components/Calendar/Calendar";
import Navbar from "./components/Navbar/Nav";
import PopUpButton from "./components/Button/Button";
import dp from "./dp.jpg";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="main">
          <div className="nav">
            <Navbar />
          </div>
          <div className="mainscreen">
            <div className=" top-nav">
              <div className="name-left">
                <h2>Frank's Planner</h2>
              </div>
              <div className="user-right">
                <h5>Frank Guerrero</h5>
                <img src={dp} className="user-dp"></img>
              </div>
            </div>
            <div className="main-calendar">
              <div className="left-calendar">
                <div style={{ marginBottom: "15px" }}>
                  <Calendar />
                </div>
                <PopUpButton name="Blog Infographic" />
                <PopUpButton name="Nike Project" />
                <PopUpButton name="Envato Meetup" />
              </div>
              <div className="right-calendar"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
