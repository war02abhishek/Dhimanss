import React, { useState } from "react";
import "./AdminLogin.css";
import LockIcon from "@mui/icons-material/Lock";
import { useDispatch } from "react-redux";
import { login } from "../../actions/AdminAction";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch=useDispatch();
  const navigate=useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log(email);
    console.log(password);
    dispatch(login(email, password,navigate));
  };

  return (
    <div className="login-page">
      <div className="site-icon">
        <LockIcon fontSize="large" />
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          <span>Email: </span>
          <input
            className="form-input"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          <span>Password:</span>
          <input
            className="form-input"
            // type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <input className="form-submit" type="submit" value="Log In" />
      </form>
    </div>
  );
};

export default AdminLogin;
