
import { Card, Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
  
  const HeroSectionAlbum = () => {

    const album=useSelector((state)=>state.Album.albumSelect)

    return (
      <Container className="mt-4 d-flex justify-content-center" >

      <Card style={{ width: '80%', height:"70%"}} className="myHero text-light ">
        <Row className="g-0">
      <Col sx={12} md={4}>
      
      <Card.Img variant="top" className="py-3" src={album?.artist.picture_big}  style={{maxWidth:"150px"}}/>

      </Col>
      <Col sx={12} md={8} className="d-flex align-items-center">

      <Card.Body>
        <Card.Title >{album?.artist.name}</Card.Title>
       
       
      </Card.Body>
      </Col>
        </Row>
        <Card.Footer></Card.Footer>
    </Card>
      </Container>
    );
  };
  
  export default HeroSectionAlbum;
  