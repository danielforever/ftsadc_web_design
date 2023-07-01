import { useRef, useState, useEffect } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { useAddNewUserMutation } from "../users/usersApiSlice"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Toaster } from 'react-hot-toast';
import { useNavigate } from "react-router-dom"
import axios from '../../api/axios';
import avatar from '../../assets/images/profile/profile.png';
import convertToBase64 from '../helper/convert';

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.+-]+\.edu$/
const REGISTER_URL = '/register';

const Register = () => {

    const [addNewUser, {
        isLoading,
        isSuccess,
        isError,
        error
    }] = useAddNewUserMutation()

    const userRef = useRef();
    const errRef = useRef();

    const navigate = useNavigate();

    const [file, setFile] = useState()

    const [username, setUsername] = useState('');
    const [validName, setValidName] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [email, setEmail] = useState('');
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [password, setPassword] = useState('');
    const [validPwd, setValidPwd] = useState(false);
    const [pwdFocus, setPwdFocus] = useState(false);

    const [matchPwd, setMatchPwd] = useState('');
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    const [roles, setRoles] = useState(["Employee"])

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setValidName(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email))
    }, [email])

    useEffect(() => {
        setValidPwd(PWD_REGEX.test(password));
        setValidMatch(password === matchPwd);
    }, [password, matchPwd])

    useEffect(() => {
        setErrMsg('');
    }, [username, email, password, matchPwd])

    const onUpload = async e => {
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }

    useEffect(() => {
        if (isSuccess) {
            setUsername('')
            setEmail('')
            setPassword('')
            setMatchPwd('')
            navigate('/dash/users') //If no navigate react will return a warning
        }
    }, [isSuccess, navigate])

    const onUsernameChanged = e => setUsername(e.target.value)
    const onEmailChanged = e => setEmail(e.target.value)
    const onPasswordChanged = e => setPassword(e.target.value)
    const onSetPasswordChanged = e => setMatchPwd(e.target.value)

    const canSave = [roles, validName, validEmail, validPwd, validMatch ].every(Boolean) && !isLoading

    const onSaveUserClicked = async (e) => {
        e.preventDefault();
        // if button enabled with JS hack
        if (canSave) {
            await addNewUser({ username, password, email, roles})
            
            setSuccess(true);
            setUsername('');
            setEmail('');
            setPassword('');
            setMatchPwd('');
        }

/*         const v1 = USER_REGEX.test(username);
        const v2 = PWD_REGEX.test(password);
        if (!v1 || !v2) {
            setErrMsg("Invalid Entry");
            return;
        }
        try {
            const response = await axios.post(REGISTER_URL,
                JSON.stringify({ username, password }),
                {
                    headers: { 'Content-Type': 'application/json' },
                    withCredentials: true
                }
            );
            console.log(response?.data);
            console.log(response?.accessToken);
            console.log(JSON.stringify(response))
            setSuccess(true);
            //clear state and controlled inputs
            //need value attrib on inputs for this
            setUsername('');
            setEmail('');
            setPassword('');
            setMatchPwd('');
        } catch (err) {
            if (!err?.response) {
                setErrMsg('No Server Response');
            } else if (err.response?.status === 409) {
                setErrMsg('Username Taken');
            } else {
                setErrMsg('Registration Failed')
            }
            errRef.current.focus();
        } */
    }

    return (
        <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
                <div>
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <div className="container mx-auto">
                        <Toaster position='top-center' reverseOrder={false}></Toaster>

                        <div className='flex justify-center items-center h-screen'>
                            <div className='login-glass' style={{ width: "45%", paddingTop: '3em'}}>
                                <div className="title flex flex-col items-center">
                                    <h4 className='text-5xl font-bold'>Register</h4>
                                    <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                                        Happy to join you!
                                    </span>
                                </div>
                            <form className='py-1' onSubmit={onSaveUserClicked}>
                                <div className='profile flex justify-center py-4'>
                                    <label htmlFor="profile">
                                    <img src={file || avatar} className='login-profile_img' alt="avatar" />
                                    </label>
                  
                                    <input onChange={onUpload} type="file" id='profile' name='profile' />
                                </div>
                                <div className="textbox flex flex-col items-center gap-6">
                                    <label htmlFor="username">
                                        Username:
                                        <FontAwesomeIcon icon={faCheck} className={validName ? "valid" : "hidden"} />
                                        <FontAwesomeIcon icon={faTimes} className={validName || !username ? "hidden" : "invalid"} />
                                    </label>
                                    <input
                                        type="text"
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={onUsernameChanged}
                                        value={username}
                                        required
                                        aria-invalid={validName ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        onFocus={() => setUserFocus(true)}
                                        onBlur={() => setUserFocus(false)}
                                    />
                                    <p id="uidnote" className={userFocus && username && !validName ? "instructions" : "hidden"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        4 to 24 characters.<br />
                                        Must begin with a letter.<br />
                                        Letters, numbers,<br /> 
                                        underscores, hyphens allowed.
                                    </p>

                                    <label htmlFor="email">
                                        EDU Email: 
                                        <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hidden"} />
                                        <FontAwesomeIcon icon={faTimes} className={validEmail || !email ? "hidden" : "invalid"} />                                        
                                    </label>
                                    <input
                                        type="text"
                                        id="email"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={onEmailChanged}
                                        value={email}
                                        required
                                        aria-invalid={validEmail ? "false" : "true"}
                                        aria-describedby="uidnote"
                                        onFocus={() => setEmailFocus(true)}
                                        onBlur={() => setEmailFocus(false)}                                        
                                    />
                                    <p id="uidnote" className={emailFocus && email && !validEmail ? "instructions" : "hidden"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Register email should be edu email
                                    </p>


                                    <label htmlFor="password">
                                        Password:
                                        <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hidden"} />
                                        <FontAwesomeIcon icon={faTimes} className={validPwd || !password ? "hidden" : "invalid"} />
                                    </label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={onPasswordChanged}
                                        value={password}
                                        required
                                        aria-invalid={validPwd ? "false" : "true"}
                                        aria-describedby="pwdnote"
                                        onFocus={() => setPwdFocus(true)}
                                        onBlur={() => setPwdFocus(false)}
                                    />
                                    <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "hidden"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        8 to 24 characters.<br />
                                        Must include uppercase and<br /> lowercase letters, a number<br /> and a special character.<br />
                                        Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                                    </p>


                                    <label htmlFor="confirm_pwd">
                                        Confirm Password:
                                        <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hidden"} />
                                        <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hidden" : "invalid"} />
                                    </label>
                                    <input
                                        type="password"
                                        id="confirm_pwd"
                                        onChange={onSetPasswordChanged}
                                        value={matchPwd}
                                        required
                                        aria-invalid={validMatch ? "false" : "true"}
                                        aria-describedby="confirmnote"
                                        onFocus={() => setMatchFocus(true)}
                                        onBlur={() => setMatchFocus(false)}
                                    />
                                    <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "hidden"}>
                                        <FontAwesomeIcon icon={faInfoCircle} />
                                        Must match the first <br />password input field.
                                    </p>

                                    <button disabled={!validName || !validEmail || !validPwd || !validMatch ? true : false}>Sign Up</button>
                                </div>
                            </form>
                            <p>
                                Already registered?<br />
                                <span className="line">
                                    {/*put router link here*/}
                                    <a href="/login">Sign In</a>
                                </span>
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Register