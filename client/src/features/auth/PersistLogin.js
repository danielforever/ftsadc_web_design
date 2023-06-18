import { Outlet, Link } from "react-router-dom"
import { useEffect, useRef, useState } from 'react'
import { useRefreshMutation } from "./authApiSlice"
import usePersist from "../../hooks/usePersist"
import { useSelector } from 'react-redux'
import { selectCurrentToken } from "./authSlice"

const PersistLogin = () => {

    const [persist] = usePersist()
    // To get the Token that we need
    const token = useSelector(selectCurrentToken)
    // This is doing specific for react 18 strict mode
    const effectRan = useRef(false)

    const [trueSuccess, setTrueSuccess] = useState(false)

    const [refresh, {
        isUninitialized,
        isLoading,
        isSuccess,
        isError,
        error
    }] = useRefreshMutation()


    useEffect(() => {
        // 1. React 18 Strict Mode (useEffect will run twice), thus we can check the condition 
        //      if "effectRan.current === true" to true which we have changed in return statement
        // 2. For second condition React Strict Mode only happens in 'development'
        // 3. Ustually, useEffect run twice is not a problem, but it will when we are handling refresh token
        if (effectRan.current === true || process.env.NODE_ENV !== 'development') { 

            const verifyRefreshToken = async () => {
                console.log('verifying refresh token')
                try {
                    //const response = 
                    await refresh()
                    //const { accessToken } = response.data
                    // Set it here to give credential time to be set and then be used 
                    // when the request is sent
                    setTrueSuccess(true)
                }
                catch (err) {
                    console.error(err)
                }
            }

            if (!token && persist) verifyRefreshToken()
        }

        return () => effectRan.current = true

        //eslint-disable-next-line  
    }, [])


    let content
    if (!persist) { // persist: no
        console.log('no persist')
        content = <Outlet />
    } else if (isLoading) { //persist: yes, token: no
        console.log('loading')
        content = <p>Loading...</p>
    } else if (isError) { //persist: yes, token: no
        console.log('error')
        // It could be the refresh token was expired
        content = (
            <p className='errmsg'>
                {error?.data?.message}
                <Link to="/login">Please login again</Link>.
            </p>
        )
    } else if (isSuccess && trueSuccess) { //persist: yes, token: yes
        console.log('success')
        content = <Outlet />
    } else if (token && isUninitialized) { //persist: yes, token: yes
        console.log('token and uninit')
        console.log(isUninitialized)
        content = <Outlet />
    }

    return content
}
export default PersistLogin