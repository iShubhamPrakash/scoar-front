import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

export default function Signup() {
  const [mobile, setMobile] = useState("");
  const [otp, setOTP] = useState("");
  const [role, setRole] = useState("student");
  const [next, setNext] = useState(false);


  const handleChange = (event) => {
    setRole(event.target.value);
  };

  const handleNext = async () => {
    setNext(true);

    // try{
    // 	const res = await fetch(`https://score-backend.herokuapp.com/scoar/auth/sendotp/${mobile}`)

    // 	if(res.status === 200){
    // 		setNext(true)
    // 	}else{
    // 		alert("Try again! Something went wrong!!")
    // 	}
    // }catch(e){
    // 	alert("Try again! Something went wrong!!")
    // }
  };

  const handleLogin = async () => {
    alert("Success");

    // try{
    // 	const res = await fetch(`https://score-backend.herokuapp.com/scoar/auth/verifyotp/${otp}`)
    // 	const result = await res.text()

    // 	if(result === 'approved'){
    // 		alert("Success")
    // 	}else{
    // 		alert("Try again! Something went wrong!!")
    // 	}

    // }catch(e){
    // 	alert("Try again! Something went wrong!!")
    // }
  };

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
            onClick={handleNext}
          >
            SIGN UP
          </button>
        </div>
      )}
    </div>
  );
}
