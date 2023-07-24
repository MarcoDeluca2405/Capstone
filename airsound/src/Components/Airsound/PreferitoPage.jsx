import { Col, Row, ToastContainer } from "react-bootstrap";

import Sidebar from "./Sidebar";
import SidebarUp from "./SidebarUp";
import SearchBar from "./SearchBar";

import TrackListPreferiti from "./TrackListPreferiti";




const PreferitoPage = () => {


  return (
    <>
    <SidebarUp />

      <Row className="my-4 pb-5 m-0">
        <Sidebar />
        
        <Col>
          <SearchBar />
          <Col style={{height:"60vh"}}>

           <TrackListPreferiti />
            
    
          </Col>
        </Col>

      </Row>

     
    </>
  );
};

export default PreferitoPage;
