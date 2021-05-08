import React from "react";
import "./Aboutus.css";
import img1 from "../../image/redwn.jpg";
import img2 from "../../image/mhdi.jpg";

const Aboutus = () => {
  return (
    <div>
      <div id="main-card">
        <div className="card">
          <img src={img1} alt="" />
          <h1>Redwan Islam</h1>
          <p class="title">Full Stack Developer</p>
          <p>
            Hi, I am Redwan Islam. Recently i have completed my graduation in
            (Bsc in CSE) at Stamford University Bangladesh.
          </p>
          <div className="card-design">
            <a href="#">
              <i className="fa fa-dribbble"></i>
            </a>
            <a href="#">
              <i class="fa fa-twitter"></i>
            </a>
            <a href="#">
              <i class="fa fa-linkedin"></i>
            </a>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </div>
          <p>
            <a href="https://github.com/Redwan-Islam">
              <button className="aboutbutton">Contact</button>
            </a>
          </p>
        </div>
        <div>
          <div className="card">
            <img src={img2} alt="" />
            <h1>Mehedi Hasan</h1>
            <p class="title">Front End Developer</p>
            <p>
              Hi, I am Mehedi Hasan. I studies in (Bsc in CSE) at Stamford
              University Bangladesh.
            </p>
            <div className="card-design">
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
              <a href="#">
                <i class="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i class="fa fa-linkedin"></i>
              </a>
              <a href="#">
                <i class="fa fa-facebook"></i>
              </a>
            </div>
            <p>
              <a href="https://github.com/MehediHasan95" className="atag">
                <button className="aboutbutton">Contact</button>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutus;
