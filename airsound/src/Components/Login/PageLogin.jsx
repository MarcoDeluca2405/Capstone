import { Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import mySvg from "../../img/svg/user.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  ADD_USERNAME,
  add_city,
  add_email,
  add_lastname,
  add_name,
  add_password,
  add_provincia,
  add_role,
  add_token,
  add_token_spotify,
  add_username,
  meteoNEWS,
  tokenSpotify,
} from "../../Redux/Action/action";

const PageLogin = () => {
  //navigate
  const navigate = useNavigate();

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

 const notifySuccess= ()=> toast.success('Login Effettuato con successo', {
  position: "top-center",
  autoClose: 3000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: "dark",
  }); 

  //dispace
  const dispatch = useDispatch();

  //State
  const [user, setUser] = useState();

  //handle
  const handleChange = (event) => {
    let value = event.target.value;
    let name = event.target.name;

    setUser((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const fetchUser = async (event) => {
    try {
      event.preventDefault();
      const response = await fetch("http://localhost:8080/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });

      if (response.ok) {
        try {
          const data = await response.json();
          const response2 = await fetch(
            `http://localhost:8080/api/User?username=${data.username}`
          );
          if (response2.ok) {
            const data2 = await response2.json();
            notifySuccess();
            
            dispatch(add_name(data2.name));
            dispatch(add_lastname(data2.lastname));
            dispatch(add_username(data2.username));
            dispatch(add_email(data2.email));
            dispatch(add_password(data2.password));
            dispatch(add_provincia(data2.adress.territorio));
            dispatch(add_city(data2.adress.città));
            dispatch(add_token(data.accessToken));
            dispatch(add_role(data2.roles));
            dispatch(meteoNEWS(data2.adress.città));
            dispatch(tokenSpotify());
            
            setTimeout(()=>navigate("/home"),4000);
          }
        } catch (error) {}
      } else {
        notifyError();
      }
    } catch (error) {}
  };

  return (
    <Container className="d-flex justify-content-center box-center">
      <div className="cardfill">
        <div className="card2fill">
          <form
            className="form"
            onSubmit={(e) => {
              fetchUser(e);
            }}
          >
            <p id="heading">Login</p>
            <div className="field">
              <img src={mySvg} width="20px" alt="img svg" />
              <input
                type="text"
                name="username"
                className="input-field"
                placeholder="Username"
                autocomplete="off"
                onChange={handleChange}
              />
            </div>
            <div className="field">
              <svg
                viewBox="0 0 16 16"
                fill="currentColor"
                height="16"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
                className="input-icon"
              >
                <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z"></path>
              </svg>
              <input
                type="password"
                name="password"
                className="input-field"
                placeholder="Password"
                onChange={handleChange}
              />
            </div>
            <div className="btn">
              <Button type="submit" className="button1 btn-sm">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Login&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </Button>
              <Button
                className="button2 btn-sm"
                onClick={() => navigate("/Sing-up")}
              >
                Sign Up
              </Button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer />
    </Container>
  );
};

export default PageLogin;
