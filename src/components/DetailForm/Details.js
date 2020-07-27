import React, { useState } from "react";
import Card from "@material-ui/core/Card";
import { Avatar, TextField, Button } from "@material-ui/core";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';

export default function Details() {
  const [step, setStep] = useState(1);
  const [gender, setGender] = useState("male");
	const [teacherType, setTeacherType] = useState("one");
  
	return (
		<div className="detailsForm container-flex">
			<div className="row detailsForm__mainRow">
				<div className="col col-12 col-xsm-12 col-sm-12 col-md-6 left">
					<img src="/icons/details/left_svg.svg" alt="" />
				</div>
				<div className="col col-12 col-xsm-12 col-sm-12 col-md-6 right">
					<Card className="detailsForm__card">
						<div className="header">
							<img src="/logo-full-small.png" alt="" />
							<div className="stepIndicator">
                <span className={step == 1 ? "active" :null}>1</span>
                <span className={step == 2 ? "active" :null}>2</span>
                <span className={step == 3 ? "active" :null}>3</span>
              </div>
						</div>

						<div className="body">
							<h2 className="text-center">Account Details</h2>
							<Avatar src="" className="avatar" />
							<br />
							<form autoComplete="off">
								<TextField
									id="first-name"
									label="First Name"
									variant="outlined"
                  size="small"
                  className="input"
								/>

								<br />

								<TextField
									id="last-name"
									label="Last Name"
									variant="outlined"
                  size="small"
                  className="input"
								/>

								<br />

								<TextField
									id="email"
									label="Email"
									variant="outlined"
                  size="small"
                  className="input"
								/>

								<br />
								<FormControl component="fieldset">
									<FormLabel component="legend">
										<small>Gender</small>
									</FormLabel>
									<RadioGroup
										aria-label="gender"
										name="gender"
										value={gender}
										defaultValue="Student"
										onChange={(e) => setGender(e.target.value)}
										className="radiogroup"
									>
										<FormControlLabel
											value="male"
											control={<Radio color="primary" />}
											label="Male"
										/>
										<FormControlLabel
											value="female"
											control={<Radio color="primary" />}
											label="Female"
										/>
									</RadioGroup>
								</FormControl>
								<br />
								<TextField
									id="last-name"
									label="Experience in years"
									variant="outlined"
                  size="small"
                  className="input"
								/>
								<br />

								<TextField
									id="email"
									label="Email"
									variant="outlined"
                  size="small"
                  className="input"
								/>
								<br />

								<FormControl variant="outlined">
									<InputLabel>
                  Type of teacher
									</InputLabel>
									<Select
										labelId="demo-simple-select-outlined-label"
										id="demo-simple-select-outlined"
										value={teacherType}
										onChange={e=>{setTeacherType(e.target.value)}}
                    label="Type of teacher"
                    size="small"
                    className="input"
									>
										<MenuItem value={"one"}>one</MenuItem>
										<MenuItem value={"two"}>two</MenuItem>
										<MenuItem value={"three"}>three</MenuItem>
									</Select>
								</FormControl>
								<br />

                <Button variant="contained" color="primary" onClick={e=> setStep(2)}>Next</Button>
							</form>
						</div>
					</Card>
				</div>
			</div>
		</div>
	);
}
