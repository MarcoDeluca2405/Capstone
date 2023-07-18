import { Container, ListGroup } from "react-bootstrap"
import FavoriteComponent from "./FavoriteComponent"
import { useDispatch, useSelector } from "react-redux"
import { getTracks, is_select, select_album, select_album2, select_track } from "../../Redux/Action/actionAlbum"
import SidebarUp from "./SidebarUp"
import { add_text } from "../../Redux/Action/action"
import { useNavigate } from "react-router-dom"
import { fetchData, fetchDataAlbum, fetchDataSearchNamed } from "../../js/fetchDataDeenzer"
import { useState } from "react"


const TrackListPreferiti=()=>{

    const track=useSelector((state)=>state.Album?.trackFav)
    const album= useSelector((state)=>state.Album.albumSelect2)

    const [tracks,setTracks] = useState();

    const dispatch=useDispatch();

    const navigate=useNavigate();

    const handleClick= (artist)=>{
        
fetchData(artist.name).then(data=>dispatch(select_album(data.data[0])))
        dispatch(add_text(""))
        setTimeout(()=>{navigate("/albumPage");clearTimeout()},500)
       
        
    }



    const hadlerClick2=(track,cover)=>{
    
        dispatch(is_select(true))
        
        dispatch(select_track({track,cover:cover}))
    }

  



    return(
       
         
    <Container className="mb-4 containerTrack">
        <div className="text-end">


        </div>
    <ListGroup variant="" horizontal className="my-2">
          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center  justify-content-center" ><span> Position</span></ListGroup.Item>
          <ListGroup.Item variant="dark" className="w-50 d-flex align-items-center  justify-content-center" ><span> Nome Artista</span></ListGroup.Item>
          <ListGroup.Item variant="dark"className="w-50 d-flex align-items-center justify-content-center"> <span className="text-center">Cover</span></ListGroup.Item>
          <ListGroup.Item variant="dark" className="w-100 d-flex align-items-center justify-content-center"><span>Title</span></ListGroup.Item>
          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center justify-content-center"><span>Like </span></ListGroup.Item>
          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center justify-content-center"><span>Rank </span></ListGroup.Item>
        </ListGroup>

  
       {
         track?.map((el,i)=>{
               
           return(

               <div>
            
    <ListGroup key={el.track?.id} variant="" horizontal className="my-2 trackListItem" >
          <ListGroup.Item variant="" className="w-25 d-flex item align-items-center justify-content-center" onClick={()=>hadlerClick2(el.track,el.cover)}><span> {i} </span></ListGroup.Item>
          <ListGroup.Item variant="" className="w-50 item d-flex align-items-center  justify-content-center" onClick={()=>handleClick(el.track.artist)} ><span> {el.track.artist.name}</span></ListGroup.Item>
          <ListGroup.Item variant=""className="w-50 d-flex item align-items-center justify-content-center" onClick={()=>hadlerClick2(el.track,el.cover)}><img src={el.cover} style={{width:"50px"}} alt="cover" /></ListGroup.Item>
          <ListGroup.Item variant="" className="w-100 d-flex item align-items-center justify-content-center"onClick={()=>hadlerClick2(el.track,el.cover)}><span>{el.track?.title} </span></ListGroup.Item>
         { <FavoriteComponent props={el.track} cover={el.cover} index={i} /> 
         }
          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center justify-content-center"><span>{el.track?.rank} </span></ListGroup.Item>
        </ListGroup>
            
            </div>
        ) 
        })
        
            }

    
        </Container>
    )
}

export default TrackListPreferiti