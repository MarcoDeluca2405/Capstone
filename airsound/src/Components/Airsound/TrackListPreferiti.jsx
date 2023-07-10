import { Container, ListGroup } from "react-bootstrap"
import FavoriteComponent from "./FavoriteComponent"
import { useDispatch, useSelector } from "react-redux"
import { is_select, select_track } from "../../Redux/Action/actionAlbum"
import SidebarUp from "./SidebarUp"


const TrackListPreferiti=()=>{

    const track=useSelector((state)=>state.Album?.trackFav)

    const dispatch=useDispatch();

   
    const hadlerClick2=(track,cover)=>{
    
        dispatch(is_select(true))
        
        dispatch(select_track({track,cover:cover}))
    }

    return(
       
         
    <Container className="mb-4">
        <div className="text-end">


        </div>
    <ListGroup variant="" horizontal className="my-2">
          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center  justify-content-center" ><span> Position</span></ListGroup.Item>
          <ListGroup.Item variant="dark"className="w-50 d-flex align-items-center justify-content-center"> <span className="text-center">Cover</span></ListGroup.Item>
          <ListGroup.Item variant="dark" className="w-100 d-flex align-items-center justify-content-center"><span>Title</span></ListGroup.Item>
          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center justify-content-center"><span>Like </span></ListGroup.Item>
          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center justify-content-center"><span>Rank </span></ListGroup.Item>
        </ListGroup>

  
       {
         track?.map((el,i)=>{
               
           return(

               <div>
            
    <ListGroup key={el.track?.id} variant="flush" horizontal className="my-2 trackListItem" >
          <ListGroup.Item variant="" className="w-25 d-flex item align-items-center justify-content-center" onClick={()=>hadlerClick2(el.track,el.cover)}><span> {el.track?.track_position} </span></ListGroup.Item>
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