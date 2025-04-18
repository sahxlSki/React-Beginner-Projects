import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"
import "./Navbar.css"


const Navbar = () => {
    const navigate = useNavigate()
  return (
    <nav>
            <h1 onClick={() => navigate("/")}>BMovies</h1>
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/login">Login</Link>
            <Link to="/movies">Movies</Link>


        </div>
    </nav>
  )
}

export default Navbar