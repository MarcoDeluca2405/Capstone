import { GET_TRACKS,IS_SELECT,SELECT_ALBUM, SELECT_ALBUM2, SELECT_TRACK, TRACKADDFAV, TRACKREMOVEDFAV } from "../Action/actionAlbum";


const initialState ={
   albumSelect:{},
   tracks:{},
   albumSelect2:{},
   trackFav:[],
   isSelect:false,
   selectTrack:[]
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

            case IS_SELECT:
                return{
                    ...state,
                    isSelect:action.payload
                }    

            case SELECT_TRACK:
                return{
                    ...state,
                    selectTrack:action.payload
                }

        default: return state;
    }

    

}

export default Album