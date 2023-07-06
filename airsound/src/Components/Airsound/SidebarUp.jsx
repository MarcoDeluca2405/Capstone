import { Container, Navbar } from "react-bootstrap";
import myLogo from "../../img/logo_modificato-removebg-preview.png"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { meteoNEWS } from "../../Redux/Action/action";

const SidebarUp= ()=>{

  
  //dispatch
  const dispatch=useDispatch();
 const citta= useSelector((state)=>state.user.user.city);
  
  //useEffect


useEffect(()=>{
  dispatch(meteoNEWS(citta))
},[citta])  

//useSelector

const temp=useSelector((state)=>state.user.meteo.main?.temp)
const weather= useSelector((state)=>state.user.meteo.weather[0]?.icon)


return(
    <Navbar className="bg-body-tertiary p-0  m-0">
    <Container fluid className="bg-dark">
      <Navbar.Brand href="#home" className="text-light d-flex align-items-end"><img src={myLogo} className="mb-2" alt="myLogo" style={{width:"70px"}}/><p className="mytext p-0 m-0">irSound</p></Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text className="text-light">
         

        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
)

}

export default SidebarUp;