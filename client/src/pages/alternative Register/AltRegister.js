
import { useRef, useState, useEffect } from "react";
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import "./altRegister.css";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/; //to validate username
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/; //to validate password

const AltRegister = () => {
  const userRef = useRef(); //to focus on username input when the components loads
  const errRef = useRef(); //if we get error we focus on this that error

  //username field state
  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false); //whether the username is valid or not
  const [userFocus, setUserFocus] = useState(false);

  //email field state
  const [email, setEmail] = useState("");
  //   const [validEmail, setValidEmail] = useState(false);
  //   const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false); //whether the password is valid or not
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false); //whether the password match or not
  const [matchFocus, setMatchFocus] = useState(false);

  //Error
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  //when the component load focus on username input
  useEffect(() => {
    userRef.current.focus();
  }, []);

  //To validate username
  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  //To validate password and match password
  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  //To show error message
  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  //Login
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      const res = await axios.post("/auth/register", {
        user,
        pwd,
        email,
      });
      console.log(res.data);
    //   setSuccess(true);
      window.location.replace("/login");
    } catch (error) {
    //   if (!error?.response) {
    //     setErrMsg("No Server Response");
    //   } else if (error.response?.status === 409) {
    //     setErrMsg("Username Taken");
    //   } else {
    //     setErrMsg("Registration Failed");
    //   }
    //   errRef.current.focus();
    console.log(error);
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>{/* <a href="#">Sign In</a> */}</p>
        </section>
      ) : (
        <div>
          {/* paragraph at the top of form if error exist  */}
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Register</h1>

          {/* <form onSubmit={handleSubmit}> */}
          <form onSubmit={handleLoginSubmit}>
            <label htmlFor="username">
              Username:
              <FontAwesomeIcon
                icon={faCheck}
                className={validName ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validName || !user ? "hide" : "invalid"}
              />
            </label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              //   value={user}
              required
              aria-invalid={validName ? "false" : "true"}
              aria-describedby="uidnote"
              onFocus={() => setUserFocus(true)} //when user is on input field
              onBlur={() => setUserFocus(false)} //when user leave input field
            />

            {/* paragraph of username input*/}
            <p
              id="uidnote"
              className={
                userFocus && user && !validName ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              4 to 24 characters.
              <br />
              Must begin with a letter.
              <br />
              Letters, numbers, underscores, hyphens allowed.
            </p>

            <input
              type="text"
              className="email"
              onChange={(e) => setEmail(e.target.value)}
            />

            {/* Password field  input*/}
            <label htmlFor="password">
              Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validPwd || !pwd ? "hide" : "invalid"}
              />
            </label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              //   value={pwd}
              required
              aria-invalid={validPwd ? "false" : "true"}
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)} //focus when we are on this field
              onBlur={() => setPwdFocus(false)} //blur when we are on this field
            />

            {/* paragraph of password input*/}
            <p
              id="pwdnote"
              className={pwdFocus && !validPwd ? "instructions" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              8 to 24 characters.
              <br />
              Must include uppercase and lowercase letters, a number and a
              special character.
              <br />
              Allowed special characters:{" "}
              <span aria-label="exclamation mark">!</span>{" "}
              <span aria-label="at symbol">@</span>{" "}
              <span aria-label="hashtag">#</span>{" "}
              <span aria-label="dollar sign">$</span>{" "}
              <span aria-label="percent">%</span>
            </p>

            {/* Confirm password field  input*/}
            <label htmlFor="confirm_pwd">
              Confirm Password:
              <FontAwesomeIcon
                icon={faCheck}
                className={validMatch && matchPwd ? "valid" : "hide"}
              />
              <FontAwesomeIcon
                icon={faTimes}
                className={validMatch || !matchPwd ? "hide" : "invalid"}
              />
            </label>

            <input
              type="password"
              id="confirm_pwd"
              onChange={(e) => setMatchPwd(e.target.value)}
              value={matchPwd}
              required
              aria-invalid={validMatch ? "false" : "true"}
              aria-describedby="confirmnote"
              onFocus={() => setMatchFocus(true)}
              onBlur={() => setMatchFocus(false)}
            />

            {/* paragraph of confirm password */}
            <p
              id="confirmnote"
              className={
                matchFocus && !validMatch ? "instructions" : "offscreen"
              }
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              Must match the first password input field.
            </p>

            <button
              type="submit"
              disabled={!validName || !validPwd || !validMatch ? true : false}
            >
              Sign Up
            </button>
          </form>
          {/* <p>
            Already registered? */}
          {/* <br /> */}
          {/* <span className="line"> */}
          {/*put router link here*/}
          {/* <a href="#">Sign In</a> */}
          {/* </span> */}
          {/* </p> */}
        </div>
      )}
    </>
  );
};

export default AltRegister;
