import "./style.css"
import {useState} from "react";
import {Navigate} from "react-router-dom";
import {setToken} from "../../utils/token";
import api from "../../interceptors/axios";

const Message = ({ error }) => {
    return (
        <div style={{color: "red"}}>
            {error ? "login failed" : ""}
        </div>
    );
};

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState();
    const [navigate, setNavigate] = useState(false);
    const login = async e => {
        e.preventDefault();

        await api.post('auth/login', {
            username, password
        }, {withCredentials: true})
            .then((res) => {
                if (res.data['data']) {
                    setToken(res.data['data'])
                    console.log("token: ",res.data['data'])
                    setNavigate(true);
                } else {
                    alert("login failed")
                }
            })
            .catch((error) => {
                setError(error)
            })
    }

    if (navigate) {
        return <Navigate to="/dashboard" />
    }

    return (
        <form onSubmit={login}>
            <div className='login-container'>
                <div className='login-section'>
                    <div className='login-image-section'>
                    </div>
                    <div className='login-form-section'>
                        <div className='login-header login-color'>Point of Sales <br/> Management System</div>
                        <div className='login-form'>
                            <label className='login-color'>User Name</label>
                            <input
                                className='login-input'
                                type='text'
                                onChange={event => setUsername(event.target.value)}
                            />
                            <label className='login-color'>Password</label>
                            <input
                                className='login-input'
                                type='password'
                                onChange={event => setPassword(event.target.value)}
                            />

                            <Message error={error} />
                            <div className='login-button' onClick={login}>Login</div>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    );
}

export default Login
