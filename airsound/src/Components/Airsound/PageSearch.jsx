import { Col, Row } from "react-bootstrap";
import SidebarUp from "./SidebarUp";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import TrackListSearch from "./TrackListSearch";


const PageSearch =()=>{


return(

<>

<SidebarUp />

<Row className="my-4 pb-5 m-0">
  <Sidebar />
  
  <Col>
    <SearchBar />
    <Col>

     <TrackListSearch />
      

    </Col>
  </Col>

</Row>

</>

);

}

export default PageSearch;