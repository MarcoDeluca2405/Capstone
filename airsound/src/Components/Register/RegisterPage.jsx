import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import mySvg from "../../img/svg/user.svg";
import mySvgUsername from "../../img/svg/username.svg";
import mySvgLastname from "../../img/svg/lastname.svg";
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import { toast,ToastContainer} from "react-toastify";

const PageRegister=()=>{

  //navigate
  const navigate=useNavigate();
  
  //Notify  
      const notifyError = () =>   toast.error('qualcosa è andato storto', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: false,
        progress: undefined,
        theme: "dark",
        role:"alert"
        });

       const notifySuccess= ()=> toast.success('Utente Registrato', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        }); 

//state
    const [state,setState] = useState();
    const [regione,setRegione]=useState();
    const[territorio,setTerritorio]=useState();
    const [città,setCittà]=useState();
    const [select,setSelect]=useState();
    const[select2,setSelect2]=useState();
    const[select3,setSelect3]=useState();
    const [selectRegione,setSelectRegione]=useState(false);
    const [selectTerritorio,setSelectTerritorio]=useState(false);


    //function
    

    //adress select
    const[adress,setAdress]=useState();

  //handle
    const handleChange=(event)=>{
        let value= event.target.value;
        let name= event.target.name;

        setState((prevalue)=>{
            return{
                ...prevalue,
                [name]:value
            }
        })
    }

    const handleChangeUser=(data)=>{
      let value=data;
      let name="adress";
      setState((prevalue)=>{
        return{
          ...prevalue,
          [name]:value
        }
      })
    }


    //fetch
    const fetchDataRegione= async ()=>{
      try {
        const response= await fetch("http://localhost:8080/api/Adress/all/Regione")

        if(response.ok){
          const data=await response.json();
          setRegione(data);
        }

      } catch (error) {
        console.log(error);
      }
    }

    const fetchDataTerritorio=async ()=>{

      try {
        const response=await fetch(`http://localhost:8080/api/Adress/all/Territorio?Regione=${select}`)
  if(response.ok){
    const data=await response.json();
    setTerritorio(data);
  }

      } catch (error) {
        console.log(error);
      }
    }

    const fetchDataCittà=async ()=>{

      try {
        const response=await fetch(`http://localhost:8080/api/Adress/all/Citta?Territorio=${select2}`)
  if(response.ok){
    const data=await response.json();
    setCittà(data);
  }

      } catch (error) {
        console.log(error);
      }
    }


    const fetchDataAdress=async ()=>{

      try {
        const response=await fetch(`http://localhost:8080/api/Adress/Citta?name=${select3}`)
  if(response.ok){
    const data=await response.json();
    setAdress(data);
    handleChangeUser(data);
    console.log(data);
  }

      } catch (error) {
        console.log(error);
      }
    }

    const fetchSubmit=async (event)=>{

      try {
        event.preventDefault()
        const response=await fetch(`http://localhost:8080/api/auth/register`,{
          method:"POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(state),
        })
  if(response.ok){
    notifySuccess();
    setTimeout(()=>{navigate("/")},4000)
    
  }else{
    notifyError();
    
  }

      } catch (error) {
        console.log(error);
      }
    }


    useEffect(()=>{fetchDataRegione() },[]);

    useEffect(()=>{
      fetchDataTerritorio()
    },[select]);

    useEffect(()=>{
      fetchDataCittà()
    },[select2]);

    useEffect(()=>{
      fetchDataAdress()
    },[select3])


return(
  <>
<Container className="d-flex justify-content-center box-center settingPage my-4">

<div className="cardfill">
  <div className="card2fill">
    <form className="form" onSubmit={(e)=>{fetchSubmit(e)}}>
    <p id="heading">Sign-up</p>
    <div className="field">
    <img src={mySvg} width="20px" alt="img svg" />
    <input type="text" className="input-field" name="name" required="true" placeholder="Name"  autocomplete="off" onChange={handleChange} />
    </div>
    <div className="field">
    <img src={mySvgLastname} width="20px" alt="svgLastname" />
    <input type="text" className="input-field" name="lastname"  required="true" placeholder="Lastname" autocomplete="off" onChange={handleChange} />
    </div>
    <div className="field">
        <img src={mySvgUsername} width="20px" alt="svgUsername" />
    <input type="text" className="input-field" name="username"  required="true" placeholder="Username" autocomplete="off" onChange={handleChange} />
    </div>
    <div className="field">
    <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="input-icon">
    <path d="M13.106 7.222c0-2.967-2.249-5.032-5.482-5.032-3.35 0-5.646 2.318-5.646 5.702 0 3.493 2.235 5.708 5.762 5.708.862 0 1.689-.123 2.304-.335v-.862c-.43.199-1.354.328-2.29.328-2.926 0-4.813-1.88-4.813-4.798 0-2.844 1.921-4.881 4.594-4.881 2.735 0 4.608 1.688 4.608 4.156 0 1.682-.554 2.769-1.416 2.769-.492 0-.772-.28-.772-.76V5.206H8.923v.834h-.11c-.266-.595-.881-.964-1.6-.964-1.4 0-2.378 1.162-2.378 2.823 0 1.737.957 2.906 2.379 2.906.8 0 1.415-.39 1.709-1.087h.11c.081.67.703 1.148 1.503 1.148 1.572 0 2.57-1.415 2.57-3.643zm-7.177.704c0-1.197.54-1.907 1.456-1.907.93 0 1.524.738 1.524 1.907S8.308 9.84 7.371 9.84c-.895 0-1.442-.725-1.442-1.914z"></path>
    </svg>
      <input type="text" className="input-field" name="email"  required="true" placeholder="Email" autocomplete="off" onChange={handleChange} />
    </div>
    <div className="field">
    <svg viewBox="0 0 16 16" fill="currentColor" height="16" width="16" xmlns="http://www.w3.org/2000/svg" className="input-icon">
    <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
    </svg>
      <input type="password" className="input-field"  required="true" name="password" placeholder="Password" onChange={handleChange} /> 
    </div>

    <div>
      <Form.Select className="field selectFrom" required aria-label="Default select example" onChange={(e)=>{
        setSelect(e.target.value)
        setSelectRegione(true)
        }}>
        <option>Regione</option>
      { regione?.map((r,i)=>{
        return(
      <option key={i} value={r} >{r}</option>
      )
    })
}
    </Form.Select>
    </div>


    {
      selectRegione? (
        <div>
        <Form.Select className="field selectFrom" required aria-label="Default select example" onChange={(e)=>{
          setSelect2(e.target.value)
          setSelectTerritorio(true)
          }}>
          <option>Provincia</option>
        { territorio?.map((r,i)=>{
          return(
        <option key={i} value={r} >{r}</option>
        )
      })
  }
      </Form.Select>
      </div>
      ) : (<></>)
    }

    {
      selectTerritorio? (
        <div>
        <Form.Select className="field selectFrom" required aria-label="Default select example" onChange={(e)=>{setSelect3(e.target.value)}}>
          <option>Città</option>
        { città?.map((r,i)=>{
          return(
        <option key={i} value={r} >{r}</option>
        )
      })
  }
      </Form.Select>
      </div>
      ) : (<></>)
    }

    
    <div className="btn">
    <Button className="button1 btn-sm" onClick={()=>navigate("/")}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
    <Button type="submit" className="button2 btn-sm">Submit</Button>
    </div>
</form>
  </div>
    </div>

 
</Container>

<ToastContainer
position="top-center"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss={false}
draggable
pauseOnHover
theme="dark"
/>
</>
)

}

export default PageRegister;