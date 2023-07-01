// import { useLocation, Navigate, Outlet } from "react-router-dom"
// import useAuth from "../../hooks/useAuth"
// import { ROLES } from '../../config/roles'
import { Outlet, Link } from "react-router-dom"
import { useEffect, useRef, useState } from 'react'
import { useRefreshMutation } from "./authApiSlice"
import usePersist from "../../hooks/usePersist"
import { useSelector } from 'react-redux';
import { selectCurrentToken } from "./authSlice"

//TODO:Fix "TypeError: Cannot read properties of null (reading 'useContext')"
const RequireAuthComp = (WrappedComponent) => {
    try {
        const accessToken = useSelector(selectCurrentToken);
        console.log("accessToken")
        console.log(accessToken)
        return (props) => {
            if (typeof window !== 'undefined') {
                //const router = useRouter();
                if (false) {
                    //router.replace('/login');
                    return "null";
                }

                return <WrappedComponent {...props} />;
            }
            return null;
        };
    } catch (error) {
        console.error(error);
        return "null"
    }
};
export default RequireAuthComp