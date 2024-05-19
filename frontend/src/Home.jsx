import GalaxyWallpaper1 from "./assets/GalaxyWallpaper1.png";
import Tomatoes from "./assets/Tomatoes.png";
import "./App.css";
import { Card } from "react-bootstrap";
import React from "react";

function Home() {

  return (
    <React.Fragment>
      <h1 className="font">Interstellar Greenhouse</h1>
      <h2 className="font">" Sowing Seeds Among the Stars "</h2>
      <img className="background-container" src={GalaxyWallpaper1} alt="galaxy" />
      <div className="card-container">
      
        <a 
          href="https://example.com"  
          rel="noopener noreferrer"
          target="_blank"
          className="card-link"
        >
        <Card>
          <Card.Img variant="top" src={Tomatoes} alt="tomatoes" />
          <Card.Body>
            <Card.Title className="font">Tomato</Card.Title>
            <Card.Text className="font">Solanum lycopersicum</Card.Text>
          </Card.Body>
        </Card>
        </a>

        <a 
          href="https://example.com"  
          rel="noopener noreferrer"
          target="_blank"
          className="card-link"
        >
        <Card>
          <Card.Img variant="top" src={Tomatoes} alt="tomatoes" />
          <Card.Body>
            <Card.Title className="font">Lettuce</Card.Title>
            <Card.Text className="font">Lactuca Sativa</Card.Text>
          </Card.Body>
        </Card>
        </a>

        <a 
          href="https://example.com" 
          rel="noopener noreferrer"
          target="_blank"
          className="card-link"
        >
        <Card>
          <Card.Img variant="top" src={Tomatoes} alt="tomatoes" />
          <Card.Body>
            <Card.Title className="font">Potato</Card.Title>
            <Card.Text className="font">Solanum tuberosum</Card.Text>
          </Card.Body>
        </Card>
        </a>

        <a 
          href="https://example.com"  
          rel="noopener noreferrer"
          target="_blank"
          className="card-link"
        >
        <Card>
          <Card.Img variant="top" src={Tomatoes} alt="tomatoes" />
          <Card.Body>
            <Card.Title className="font">Carrot</Card.Title>
            <Card.Text className="font">Daucus Carota</Card.Text>
          </Card.Body>
        </Card>
        </a>

      <a 
          href="https://example.com"  
          rel="noopener noreferrer"
          target="_blank"
          className="card-link"
        >
        <Card>
          <Card.Img variant="top" src={Tomatoes} alt="tomatoes" />
          <Card.Body>
            <Card.Title className="font">Orange</Card.Title>
            <Card.Text className="font">Citrus × sinensis</Card.Text>
          </Card.Body>
        </Card>
        </a>

      <a 
          href="https://example.com"  
          rel="noopener noreferrer"
          target="_blank"
          className="card-link"
        >
        <Card>
          <Card.Img variant="top" src={Tomatoes} alt="tomatoes" />
          <Card.Body>
            <Card.Title className="font">Strawberry</Card.Title>
            <Card.Text className="font">Fragaria × ananassa</Card.Text>
          </Card.Body>
        </Card>
        </a>

        <a 
          href="https://example.com"  
          rel="noopener noreferrer"
          target="_blank"
          className="card-link"
        >
        <Card>
          <Card.Img variant="top" src={Tomatoes} alt="tomatoes" />
          <Card.Body>
            <Card.Title className="font">Cucumber</Card.Title>
            <Card.Text className="font">cucumis sativus</Card.Text>
          </Card.Body>
        </Card>
        </a>

        <a 
          href="https://example.com"  
          rel="noopener noreferrer"
          target="_blank"
          className="card-link"
        >
        <Card>
          <Card.Img variant="top" src={Tomatoes} alt="tomatoes" />
          <Card.Body>
            <Card.Title className="font">Bell Pepper</Card.Title>
            <Card.Text className="font">Capsicum annuum</Card.Text>
          </Card.Body>
        </Card>
        </a>

        <a 
          href="https://example.com"  
          rel="noopener noreferrer"
          target="_blank"
          className="card-link"
        >
        <Card>
          <Card.Img variant="top" src={Tomatoes} alt="tomatoes" />
          <Card.Body>
            <Card.Title className="font">Spinach</Card.Title>
            <Card.Text className="font">Spinacia oleracea</Card.Text>
          </Card.Body>
        </Card>
        </a>
       
      </div>
    </React.Fragment>
  )
}
export default Home;