
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../js/fetchDataDeenzer";
import { useNavigate } from "react-router-dom";
import { select_album } from "../../../Redux/Action/actionAlbum";
import { Card, Col, Container, Row } from "react-bootstrap";

  const HeroSection = () => {

    const [album1,setAlbum1] = useState();

     useEffect(()=>{fetchData("Lorenzo Fragola").then(data=>setAlbum1(data.data[1]))},[])
    

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleClick= (album)=>{
        dispatch(select_album(album))
        navigate("/albumPage")
    }


    return (
      <Container className="mt-4" >

      <Card style={{ width: '100%' }} className="myHero text-light">
        <Row className="g-0">
      <Col sx={12} md={4}>
      
      <Card.Img variant="top" className="py-3" src={album1?.artist.picture_big}  style={{maxWidth:"250px"}}/>

      </Col>
      <Col sx={12} md={8} >

      <Card.Body>
        <Card.Title>{album1?.artist.name}</Card.Title>
        <Card.Text scr className="pt-3 mt-4 myTextHerosection">
        Nel 2013 ha partecipato ai casting della settima edizione del talent show X Factor, venendo scartato ai provini preliminari. Durante l'estate del 2014 ha partecipato nuovamente alle audizioni di X Factor, riuscendo ad accedere alle fasi successive ed entrare a far parte della categoria Uomini 16-24 del rapper Fedez. Il 4 dicembre 2014 viene pubblicato il suo singolo di debutto The Reason Why, certificato dalla FIMI prima disco d'oro in 5 giorni e dopo doppio disco di platino, stabilendo così un primato assoluto all'interno del programma.
        </Card.Text>
       
      </Card.Body>
      </Col>
        </Row>
        <Card.Footer></Card.Footer>
    </Card>
      </Container>
    );
  };
  
  export default HeroSection;
  