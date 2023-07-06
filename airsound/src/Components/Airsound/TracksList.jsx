
import { Button, Container } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';
import {useDispatch, useSelector } from "react-redux";
import FavoriteComponent from "./FavoriteComponent";
import { is_select, select_track } from "../../Redux/Action/actionAlbum";
import * as Icon from 'react-icons/ai'


const TrackList= ()=>{
const track = useSelector((state)=>state.Album.tracks.data)
const cover = useSelector((state)=>state.Album.albumSelect2.cover_small)

const dispatch=useDispatch()

const hadlerClick=(track,cover)=>{

    dispatch(is_select(true))
    dispatch(select_track({track,cover:cover}))
}
const hadlerClick2=(track,cover)=>{

    dispatch(is_select(true))
    
    dispatch(select_track({track,cover:cover}))
}


return(
    <>
    <Container className="mb-4">
        <div className="text-end">
    <Button variant="dark" onClick={()=>hadlerClick(track,cover)}> <h6>Ascolta tutto l'album <Icon.AiFillPlayCircle /> </h6></Button>

        </div>
    <ListGroup variant="" horizontal className="my-2">
          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center  justify-content-center" ><span> Position</span></ListGroup.Item>
          <ListGroup.Item variant="dark"className="w-50 d-flex align-items-center justify-content-center"> <span className="text-center">Cover</span></ListGroup.Item>
          <ListGroup.Item variant="dark" className="w-100 d-flex align-items-center justify-content-center"><span>Title</span></ListGroup.Item>
          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center justify-content-center"><span>Like </span></ListGroup.Item>
          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center justify-content-center"><span>Rank </span></ListGroup.Item>
        </ListGroup>

    {track?.map((el,i)=>{

        return(
            <div>
            
    <ListGroup key={el.id} variant="flush" horizontal className="my-2 trackListItem" >
          <ListGroup.Item variant="" className="w-25 d-flex item align-items-center justify-content-center" onClick={()=>hadlerClick2(el,cover)}><span> {el.track_position} </span></ListGroup.Item>
          <ListGroup.Item variant=""className="w-50 d-flex item align-items-center justify-content-center" onClick={()=>hadlerClick2(el,cover)}><img src={cover} style={{width:"50px"}} alt="cover" /></ListGroup.Item>
          <ListGroup.Item variant="" className="w-100 d-flex item align-items-center justify-content-center"onClick={()=>hadlerClick2(el,cover)}><span>{el.title} </span></ListGroup.Item>
          <FavoriteComponent props={el} cover={cover} index={i} />

          <ListGroup.Item variant="dark" className="w-25 d-flex align-items-center justify-content-center"><span>{el.rank} </span></ListGroup.Item>
        </ListGroup>
            
            </div>
        )

    })}

    </Container>

    </>

)

}


export default TrackList