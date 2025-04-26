import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import Aakash from "../../assets/Aakash.jpeg";
import "./intro.css";

const Intro = () => {
	return (
		<section id="about">
			<h5>Get to know</h5>
			<h2>About Me</h2>
			<div className="container about__container">
				<div className="about__me">
					<div className="about__me-image">
						<img src={Aakash} alt="AJ" />
					</div>
				</div>
				<div className="about__content">
					<div className="about__cards">
						<article className="about__card">
							<FaAward className="about__icon" />
							<h5>Experience</h5>
							<small>3 year +</small>
						</article>
						<article className="about__card">
							<VscFolderLibrary className="about__icon" />
							<h5>Projects</h5>
							<small>22+ Completed Projects</small>
						</article>
					</div>
					<p>
						With 3 years of experience in full-stack web development, I
						specialise in building dynamic, user-centric frontend applications
						using JavaScript and React JS. While I’ve contributed to both
						frontend and backend systems - including leading a scalable web app
						that increased user engagement by 30% and optimising backend
						performance to reduce load time by 20% - my passion lies in crafting
						seamless, high-performance user interfaces. I’m now seeking a
						frontend-focused Software Developer role where I can apply my
						expertise to create engaging and efficient digital experiences.
					</p>
					<a href="#contact" className="btn btn-primary">
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	);
};

export default Intro;
