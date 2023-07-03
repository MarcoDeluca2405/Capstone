import { GET_TRACKS, SELECT_ALBUM } from "../Action/actionAlbum";


const initialState ={
   albumSelect:{},
   tracks:{}
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


        default: return state;
    }

    

}

export default Album