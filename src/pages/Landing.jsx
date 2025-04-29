import React from "react";
import { Link } from "react-router-dom";
import musicImg from "../assets/musicgif.gif";
import { Card } from "react-bootstrap";
import manage from "../assets/1.jpg";
import cat from "../assets/5.jpg";
import his from "../assets/2.jpg";
const landing = () => {
  return (
    <div className="container">
      {/* welcome section */}
      <div className="row align-items-center">
        <div className="col-lg-4">
          <h3>
            Welcome to <span className="text-warning">Media Player</span>
          </h3>
          <p className="mt-3" style={{ textAlign: "justify" }}>
            Media Player App will allow user to add or remove their uploaded
            videos from youTube and also allow them to arrange it in different
            categories by drag and drop. User can also have the provision to
            manage their watch history as well. What are you waiting for, let
            starts exploring our site!!!
          </p>
          <Link className="btn btn-primary" to={"./home"}>
            Get started
          </Link>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-6">
          <img src={musicImg} alt="" />
        </div>
      </div>
      {/* feature sec */}
      <div className="my-4">
        <h3 className="text-center">Features</h3>
      </div>
      <div className="row align-items-center">
        <div className="col-lg-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={manage} />
            <Card.Body>
              <Card.Title>Managing videos</Card.Title>
              <Card.Text>Users can upload,view and remove the videos</Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={his} />
            <Card.Body>
              <Card.Title>Managing History</Card.Title>
              <Card.Text>
                Users can manage the watch history of all videos
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-lg-4">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={cat} />
            <Card.Body>
              <Card.Title>Categorize videos</Card.Title>
              <Card.Text>
                Users can categorize videos upon their interests
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      {/* video sec */}
      <div className="row rounded p-5" style={{ border: "1px solid white"}}>
        <div className="col-lg-5">
          <h3 className="text-warning">Simple,Fast and Powerful</h3>
          <p>
            <span className="fs-2">Play Everything</span>:Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Perspiciatis recusandae unde
            veritatis eos id vitae repudiandae.
          </p>
          <p>
            <span className="fs-2">Categorize videos</span>:Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Perspiciatis recusandae unde
            veritatis eos id vitae repudiandae.
          </p>
          <p>
            <span className="fs-2">Managing History</span>:Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Perspiciatis recusandae unde
            veritatis eos id vitae repudiandae.
          </p>
        </div>
        <div className="col-lg-2"></div>
        <div className="col-lg-5">
          <iframe
            width="100%"
            height="370"
            src="https://www.youtube.com/embed/-sAOWhvheK8"
            title="YouTube video player"
          ></iframe>
        </div>
      </div>
     
    </div>
  );
};

export default landing;
