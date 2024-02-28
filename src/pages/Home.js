import React from "react";
import Main from "../components/Main";
import CryptoMap from "../components/CryptoMap";
import Footer from "../components/Footer";
import Exchange from "../components/Exchange";
function Home() {
  return (
    <>
       <Main></Main>
       <CryptoMap></CryptoMap>
       <Exchange></Exchange> 
      <Footer></Footer>
    </>
  );
}

export default Home;
