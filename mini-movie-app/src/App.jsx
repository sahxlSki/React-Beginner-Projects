import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Layout from "./components/Layout";
import { useState, lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home/Home"))
const Login = lazy(() => import("./pages/Login/Login"))
const Movies = lazy(() => import("./pages/Movies/Movies"))
const MoviesDetail = lazy(() => import("./pages/MoviesDetail/MoviesDetail"))
import Spinner from "./components/Spinner";



function App() {
    const [isLoggedIn, setisLoggedIn] = useState(false)
    const handleLogin = () => setisLoggedIn(true)
    return (

        <Suspense fallback={<Spinner/>}>

            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />

                    <Route
                        path="/movies"
                        element={
                            <ProtectedRoute isLoggedIn={isLoggedIn}>
                                <Movies />
                            </ProtectedRoute>} />

                    <Route
                        path="/movies/:slug"
                        element=
                        {<ProtectedRoute isLoggedIn={isLoggedIn}>
                            <MoviesDetail />
                        </ProtectedRoute>} />

                </Route>
                <Route path="/login" element={<Login onLogin={handleLogin} />} />
            </Routes>
        </Suspense>
    )
}

export default App;