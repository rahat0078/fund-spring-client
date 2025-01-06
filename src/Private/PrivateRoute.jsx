import { useContext } from "react";
import { authContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from "prop-types";
import loadingGif from '../assets/loading.gif';

const PrivateRoute = ({ children }) => {

    const { user } = useContext(authContext)
    const location = useLocation();
    const { loading } = useContext(authContext)


    if (loading) {
        return <>
            <div className="min-h-screen flex justify-center items-center">
                <div className="w-[300px]">
                    <img className="w-full" src={loadingGif} alt="" />
                </div>
            </div>
        </>
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