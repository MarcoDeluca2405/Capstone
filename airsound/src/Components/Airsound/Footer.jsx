import React, { useEffect, useState } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { meteoNEWS } from '../../Redux/Action/action';
import { Button } from 'react-bootstrap';

const Footer=()=>{
  const city =useSelector((state)=>state.user.user.city)
  
  
  var sec=0;
  var [min,setMin]=useState(0)
  var hour=0;
  const dispatch=useDispatch();


  
  useEffect(()=>{
    setInterval(()=>{
      sec++
      if(sec===60){
        setMin(min++)
        sec=0;
      }
      
      if(min===60){
        hour++;
        setMin(0);
      }
      
      if(hour===24){
        hour=0;
      }
      
    },1000)
  },[])

  useEffect(()=>{
    dispatch(meteoNEWS(city))
  },[min])
  
return(


    <MDBFooter id="footer" className=' text-center  pt-1' color='white' bgColor='dark'>
    <MDBContainer className='p-4 mt-2 '>
      <section className='mb-4 '>
        <MDBBtn outline color="light" floating className='m-1 me-3'  role='button' onClick={()=>window.open("https://www.facebook.com/profile.php?id=100085154469773")}>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

     
        <MDBBtn outline color="light" floating className='m-1 ms-1 me-3'  role='button' onClick={()=>window.open("https://www.instagram.com/ildelux96/?igshid=ZGUzMzM3NWJiOQ%3D%3D")}>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1 ms-1 me-3'  role='button' onClick={()=>window.open("https://www.linkedin.com/in/ildelux1996/")}>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light"  floating className='m-1 ms-1'  role='button' onClick={()=>window.open("https://github.com/MarcoDeluca2405")}>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>

      <section className=''>
        <form >
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size="auto">
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' start>
              <MDBInput contrast type='email'  className='mb-4' />
            </MDBCol>

            <MDBCol size="auto">
              <Button color='light' type='button' className='mb-4 btn btn-dark btn-outline-light'>
                Subscribe
              </Button>
            </MDBCol>
          </MDBRow>
        </form>
      </section>

      

  
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2023 Copyright: 
      <a className='text-white' href='#'>
        Marco De Luca
      </a>
    </div>
  </MDBFooter>


)

}

export default Footer;