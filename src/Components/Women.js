import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Footer from "./FooterPage";

const products = [
  {
    id: 1,
    name: "Denim Pants",
    price: 39.99,
    brand: "XYZ",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/11092023/s2_1694413516-1424600738046.jpg",
    category: "pants",
  },
  {
    id: 2,
    name: "Cotton Shirt",
    price: 29.99,
    brand: "ABC",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08092023/iqra-116_1690279836-882128893253.jpg",
    category: "shirts",
  },
  {
    id: 3,
    name: "Leather Bag",
    price: 49.99,
    brand: "DEF",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/08082023/hrw07145_1689686000-890847164419.jpg",
    category: "bags",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    brand: "GHI",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/31072023/hrw07091_1689684703-78419880550.jpg",
    category: "dresses",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    brand: "GHI",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02082023/hrw07347_1690980542-436390642714.jpg",
    category: "dresses",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    brand: "GHI",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/20062023/hrw07814_1687160828-663013909287.jpg",
    category: "dresses",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    brand: "GHI",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/19072023/hrw07841_1689229002-1494283969696.jpg",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    brand: "GHI",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/09082023/hrw05524_1691519149-590366060450.jpg",
    category: "dresses",
  },
];

function Women(){
  return (
    <div className="container-fluid">
    <div className="container mt-4">
      <Row className="mb-4">
        {products.map((product) => (
          <Col key={product.id} lg={3} md={4} sm={6} className="mb-4">
            <Card style={{ width: "17rem" }}>
              <Card.Img variant="top" src={product.image} alt={product.name} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>
                  <p>Price: ${product.price}</p>
                  <p>Brand: {product.brand}</p>
                </Card.Text>
                <Button variant="primary">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
    <Footer/>
  </div>
  );
};

export default Women;
