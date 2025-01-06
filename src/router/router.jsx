import { createBrowserRouter } from "react-router-dom";
import App from './../App';
import Home from "../pages/Home";
import Error from "../Error/Error";
import AddCampaign from "../pages/AddCampaign";
import MyCampaign from "../pages/MyCampaign";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyDonations from './../pages/MyDonations';
import AllCampaign from './../pages/AllCampaign';
import PrivateRoute from "../Private/PrivateRoute";
import Auth from "../components/Auth/Auth";
import CampaignDetails from "../pages/CampaignDetails";
import Update from "../pages/Update";
// import { useContext } from "react";
// import { authContext } from "../AuthProvider/AuthProvider";

const router =

    // const {user} = useContext(authContext)

    createBrowserRouter([
        {
            path: "/",
            element: <App></App>,
            errorElement: <Error></Error>,
            children: [
                {
                    path: "/",
                    element: <Home></Home>,
                    loader: () => fetch('https://a10-fund-spring-server.vercel.app/homeCampaigns')
                },
                {
                    path: "/campaigns",
                    element: <AllCampaign></AllCampaign>,
                },
                {
                    path: '/campaign/:id',
                    element: <CampaignDetails></CampaignDetails>,
                    loader: ({ params }) => fetch(`https://a10-fund-spring-server.vercel.app/campaigns/${params.id}`)
                },
                {
                    path: "/addCampaign",
                    element: <PrivateRoute>
                        <AddCampaign></AddCampaign>
                    </PrivateRoute>,
                },
                {
                    path: "/myCampaign",
                    element: <PrivateRoute>
                        <MyCampaign></MyCampaign>
                    </PrivateRoute>,
                },
                {
                    path: "/update/:id",
                    element: <PrivateRoute>
                        <Update></Update>
                    </PrivateRoute>,
                    loader: ({ params }) => fetch(`https://a10-fund-spring-server.vercel.app/campaigns/${params.id}`)
                },
                {
                    path: "/myDonations",
                    element: <PrivateRoute>
                        <MyDonations></MyDonations>
                    </PrivateRoute>,
                },
                {
                    path: '/auth',
                    element: <Auth></Auth>,
                    children: [
                        {
                            path: "/auth",
                            element: <Login></Login>
                        },
                        {
                            path: '/auth/login',
                            element: <Login></Login>
                        },
                        {
                            path: "/auth/register",
                            element: <Register></Register>
                        }
                    ]
                }

            ]
        },
    ]);


export default router;