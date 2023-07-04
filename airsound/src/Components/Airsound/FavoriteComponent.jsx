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
    console.log(el.id);
    
    console.log(el.id===props.props.id)
    if(el.id===props.props.id){
        
       return true
    }else{
       
        return false
    }

})



const handleFav=(track)=>{
   
    dispatch(tracksAddFav(track))
  
  }
  
  const HadlerRemoveFav=(track)=>{
        
      dispatch(tracksRemovedFav(track))
  }

return(

<>

{isFav?
 (
<>
<ListGroup.Item variant="dark" onClick={()=>{HadlerRemoveFav(props.props) }} className="w-25 d-flex align-items-center justify-content-center"><Icon.AiFillHeart   size={25}/></ListGroup.Item>

</>
)

:

(<>
<ListGroup.Item variant="dark" onClick={()=>{handleFav(props.props) }} className="w-25 d-flex align-items-center justify-content-center"><Icon.AiOutlineHeart  size={25}/></ListGroup.Item>


</>)

}

</>


)

}

export default FavoriteComponent