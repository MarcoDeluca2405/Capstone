import { Container, ListGroup } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux";
import { is_select, select_album, select_album2, select_track } from "../../Redux/Action/actionAlbum";
import FavoriteComponent from "./FavoriteComponent";
import { useNavigate } from "react-router-dom";
import { add_text } from "../../Redux/Action/action";
import { useEffect } from "react";




const TrackListSearch = ({track})=>{

    const navigate=useNavigate();

    const dispatch=useDispatch();

    

    const text=useSelector((state)=>state.user.text)+""
   
    const handleClick= (artist)=>{
        dispatch(select_album(artist))
        dispatch(add_text(""))
        navigate("/albumPage")
    }

    const hadlerClick2=(track,cover)=>{
    
        dispatch(is_select(true))
        
        dispatch(select_track({track,cover:cover}))
    }

    const hadleClick3=(track)=>{
        dispatch(select_album2(track.album))
        dispatch(select_album(track))
        dispatch(add_text(""))
        navigate("/TracksPage")
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

        Array.isArray(track) ? (

            track?.map((el,i)=>{

                return(
    
                    
                    <div>
                
        <ListGroup key={el.id} variant="" horizontal className="my-2 trackListItem" >
              <ListGroup.Item variant="" className="w-25 d-flex item align-items-center justify-content-center" onClick={()=>hadlerClick2()}><span> {i} </span></ListGroup.Item>
              <ListGroup.Item variant="" className="w-50 d-flex item align-items-center  justify-content-center" onClick={()=>handleClick(el)} ><span> {el.artist.name}</span></ListGroup.Item>
              <ListGroup.Item variant=""className="w-50 d-flex item align-items-center justify-content-center" onClick={()=>hadleClick3(el)}><img className="imgTrack" src={el.album.cover} style={{width:"50px"}} alt="cover" /></ListGroup.Item>
              <ListGroup.Item variant="" className="w-100 d-flex item align-items-center justify-content-center"onClick={()=>hadlerClick2(el,el.album.cover)}><span>{el.title} </span></ListGroup.Item>
             { <FavoriteComponent  props={el} cover={el.album.cover} index={i}/> 
             }
              <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center justify-content-center"><span>{el.rank} </span></ListGroup.Item>
            </ListGroup>
                
                </div>
        
        )
    
        
        
    })

        ) : (<></>)

     
            }
        
        
            

    
        </Container>
)




}


export default  TrackListSearch