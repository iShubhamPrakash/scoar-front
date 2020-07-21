import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

const addUserURL = 'https://score-backend.herokuapp.com/scoar/cred/add'
const checkUserExistURL= 'https://score-backend.herokuapp.com/scoar/cred/checkuserexists/'
const sendOTPURL= 'https://score-backend.herokuapp.com/scoar/auth/sendotp/'
const verifyOTPURL ='https://score-backend.herokuapp.com/scoar/auth/verifyotp/'


export default function Signup() {
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");
  const [role, setRole] = useState("student");
	const [next, setNext] = useState(false);
	
	let history = useHistory();


  const handleChange = (event) => {
    setRole(event.target.value);
  };

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

  const verifyOTP = async (otp) =>{
    try{
    	const res = await fetch(`${verifyOTPURL}${otp}`)
    	const result = await res.text()

    	if(result === 'approved'){
       return result === 'approved'
    	}else{
        alert("Invalid OTP!!")
        return false
    	}

    }catch(e){
      console.log("Error verifying OTP", e)
      alert("Try again! Something went wrong!!")
      return false
    }
  }

  const addNewUser = async (data) =>{
    try{
      const rawResponse = await fetch(addUserURL, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const result = await rawResponse.json();

        console.log("add user res", result)

      // TODO: complete the signup

    	// if(result === 'approved'){
      //   console.log("Signup Success")
      //  alert("Sign up success.. Please login to continue")
    	// }else{
    	// 	alert("Sign Up failed.. please try again")
    	// }

    }catch(e){
      console.log("Error verifying OTP", e)
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
        const {uid} = res.credential;
        if(uid !== 0){
          alert("User already exist. Please sign up")
        }else{
          console.log("sending OTP...")
          sendOTP(mobile)
        }
    	}else{
    		alert("Try again! Something went wrong!!")
    	}
    }catch(e){
    	alert("Try again! Something went wrong!!")
    }
  };

  const handleSignup = async () => {
    // alert("Success");
    try{
      // verify otp
      const verified = await verifyOTP(otp)

      if(verified){
        // Add new user in DB
        await addNewUser({contactNo: mobile, role})
      }
    }catch(e){
      console.log("Error signup", e)
    	alert("Try again! Something went wrong!!")
    }
	};
	
	const handleLogIn = async (otp) =>{
		try{
    	const res = await fetch(`https://score-backend.herokuapp.com/scoar/auth/verifyotp/${otp}`)
    	const result = await res.text()

    	if(result === 'approved'){
			console.log("Success")
			history.push("/whiteboard");
    	}else{
    		alert("Try again! Something went wrong!!")
    	}

    }catch(e){
    	alert("Try again! Something went wrong!!")
    }
	}

  return (
    <div className="login">
      <h1 className="login__header">SIGN UP</h1>
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
          <FormControl component="fieldset">
            <FormLabel component="legend" style={{paddingLeft:"1.5em"}}>I'm a</FormLabel>
            <RadioGroup
              aria-label="role"
              name="role"
              value={role}
              defaultValue="student"
							onChange={handleChange}
							className="radiogroup"
            >
              <FormControlLabel
                value="student"
                control={<Radio color="primary" />}
                label="STUDENT"
              />
              <FormControlLabel
                value="teacher"
                control={<Radio color="primary" />}
                label="TEACHER"
              />
            </RadioGroup>
          </FormControl>

          <TextField
            id="input"
            label="Enter OTP"
            variant="outlined"
            value={otp}
            onChange={(e) => setOTP(e.target.value)}
          />
          <button
            className="btn btn-purple"
            disabled={mobile === null}
            onClick={handleSignup}
          >
            SIGN UP
          </button>
        </div>
      )}
    </div>
  );
}
