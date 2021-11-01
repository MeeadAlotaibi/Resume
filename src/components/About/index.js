import React from "react";
import "./style.css";
const About = () => {
  return (
    <div className="allPage">
      <div className="about">
        <h2 className="text-uppercase">
          <i className="fa fa-lg fa-user"></i>About
        </h2>
        <hr />
        <p>
          Meead Alotaibi achieved a Bachelor's degree in Computer Sciences from
          the College of Arts and Sciences at Al Qassim University. She is a
          fresh graduate with high experience in academic projects especially
          when she achieved first place in the competition for the best
          graduation projects at the university. Also, she capable to deal with
          many programming languages like (C, Java, C ++, Python,
          Javascript,HTML and CSS) efficiently. In addition, she has attended
          workshops and studded the English language.
        </p>
      </div>

      <div className="workExperience">
        <h2 className="text-uppercase">
          <i className="fa fa-lg fa-building"></i> Work experience
        </h2>
        <hr />
        <h4>Senior Front End Developer, IAG</h4>
        <p>
          I am currently working as a senior front end developer on IAG's Chroma
          Design System team, however as there are only two developers on the
          team we have also been required to setup CI/CD workflows in Circle
          CI/Github Actions as well as hosting environments in AWS. I have had
          experience setting up deployments to S3 via the AWS CLI from Github
          Actions and setting up CloudFront, Route 53 and simple Lambda
          functions. I have also been responsible for creating and maintaining
          components both in our Core product which is html/scss and our React
          npm package which is consumed by the app development teams and setting
          up testing and documentation across the design system. I have had
          experience working on multiple applications at IAG that have been
          built or are being built using React/Redux running on top of a Node
          Express Server and interfacing with an API backend architecture to
          access the various IAG systems. We are always striving to increase the
          quality of our projects with good test coverage and code reviews.
        </p>
      </div>

      <div className="skills">
        <h2 className="text-uppercase">
          <i className="fas fa-code"></i>SKILLS
        </h2>
        <hr />
        <div className="spans">
          <span>HTML</span>
          <span>CSS</span>
          <span>JAVASCRIPT</span>
          <span>REACT</span>
          <span>BOOTSRAP</span>
          <span>RESPONSIVE</span>
        </div>
      </div>

      <div>
        <h2 className="text-uppercase">
          <i className="graduationIcon"></i>
          Education
        </h2>
        <hr />
        <h3>Bachelor Degree in Computer Sciences in 2020</h3>
        <h3> At AlQassim University</h3>
      </div>
    </div>
  );
};

export default About;
