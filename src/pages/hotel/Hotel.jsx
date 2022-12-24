import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Hotel = () => {

  const photo = [
    {
      src:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJiYXJfcmVzdGF1cmFudF9jb21mb3J0YWJsZV82MDEzMDctaW1hZ2Uta3liZTl2dGYuanBn.jpg"
    },

    {
      src:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmwzMjI1OTY2NTIxOC1pbWFnZS1reWJlaTk3ci5qcGc.jpg"
    },

    {
      src:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg1OTEyMzgtaW1hZ2Uta3d2eHE1YzcuanBn.jpg"
    },

    {
      src:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcHg4NjI1MjItaW1hZ2Uta3d2eGRiMDYuanBn.jpg"
    },

    {
      src:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZnJzaWVzdGFfa2V5X2Zsb3JpZGFfYmVhY2gtaW1hZ2Uta3liY3IyYzIuanBn.jpg"
    },

    {
      src:"https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvZmw0NjU0MDIwNjUxNC1pbWFnZS1reWJlaWV6bi5qcGc.jpg"
    },

  ];

  return (
    <div>
      <Navbar/>
      <Header type="list"/>
      <div className="hotelContainer">
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={"fa-solid fa-location-dot"} />
            <span>Elten St 125 New York</span>
          </div>
          <span className="hotelDistance">
            Excellent lpcation - 500m from center
          </span>
          <span className="hotelPriceHighlight">
            Book a stay over $144 at this property and get free airport taxi
          </span> 
          <div className="hotelImages">
            
              {photo.map(photo=>(
                <div className="hotelImgWrapper">
                  <img src={photo.src} alt="" className="hotelImg" />
                </div>
              ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Stay in the heart of krakow</h1>
              <p className="hotelDesc">
                Located a 5-minute walk from St. Florain's Gate in Krakow, Tower Street Apartment has accomodations with air conditioning and free WiFi. The units come wit hardwood floors and feature a fullly equipped kitchenette with a microwave, a flat-screen TV, and a private bathroom wit shower and a hairdryer. A fridge is also offered, as well as an electric tea pot and a coffee machine. Popular points of interest near the apartment include Cloth Hall, Main Market Square and Town Hall Tower. The nearest airport is John Paul II International Krakow-Balice, 16.1 km from Tower Street Apartment, and the property offers a paid airport shuttle service.
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of krakow,this property has an excellent location score of 9.8!
              </span>
              <h2>
                <b>$945</b>(9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel