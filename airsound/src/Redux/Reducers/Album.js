import { GET_TRACKS,SELECT_ALBUM, SELECT_ALBUM2, TRACKADDFAV, TRACKREMOVEDFAV } from "../Action/actionAlbum";


const initialState ={
   albumSelect:{},
   tracks:{},
   albumSelect2:{},
   trackFav:[]
}


const Album=(state=initialState,action)=>{

    switch(action.type){

        case SELECT_ALBUM:
        return{
            ...state,
            albumSelect:action.payload
        }
        
        case GET_TRACKS:
        return{
            ...state,
            tracks:action.payload
        }

        case SELECT_ALBUM2:
            return{
                ...state,
                albumSelect2:action.payload
            }


          case TRACKADDFAV:
            return{
                ...state,
                trackFav:[...state.trackFav,action.payload]
            }  


            case TRACKREMOVEDFAV:
                return{
                    ...state,
                  trackFav:state.trackFav.filter((track,i)=>track.id!==action.payload.id)
                 
                }

        default: return state;
    }

    

}

export default Album