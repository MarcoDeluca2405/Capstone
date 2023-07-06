import { useState } from "react"
import { tracksAddFav, tracksRemovedFav } from "../../Redux/Action/actionAlbum"
import { useDispatch, useSelector } from "react-redux"
import * as Icon from "react-icons/ai"
import { ListGroup } from "react-bootstrap"

const FavoriteComponent= (props)=>{

const [fav,setFav]=useState(false)

const favList=useSelector((state)=>state.Album.trackFav)

const dispatch=useDispatch();

const isFav=favList?.some((el)=>{
 
    
    if(el.track.id===props.props.id){
        
       return true
    }else{
       
        return false
    }

})



const handleFav=(track,cover)=>{
  
    dispatch(tracksAddFav({track:track,cover:cover}))
  
  }
  
  const HadlerRemoveFav=(track)=>{
        
      dispatch(tracksRemovedFav(track))
  }

return(

<>

{isFav?
 (
<>
<ListGroup.Item  onClick={()=>{HadlerRemoveFav(props.props) }} className="w-25 item d-flex align-items-center justify-content-center"><Icon.AiFillHeart   size={25}/></ListGroup.Item>

</>
)

:

(<>
<ListGroup.Item  onClick={()=>{handleFav(props.props,props.cover) }} className="w-25 d-flex item align-items-center justify-content-center"><Icon.AiOutlineHeart  size={25}/></ListGroup.Item>


</>)

}

</>


)

}

export default FavoriteComponent