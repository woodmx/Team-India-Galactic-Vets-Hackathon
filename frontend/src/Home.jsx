import "./App.css";
import GalaxyWallpaper1 from "./assets/GalaxyWallpaper1.png";
import { Card, CardGroup } from "react-bootstrap";
import { getAllCrops } from "./api/backendCalls";
import React, { useState, useEffect } from "react";

function Home() {
  const [plants, setPlants] = useState([]);
  

  const [cropData, setCropData] = useState([]);


  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCrops = async () => {
      try {
        const data = await getAllCrops();
        console.log("Fetched data:", data);
        setPlants(data);
      } catch (error) {
        setError("Error fetching the crop data");
        console.error("Error fetching the crop data:", error);
      }
    };
    fetchCrops();


  }, [])
  

  // useEffect(() => {
  //   const fetchCrops = async () => {
  //     try {
  //       const data = await getAllCrops();
  //       console.log(data, 'beforeeee')
  //       if (data){
  //         console.log(data, 'data data data')
  //         setPlants(data);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching the crop data:", error);
  //     }
  //   };

  //   fetchCrops();
  // }, []);

  console.log(plants);

  

  return (
    <React.Fragment>
      <h1 className="font text-color">Interstellar Greenhouse</h1>
      <h2 className="font text-color">" Sowing Seeds Among the Stars "</h2>
      <img className="background-container" src={GalaxyWallpaper1} alt="galaxy" />
      <div className="card-container">
        {plants.map((plant, index) => (
          <CardGroup>

          <Card className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <Card.Img variant="top" src={plant.photo} alt={plant.name} />
              </div>
              <div className="flip-card-back" style={{ backgroundImage: `url(${plant.image})` }}>
                <Card.Body className="d-flex justify-content-center align-items-center card-font-size">
                  <Card.Title className="font">{plant.name}</Card.Title>
                  <Card.Text className="font">{plant.binomialName}</Card.Text>
                  <Card.Text className="font">{plant.description}</Card.Text>
                  <Card.Text className="font">{plant.sunlight}</Card.Text>
                  {/* <Card.Text className="font">{plant.sowingMethod}</Card.Text> */}
                </Card.Body>
              </div>
            </div>
          </Card>
          
          </CardGroup>
        ))}
      </div>
    </React.Fragment>
  )
}

export default Home;