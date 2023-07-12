

export const ADD_NAME="ADD_NAME";
export const ADD_LASTNAME="ADD_LASTNAME";
export const ADD_USERNAME="ADD_USERNAME";
export const ADD_EMAIL="ADD_EMAIL";
export const ADD_PASSWORD="ADD_PASSWORD";
export const ADD_TOKEN="ADD_TOKEN";
export const ADD_ROLE="ADD_ROLE";
export const ADD_STATO="ADD_STATO"
export const ADD_PROVINCIA="ADD_PROVINCIA";
export const ADD_CITY="ADD_CITY";
export const ADD_METEO="ADD_METEO";
export const ADD_TOKEN_MUSIC="ADD_TOKEN_MUSIC";
export const ADD_TEXT="ADD_TEXT";

export const add_text=(text)=>({
    type:ADD_TEXT,
    payload:text
})

export const add_name=(name)=>({
    type:ADD_NAME,
    payload:name
})

export const add_lastname=(lastname)=>({
    type:ADD_LASTNAME,
    payload:lastname
})

export const add_username=(username)=>({
    type:ADD_USERNAME,
    payload:username
})

export const add_email=(email)=>({
    type:ADD_EMAIL,
    payload:email
})

export const add_password=(password)=>({
    type:ADD_PASSWORD,
    payload:password
})

export const add_token=(token)=>({
    type:ADD_TOKEN,
    payload:token
})

export const add_role=(role)=>({
    type:ADD_ROLE,
    payload:role
})

export const add_stato=(stato)=>({
    type:ADD_STATO,
    payload:stato
})

export const add_provincia=(provincia)=>({
    type:ADD_PROVINCIA,
    payload:provincia
})

export const add_city=(city)=>({
    type:ADD_CITY,
    payload:city
})

export const add_meteo=(meteo)=>({
    type:ADD_METEO,
    payload:meteo
})

export const add_token_music=(token)=>({
    type:ADD_TOKEN_MUSIC,
    payload:token
})


//fetch dispatch

export const meteoNEWS=(citta)=>{
    const key="ac76aa3096c068e4970bc8c31310c163";
    return async(dispatch,getState) =>{
        try {
            
            const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${citta},IT&appid=${key}`)
            if(response.ok){
                const data=await response.json();
                dispatch(add_meteo(data));
            }


        } catch (error) {
            console.log(error);
        }

    }
}

   

