import { Await } from "react-router-dom";



export const fetchData= async(search)=>{

try {
    
    const response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+search,{
        header:{
            "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzY2ZjY4MzQzMTAwMTRkZWE3N2UiLCJpYXQiOjE2ODgzNzE3NTUsImV4cCI6MTY4OTU4MTM1NX0.FpzaYJv-VAqVcc5HUT414CdOO7a4YpXFJmieTRHfhPg" 
        }
    })

    const data=await response.json();
    const resolve =data;
    return resolve

} catch (error) {
    console.log(error)
}

}

export const fetchDataAlbum=async(albumList)=>{
    try {
    
        const response = await fetch(albumList,{
            header:{
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzY2ZjY4MzQzMTAwMTRkZWE3N2UiLCJpYXQiOjE2ODgzNzE3NTUsImV4cCI6MTY4OTU4MTM1NX0.FpzaYJv-VAqVcc5HUT414CdOO7a4YpXFJmieTRHfhPg" 
            }
        })
    
        const data=await response.json();
        const resolve =data;
        return resolve
    
    } catch (error) {
        console.log(error)
    }
}

export const fetchDataSearchNamed= async (name)=>{
  

    try {
      const response =await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+name,{
        headers:{
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzY2ZjY4MzQzMTAwMTRkZWE3N2UiLCJpYXQiOjE2ODgzNzE3NTUsImV4cCI6MTY4OTU4MTM1NX0.FpzaYJv-VAqVcc5HUT414CdOO7a4YpXFJmieTRHfhPg" 
          
        }
      })
      const data=await response.json();
      const resolve= await data;
      return resolve
      
    } catch (error) {
      console.log(error)
    }
  }

  export const fetchPostImage = async (username, img) => {
    try {
      const formData = new FormData();
      formData.append("file", img);
  
      const response = await fetch(`http://localhost:8080/api/auth/${username}/immagine`, {
        method: "POST",
        headers: {
          "Authorization": "Bearer eyJhbGciOiJIUzM4NCJ9.eyJzdWIiOiJwcm92YUBnbWFpbC5jb20iLCJpYXQiOjE2ODkyNDUwMzMsImV4cCI6MTY5MDEwOTAzM30.f1AjUUjp4ipi1Duhg_niooCkIdakatJ5VwqOBN7tvGHlolorMTYZvVcYzSPoBnhO",
        },
        body: formData,
      });
  
      if (response.ok) {
        console.log("Caricato con successo");
      } else {
        console.log("Errore durante il caricamento dell'immagine");
      }
    } catch (error) {
      console.log(error);
    }
  };

  export const fetchGetImage= async (username) =>{
    try {
        const response = await fetch('http://localhost:8080/api/auth/me/image?username='+username)
        if(response.ok){
            const data= await response.blob();
            return data;
        }
    } catch (error) {
        console.log(error)
    }
  }

