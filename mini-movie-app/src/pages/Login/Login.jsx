import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Login.css"

function Login({onLogin}){
    const navigate = useNavigate()
    const location = useLocation()

    const [name, setname] = useState("")
    const [email, setemail] = useState("")

    const from = location.state?.from?.pathname || "/movies"

    const handleLogin = () =>{
        if (!name || !email) {
            alert("Please enter both name and email");
            return;
        }
        onLogin()
        navigate(from, {replace: true})
    }

    return(
        <div className="login-container">
            <div>
                <h2 className="loginheader">Login</h2>
                <input 
                type="text" 
                placeholder="Name"
                value={name}
                onChange={(e)=> setname(e.target.value)}
                className="textinput"

                />
            </div>

            <div >
                <input 
                type="email" 
                placeholder="Email Address"
                value={email}
                onChange={(e)=> setemail(e.target.value)}
                className="emailinput"

                />
            </div>

            <button onClick={handleLogin} className="loginbtn">Login</button>
        </div>
    )

}

export default Login;