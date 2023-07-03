export const SELECT_ALBUM="SELECT_ALBUM";
export const GET_TRACKS="GET_TRACKS";

export const select_album=(select)=>({
type:SELECT_ALBUM,
payload:select
})
export const tracks=(tracks)=>({
type:GET_TRACKS,
payload:tracks
})


export const getTracks=(albumTracks)=>{
    return async(dispatch,getState) =>{
        try {
            
            const response=await fetch(albumTracks)
            if(response.ok){
                const data=await response.json();
                dispatch(tracks(data));
            }


        } catch (error) {
            console.log(error);
        }

    }
}