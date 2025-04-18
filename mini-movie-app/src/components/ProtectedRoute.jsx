import {  Navigate ,useLocation } from "react-router-dom";

function ProtectedRoute({isLoggedIn, children}){
    const location = useLocation();

    if(!isLoggedIn){
        return <Navigate to="/login" state={{from: location}} replace/>
    }

    return children

}

export default ProtectedRoute;