import React, { useEffect } from "react";
import { useHistory } from "react-router";
import { Avatar, Card } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import SubjectIcon from "@material-ui/icons/Subject";
import ScheduleIcon from "@material-ui/icons/Schedule";

export default function ClassroomView(props) {
	const history = useHistory();
	useEffect(() => {
		console.log("class view props", props);
  }, []);
  
	return (
		<div className="classroomView">
			<Avatar
				className={"classroomView__backBtn"}
				onClick={(e) => history.goBack()}
			>
				<ArrowBackIcon />
			</Avatar>
			<div className="classroomView__body row">
				<div className="col col-5 col-sm-5 col-md-5 col-lg-5">
					<div className="contentContainer">
            {
              [1,2,3,4,5].map(i=> <ClassCard {...props} classId={i}/>)
            }
          </div>
				</div>
				<div className="col col-7 col-sm-7 col-md-7 col-lg-7">
					<Card className="contentContainer rightCard">right</Card>
				</div>
			</div>
		</div>
	);
}


const ClassCard = (props) =>{ 
	const history = useHistory();
  const classId = props.match.params.id

  console.log("clicked",props.classId ,  classId)
  return (
    <Card className="classCard" id={ props.classId == classId ? "activeCard" : null} onClick={e=>history.push(`/dashboard/classroom/${props.classId}`)}>
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
    </Card>
  )
}