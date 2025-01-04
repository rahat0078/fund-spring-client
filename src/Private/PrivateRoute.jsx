import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {

    const { user } = useContext(authContext)
    const location = useLocation();
    const { loading } = useContext(authContext)


    if (loading) {
        return <div className="min-h-[calc(100vh-300px)] flex justify-center items-center">
            <span className="loading loading-spinner loading-lg"></span>
        </div>

    }

    if (!user) {
        return <Navigate state={{ from: location.pathname }} to="/auth"></Navigate>
    }
    return children
};


PrivateRoute.propTypes = {
    children: PropTypes.object,
}


export default PrivateRoute;