import React from "react";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { toast } from "react-toastify";

function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { isFetching, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const notifySuccess = () =>
    toast.success("Login Successful", { theme: "colored" }, {});

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      navigate("/");
      notifySuccess();
    } catch (error) {
      toast.error("Wrong Credentials", { theme: "colored" });
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <span className="largeLogin">Login .</span>
        <form className="formContainer" onSubmit={handleSubmit}>
          <label className="labelText">Username</label>
          <input
            className="loginInput"
            type="text"
            required
            placeholder="Username"
            ref={userRef}
          />

          <label className="labelText">Password</label>
          <input
            className="loginInput"
            type="password"
            required
            placeholder="Password"
            ref={passwordRef}
          />

          <button className="loginButton" type="submit" disabled={isFetching}>
            LOGIN
          </button>
          <span className="dontHaveAccountTxt">Dont have an account ?</span>
          <Link to="/register" className="link ">
            <button className="loginButton1">Create an Account</button>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
