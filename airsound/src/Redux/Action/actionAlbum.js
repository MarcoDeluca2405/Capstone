

export const ADD_POP="ADD_POP";
export const ADD_ROCK="ADD_ROCK";
export const ADD_HIPHOP="ADD_HIPHOP";
export const ADD_PUNK="ADD_PUNK";



export const add_pop=(pop)=>({
type:ADD_POP,
payload:pop
})

export const add_rock=(rock)=>({
type:ADD_ROCK,
payload:rock
})

export const add_hiphop=(hiphop)=>({
type:ADD_HIPHOP,
payload:hiphop
})

export const add_punk=(punk)=>({
type:ADD_PUNK,
payload:punk
})



export const getPop=(token)=>{
    return async(dispatch,getState) =>{
        try {
            
            const response=await fetch(`https://api.spotify.com/v1/browse/categories/pop`,{
                headers:{
                    'Authorization': 'Bearer '+token
                }
            })
            if(response.ok){
                const data=await response.json();
                dispatch(add_pop(data));
            }


        } catch (error) {
            console.log(error);
        }
    }
    }
export const getRock=(token)=>{
    return async(dispatch,getState) =>{
        try {
            
            const response=await fetch(`https://api.spotify.com/v1/browse/categories/rock`,{
                headers:{
                    'Authorization': 'Bearer '+token
                }
            })
            if(response.ok){
                const data=await response.json();
                dispatch(add_rock(data));
            }


        } catch (error) {
            console.log(error);
        }

    }

}
export const getHipHop=(token)=>{
    return async(dispatch,getState) =>{
        try {
            
            const response=await fetch(`https://api.spotify.com/v1/browse/categories/hiphop`,{
                headers:{
                    'Authorization': 'Bearer '+token
                }
            })
            if(response.ok){
                const data=await response.json();
                dispatch(add_hiphop(data));
            }


        } catch (error) {
            console.log(error);
        }

    }

}
export const getPunk=(token)=>{
    return async(dispatch,getState) =>{
        try {
            
            const response=await fetch(`https://api.spotify.com/v1/browse/categories/punk`,{
                headers:{
                    'Authorization': 'Bearer '+token
                }
            })
            if(response.ok){
                const data=await response.json();
                dispatch(add_punk(data));
            }


        } catch (error) {
            console.log(error);
        }

    }

}