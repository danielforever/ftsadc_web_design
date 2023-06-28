import { useRef, useState, useEffect } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setCredentials } from './authSlice'
import { useLoginMutation } from './authApiSlice'
import { Toaster } from 'react-hot-toast'
import avatar from '../../assets/images/profile/profile.png';

import PulseLoader from 'react-spinners/PulseLoader'
import usePersist from '../../hooks/usePersist'
import './username.css'

const Login = () => {
    const userRef = useRef()
    const errRef = useRef()
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [persist, setPersist] = usePersist()

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        userRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [username, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            // We are using the try catch block so we need to unwarp it first
            const { accessToken } = await login({ username, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setUsername('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Username or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleUserInput = (e) => setUsername(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)
    const handleToggle = () => setPersist(prev => !prev)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <PulseLoader color={"#FFF"} />

    const content = (
        <div className="container mx-auto">

            <Toaster position='top-center' reverseOrder={false}></Toaster>

            <div className='flex justify-center items-center h-screen'>
                <div className="login-glass">
                    <div className="title flex flex-col items-center">
                        <h4 className='text-5xl font-bold'>Hello Again!</h4>
                        <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                        Explore More by connecting with us.
                        </span>
                    </div>
{/*                     <main className="login"> */}
                        <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

                        <form className="py-1" onSubmit={handleSubmit}>
                            <div className='profile flex justify-center py-1'>
                                <img src={avatar} className="login-profile_img" alt="avatar" />
                            </div>

                            <div className="textbox flex flex-col items-center gap-6">
                                <label htmlFor="username">Username:</label>
                                <input
                                    className="login-textbox"
                                    type="text"
                                    id="username"
                                    ref={userRef}
                                    value={username}
                                    onChange={handleUserInput}
                                    autoComplete="off"
                                    required
                                />

                                <label htmlFor="password">Password:</label>
                                <input
                                    className="login-textbox"
                                    type="password"
                                    id="password"
                                    onChange={handlePwdInput}
                                    value={password}
                                    required
                                />
                            

                                <button className="login-btn">Sign In</button>
                                <label htmlFor="persist" className="form__persist">
                                    <input
                                        type="checkbox"
                                        className="form__checkbox"
                                        id="persist"
                                        onChange={handleToggle}
                                        checked={persist}
                                    />
                                    Trust This Device
                                </label>
                            </div>
                            <div className="text-center py-2">
                                <span className='text-gray-500'>Not a Member <Link className='text-red-500' to="/register">Register Now</Link></span>
                            </div>
                        </form>
{/*                     </main> */}
                    <footer>
                        <Link to="/">Back to Home</Link>
                    </footer>
                </div>
            </div>
        </div>
    )

    return content
}
export default Login