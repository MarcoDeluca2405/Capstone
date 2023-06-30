import { Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"


const ViewAlbumHomeCategory = ()=>{
    const pop=useSelector((state)=>state.Album.category.pop);
    const rock=useSelector((state)=>state.Album.category.rock);
    const hiphop=useSelector((state)=>state.Album.category.hiphop);
    const punk=useSelector((state)=>state.Album.category.punk);



return(
    <Container>

    <Row xs={1} md={2} lg={4} >

    <Col>

    <div class="cards3" >
    <figure class="card3" >
    <img src={pop.icons[0].url}  alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={pop.icons[0].url}  alt="img_category" style={{width:"150px"}}/><span>POP</span> </figcaption>
    </figure>
    </div>

    </Col>

    <Col>
    <div class="cards3">
    <figure class="card3">
    <img src={rock.icons[0].url}  alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={rock.icons[0].url}  alt="img_category" style={{width:"150px"}}/><span>ROCK</span></figcaption>
    </figure>
    </div>
    
    </Col>

    <Col>
    <div class="cards3">
    <figure class="card3">
    <img src={hiphop.icons[0].url}  alt="img_category" className="card3Image"/>
        <figcaption class="card_title3">
            <img src={hiphop.icons[0].url}  alt="img_category" style={{width:"150px"}}/>
            <span>HIP-HOP</span>
            </figcaption>
    </figure>
    </div>
    </Col>

    <Col>
    <div class="cards3">
    <figure class="card3">
    <img src={punk.icons[0].url}  alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={punk.icons[0].url}  alt="img_category" style={{width:"150px"}}/><span>PUNK</span></figcaption>
    </figure>
    </div>
    </Col>

    </Row>
    </Container>
    
)

}

export default ViewAlbumHomeCategory