export const SELECT_ALBUM="SELECT_ALBUM";
export const GET_TRACKS="GET_TRACKS";
export const SELECT_ALBUM2="SELECT_ALBUM2";
export const TRACKADDFAV="TRACKADDFAV";
export const TRACKREMOVEDFAV="TRACKREMOVEDFAV";


export const select_album=(select)=>({
type:SELECT_ALBUM,
payload:select
})

export const select_album2=(select)=>({
    type:SELECT_ALBUM2,
    payload:select
})

export const tracks=(tracks)=>({
type:GET_TRACKS,
payload:tracks
})


export const tracksAddFav=(fav)=>({
type:TRACKADDFAV,
payload:fav,

})

export const tracksRemovedFav=(fav)=>({
type:TRACKREMOVEDFAV,
payload:fav,
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






