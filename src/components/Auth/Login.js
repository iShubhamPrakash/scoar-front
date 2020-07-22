import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  signIn,
  signOut
} from "../../store/actions/authActions";

const checkUserExistURL= 'https://score-backend.herokuapp.com/scoar/cred/checkuserexists/'
const sendOTPURL= 'https://score-backend.herokuapp.com/scoar/auth/sendotp/'
const verifyOTPURL ='https://score-backend.herokuapp.com/scoar/auth/verifyotp/'

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");
  const [next, setNext] = useState(false);
  const [userData, setUserData] = useState({})
  let history = useHistory();
  const dispatch = useDispatch();


  const sendOTP = async (mobile)=>{
    try{
    	const res = await fetch(`${sendOTPURL}${mobile}`)
    	const result = await res.text()
      console.log("result:",result)
    	if(result === '"SUCCESS"'){
			  setNext(true);
    	}else{
    		alert("Try again! OTP could not be sent!!")
    	}
    }catch(e){
      console.log("Error sending OTP",e)
    	alert("Try again! Something went wrong!!")
    }
  }


  const handleNext = async () => {
    // setNext(true);

    try{
    	let res = await fetch(`${checkUserExistURL}${mobile}`)
  
    	if(res.status === 200){
        res = await res.json()
        console.log("sucess", res)
        const {contactNo, role, uid} = res.credential;
        if(uid !== 0){
          setUserData({contactNo, role: role.toLowerCase(), uid})
          sendOTP(mobile)
        }else{
          alert("User does not exist, Please sign up...")
        }
    	}else{
    		alert("Try again! Something went wrong!!")
    	}
    }catch(e){
    	alert("Try again! Something went wrong!!")
    }
  };

  const handleLogin = async () => {
    // alert("Success");

    try{
    	const res = await fetch(`${verifyOTPURL}${otp}`)
    	const result = await res.text()

    	if(result === 'approved'){
        console.log("Login Success")
        dispatch(signIn(userData))
			  history.push("/whiteboard");
    	}else{
    		alert("Invalid OTP!!")
    	}

    }catch(e){
      console.log("Error verifying OTP", e)
    	alert("Try again! Something went wrong!!")
    }
  };

  return (
    <div className="login">
      <h1 className="login__header">LOGIN</h1>
      <h2 className="login__subheader">BE ONE OF US!</h2>

      {!next ? (
        <div className="login__form">
          <TextField
            id="input"
            label="Mobile Number"
            variant="outlined"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <button
            className="btn btn-purple"
            disabled={mobile === null}
            onClick={handleNext}
          >
            NEXT
          </button>
        </div>
      ) : (
        <div className="login__form">
          <TextField
            id="input"
            label="OTP"
            variant="outlined"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button
            className="btn btn-purple"
            disabled={otp === null}
            onClick={handleLogin}
          >
            LOGIN
          </button>
        </div>
      )}
    </div>
  );
}
