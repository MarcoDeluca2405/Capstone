import { Button, Col, Row, ToastContainer } from "react-bootstrap";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SidebarUp from "./SidebarUp";
import SearchBar from "./SearchBar";

import CategoryAlbum from "./CategoryAlbum";
import { Route } from "react-router-dom";
import HeroSection from "./SidebarUp/HeroSection";
import Weather from "./Weather";
import { useSelector } from "react-redux";
import { fetchGetImage, fetchIsImage } from "../../js/fetchDataDeenzer";
import { useState } from "react";




const Homepage = () => {

 

  return (
    <>
    <SidebarUp />
      
      <Row className="my-4 pb-5 m-0">
        <Sidebar />

        <Col>
          <SearchBar />
          <Col>
        
        
         <div>
   
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
