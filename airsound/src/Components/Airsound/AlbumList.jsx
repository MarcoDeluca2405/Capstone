import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from "react";
import { fetchDataAlbum } from "../../js/fetchDataDeenzer";
import { useNavigate } from "react-router-dom";
import { getTracks } from "../../Redux/Action/actionAlbum";


const AlbumList= ()=>{

    const album= useSelector((state)=>state.Album.albumSelect.artist.tracklist)

    const [list,setList] = useState();
    
    const dispatch=useDispatch();
    
    const navigate=useNavigate();

    useEffect(()=>{
        fetchDataAlbum(album).then(data=>setList(data))

    },[album])


    const HadlerClick=(albumTracks)=>{
        console.log(albumTracks)
        dispatch(getTracks(albumTracks))
        setTimeout(()=>navigate("/TracksPage"),1000);

    }

    return(

        <Container fluid className="w-75">


                <Row sm={1} md={2} lg={3} >
                {list?.data.map(el=>{
                    return(
                        
                        <>
                        <Col>
                        
                        <ListGroup key={el.id} horizontal  className="my-2 listGroupDiv" onClick={()=>HadlerClick(el.album.tracklist)}>
                    <ListGroup.Item className="itemColor"><img src={el.album.cover} alt="image"/></ListGroup.Item>
                  <ListGroup.Item  className="itemColor text-light w-100 d-flex align-items-center"><span>{el.album.title}</span></ListGroup.Item>
                    </ListGroup>    
                        </Col>
    
                    </>
                        )
                    })}
          
      
                    </Row>

        </Container>


    )

}


export default AlbumList