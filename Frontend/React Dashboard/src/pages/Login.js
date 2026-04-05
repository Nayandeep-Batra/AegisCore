import { useState } from "react";
import API from "../services/api";
import bgVideo from "../assets/bgVideo.mp4";
import logo from "../assets/logo.png";
import "../styles/Login.css";

function Login() {
    const [form, setForm] = useState({
    email: "",
    password: "",
    });

    const handleSubmit = async (e) => {
    e.preventDefault();
    try {
    const res = await API.post("/auth/login", form);
        localStorage.setItem("token", res.data.token);
        alert("Login successful 🚀");
        } catch (err) {
        console.log(err.response?.data);    
        alert(err.response?.data || "Login failed ❌");
        }
    };

    return (
        <div className="login-container">

        {/* 🎥 Background Video */}
        <video autoPlay loop muted className="bg-video">
            <source src={bgVideo} type="video/mp4" />
        </video>

        {/* 🌑 Overlay */}
        <div className="overlay"></div>

        {/* 🏷 Top Branding */}
        <div className="branding">
            <img src={logo} alt="logo" />
            {/* <h1>AegisCore</h1>
            <p>AI SAFETY SOLUTIONS</p> */}
        </div>

        {/* 📦 Login Card */}
        <div className="login-box">
            <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                required
                onChange={(e) =>
                setForm({ ...form, email: e.target.value })
                }
            />

            <input
                type="password"
                placeholder="Password"
                required
                onChange={(e) =>
                setForm({ ...form, password: e.target.value })
                }
            />

            <div className="forgot">Forgot password?</div>

            <button type="submit">Log In</button>

            <div className="divider">or</div>

            <div className="signup">Sign Up</div>
            </form>
        </div>
        </div>
    );
}

export default Login;