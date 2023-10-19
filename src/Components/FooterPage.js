import img8 from "../Images/fb.png";
import img9 from "../Images/insta.png";
import img20 from "../Images/twitter.png";
import img21 from "../Images/linkdin.png";
import "../Components/FooterPage.css";

import 'bootstrap/dist/css/bootstrap.min.css';

function Footer() {
  return (
    <div style={{backgroundColor:"#f3f3f3"}}>
      <hr style={{marginTop:"50px"}}></hr>
      <div className="col-md-12 mt-5" style={{display:"flex",flexDirection:"row",}}>
        <div className="col-md-3" style={{height:"100px",borderRight:"1px solid #b4b4b4",textAlign:"center"}}>
          <h5 >Fast Delivery</h5>
          <p style={{color:"#8b8b8b"}}>Same Day in Lahore</p>
          </div>
        <div className="col-md-3" style={{height:"100px",borderRight:"1px solid #b4b4b4",textAlign:"center"}}>
        <h5>7 Days Replacement</h5>
        <p style={{color:"#8b8b8b"}}>If goods have problems</p>
        </div>
        <div className="col-md-3" style={{height:"100px",borderRight:"1px solid #b4b4b4",textAlign:"center"}}>
        <h5>Secure Payment</h5>
        <p style={{color:"#8b8b8b"}}>100% secure payment</p>
        </div>
        <div className="col-md-3" style={{height:"100px",textAlign:"center"}}>
        <h5>24/7 Support</h5>
        <p style={{color:"#8b8b8b"}}>Dedicated support</p>
        </div>
      </div>
      <hr className="mb-5"></hr>
      <div className="col-md-12" style={{ height: "300px", display: "flex" }}>
        <div className="col-md-2" style={{ height: "300px" }}>
          <h6 style={{ marginLeft: "10px", color: "#4e4e4e" }}>QUICK LINS</h6>
          <ul className="nav nav-pills flex-column mt-4">
            <a
              href="#"
              className="text-decoration-none mb-1"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>Support Center</li>
            </a>

            <a
              href="#"
              className="text-decoration-none mb-1"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>Price Policy</li>
            </a>

            <a
              href="#"
              className="text-decoration-none mb-1"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>Shipping</li>
            </a>

            <a
              href="#"
              className="text-decoration-none mb-1"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>Return Policy</li>
            </a>

            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>FAQs</li>
            </a>
          </ul>
        </div>

        <div className="col-md-2" style={{ height: "300px" }}>
          <h6 style={{ marginLeft: "10px", color: "#4e4e4e" }}>COMPANY</h6>
          <ul className="nav nav-pills flex-column mt-4">
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>About Us</li>
            </a>

            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>Media & Press</li>
            </a>

            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>Carrer</li>
            </a>
            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>Contact Us</li>
            </a>
          </ul>
        </div>

        <div className="col-md-3" style={{ height: "300px" }}>
        <h6 style={{ marginLeft: "10px",color: "#4e4e4e" }}>ELITE HEAVEN BUSINESS</h6>
        <ul className="nav nav-pills flex-column mt-4">
        <a
              href="#"
              className="text-decoration-none"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>Instalments</li>
            </a>

            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>Request Import</li>
            </a>

            <a
              href="#"
              className="text-decoration-none"
              style={{ color: "black", marginLeft: "10px" }}
            >
              <li>Money Back Guarantee</li>
            </a>
        </ul>
        </div>

        <div  style={{width:"40%",height: "300px" }}>
        <h6 style={{ marginLeft: "10px",color: "#4e4e4e" }}>NEWSLETTER</h6>
        <p style={{color:"#616161",paddingTop:"15px"}}>Register now to get updates on promotions & coupons</p>
        
          <input type="email"placeholder="Enter your email here..." style={{width:"75%",height:"50px",paddingLeft:"20px",border:"1px solid #b4b4b4"}} ></input>
          <button className="btn1" style={{height:"50px",width:"23%",border:"none", backgroundColor:"#4e4e4e"}}>Subscribe</button>
          <p style={{marginTop:"20px",fontSize:"15x",color:"#616161"}}>FOLLOW US</p>


          <div className="row" style={{display:"flex",gap:"5px"}}>
            <div className="col-md-1" style={{height:"50px",display:"flex",justifyContent:"center"}}>
              <a href="#">
                <img src={img8} style={{width:"25px"}}/>
              </a>
            </div>
            <div className="col-md-1" style={{height:"50px",display:"flex",justifyContent:"center"}}>
            <a href="#">
                <img src={img9} style={{width:"25px"}}/>
              </a>
            </div>
            <div className="col-md-1" style={{height:"50px",display:"flex",justifyContent:"center"}}
            >
              <a href="#">
                <img src={img20} style={{width:"45px"}}/>
              </a>
            </div>
            <div className="col-md-1" style={{height:"50px",display:"flex",justifyContent:"center"}}>
            <a href="#">
                <img src={img21} style={{width:"35px"}}/>
              </a>
            </div>
            <div className="col-md-1" style={{height:"50px",display:"flex",justifyContent:"center"}}></div>
            <div className="col-md-1" style={{height:"50px",display:"flex",justifyContent:"center"}}></div>
            <div className="col-md-1" style={{height:"50px",display:"flex",justifyContent:"center"}}></div>
            <div className="col-md-1" style={{height:"50px",display:"flex",justifyContent:"center"}}></div>
            <div className="col-md-1" style={{height:"50px",display:"flex",justifyContent:"center"}}></div>
            <div className="col-md-1" style={{height:"50px",display:"flex",justifyContent:"center"}}></div>
            <div className="col-md-2" style={{height:"50px",display:"flex",justifyContent:"center"}}></div>
          </div>
        </div>
      </div>
      <hr></hr>
      <p className="mt-5 mb-5" style={{textAlign:"center"}}>&#169; 2023 Elite Heaven All Rights Reserved</p>
    </div>
  );
}
export default Footer;





// <div className="container-fluid">
//   <div
//     className="row"
//     style={{
//       backgroundColor: "#dbdbdb",
//       borderTop: "2px solid #cccccc",
//       textAlign: "center",
//       paddingTop: "3%",
//     }}
//   >
//     <div className="col-md-4">
//       <h5>About Us</h5>
//       <p>
//         Your one-stop destination for quality products, exceptional service,
//         and unbeatable prices.
//       </p>
//       <p>Where style meets savings with the latest trends.</p>
//     </div>

//     <div class="col-md-2">
//       <h5>Links</h5>
//       <div>
//         <a href="#">
//           <img src={img8} style={{ width: "12%" }} />
//         </a>
//         <a href="#">
//           <img src={img9} style={{ width: "12%" }} />
//         </a>
//       </div>
//     </div>

//     <div className="col-md-3">
//         <h5>Others</h5>
//         <p ><a href="#" className="text-decoration-none text-dark">FAQs</a></p>
//     </div>

//     <div class="col-md-3">
//       <h5>Location</h5>
//       <p>
//         <b>Address : </b>Street 14, G-7 Markaz, Islamabad, Pakistan{" "}
//       </p>
//       <p>
//         <b>Phone : </b>+92 51 1234567{" "}
//       </p>
//       <p>
//         <b>Email : </b>eliteheaven@.com
//       </p>
//     </div>
//   </div>
// </div>
