import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../Images/carousel1.png";
import img2 from "../Images/carousel2.png";
import img3 from "../Images/carousel3.png";
import Footer from "../Components/FooterPage";
import { Card, Button } from "react-bootstrap";
import "../Components/Front.css";

const products = [
  {
    Name: "Tops",
    Price: 3000,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif",
  },
  {
    Name: "Kurta",
    Price: 4000,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Kurta.gif",
  },
  {
    Name: "Women's Fusion",
    Price: 3500,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Fusion%20(1).gif",
  },
  {
    Name: "Dresses",
    Price: 1500,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Dresses.gif",
  },
  {
    Name: "Lawn",
    Price: 4500,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Lawn.gif",
  },

  // next row
  {
    Name: "Men's T-Shirt",
    Price: 1600,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/7.Mens-T-Shirts.gif",
  },

  {
    Name: "Men's Casual Shirt",
    Price: 1300,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Men_Casual_Shirt.gif",
  },
  {
    Name: "Trousers",
    Price: 1200,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Trousers.gif",
  },
  {
    Name: "Girls Clothing",
    Price: 2100,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Gilrs_Clothing.gif",
    Category: "bags",
  },
  {
    Name: "Boys Clothing",
    Price: 2500,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230828/Category_Boys_Clothing.gif",
  },

  {
    Name: "Tops",
    Price: 3000,
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20231003/Category_Top%20(1).gif",
  },
];

const TopBrand = [
  {
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230816/1.Westline%20(1).png",
  },

  {
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230816/5.Valerie.png",
  },

  {
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230816/8.Eastline.png",
  },

  {
    Image:
      "https://d30fs77zq6vq2v.cloudfront.net/files/shares/20230610/10.YellowBee%20(2).jpg",
  },
];

const TopTrend=[
  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/12102023/hrw09494_1697097168-175324618093.jpg",Price:"799"},

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/11102023/hrw09678_1697025361-1314517578064.jpg",Price:"1,610"},

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/11102023/hrw09409_1697025472-524932227927.jpg",Price:"10,99"},

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/11102023/hrw09319_1697002678-112784337835.jpg",Price:"2,490"},

  //Next Row

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/10102023/135_1696916757_6524e51510279_hrw02938_1695205966-1379519934514.jpg",Price:"1,689"},

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/10102023/699_1696916778_6524e52ae7de1_hrw03073_1695204205-1030196711606.jpg",Price:"1,689"},

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/10102023/943_1696916748_6524e50c52ad5_hrw02860_1695203934-1149370755932.jpg",Price:"1,689"},

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/04102023/hrw07419_1696410403-605360436901.jpg",Price:"1,689"},

  // Next Row

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/18042023/hrw02263_1681639665-221867310182.jpg",Price:"1,349"},

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/18042023/hrw02949_1681638528-287779628853.jpg",Price:"1,550"},

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/18042023/hrw02607_1681549265-1663044923086.jpg",Price:"1,399"},

  {Image:"https://d30fs77zq6vq2v.cloudfront.net/product/515x772/18042023/hrw02366_1681550194-136343803345.jpg",Price:"1,399"},

];

function Fronttpage() {
  return (
    <div>
      <div className="container-fluid">
        <Carousel>
          <Carousel.Item>
            <img src={img1} style={{ width: "100%", height: "80vh" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img2} style={{ width: "100%", height: "80vh" }} />
          </Carousel.Item>
          <Carousel.Item>
            <img src={img3} style={{ width: "100%", height: "80vh" }} />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="Container">
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "8vh",
            marginTop: "35px",
          }}
        >
          <h3>TOP CATEGORY</h3>
        </div>
      </div>

      <br></br>

      <div
        className="container map1"
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {products.map((p) => (
          <Card
            className="mb-3"
            style={{
              width: "calc(20.33% - 20px)",
              textAlign: "center",
              borderRadius: 0,
            }}
          >
            <Card.Img src={p.Image} style={{ borderRadius: 0 }} />
            <Card.Body>
              <Card.Title style={{ fontSize: "20px" }}>{p.Name}</Card.Title>
              <Card.Text>
                <p>
                  <b>Rs:</b> {p.Price}
                </p>
              </Card.Text>
              <button>Click For More</button>
            </Card.Body>
          </Card>
        ))}
      </div>

      {/* Mappin 2 */}

      <div className="Container-fluid">
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "15vh",
            marginTop: "35px",
          }}
        >
          <h3>TOP CATEGORY</h3>
        </div>
      </div>

      <div
        className="container "
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {TopBrand.map((b) => (
          <Card
            className="mb-3"
            style={{
              width: "calc(25% - 20px)",
              textAlign: "center",
              borderRadius: 0,
            }}
          >
            <Card.Img src={b.Image} style={{ borderRadius: 0 }} />
          </Card>
        ))}
      </div>

      <div className="Container">
        <div
          style={{
            textAlign: "center",
            width: "100%",
            height: "35vh",
            marginTop: "35px",
            border: "1px solid black",
            backgroundColor: "#7F1794",
          }}
        >
          <h3  style={{marginTop:"80px",color:"white",fontSize:"50px"}}><strong><b>#TOP TRENDING</b></strong></h3>
        </div>
      </div>

{/* Mapping 3 */}
      <div
        className="container "
        style={{
          display: "flex",
          flexDirection: "row",
          gap: "15px",
          flexWrap: "wrap",
          justifyContent: "center",marginTop:"80px",
        }}
      >
        {TopTrend.map((t) => (
          <Card
            className="mb-3"
            style={{
              width: "calc(25% - 20px)",
              textAlign: "center",
              borderRadius: 0,
            }}
          >
            <Card.Img src={t.Image} style={{ borderRadius: 0 }} />
            <Card.Body>
              <Card.Text>
                <h6>Rs: {t.Price}</h6>
              </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>

      <Footer />
    </div>
  );
}
export default Fronttpage;
