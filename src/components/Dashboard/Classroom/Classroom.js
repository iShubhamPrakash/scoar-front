import React from "react";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import FilterListIcon from "@material-ui/icons/FilterList";
import SubjectIcon from "@material-ui/icons/Subject";
import ScheduleIcon from "@material-ui/icons/Schedule";

import HeaderTop from "../Containers/HeaderTop";
import { Card, Button, Avatar } from "@material-ui/core";

export default function Classroom() {
	return (
		<div className="classroom">
			<HeaderTop>
				<h1>Your Class Room List</h1>
				<div className="flex-grow"></div>
				&nbsp;&nbsp;&nbsp;&nbsp;
				<SearchInput />
			</HeaderTop>

			<div className="classroom__body row">
				<div className="col-sm-8 col-lg-8">
					<Card className="row">
						{[1,2,3,4,5].map(i=>(
							<div className="col-sm-12 col-lg-6">
							<Card className="classCard" raised>
                <ClassData/>
              </Card>
						</div>
						))}
			
					</Card>
				</div>
				<div className="col-sm-4 col-lg-4">
					<Card>right</Card>
				</div>
			</div>
		</div>
	);
}

const SearchInput = () => {
	return (
		<Input
			id="search-input"
			variant="outlined"
			placeholder="Search Student"
			startAdornment={
				<InputAdornment position="start">
					<SearchIcon />
				</InputAdornment>
			}
		/>
	);
};

const ClassData =(props)=>{
  return(
    <div className="classData">
      <div className="classData__id">
        <p>Classroom ID: {123}</p>
      </div>


      <div className="classData__dataContainer">
        <div className="icon">
          <span>
            <SubjectIcon />
          </span>
        </div>
        <div className="studentDetails">
          <h4>
            {"Science"} for class {"6th"}
          </h4>
          <p>Total students: {"40"}</p>
          <p>Mode of instruction: {"English"}</p>
          <p>
            <ScheduleIcon /> {"1 hour"}
          </p>
        </div>
      </div>

			<div className="classData__calendar">
				<h5 className="text-left">Classes on</h5>
				<div className="week">
					<div className="day">
						<Avatar className="active">S</Avatar>
					</div>
					<div className="day">
						<Avatar className="">M</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">T</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">W</Avatar>
					</div>
					<div className="day">
						<Avatar className="">T</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">F</Avatar>
					</div>
					<div className="day">
						<Avatar className="active">S</Avatar>
					</div>
				</div>
			</div>
  
	    <div className="classData__btnContainer">
        <Button size="small" variant="contained">
          Add student
        </Button>
        &nbsp; &nbsp;
        <Button size="small" variant="contained">
          View
        </Button>
      </div>
    </div>
  )
}

