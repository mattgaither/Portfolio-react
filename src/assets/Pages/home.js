import React from "react";

const myPhoto = require("../Images/IMG_8798.jpg");
const about = require("../Images/about-me.png");

export default function Home() {
  return (
    <div className="About-me">
      <h2>About Me</h2>

      <div className="about-content">
        <img src={myPhoto} alt="Avitar of me" className="myPhoto" />
        <div className="about-text">
          <img src={about} alt="Stock about me" className="stock-img" />
          <p>
            My name is Benjamin (Matt) Gaither. I am working on completeing a
            Full Stack Bootcamp that is offered by Michigan State University and
            I am also in Jefferson State Community College working towards a
            degree. I decided to change my occupation when the pandemic started
            and took my job. I have worked in a customer service for the past
            two years and have learned a lot about engineering roles while
            working. I am a dedicated hard worker and I am never afraid to ask
            questions. I have been on the other side of the technology long
            enough to know and explain what could make hundreds of positions
            easier for the company, which in turn will maximize productivity and
            decrease employee burn out. My experience in my current role will
            provide valuable insights and a fresh perspective to the engineering
            role. Personally, I am looking for a long term carreer in something
            I love to do and will excel at quickly. I hope you can tell how hard
            I work and by the determination I put in the following projects and
            how this will benefit the company.
          </p>
        </div>
      </div>
    </div>
  );
}
