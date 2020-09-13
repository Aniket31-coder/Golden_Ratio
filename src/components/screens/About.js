import React from "react";
import face1 from "../images/myPic.jpg";
import face2 from "../images/face2.jpeg";
import face3 from "../images/face3.jpeg";
import Card from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";

const About = () => {
  return (
    <div className="about-content">
      <h3 style={{ marginTop: "70px" }}>Know about us !</h3>
      <p
        style={{
          textAlign: "center",
          margin: "0 auto",
          fontSize: "20.6px",
          display: "block",
        }}
      >
        We are a team of <del>crazily</del> passionate coders. We love to
        innovate things and solve problems using technologies.{" "}
      </p>
      <div>    
      <CardDeck>
        <Card>
          <Card.Img variant="top" className="face" src={face1} alt="face1" />
          <Card.Body>
            <Card.Title>Yashraj Desai</Card.Title>
            <a href="https://www.linkedin.com/in/yashraj-desai-55a78a1a5/">
              <img
                className="linkedin"
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedin_img"
              />
            </a>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" className="face" src={face2} alt="face2" />
          <Card.Body>
            <Card.Title>Aniket Dewnani</Card.Title>
            <Card.Text>
              <a href="https://www.linkedin.com/in/aniket-dewnani-076392193/">
                <img
                  className="linkedin"
                  src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                  alt="linkedin_img"
                />
              </a>
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img variant="top" className="face" src={face3} alt="face3" />
          <Card.Body>
            <Card.Title>Shreyas Poojari</Card.Title>
            <a href="https://www.linkedin.com/in/shreyas-poojari-97366014b/">
              <img
                className="linkedin"
                src="https://img.icons8.com/fluent/48/000000/linkedin.png"
                alt="linkedin_img"
              />
            </a>
          </Card.Body>
        </Card>
      </CardDeck>
      </div>   
      <div
        className="footer"
        style={{ textAlignLast: "center", paddingTop: "15px" }}
      >
        <p>©Copyrights Reserved 2020</p>
      </div>
    </div>
  );
};

export default About;
