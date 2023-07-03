import { SELECT_ALBUM } from "../Action/actionAlbum";


const initialState ={
   albumSelect:{}
}


const Album=(state=initialState,action)=>{

    switch(action.type){

        case SELECT_ALBUM:
        return{
            ...state,
            albumSelect:action
        }



        default: return state;
    }

}

export default Album