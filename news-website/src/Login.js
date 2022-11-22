import React,{useRef,useState,useEffect, useContext} from 'react';
import AuthContext from './context/AuthProvider';
import axios from 'axios';
import { Link} from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const LOGIN_URL = 'https://unicode-lp.onrender.com/api/auth/signin';

const Login = ({token, setToken}) =>{
    const navigate = useNavigate();
    
    const {setAuth}=useContext(AuthContext);
    const userRef=useRef();
    const errRef=useRef();

    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [errMsg,setErrMsg]=useState('');
    const [success,setSuccess]=useState(false);

    useEffect(()=>{
        userRef.current.focus();
    },[])

    useEffect(()=>{
        setErrMsg('');
    },[username,password])

    
    const handleSubmit= (e)=>{
        e.preventDefault();
             setUsername('');
             setPassword('');
             setErrMsg('');
        
        axios({
            url:"https://unicode-lp.onrender.com/api/auth/signin",
            method:"POST",
            data:{
                username:username,
                password:password,
            },
            
        })
        
        .then((res)=>{
             setSuccess(true);
             console.log(res.data.token);
             setToken(res.data.token);
             localStorage.getItem("userToken", res.data.token);
         })
        
        
    
       .catch((err)=>{
        
        if(!err?.response)
             {
                 setErrMsg('No Server Response');
             }
             else if(err.response?.status===400)
             {
                 setErrMsg('Missing Username or Password');
             }
             else if(err.response?.status===401)
             {
                 setErrMsg('Unauthorized');
             }
             else{
                 setErrMsg('Login Failed');
             }
             err.current.focus();
       });
      
    };

    return(
        <>
        {success ? (
            navigate('/NewsTimes')
        ) : (
            
        
        
        <section>
            <p ref={errRef} className={errMsg ? "errmsg":
            "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1>Sign In</h1>
            <form onSubmit={(e) => handleSubmit(e)}>
                <label htmlFor='username'>Username:</label>
                <input type="text"  id="username"
                ref= {userRef}
                autoComplete="off"
                onChange={(e)=> setUsername(e.target.value)}
                value={username}
                required
                />
                <label htmlFor='password'>Password:</label>
                <input type="password"  id="password"
                autoComplete="off"
                onChange={(e)=> setPassword(e.target.value)}
                value={password}
                required
                />
                <button>Sign In</button>
            </form>
            <p>
                Need An Account? <br />
                <span className="line">
                <Link to='/'>Sign Up</Link>
                </span>
            </p>
        </section>
        )}
        </>
    )
}

export default Login