import { Col, Row, ToastContainer } from "react-bootstrap";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SidebarUp from "./SidebarUp";
import SearchBar from "./SearchBar";

import CategoryAlbum from "./CategoryAlbum";
import { Route } from "react-router-dom";
import HeroSection from "./SidebarUp/HeroSection";
import Weather from "./Weather";
import { useSelector } from "react-redux";
import { fetchGetImage } from "../../js/fetchDataDeenzer";
import { useState } from "react";


const encodeBase64 = (uint8Array) => {
  let binary = '';
  const length = uint8Array.byteLength;
  for (let i = 0; i < length; i++) {
    binary += String.fromCharCode(uint8Array[i]);
  }
  return window.btoa(binary);
};

const Homepage = () => {

  const [imageData,setImageData]=useState(null)
  return (
    <>
    <SidebarUp />
      
      <Row className="my-4 pb-5 m-0">
        <Sidebar />

        <Col>
          <SearchBar />
          <Col>
         <input type="input" onClick={()=>fetchGetImage("admin").then((imageBlob)=>setImageData(imageBlob))} />
         <div>
      {imageData && (
       <img
       src={`data:image/jpeg;base64,${encodeBase64(imageData)}`}
       alt="Image"
     />
      )}
    </div>
            <HeroSection />
            <Col>
            
            <CategoryAlbum />
            
            </Col>
    
          </Col>
        </Col>

      </Row>

     
    </>
  );
};

export default Homepage;
