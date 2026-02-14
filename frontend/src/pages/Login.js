import React, { useState } from "react";
import API from "../api";
import { useNavigate, Link } from "react-router-dom";

function Login() {

  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);

      alert("Login Successful 🚀");

      navigate("/dashboard");

    } catch (err) {
      console.error(err);
      alert("Login Failed ❌");
    }
  };

  // 🎨 Styling Objects
  const inputStyle = {
    width: "100%",
    padding: "14px",
    marginBottom: "15px",
    borderRadius: "15px",
    border: "1px solid #ddd",
    fontSize: "14px"
  };

  const buttonStyle = {
    width: "100%",
    padding: "14px",
    background: "linear-gradient(to right, #ff758c, #ff7eb3)",
    color: "white",
    border: "none",
    borderRadius: "15px",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
    transition: "0.3s"
  };

  return (
    <div className="app-container">

      <h2>🔐 Welcome Back</h2>

      <p style={{ textAlign: "center", marginBottom: "20px", color: "#666" }}>
        Login to your Task Universe 🌍
      </p>

      <form onSubmit={handleSubmit}>

        <input
          name="email"
          placeholder="📧 Email"
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <input
          name="password"
          type="password"
          placeholder="🔒 Password"
          onChange={handleChange}
          style={inputStyle}
          required
        />

        <button type="submit" style={buttonStyle}>
          🚀 Login
        </button>

      </form>

      <p style={{ textAlign: "center", marginTop: "20px" }}>
        Don't have an account?{" "}
        <Link to="/register" style={{ color: "#ff758c", fontWeight: "600" }}>
          Register Here
        </Link>
      </p>

    </div>
  );
}

export default Login;
