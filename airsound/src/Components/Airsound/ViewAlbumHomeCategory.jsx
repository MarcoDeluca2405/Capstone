import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { fetchData } from "../../js/fetchDataDeenzer";
import { useNavigate } from "react-router-dom";
import { select_album } from "../../Redux/Action/actionAlbum";




const ViewAlbumHomeCategory = ()=>{
    const [album1,setAlbum1] = useState();
    const [album2,setAlbum2] = useState();
    const [album3,setAlbum3] = useState();
    const [album4,setAlbum4] = useState();


    const dispatch=useDispatch();
    const navigate=useNavigate();

    useEffect(()=>{
fetchData("nek").then(data=>setAlbum1(data));
fetchData("pitbull").then(data=>setAlbum2(data));
fetchData("gemitaiz").then(data=>setAlbum3(data));
fetchData("nayt").then(data=>setAlbum4(data));
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
        <figcaption class="card_title3"><img src={album1?.data[3].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>Nek</span> </figcaption>
    </figure>
    </div>

    </Col>

    <Col>

    <div class="cards3" onClick={()=>handleClick(album2?.data[0])}>
    <figure class="card3" >
    <img src={album2?.data[0].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album2?.data[0].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>PitPull</span> </figcaption>
    </figure>
    </div>
    
    </Col>

    <Col>
   
    <div class="cards3" onClick={()=>handleClick(album3?.data[0])}>
    <figure class="card3" >
    <img src={album3?.data[0].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album3?.data[0].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>Gemitaiz</span> </figcaption>
    </figure>
    </div>
    </Col>

    <Col>

    <div class="cards3" onClick={()=>handleClick(album4?.data[0])}>
    <figure class="card3" >
    <img src={album4?.data[0].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album4?.data[0].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>Nayt</span> </figcaption>
    </figure>
    </div>
    </Col>

    </Row>
    </Container>
    
)

}

export default ViewAlbumHomeCategory