import { Col, Container, Row } from "react-bootstrap"
import { fetchData } from "../../js/fetchDataDeenzer";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { select_album } from "../../Redux/Action/actionAlbum";
import { useNavigate } from "react-router-dom";



const ViewAlbumHomeRecent = ()=>{

    const [album1,setAlbum1] = useState();
    const [album2,setAlbum2] = useState();
    const [album3,setAlbum3] = useState();
    const [album4,setAlbum4] = useState();

    const dispatch=useDispatch();

    const navigate=useNavigate();

    useEffect(()=>{
fetchData("N.E.R.D").then(data=>setAlbum1(data));
fetchData("Shakira").then(data=>setAlbum2(data));
fetchData("fedez").then(data=>setAlbum3(data));
fetchData("Ultimo").then(data=>setAlbum4(data));
    },[])


    const handleClick= (album)=>{
        dispatch(select_album(album))
        navigate("/albumPage")
    }

return(
    <Container>

    <Row xs={1} md={2} lg={4} >

    <Col>

    <div class="cards3" onClick={()=>handleClick(album1?.data[3])}>
    <figure class="card3" >
    <img src={album1?.data[3].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album1?.data[3].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>{album1?.data[0].artist.name}</span> </figcaption>
    </figure>
    </div>

    </Col>

    <Col>
    <div class="cards3" onClick={()=>handleClick(album2?.data[1])}>
    <figure class="card3" >
    <img src={album2?.data[2].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album2?.data[1].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>{album2?.data[0].artist.name}</span> </figcaption>
    </figure>
    </div>
    </Col>

    <Col>
    <div class="cards3" onClick={()=>handleClick(album3?.data[0])}>
    <figure class="card3" >
    <img src={album3?.data[0].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album3?.data[0].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>{album3?.data[0].artist.name}</span> </figcaption>
    </figure>
    </div>
    </Col>

    <Col>
    <div class="cards3" onClick={()=>handleClick(album4?.data[0])}>
    <figure class="card3" >
    <img src={album4?.data[0].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album4?.data[0].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>{album4?.data[0].artist.name}</span> </figcaption>
    </figure>
    </div>
    </Col>

    </Row>
    </Container>
    
)

}

export default ViewAlbumHomeRecent