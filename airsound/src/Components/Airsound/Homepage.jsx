import { Col, Row, ToastContainer } from "react-bootstrap";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import SidebarUp from "./SidebarUp-";
import SearchBar from "./SearchBar";
import HeroSection from "./heroSection";
import CategoryAlbum from "./CategoryAlbum";


const Homepage = () => {
  return (
    <>
      <SidebarUp />

      <Row className="mt-3 m-0">
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

      <Footer />
    </>
  );
};

export default Homepage;
