


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



