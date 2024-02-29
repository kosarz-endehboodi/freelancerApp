import { useEffect } from "react";
import useAuthrize from "../features/Authentication/useAuthrized";
import {useNavigate } from "react-router-dom";
import Loading from "./Loading";

export default function ProtectRoutes({ children }) {
    const navigate = useNavigate();
    //1.load the authenticated use 
    const { isAuthenticated, isAuthorized, isLoading } = useAuthrize();
    // console.log(isAuthenticated)
    // console.log(isAuthrized)
    //2.check if is authorized or not , check is Authenticated or not
    useEffect(
        function () {
          if (!isAuthenticated && !isLoading) navigate("/auth");
          if (!isAuthorized && !isLoading) navigate("/not-access");
        }
        , [isAuthenticated, isAuthorized, isLoading, navigate])
    //3. while loading => show location
    if (isLoading) return (
        <div className="flex items-Center justify-center h-screen bg-secondary-100">
            <Loading />
        </div>)
    //4.if user isAuthenticated and is Authorized => render the app
    if (isAuthorized) return children;
}