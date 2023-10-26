import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import Footer from "./FooterPage";
import { useEffect } from "react";
import { useRef } from "react";

const products = [
  {
    id: 1,
    name: "Denim Pants",
    price: 39.99,
    brand: "XYZ",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02052023/ad-bt-05-black-3_1678080386-920376292324.jpg",
    category: "pants",
  },
  {
    id: 2,
    name: "Cotton Shirt",
    price: 29.99,
    brand: "ABC",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02052023/ad-bt-06-white-1_1678080434-546293873072.jpg",
    category: "shirts",
  },
  {
    id: 3,
    name: "Leather Bag",
    price: 49.99,
    brand: "DEF",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/03052023/ad-bt-02-skin-1_1683097395-533335522532.jpg",
    category: "bags",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    brand: "GHI",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/05052023/ad-bt-03-yellow-1_1678080349-1435471932274.jpg",
    category: "dresses",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    brand: "GHI",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02032023/wl-mst001-d3-vol12022-l-1_1677743601-690030703231.jpg",
    category: "dresses",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    brand: "GHI",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02032023/wl-mst001-f3-vol12022-l-1_1677743640-680301936219.jpg",
    category: "dresses",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    brand: "GHI",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/02052023/ad-bt-01-black-1_1678080315-51994481984.jpg",
  },
  {
    id: 4,
    name: "Summer Dress",
    price: 34.99,
    brand: "GHI",
    image:
      "https://d30fs77zq6vq2v.cloudfront.net/product/515x772/15032023/lvl-mw-gt012-a-v12022-0012-1_1678857748-599095610563.jpg",
    category: "dresses",
  },
];

function Men() {


  return (
    <div className="container-fluid">
      <div className="container mt-4">
        <Row className="mb-4">
          {products.map((product) => (
            <Col key={product.id} lg={3} md={4} sm={6} className="mb-4">
              <Card style={{ width: "17rem" }}>
                <Card.Img
                  variant="top"
                  src={product.image}
                  alt={product.name}
                />
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
      <Footer />
    </div>
  );
}

export default Men;
