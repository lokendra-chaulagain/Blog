// import "./register.scss";
// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";

// function Register() {
//   //Register
//   const [username, setUsername] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [error, setError] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setError(false);
//     if (password !== confirmPassword) {
//       setError(true);
//       confirmPassword.setCustomValidity("password does not match");
//     }
//     try {
//       const res = await axios.post("/auth/register", {
//         username,
//         email,
//         password,
//       });
//       res.data && window.location.replace("/login");
//     } catch (error) {
//       setError(true);
//     }
//   };

//   return (
//     <div className="register">
//       <div className="registerWrapper">
//         <form className="formContainer" onSubmit={handleSubmit}>
//           <span className="heading">Enter Your Credentials For Register</span>

//           <label className="labelText">Username</label>
//           <input
//             className="loginInput"
//             type="text"
//             placeholder="Create Username"
//             onChange={(e) => setUsername(e.target.value)}
//           />

//           <label className="labelText">Email</label>
//           <input
//             className="loginInput"
//             type="email"
//             placeholder="Email"
//             onChange={(e) => setEmail(e.target.value)}
//           />

//           <label className="labelText">Password</label>
//           <input
//             className="loginInput"
//             type="password"
//             placeholder="Create Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />

//           <label className="labelText">Confirm Password</label>
//           <input
//             className="loginInput"
//             type="password"
//             placeholder="Confirm Password"
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />

//           <button className="signUpButton" type="submit">
//             Register
//           </button>

//           {/* If error show this span */}
//           {error && (
//             <span
//               style={{
//                 color: "red",
//                 marginTop: "2px",
//                 marginBottom: "5px",
//                 textAlign: "center",
//               }}
//             >
//               Something went Wrong
//             </span>
//           )}

//           <span className="dontHaveAccountTxt">Already have an account ?</span>
//           <Link to={"/login"}>
//             <button className="signUpButton">SignIn</button>
//           </Link>
//         </form>
//       </div>
//     </div>
//   );
// }
// export default Register;

//Form validation with formik and yup============>
import React from "react";
import { registerSchema } from "./formValidationSchema";
import axios from "axios";

import "./register.css";
const { useFormik } = require("formik");

const onSubmit = async (values, actions) => {
  console.log(values);
  console.log(actions);
  console.log("submitted");
  // await new Promise((resolve) => setTimeout(resolve, 1000)); //wait 1 sec
  // actions.resetForm();
  try {
    const res = await axios.post("/auth/register",{
      username: values.username,
      email: values.email,
      password: values.password,
    });
    await new Promise((resolve) => setTimeout(resolve, 1000)); //wait 1 sec
     actions.resetForm();
    console.log(res.data)
    // res.data && window.location.replace("/login");
  } catch (error) {
    console.log(error);
  }
};

function Register() {
  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    isSubmitting,
  } = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });
  console.log(errors);

  return (
    <form onSubmit={handleSubmit} className="form">
      <label htmlFor="username">Username</label>
      <input
        type="text"
        id="username"
        placeholder="Username"
        value={values.username}
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur} //blur when leave the input
        className={errors.username && touched.username ? "input-error" : ""}
      />
      {errors.username && touched.username && (
        <p className="error">{errors.username}</p>
      )}

      <label htmlFor="email">Email</label>
      <input
        // type="email"
        id="email"
        placeholder="Email"
        value={values.email}
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.email && touched.email ? "input-error" : ""}
      />
      {errors.email && touched.email && <p className="error">{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Password"
        value={values.password}
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        className={errors.password && touched.password ? "input-error" : ""}
      />
      {errors.password && touched.password && (
        <p className="error">{errors.password}</p>
      )}

      <label htmlFor="confirmPassword">Confirm Password</label>
      <input
        type="password"
        id="confirmPassword"
        placeholder="Confirm password"
        value={values.confirmPassword}
        autoComplete="off"
        onChange={handleChange}
        onBlur={handleBlur}
        className={
          errors.confirmPassword && touched.confirmPassword ? "input-error" : ""
        }
      />
      {errors.confirmPassword && touched.confirmPassword && (
        <p className="error">{errors.confirmPassword}</p>
      )}

      <button className="submit" type="submit" disabled={isSubmitting}>
        Register
      </button>
    </form>
  );
}

export default Register;
