import "./App.css";
import GalaxyWallpaper1 from "./assets/GalaxyWallpaper1.png";
import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
// import plantService from "./services/plantService";

function Home() {
  const [plants, setPlants] = useState([]);

  // useEffect(() => {
  //   plantService.getCrops().then(onSuccess).catch(onError)
  // }, []);

  const [cropData, setCropData] = useState([]);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const response = await fetch('../src/assets/crops.json');
        const data = await response.json();
        if (data){
          setPlants(data);
        }
      } catch (error) {
        console.error("Error fetching the crop data:", error);
      }
    };

    fetchCrops();
  }, []);

  console.log(plants);

  const onSuccess = (response) => {
    setPlants(response.items); 
  }

  const onError = (error) => {
    console.log("error", error)
  }

  return (
    <React.Fragment>
      <h1 className="font">Interstellar Greenhouse</h1>
      <h2 className="font">" Sowing Seeds Among the Stars "</h2>
      <img className="background-container" src={GalaxyWallpaper1} alt="galaxy" />
      <div className="card-container">
        {plants.map((plant, index) => (
          
          <Card className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Card.Img variant="top" src={plant.image} alt={plant.name} />
              </div>
              <div className="flip-card-back" style={{ backgroundImage: `url(${plant.image})` }}>
                <Card.Body>
                  <Card.Title className="font">{plant.name}</Card.Title>
                  <Card.Text className="font">{plant.binomialName}</Card.Text>
                  <Card.Text className="font">{plant.description}</Card.Text>
                  <Card.Text className="font">{plant.sunlight}</Card.Text>
                  <Card.Text className="font">{plant.sowingMethod}</Card.Text>
                </Card.Body>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Home;