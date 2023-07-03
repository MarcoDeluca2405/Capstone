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

    const album=useSelector((state)=>state.Album.albumSelect.payload)

    return (
      <>
        <MDBContainer className="mt-5">
          <div
            className="p-4 pb-1 shadow-4 rounded-3 h-50 myHero"
           
          >
            <MDBTypography tag="h3">
              <MDBCard className="mySizeCard">
                <MDBRow className="g-0">
                  <MDBCol md="4" style={{backgroundImage:`url(${album.artist.picture}`,backgroundRepeat:"no-repeat",backgroundSize:"cover",filter:"blur(5px)"}}>
                    <div className="w-100">
                        <img src={album.artist.picture} alt="imageArtist" style={{filter:"blur(0px)"}}/>
                    </div>
                  </MDBCol>
                  <MDBCol md="8">
                    <MDBCardBody className="h-100 d-flex flex-column bg-secondary">
                      <MDBCardTitle>Card title</MDBCardTitle>
                      <MDBCardText className="myTextCenter mytext2" style={{margin:"auto"}}>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </MDBCardText>
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
  