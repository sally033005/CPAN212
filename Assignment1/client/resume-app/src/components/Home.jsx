import React from 'react';
import '../app.css';  

const Home = () => {
  return (
    <div className="home-container">
      <div className="section__pic-container">
        <img src="./src/assets/profile-pic.jpg" alt="Sally profile picture" class="profile-pic"/>
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I'm</p>
        <h1 className="title">Sally Cheung</h1>
        <p className="section__text__p2">Computer Programming student</p>
        <div className="btn-container">
          <button className="btn btn-color-2" onClick={() => window.open('./src/assets/Sally Cheung T. W._Resume.pdf')}>
            Download CV
          </button>
          <button className="btn btn-color-2" onClick={() => window.open('mailto:sally033008@gmail.com')}>
            Contact Me 
          </button>
        </div>
        <div id="socials-container">
          <img src="./src/assets/linkedin.png" alt="My LinkedIn profile" className="icon"
            onClick={() => window.open('http://www.linkedin.com/in/sally-tszwaicheung', '_blank')} />
          <img src="./src/assets/github.png" alt="My Github profile" className="icon"
            onClick={() => window.open('https://github.com/sally033005', '_blank')} />
        </div>
      </div>
    </div>
  );
};

export default Home;
