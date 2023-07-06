import {
    MDBBtn,
    MDBContainer,
    MDBTypography,
    MDBCard,
    MDBCardTitle,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBRow,
    MDBCol,
  } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../js/fetchDataDeenzer";
import { useNavigate } from "react-router-dom";
import { select_album } from "../../../Redux/Action/actionAlbum";

  const HeroSection = () => {

    const [album1,setAlbum1] = useState();

     useEffect(()=>{fetchData("Lorenzo Fragola").then(data=>setAlbum1(data))},[])
    

    const dispatch=useDispatch();
    const navigate=useNavigate();

    const handleClick= (album)=>{
        dispatch(select_album(album))
        navigate("/albumPage")
    }


    return (
      <>
        <MDBContainer className="mt-5 mb-5" style={{cursor:"pointer"}} onClick={()=>handleClick(album1?.data[3])}>
          <div
            className="p-4 pb-1 shadow-4 rounded-3 w-75 d-inline-block myHero"
           
          >
            <MDBTypography tag="h3">
              <MDBCard className="mySizeCard">
                <MDBRow className="g-0" style={{height:"250px"}}>
                  <MDBCol md="4" className="myCol">
                  
                  <MDBCardImage
                    src={album1?.data[3].artist.picture_big}
                    alt="..."
                    fluid
                    className="myImageSet"
                  />
                    
                    
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="h-100 d-flex flex-column bg-secondary  justify-content-center ">
                      <MDBCardTitle className="title mytext2">{album1?.data[3].artist.name}</MDBCardTitle>
                        <span style={{fontSize:"20px"}}>Lorenzo Fragola (Catania, 26 aprile 1995) è un cantautore italiano, divenuto noto dopo aver vinto l'ottava edizione del talent show X Factor.</span></MDBCardBody>
                  </MDBCol>
                </MDBRow>
              </MDBCard>
            </MDBTypography>
  
            <hr className="my-4" />
  
          </div>
        </MDBContainer>
      </>
    );
  };
  
  export default HeroSection;
  