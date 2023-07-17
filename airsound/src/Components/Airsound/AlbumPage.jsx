import { Col, Row } from "react-bootstrap";
import SidebarUp from "./SidebarUp";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import Footer from "./Footer";
import HeroSectionAlbum from "./HeroSectionAlbum";
import AlbumList from "./AlbumList";

const AlbumPage=()=>{

return(

    <>
    <SidebarUp />

      <Row className="mt-3 m-0 pb-5 mb-3">
        <Sidebar />
        
        <Col>
          <SearchBar />
          <Col>

           <HeroSectionAlbum />
            <Col>

              <AlbumList />
            
            
            </Col>
    
          </Col>
        </Col>

      </Row>

      
    </>

);

}

export default AlbumPage