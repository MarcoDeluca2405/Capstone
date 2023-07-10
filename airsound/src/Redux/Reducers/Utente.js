import { ADD_CITY, ADD_EMAIL, ADD_LASTNAME, ADD_METEO, ADD_NAME, ADD_PASSWORD, ADD_PROVINCIA, ADD_ROLE, ADD_TEXT, ADD_TOKEN, ADD_TOKEN_MUSIC, ADD_TOKEN_SPOTIFY, ADD_USERNAME } from "../Action/action"


const initialState = {
    user: {
        name: "",
        lastname: "",
        username: "",
        email: "",
        password: "",
        token: "",
        roles: "",
        provincia:"",
        city: ""
    },
    meteo:[],
    token_music:"",
    text:""
}

const mainProfile = (state = initialState, action) => {

    switch (action.type) {

        case ADD_NAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    name: action.payload
                }
            }

        case ADD_LASTNAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    lastname: action.payload
                }
            }

        case ADD_USERNAME:
            return {
                ...state,
                user: {
                    ...state.user,
                    username: action.payload
                }
            }

        case ADD_EMAIL:
            return {
                ...state,
                user: {
                    ...state.user,
                    email: action.payload
                }
            }

        case ADD_PASSWORD:
            return {
                ...state,
                user: {
                    ...state.user,
                    password: action.payload
                }
            }

        case ADD_TOKEN:
            return {
                ...state,
                user: {
                    ...state.user,
                    token: action.payload
                }
            }

        case ADD_ROLE:
            return {
                ...state,
                user: {
                    ...state.user,
                    roles: action.payload
                }
            }


        case ADD_PROVINCIA:
            return {
                ...state,
                user: {
                    ...state.user,
                    provincia: action.payload
                }
            }
        case ADD_CITY:
            return {
                ...state,
                user: {
                    ...state.user,
                    city: action.payload
                }
            }


        case ADD_METEO:
            return{
                ...state,
                meteo:action.payload
            }

        case ADD_TOKEN_MUSIC:
            return{
                ...state,
                token_music:action.payload
            }

            case ADD_TEXT:
                return{
                    ...state,
                    text:action.payload
                }

        default: return state;
    }

}


export default mainProfile;