
import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import "./app.css";

import Education from './components/Education';
import Experience from './components/Experience';
import Overview from './components/Overview';
import Home from "./components/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <nav id="desktop-nav">
          <div class="logo">Sally Cheung</div>
          <div>
            <ul class="nav-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/overview">Overview</Link>
              </li>
              <li>
                <Link to="/education">Education</Link>
              </li>
              <li>
                <Link to="/experience">Experience</Link>
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/education" element={<Education />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

