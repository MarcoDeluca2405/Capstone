import {
    MDBBtn,
    MDBContainer,
    MDBTypography,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
  } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../js/fetchDataDeenzer";
import { useNavigate } from "react-router-dom";
import { select_album } from "../../../Redux/Action/actionAlbum";
import { Card, Col, Container, Row } from "react-bootstrap";

  const HeroSection = () => {

    const [album1,setAlbum1] = useState();

     useEffect(()=>{fetchData("Lorenzo Fragola").then(data=>setAlbum1(data[0]))},[])
    

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleClick= (album)=>{
        dispatch(select_album(album))
        navigate("/albumPage")
    }


    return (
      <Container className="mt-4" onClick={()=>handleClick(album1)}>

      <Card style={{ width: '100%' }} className="myHero text-light">
        <Row className="g-0">
      <Col sx={12} md={4}>
      <Card.Img variant="top" src={album1?.album.cover_big} />
      </Col>
      <Col sx={12} md={8} >

      <Card.Body>
        <Card.Title>Lorenzo Fragola</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
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
  