import React from "react";
import "./CvHomework.css";
const CvHomework = () => {
  return (
    <div>
      <div id="profile">
        <div class="header">
          PROFLIE
          <div class="title2"> I'm a student </div>
        </div>

        <div class="content-wrapper">
          <div class="content-about-me">
            <div class="content-header">ABOUT ME</div>
            <div>
              I am a lovely cat. I have passion in IT and I want to become BA.
            </div>
          </div>

          <img
            class="image"
            src="https://i.pinimg.com/236x/e4/21/92/e42192b0682ede9d80d92260fb5e17cd.jpg"
            alt=""
          />
          <div class="content-details">
            <img src="" alt="" />
            <div class="content-header">DETAILS</div>
            <div>
              <strong>Name: </strong>
              <p>Van dang nhat hung</p>
              <strong>Age: </strong>
              <p>2 years</p>
              <strong>Location: </strong>
              <p> UIT, VNU-HCM</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CvHomework;
