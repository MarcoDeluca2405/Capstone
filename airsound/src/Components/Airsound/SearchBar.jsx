import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add_text } from "../../Redux/Action/action";


const SearchBar =()=>{

  
  const dispatch=useDispatch();
  const navigate=useNavigate()
  window.addEventListener("unload",()=>{dispatch(add_text(""))})
  
  const textSearch=useSelector((state)=>state.user.text)+""
  
 
  
  
  
  
  const handleChange=(event)=>{
    dispatch(add_text(event.target.value))
    
  }
  
  useEffect(()=>{
  
    if(textSearch.length===1 && !window.location.href.match("http://localhost:3000/pageSearch")){
      navigate("/pageSearch")
     
    }
    if(textSearch.length===0 && window.location.href.match("http://localhost:3000/pageSearch")){
        navigate(-1)

    }

  },[textSearch])

return(

    <div class="container personalContainer">
  <input type="text" name="text" id="text" value={textSearch} onChange={(e)=>handleChange(e)} class="input" placeholder="Dark Twitch Search" />
  <button class="search__btn">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="22" height="22">
      <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168ZM16.0247 15.8748C17.2475 14.6146 18 12.8956 18 11C18 7.1325 14.8675 4 11 4C7.1325 4 4 7.1325 4 11C4 14.8675 7.1325 18 11 18C12.8956 18 14.6146 17.2475 15.8748 16.0247L16.0247 15.8748Z" fill="#efeff1"></path>
    </svg>
  </button>
</div>
       

)


}


export default SearchBar;