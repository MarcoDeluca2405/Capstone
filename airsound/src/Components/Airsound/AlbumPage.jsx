import { Col, Row } from "react-bootstrap";
import SidebarUp from "./SidebarUp";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import HeroSectionAlbum from "./HeroSectionAlbum";

const AlbumPage=()=>{

return(

    <>
    <SidebarUp />

      <Row className="mt-3 m-0">
        <Sidebar />
        
        <Col>
          <SearchBar />
          <Col>

           <HeroSectionAlbum />
            <Col>
            
            
            
            </Col>
    
          </Col>
        </Col>

      </Row>

      <Footer />
    </>

);

}

export default AlbumPage