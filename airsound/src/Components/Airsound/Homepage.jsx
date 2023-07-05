import { Col, Row, ToastContainer } from "react-bootstrap";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SidebarUp from "./SidebarUp";
import SearchBar from "./SearchBar";
import HeroSection from "./heroSection";
import CategoryAlbum from "./CategoryAlbum";
import { Route } from "react-router-dom";




const Homepage = () => {


  return (
    <>
    <SidebarUp />

      <Row className="my-4 pb-5 m-0">
        <Sidebar />
        
        <Col>
          <SearchBar />
          <Col>

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
