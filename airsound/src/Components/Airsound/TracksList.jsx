
import { Container } from "react-bootstrap"
import ListGroup from 'react-bootstrap/ListGroup';
import {useDispatch, useSelector } from "react-redux";
import FavoriteComponent from "./FavoriteComponent";
import { is_select, select_track } from "../../Redux/Action/actionAlbum";


const TrackList= ()=>{
const track = useSelector((state)=>state.Album.tracks.data)
const cover = useSelector((state)=>state.Album.albumSelect2.cover_small)

const dispatch=useDispatch()

const hadlerClick=(track)=>{

    dispatch(is_select(true))
    dispatch(select_track(track))
}


return(
    <>
    <Container className="mb-4">

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
            
    <ListGroup key={el.id} variant="flush" horizontal className="my-2 trackListItem" onClick={()=>hadlerClick(el)}>
          <ListGroup.Item variant="" className="w-25 d-flex item align-items-center justify-content-center"><span> {el.track_position} </span></ListGroup.Item>
          <ListGroup.Item variant=""className="w-50 d-flex item align-items-center justify-content-center"><img src={cover} style={{width:"50px"}} alt="cover" /></ListGroup.Item>
          <ListGroup.Item variant="" className="w-100 d-flex item align-items-center justify-content-center"><span>{el.title} </span></ListGroup.Item>
          <FavoriteComponent props={el} index={i} />

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