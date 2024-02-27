import React from "react";

function CryptoMap() {
  return (
    <>
      <div className="mapcontainer">
        <div className="cryptomap">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.6216317706358!2d77.36019457533479!3d28.611125675676476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5690af88405%3A0x6d50c7970775e5fa!2sBSI%20Business%20Park%20C51!5e0!3m2!1sen!2sin!4v1709031386006!5m2!1sen!2sin"
            style={{ border: 0 }}
            className="map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="cryptomap">
          <h2>
            We Are The Most Trusted <br />
            Cryptocurrency Platform
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <div className="container mt-3">
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item  cardlist">
                <div className="flex-container ">
                  <i
                    className="fa-regular fa-eye fa-xl"
                    style={{ color: "#b82d2d" }}
                  />
                </div>
              </li>
              <li className="list-group-item  cardlist">
                <h4>Clarity</h4>
                <h6 className="textsize">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc
                  vulputate
                </h6>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item  cardlist">
                <div className="flex-container ">
                  <i
                    className="fa-solid fa-check fa-xl"
                    style={{ color: "#91e580" }}
                  />
                </div>
              </li>
              <li className="list-group-item  cardlist">
                <h4>Confidence</h4>
                <h6 className="textsize">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc
                  vulputate
                </h6>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item  cardlist">
                <div className="flex-container ">
                  <i
                    className="fa-solid fa-users fa-xl"
                    style={{ color: "#41d85a" }}
                  />
                </div>
              </li>
              <li className="list-group-item  cardlist">
                <h4>Community</h4>
                <h6 className="textsize">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.Nunc
                  vulputate
                </h6>
              </li>
            </ul>
          </div>
        </div>
      </div>
      
    </>
  );
}

export default CryptoMap;
