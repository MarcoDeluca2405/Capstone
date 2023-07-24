import { Col, Container, Row } from "react-bootstrap";
import { fetchData } from "../../js/fetchDataDeenzer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { select_album } from "../../Redux/Action/actionAlbum";
import PropagateLoader from "react-spinners/PropagateLoader"

const ViewAlbumHomeMore= ()=>{

    const navigate=useNavigate();

    const dispatch=useDispatch();

    const [album1,setAlbum1] = useState();
    const [album2,setAlbum2] = useState();
    const [album3,setAlbum3] = useState();
    const [album4,setAlbum4] = useState();


    
    const [isLoad1,setIsLoad1]= useState(false);
    const [isLoad2,setIsLoad2]= useState(false);
    const [isLoad3,setIsLoad3]= useState(false);
    const [isLoad4,setIsLoad4]= useState(false);


    useEffect(()=>{
fetchData("Imagine Dragons").then(data=>{setAlbum1(data);setIsLoad1(true)});
fetchData("Lazza").then(data=>{setAlbum2(data);setIsLoad2(true)});
fetchData("The Black eyed peas").then(data=>{setAlbum3(data);setIsLoad3(true)});
fetchData("Dua Lipa").then(data=>{setAlbum4(data);setIsLoad4(true)});
    },[])

    const handleClick= (album)=>{
        dispatch(select_album(album))
        navigate("/albumPage")
    }

return(
    <Container>

    <Row xs={1} md={2} lg={4} >

    <Col>

    {
        isLoad1 === false? (<div><PropagateLoader loading color="linear-gradient(90deg, rgba(255,0,251,0.9486169467787114) 0%, rgba(69,71,252,0.9486169467787114) 100%)" size={10} data-testid="loader" /></div>)  : (


    <div class="cards3" onClick={()=>handleClick(album1?.data[3])}>
    <figure class="card3" >
    <img src={album1?.data[3].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album1?.data[3].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>{album1?.data[3].artist.name}</span> </figcaption>
    </figure>
    </div>

        )
    }

    </Col>

    <Col>

    {
        isLoad2 ===false ?  (<div><PropagateLoader loading color="linear-gradient(90deg, rgba(255,0,251,0.9486169467787114) 0%, rgba(69,71,252,0.9486169467787114) 100%)" size={10} data-testid="loader" /></div>) : (

    <div class="cards3" onClick={()=>handleClick(album2?.data[0])}>
    <figure class="card3" >
    <img src={album2?.data[0].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album2?.data[0].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>{album2?.data[0].artist.name}</span> </figcaption>
    </figure>
    </div>
        )
    }

    
    </Col>

    <Col>

    {
        isLoad3 ===false ?  (<div><PropagateLoader loading color="linear-gradient(90deg, rgba(255,0,251,0.9486169467787114) 0%, rgba(69,71,252,0.9486169467787114) 100%)" size={10} data-testid="loader" /></div>) : (

    <div class="cards3" onClick={()=>handleClick(album3?.data[0])}>
    <figure class="card3" >
    <img src={album3?.data[0].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album3?.data[0].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>{album3?.data[0].artist.name}</span> </figcaption>
    </figure>
    </div>
        )
    }
   
    </Col>

    <Col>

    {
        isLoad4 ===false ?  (<div><PropagateLoader loading color="linear-gradient(90deg, rgba(255,0,251,0.9486169467787114) 0%, rgba(69,71,252,0.9486169467787114) 100%)" size={10} data-testid="loader" /></div>) : (

    <div class="cards3" onClick={()=>handleClick(album4?.data[0])}>
    <figure class="card3" >
    <img src={album4?.data[0].artist.picture} alt="img_category" className="card3Image"/>
        <figcaption class="card_title3"><img src={album4?.data[0].artist.picture}  alt="img_category" style={{width:"150px"}}/><span>{album4?.data[0].artist.name}</span> </figcaption>
    </figure>
    </div>
        )
    }

    </Col>

    </Row>
    </Container>
)
}

export default ViewAlbumHomeMore;