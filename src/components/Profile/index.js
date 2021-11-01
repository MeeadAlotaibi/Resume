import React from "react";
import "./style.css";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineGithub } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
// import { GrLocationPin } from "react-icons/ai";
const Profile = () => {
  return (
    <div className="imageProfile">
      <img
        src="https://blog-www.pods.com/wp-content/uploads/2019/04/MG_1_1_New_York_City-1.jpg"
        alt="myPhoto "
      />
      <h1 className="myName">Meead Alotaibi</h1>
      <h2 className="mePosition"> Trainee in Tuwaiq Academy</h2>
      <br />
      <br />
      <hr />
      <ul className="contactInfo">
        <li>
          {/* <i className="Location-Arrow">
            <GrLocationPin id="locationItem" />
          </i> */}
          Saudi Arabia, Al-Qassim
        </li>
        <li>
          <i className="icon-email">
            <AiOutlineMail id="emailIcon" />
          </i>
          <a href="mailto:meeaAlotaibi77@gmail.com">
            MeeadAlotaibi77@gmail.com
          </a>
        </li>
      </ul>
      <br />
      <br />
      <hr />
      <ul className="sosialMedia">
        <li>
          <a href="https://twitter.com/MeeadAlotaibi">
            <i className="icon-twitter">
              <AiOutlineTwitter id="twitterIcon" />
            </i>
          </a>
        </li>
        <li>
          <a href="https://github.com/MeeadAlotaibi">
            <i className="icon-gitHub">
              <AiOutlineGithub id="githubIcon" />
            </i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
