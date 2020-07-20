import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { useHistory } from "react-router-dom";

export default function Login() {
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");
  const [next, setNext] = useState(false);
  let history = useHistory();

  const handleNext = async () => {
    // setNext(true);

    try{
    	const res = await fetch(`https://score-backend.herokuapp.com/scoar/auth/sendotp/${mobile}`)

    	if(res.status === 200){
    		setNext(true)
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
  };

  return (
    <div className="login">
      <h1 className="login__header">Login</h1>
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
