import { Col, Container, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import ListGroup from 'react-bootstrap/ListGroup';
import { useEffect, useState } from "react";
import { fetchDataAlbum } from "../../js/fetchDataDeenzer";
import { useNavigate } from "react-router-dom";
import { getTracks, select_album2 } from "../../Redux/Action/actionAlbum";
import PropagateLoader from "react-spinners/PropagateLoader"

const AlbumList= ()=>{

    const album= useSelector((state)=>state.Album.albumSelect.artist.tracklist)

    const [list,setList] = useState();
    
    const [isLoad,setIsLoad]= useState(false);

    const dispatch=useDispatch();
    
    const navigate=useNavigate();

    useEffect(()=>{
        fetchDataAlbum(album).then(data=>{setList(data);setIsLoad(true)})

    },[album])


    const HadlerClick=(albumTracks)=>{
        dispatch(select_album2(albumTracks))
        dispatch(getTracks(albumTracks.tracklist))
        setTimeout(()=>navigate("/TracksPage"),1000);

    }

    return(

        <Container  className="mt-4">


                <Row sx={1} md={2} lg={4} >

              {
                isLoad===false ? (<div className="w-100 mt-3 d-flex justify-content-center"><PropagateLoader loading color="linear-gradient(90deg, rgba(255,0,251,0.9486169467787114) 0%, rgba(69,71,252,0.9486169467787114) 100%)" size={10} data-testid="loader" /></div>) : (


                    list?.data.map(el=>{
                        return(
                            
                            <>
                            <Col>
                            
                            <ListGroup key={el.id} horizontal  className="my-2 listGroupDiv" onClick={()=>HadlerClick(el.album)}>
                        <ListGroup.Item className="itemColor"><img src={el.album.cover} alt="image"/></ListGroup.Item>
                      <ListGroup.Item  className="itemColor text-light w-100 d-flex align-items-center justify-content-center"><span>{el.album.title}</span></ListGroup.Item>
                        </ListGroup>    
                            </Col>
        
                        </>
                            )
                        })
              
                )
              }

      
                    </Row>

        </Container>


    )

}


export default AlbumList