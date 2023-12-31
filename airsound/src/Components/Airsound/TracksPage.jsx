import { Col, Row } from "react-bootstrap"
import SidebarUp from "./SidebarUp"
import Sidebar from "./Sidebar"
import SearchBar from "./SearchBar"
import HeroSectionAlbum from "./HeroSectionAlbum"
import Footer from "./Footer"
import TrackList from "./TracksList"
import MediaPlayer from "./MediaPlayer"


const TracksPage= ()=>{


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

              <TrackList />
            
            
            </Col>
    
          </Col>
        </Col>

      </Row>


  
    </>


    )

}


export default TracksPage