import { ADD_HIPHOP, ADD_POP, ADD_PUNK, ADD_ROCK } from "../Action/actionAlbum"

const initialState ={
    category:{
    pop:{},
    rock:{},
    hiphop:{},
    punk:{}
    }
}


const Album=(state=initialState,action)=>{

    switch(action.type){

            case ADD_POP:
                return{
                    ...state,
                    category:{
                        ...state.category,
                        pop:action.payload
                    }
                }

            case ADD_ROCK:
                return{
                    ...state,
                    category:{
                        ...state.category,
                        rock:action.payload
                    }
                }

            case ADD_HIPHOP:
                return{
                    ...state,
                    category:{
                        ...state.category,
                        hiphop:action.payload
                    }
                }

            case ADD_PUNK:
                return{
                    ...state,
                    category:{
                        ...state.category,
                        punk:action.payload
                    }
                }





        default: return state;
    }

}

export default Album