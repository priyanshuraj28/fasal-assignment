import React from "react";
import { Link } from "react-router-dom";

function Login() {
    return (<div className="form">
    <form>
      <div className="input-container">
        <label>Username </label>
        <input type="text" name="uname" required />
        {/* {renderErrorMessage("uname")} */}
      </div>
      <div className="input-container">
        <label>Password </label>
        <input type="password" name="pass" required />
        {/* {renderErrorMessage("pass")} */}
      </div>
      <div className="button-container">
        <input type="submit" />
      </div>
      <div className="button-container" style={{marginTop: "10px"}}>
      <Link to={"/signup"} style={{textDecoration: "none"}}>
        <button type="button" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", color: "green", cursor: "pointer"}}>Switch to SignUp</button>
      </Link>
      </div>
      <div className="button-container" style={{marginTop: "10px"}}>
      <Link to={"/home"} style={{textDecoration: "none"}}>
        <button type="button" style={{ paddingLeft: "10px", paddingRight: "10px", paddingTop: "5px", paddingBottom: "5px", color: "green", cursor: "pointer"}}>Login As Guest</button>
      </Link>
      </div>
    </form>
  </div>)
 }

 export default Login;