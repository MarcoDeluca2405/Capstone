import { Col, Row, ToastContainer } from "react-bootstrap";
import Footer from "./Footer";
import Sidebar from "./Sidebar"
import SidebarUp from "./SidebarUp-";
import SearchBar from "./SearchBar";


const Homepage= ()=>{


return(
    <>
<SidebarUp />

<Row className="mt-3">

<Sidebar />


<Col>
    <SearchBar />
<Col>
fdsa
</Col>



</Col>


</Row>


<Footer />

    </>
)

}


export default Homepage;