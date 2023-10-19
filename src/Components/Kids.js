import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import "../Components/kids.css";

function Kids() {
  const Kidsproduct = [
    {
      Name: "sdfvdf",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/8.T-Shirts.png",
    },
    {
      Name: "sdfvdf",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/1.Dresses.png",
    },
    {
      Name: "sdfvdf",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/10.Festive-Wear.png",
    },
    {
      Name: "sdfvdf",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/8.T-Shirts.png",
    },
    {
      Name: "sdfvdf",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230418/3.Tops%20_%20Tees.jpg",
    },
    {
      Name: "sdfvdf",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/6.Winter-Wear.png",
    },

    {
      Name: "sdfvdf",
      Price: "2000",
      Brand: "J.",
      image:
        "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20221108/6.Winter-Wear.png",
    },

    
   
  ];

  return (
    <div className="container-fluid " style={{display:"flex",flexDirection:"row",gap:"15px",flexWrap:"wrap",justifyContent:"center"}}>
      {Kidsproduct.map((kp) => (
          <Card className="mb-3" style={{width:"11rem", textAlign: "center" }}>
            <Card.Img variant="top" src={kp.image} />
            <Card.Body>
              <Card.Title>{kp.Name}</Card.Title>
              <Card.Text>
                <p>Price:${kp.Price}</p>
                <p>Brand:{kp.Brand}</p>
              </Card.Text>
              <Button variant="primary">Click For More</Button>
            </Card.Body>
          </Card>
        
      ))}
    </div>
  );
}
export default Kids;
