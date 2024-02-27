import React from "react";
import logo from "../icons/logo.png";
function Footer() {
  return (
    <>
      <div className="footercontainer ">
        <div>
          <p>
            <img src={logo} alt="logo" height={35} width={200} />
          </p>
          <h4>
            CoinIntention's mission is to make investing in cryptocurrencies
            easy and efficient. CoinIntention tracks various data of
            cryptocurrencies and thus offers its users an overview of all
            cryptocurrencies available on the market and their performance,
            market capitalization, trading volume, etc.
          </h4>
        </div>
        <div>
          <table className="table table-borderless table-sm">
            <tbody>
              <tr>
                <th className="thead">Company</th>
                <th className="thead">Support</th>
                <th className="thead">Socials</th>
              </tr>
              <tr>
                <td className="fhead">About us</td>
                <td className="fhead"> Requested Form</td>
                <td className="fhead"> Facebook</td>
              </tr>
              <tr>
                <td className="fhead"> Terms of use</td>
                <td className="fhead"> Contact Support</td>
                <td className="fhead"> Instagram</td>
              </tr>
              <tr>
                <td className="fhead"> Privacy Policy</td>
                <td className="fhead"> FAQ’s</td>
                <td className="fhead"> Twitter</td>
              </tr>
              <tr>
                <td className="fhead"> Community Rules</td>
                <td rowSpan={2} className="fhead">
                  Glossary
                </td>
                <td className="fhead"> Youtube</td>
              </tr>
              <tr>
                <td className="fhead"> Disclaimer</td>
                <td className="fhead"> Telegram</td>
              </tr>
              <tr>
                <td colSpan={3} className="fhead">
                  Methodology
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p className="text-center bottum">
        © 2021-2023 CoinIntention. All rights reserved.
      </p>
    </>
  );
}

export default Footer;
