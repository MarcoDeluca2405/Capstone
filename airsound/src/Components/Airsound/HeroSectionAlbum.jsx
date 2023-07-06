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

import { useSelector } from "react-redux";
  
  const HeroSectionAlbum = () => {

    const album=useSelector((state)=>state.Album.albumSelect)

    return (
      <>
        <MDBContainer className="mt-5 mb-5">
          <div
            className="p-4 pb-1 shadow-4 rounded-3 w-75 d-inline-block myHero"
           
          >
            <MDBTypography tag="h3">
              <MDBCard className="mySizeCard">
                <MDBRow className="g-0" style={{height:"250px"}}>
                  <MDBCol md="4" className="myCol">
                  
                  <MDBCardImage
                    src={album.artist.picture_big}
                    alt="..."
                    fluid
                    className="myImageSet"
                  />
                    
                    
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="h-100 d-flex flex-column bg-secondary  justify-content-center ">
                      <MDBCardTitle className="title mytext2">{album.artist.name}</MDBCardTitle>
              
                    </MDBCardBody>
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
  
  export default HeroSectionAlbum;
  