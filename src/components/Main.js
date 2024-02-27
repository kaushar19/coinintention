import React from "react";
import bitcoinlogo from "../icons/bitcoinlogo.png";
import ethereumlogo from "../icons/ethereumlogo.png";
import shibuInulogo from "../icons/shibuInulogo.png";
import greengraph from "../icons/greengraph.png";
import redgraph from "../icons/redgraph.png";
function Main() {
  return (
    <>
      <div className="mainpage ">
        <div className="texttop">
          <>
            <h4>Today's Cryptocurrency Prices By Market Cap</h4>
            <h6>
              The global cryptocurrency market cap today is
              <span className="gpercent"> $811.7B</span>, a
              <span className="rpercent">0.17%</span>
              decrease in the last 24 hours.
            </h6>
          </>
        </div>
        <div style={{ overflowX: "auto" }}>
          <table>
            <tbody>
              <tr>
                <th colSpan={2} className="text-center">
                  Name
                </th>
                <th>Price</th>
                <th>24h Change</th>
                <th>Chart</th>
                <th>Marketcap</th>
              </tr>
              <tr>
                <td className="text-end">
                  <img src={bitcoinlogo} alt="bitcoin" className="cryptologo" />
                </td>
                <td>
                  Bitcoin<span className="btc">BTC</span>
                </td>
                <td>$3625.24</td>
                <td className="gpercent">+2.4%</td>
                <td>
                  <img src={greengraph} alt="graph" className="graph" />
                </td>
                <td>$320,893,271,955</td>
              </tr>
              <tr>
                <td className="text-end">
                  <img
                    src={ethereumlogo}
                    alt="ethereum"
                    className="cryptologo"
                  />
                </td>
                <td>
                  Ethereum<span className="btc">ETH</span>
                </td>
                <td>$1218.18</td>
                <td className="rpercent">-0.7%</td>
                <td>
                  <img src={redgraph} alt="graph" className="graph" />
                </td>
                <td>$148,563,792,762</td>
              </tr>
              <tr>
                <td className="text-end">
                  <img
                    src={shibuInulogo}
                    alt="shibuInu"
                    className="cryptologo"
                  />
                </td>
                <td>
                  ShibuInu<span className="btc">Shibu</span>
                </td>
                <td>$0.001</td>
                <td className="gpercent">+1.2%</td>
                <td>
                  <img src={greengraph} alt="graph" className="graph" />
                </td>
                <td>$4,498,804,882</td>
              </tr>
              <tr>
                <td className="text-end">
                  <img src={bitcoinlogo} alt="bitcoin" className="cryptologo" />
                </td>
                <td>
                  Bitcoin<span className="btc">BTC</span>
                </td>
                <td>$3625.24</td>
                <td className="gpercent">+2.4%</td>
                <td>
                  <img src={greengraph} alt="graph" className="graph" />
                </td>
                <td>$320,893,271,955</td>
              </tr>
              <tr>
                <td className="text-end">
                  <img
                    src={ethereumlogo}
                    alt="ethereum"
                    className="cryptologo"
                  />
                </td>
                <td>
                  Ethereum<span className="btc">ETH</span>
                </td>
                <td>$1218.18</td>
                <td className="rpercent">-0.7%</td>
                <td>
                  <img src={redgraph} alt="graph" className="graph" />
                </td>
                <td>$148,563,792,762</td>
              </tr>
              <tr>
                <td className="text-end">
                  <img
                    src={shibuInulogo}
                    alt="shibuInu"
                    className="cryptologo"
                  />
                </td>
                <td>
                  ShibuInu<span className="btc">Shibu</span>
                </td>
                <td>$0.001</td>
                <td className="gpercent">+1.2%</td>
                <td>
                  <img src={greengraph} alt="graph" className="graph" />
                </td>
                <td>$4,498,804,882</td>
              </tr>
              <tr>
                <td className="text-end">
                  <img src={bitcoinlogo} alt="bitcoin" className="cryptologo" />
                </td>
                <td>
                  Bitcoin<span className="btc">BTC</span>
                </td>
                <td>$3625.24</td>
                <td className="gpercent">+2.4%</td>
                <td>
                  <img src={greengraph} alt="graph" className="graph" />
                </td>
                <td>$320,893,271,955</td>
              </tr>
              <tr>
                <td className="text-end">
                  <img
                    src={ethereumlogo}
                    alt="ethereum"
                    className="cryptologo"
                  />
                </td>
                <td>
                  Ethereum<span className="btc">ETH</span>
                </td>
                <td>$1218.18</td>
                <td className="rpercent">-0.7%</td>
                <td>
                  <img src={redgraph} alt="graph" className="graph" />
                </td>
                <td>$148,563,792,762</td>
              </tr>
              <tr>
                <td className="text-end">
                  <img
                    src={shibuInulogo}
                    alt="shibuInu"
                    className="cryptologo"
                  />
                </td>
                <td>
                  ShibuInu<span className="btc">Shibu</span>
                </td>
                <td>$0.001</td>
                <td className="gpercent">+1.2%</td>
                <td>
                  <img src={greengraph} alt="graph" className="graph" />
                </td>
                <td>$4,498,804,882</td>
              </tr>
              <tr>
                <td className="text-end">
                  <img src={bitcoinlogo} alt="bitcoin" className="cryptologo" />
                </td>
                <td>
                  Bitcoin<span className="btc">BTC</span>
                </td>
                <td>$3625.24</td>
                <td className="gpercent">+2.4%</td>
                <td>
                  <img src={greengraph} alt="graph" className="graph" />
                </td>
                <td>$320,893,271,955</td>
              </tr>
            </tbody>
          </table>
          <div className="btncontainer">
            <button className="btn  tablebtn">View All</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
