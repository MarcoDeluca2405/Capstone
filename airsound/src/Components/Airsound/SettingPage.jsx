import { Col, Row } from "react-bootstrap"
import SidebarUp from "./SidebarUp"
import Sidebar from "./Sidebar"
import SearchBar from "./SearchBar"
import AlbumList from "./AlbumList"
import FormSetting from "./FormSetting"


const SettingPage = () =>{

    return(<>
    
    
    <SidebarUp />

      <Row className="mt-3 m-0">
        <Sidebar />
        
        <Col>
          <SearchBar />
          <Col>

           
            <Col>

              <FormSetting />
            
            
            </Col>
    
          </Col>
        </Col>

      </Row>

      
    
    
    </>)
}


export default SettingPage