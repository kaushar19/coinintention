import React from "react";
import bitcoinlogo from "../icons/bitcoinlogo.png";
import ethereumlogo from "../icons/ethereumlogo.png";
import shibuInulogo from "../icons/shibuInulogo.png";
import increase from "../icons/increase.png";
function Exchange() {
  return (
    <>
      <div className=" centergrid ">
        <div>
          <h1>
            Reason to invest in
            <br />
            Cryptocurrency in 2022
          </h1>
          <div>
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item listbg">
                <i
                  className="fa-solid fa-circle-check fa-2xl"
                  style={{ color: "#ffffff" }}
                />
              </li>
              <li className="list-group-item listbg">
                <h4>Buying Bitcoin in legal</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad.
                </p>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item listbg">
                <i
                  className="fa-solid fa-circle-check fa-2xl"
                  style={{ color: "#ffffff" }}
                />
              </li>
              <li className="list-group-item listbg">
                <h4> High return potential</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad.
                </p>
              </li>
            </ul>
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item listbg">
                <i
                  className="fa-solid fa-circle-check fa-2xl"
                  style={{ color: "#ffffff" }}
                />
              </li>
              <li className="list-group-item listbg">
                <h4>Growing alternative assest class</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
                  vulputate libero et velit interdum, ac aliquet odio mattis.
                  Class aptent taciti sociosqu ad.
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <div className="card">
            <h5 className="my-4">
              Your portfolio is
              <span className="gpercent">up 2.13%</span>
            </h5>
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item cardbgg">
                <img src={bitcoinlogo} alt="bitcoin" className="cryptologo" />
              </li>
              <li className="list-group-item cardbgg">
                Bitcoin
                <br />
                BTC
              </li>
              <li className="list-group-item cardbgg">
                1.33%
                <img src={increase} alt="increase" className="increase" />
              </li>
            </ul>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item cardbgg">
                <img src={ethereumlogo} alt="bitcoin" className="cryptologo" />
              </li>
              <li className="list-group-item cardbgg">
                Ethereum
                <br />
                ETH
              </li>
              <li className="list-group-item cardbgg">
                1.33%
                <img src={increase} alt="increase" className="increase" />
              </li>
            </ul>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item cardbgg">
                <img src={shibuInulogo} alt="bitcoin" className="cryptologo" />{" "}
              </li>
              <li className="list-group-item cardbgg">
                ShibuInu
                <br />
                Shibu
              </li>
              <li className="list-group-item cardbgg">
                1.33%
                <img src={increase} alt="increase" className="increase" />
              </li>
            </ul>
            <ul className="list-group list-group-horizontal ">
              <li className="list-group-item cardbgg">
                <img src={bitcoinlogo} alt="bitcoin" className="cryptologo" />
              </li>
              <li className="list-group-item cardbgg">
                Bitcoin
                <br />
                BTC
              </li>
              <li className="list-group-item cardbgg">
                1.33%
                <img src={increase} alt="increase" className="increase" />
              </li>
            </ul>
            <ul className="list-group list-group-horizontal">
              <li className="list-group-item cardbgg">
                <img src={ethereumlogo} alt="bitcoin" className="cryptologo" />
              </li>
              <li className="list-group-item cardbgg">
                Ethereum
                <br />
                ETH
              </li>
              <li className="list-group-item cardbgg">
                1.33%
                <img src={increase} alt="increase" className="increase" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Exchange;
