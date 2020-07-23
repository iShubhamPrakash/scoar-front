import React, { useState, useEffect } from "react";
import "normalize.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import { Avatar } from "@material-ui/core";
import testimonial from "./testimonial/index";

export default function LandingPage() {
	const [testimonialId, setTestimonialId] = useState(0);

	return (
		<div className="landing container-fluid">
			<Nav />
			<div className="landing__top">
				<div className="row">
					<div className="col col-12 col-md-6">
						<div className="center left">
							<h2>
								Experience the <span className="purple">convenience</span> of
								online class and the <span className="purple">control</span> of
								the traditional setting. Sign up and{" "}
								<span className="purple">expand</span> your business with us!
							</h2>
							<div className="input">
								<input type="text" placeholder="Enter your email or number" />
								<img src="/icons/landing/MaskGroup3.svg" alt="" />
							</div>
						</div>
					</div>

					<div className="col col-12 col-md-6">
						<div className="center right">
							<CardCarousel />
						</div>
					</div>
				</div>

				<div className="row">
					<div className="landing__top2">
						<h2 className="text-center">You can now take</h2>
						<div className="innerBox">
							<span>
								<img src="/icons/landing/tuitions.svg" alt="" />
								<p>Tuitions</p>
							</span>
							<span>
								<img src="/icons/landing/drawing.svg" alt="" />
								<p>Art Classs</p>
							</span>
							<span>
								<img src="/icons/landing/music.svg" alt="" />
								<p>Dance Classes</p>
							</span>
							<span>
								<img src="/icons/landing/fitness.svg" alt="" />
								<p>Fitness Classes</p>
							</span>
						</div>
					</div>
				</div>
			</div>

			{/* ------------- Group 1---------------- */}
			<div className="row landing__section">
				<div className="col col-12 col-lg-6 left" data-aos="fade-right">
					<h2>
						TAKE YOUR CLASS <span className="purple">ONLINE</span> IN TWO
						MINUTES
					</h2>
					<p>We help you take your classroom for free </p>
					<img
						src="/icons/landing/MaskGroup3.svg"
						alt=""
						style={{ marginLeft: "2em" }}
					/>
				</div>
				<div className="col col-12 col-lg-6 right" data-aos="fade-left">
					<img src="/icons/landing/1_svg.svg" alt="" />
				</div>
			</div>

			<div className="row landing__section">
				<div className="col col-12 col-lg-6" data-aos="fade-right">
					<img src="/icons/landing/2_svg.svg" className="rotate180" alt="" />
				</div>

				<div className="col col-12 col-lg-6 right" data-aos="fade-left">
					<h2>
						THE BOARD IS THE TEACHE'S{" "}
						<span className="purple">BEST FRIEND</span>
					</h2>
					<p>
						We understand how pivotal it is to{" "}
						<span className="pink">write & explain</span>.<br />
						With the White Board, there is no need to create any more time
						consuming presentations
					</p>
				</div>
			</div>
			{/* -------------Group 1 end---------------- */}

			{/* ------------- Group 2---------------- */}
			<div className="row landing__section">
				<div className="col col-12 col-lg-6 left" data-aos="fade-right">
					<h2>
						SLOW <span className="purple">NETWORK</span>? NO PROBLEM
					</h2>
					<p>
						Our whiteboard offers <span className="pink">smooth</span>{" "}
						functioning for all
						<span className="pink"> network</span> speeds. This means no more
						classroom interruptions.
					</p>
				</div>
				<div className="col col-12 col-lg-6 right" data-aos="fade-left">
					<img src="/icons/landing/3_svg.svg" alt="" />
				</div>
			</div>

			<div className="row landing__section">
				<div className="col col-12 col-lg-6" data-aos="fade-right">
					<img src="/icons/landing/4_svg.svg" className="rotate180" alt="" />
				</div>

				<div className="col col-12 col-lg-6 right" data-aos="fade-left">
					<h2>
						<span className="purple">COMPLETE</span> CLASS SUPERVISION
					</h2>
					<p>
						You <span className="pink"> control </span> what happens in your
						classroom. Keep an eye on all of our students, just like in a real
						classroom.
					</p>
				</div>
			</div>
			{/* -------------Group 2 end---------------- */}

			{/* ------------- Group 3---------------- */}
			<div className="row landing__section">
				<div className="col col-12 col-lg-6 left" data-aos="fade-right">
					<h2>
						<span className="purple">POWERFUL</span> PAYMENT MODULE{" "}
					</h2>
					<p>
						Get the ability to set differential pricing and individualdue dated
						for each course and each student. We{" "}
						<span className="pink"> remind </span> your student to ay the fees
						before the due dates.
					</p>
				</div>
				<div className="col col-12 col-lg-6 right" data-aos="fade-left">
					<img src="/icons/landing/5_svg.svg" alt="" />
				</div>
			</div>

			<div className="row landing__section">
				<div className="col col-12 col-lg-6" data-aos="fade-right">
					<img src="/icons/landing/6_svg.svg" className="rotate180" alt="" />
				</div>

				<div className="col col-12 col-lg-6 right" data-aos="fade-left">
					<h2>
						SEND & TRACK ASSIGNMENTS
						<span className="purple"> ERRORTLESSLY</span>
					</h2>
					<p>
						Send individual & group assignments and handle submissions, all on
						the same page. Easily
						<span className="pink"> track </span> students who fail to submit
						befre deadline and easily
						<span className="pink"> notify </span> them upon failure.
					</p>
				</div>
			</div>
			{/* -------------Group 3 end---------------- */}

			{/* ------------- Group 4---------------- */}
			<div className="row landing__section">
				<div className="col col-12 col-lg-6 left" data-aos="fade-right">
					<h2>
						NO MORE <span className="purple"> STRANGERS </span> IN CLASS
					</h2>
					<p>
						Only students who have heir phone numbers{" "}
						<span className="pink"> registered </span>
						in the course can enter the class on one device at a time.{" "}
					</p>
				</div>
				<div className="col col-12 col-lg-6 right" data-aos="fade-left">
					<img src="/icons/landing/7_svg.svg" className="rotate180" alt="" />
				</div>
			</div>

			<div className="row landing__section">
				<div className="col col-12 col-lg-6" data-aos="fade-right">
					<img src="/icons/landing/8_svg.svg" className="rotate180" alt="" />
				</div>

				<div className="col col-12 col-lg-6 right" data-aos="fade-left">
					<h2>
						<span className="purple">BEST-IN-CLASS </span> SECURITY
					</h2>
					<p>
						Rest assured that Auth0, one of the world's leading cyber security
						firms will keep your class
						<span className="pink"> safe </span>.
					</p>
				</div>
			</div>
			{/* -------------Group 4 end---------------- */}

			{/* -------------Subscribe section---------------- */}
			<div className="row landing__subscribeSection">
				<div className="col col-12 col-sm-12 col-md-12 col-lg-12">
					<h2>Subscribe Us</h2>
					<h3>Fillium morte multavitsi sine dubio praeclara</h3>
					<div className="emailbox">
						<input type="text" placeholder="Enter your email" />
						<button>Subscribe</button>
					</div>

					<div className="testimonialbox">
						<div className="controlDots">
							{testimonial.map((item, index) => (
								<span
									className={testimonialId === index ? "activeDot" : ""}
									onClick={(e) => setTestimonialId(index)}
								></span>
							))}
						</div>

						<div className="upper">
							<Avatar src={testimonial[testimonialId].avatar} />
							<p>
								{testimonial[testimonialId].name}{" "}
								<p>{testimonial[testimonialId].profession}</p>
							</p>
						</div>
						<div className="lower">
							<p>{testimonial[testimonialId].message}</p>
						</div>
					</div>
				</div>
			</div>
			{/* ------------Subscribe section end--------------- */}

			{/* -------------Footer section---------------- */}

			<div className="landing__footer">
				<div className="row">
					<div className="col col-12 col-lg-4 logo">
						<img src="/logo-full-small.png" alt="" />
					</div>
					<div className="col col-12 col-lg-4 links">
						<h3>Quick links</h3>
						<Link to="/about">About Us</Link>
						<Link to="/blog">Blog</Link>
						<Link to="/contact">Contact</Link>
					</div>
					<div className="col col-12 col-lg-4 social">
						<h3>Social</h3>
						<a
							href="https://www.linkedin.com/company/topscoar/?originalSubdomain=in"
							target="_blank"
							rel="noopener noreferrer"
						>
							{" "}
							<LinkedInIcon className="linkedin" /> LinkedIn
						</a>
						<a
							href="https://www.facebook.com/topscoar"
							target="_blank"
							rel="noopener noreferrer"
						>
							<FacebookIcon className="facebook" /> Facebook
						</a>
						<a
							href="https://twitter.com/topscoar"
							target="_blank"
							rel="noopener noreferrer"
						>
							<TwitterIcon className="twitter" /> Twittr
						</a>
					</div>
				</div>

				<div className="footerImage">
					<img src="/icons/landing/last_svg.svg" alt="footer" />
				</div>
			</div>
			{/* ------------Footer section end--------------- */}
		</div>
	);
}

const CardCarousel = () => {
	return (
		<div className="cardCarousel">
			<div className="card b2"></div>
			<div className="card b1"></div>

			<div className="card f1">
				<div className="avatarContainer">
					<Avatar src={testimonial[1].avatar} />
          <p>{testimonial[1].name}</p>
				</div>
				<div className="textContainer">
					<p>{testimonial[1].message}</p>
				</div>
			</div>
			<div className="card f2">
				<div className="avatarContainer">
					<Avatar src={testimonial[2].avatar} />
          <p>{testimonial[2].name}</p>
				</div>
				<div className="textContainer">
					<p>{testimonial[2].message}</p>
				</div>
			</div>
			
      <div className="card f3">
				<div className="avatarContainer">
					<Avatar src={testimonial[3].avatar} />
          <p>{testimonial[3].name}</p>
				</div>
				<div className="textContainer">
					<p>{testimonial[3].message}</p>
				</div>
			</div>

		</div>
	);
};
