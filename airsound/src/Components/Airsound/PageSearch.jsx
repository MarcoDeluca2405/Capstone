import { Col, Row } from "react-bootstrap";
import SidebarUp from "./SidebarUp";
import Sidebar from "./Sidebar";
import SearchBar from "./SearchBar";
import TrackListSearch from "./TrackListSearch";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchDataSearch } from "../../js/fetchDataDeenzer";
import { useNavigate } from "react-router-dom";
import { add_text } from "../../Redux/Action/action";


const PageSearch =()=>{

const text= useSelector((state)=>state.user.text)+""

const [track,setTrack]=useState();

const dispatch=useDispatch();

const navigate=useNavigate();

const fetchDataSearch= async (textSearch)=>{
  

    try {
      const response =await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q="+textSearch,{
        headers:{
          "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDJhYzY2ZjY4MzQzMTAwMTRkZWE3N2UiLCJpYXQiOjE2ODgzNzE3NTUsImV4cCI6MTY4OTU4MTM1NX0.FpzaYJv-VAqVcc5HUT414CdOO7a4YpXFJmieTRHfhPg" 
          
        }
      })
      const data=await response.json();
      const resolve= await data;
      setTrack(resolve)
      
    } catch (error) {
      console.log(error)
    }
  }



useEffect(()=>{
  const searchBar = document.getElementById("text");
    searchBar.focus();
  if(text.length>1){
fetchDataSearch(text)

  }

},[text])


return(

<>

<SidebarUp />

<Row className="my-4 pb-5 m-0">
  <Sidebar />
  
  <Col>
    <SearchBar />
    <Col>

     <TrackListSearch  track={track?.data}/>
      

    </Col>
  </Col>

</Row>

</>

);

}

export default PageSearch;