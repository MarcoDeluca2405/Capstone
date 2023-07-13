import React, { useEffect, useState } from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon,MDBBtn,MDBInput } from 'mdb-react-ui-kit';
import { useDispatch, useSelector } from 'react-redux';
import { meteoNEWS } from '../../Redux/Action/action';

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
    <MDBContainer className='p-4 mt-2'>
      <section className='mb-4'>
        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='instagram' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='linkedin-in' />
        </MDBBtn>

        <MDBBtn outline color="light" floating className='m-1' href='#!' role='button'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </section>

      <section className=''>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size="auto">
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' start>
              <MDBInput contrast type='email' label='Email address' className='mb-4' />
            </MDBCol>

            <MDBCol size="auto">
              <MDBBtn outline color='light' type='submit' className='mb-4'>
                Subscribe
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </section>

      

  
    </MDBContainer>

    <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
      © 2020 Copyright:
      <a className='text-white' href='https://mdbootstrap.com/'>
        MDBootstrap.com
      </a>
    </div>
  </MDBFooter>


)

}

export default Footer;