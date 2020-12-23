import React from 'react';
import { Button } from '@material-ui/core';
import { auth, provider } from '../firebase';
import { actionTypes } from '../reducer';
import { useStateValue } from '../StateProvider';


import '../css/Login.css';

function Login() {
    const [state, dispatch] = useStateValue();
    const signIn = () => {
        // sign in 
        auth.signInWithPopup(provider)
            .then(result => {
                dispatch({
                    type: actionTypes.SET_USER,
                    user: result.user
                });
                console.log(result.user);
            })
            .catch(error => alert(error.message));
    };
    return (
        <div className="login">
            <div className="login__log">
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png" alt="facebook-logo" />
                <img src="https://logos-world.net/wp-content/uploads/2020/04/Facebook-Logo.png" alt="" />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    );
}

export default Login;
