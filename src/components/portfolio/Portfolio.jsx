import React from "react";
import SMS from "../../assets/smp.jpeg";
import NCA from "../../assets/dot-net-crud.jpg";
import TDA from "../../assets/todo.png";
import FN from "../../assets/food-nation.png";
import PJS from "../../assets/port-js.png";
import PA from "../../assets/port-ang.png";
import EN from "../../assets/enotes.png";
import en from "../../assets/news.png";
import BK from "../../assets/book.jpg";
import MCA from "../../assets/mern-crud.png";
import PR from "../../assets/port-react.png";
import RWA from "../../assets/RWA.png";
import RCA from "../../assets/RCA.png";
import GC from "../../assets/google-clone.jpg";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      title: "Student Management System",
      img: SMS,
      link: null,
      github: "https://github.com/jainaakash1002/Student-Management-System.git",
    },
    {
      title: "Online Shopping App",
      img: BK,
      link: null,
      github: null,
    },
    {
      title: ".NET CRUD App",
      img: NCA,
      link: null,
      github: "https://github.com/jainaakash1002/.NET-CRUD-APP.git",
    },
    {
      title: "Food Nation",
      img: FN,
      link: null,
      github: "https://github.com/jainaakash1002/Food-Nation.git",
    },
    {
      title: "Personal Portfolio Website Using JavaScript",
      img: PJS,
      link: "https://jainaakash.netlify.app/",
      github: "https://github.com/jainaakash1002/Portfolio-Website.git",
    },
    {
      title: "Personal Portfolio Website Using Angular",
      img: PA,
      link: "https://aakash-jain.netlify.app/#/",
      github: "https://github.com/jainaakash1002/Angular-Portfolio-Website.git",
    },
    {
      title: "To Do App",
      img: TDA,
      link: null,
      github: null,
    },
    {
      title: "MERN CRUD App",
      img: MCA,
      link: null,
      github: "https://github.com/jainaakash1002/Angular-Portfolio-Website.git",
    },
    {
      title: "eNotes App",
      img: EN,
      link: "https://enotesapp.netlify.app/",
      github: "https://github.com/jainaakash1002/eNotes-App.git",
    },
    {
      title: "eNews App",
      img: en,
      link: null,
      github: null,
    },
    {
      title: "React Weather App",
      img: RWA,
      link: null,
      github: null,
    },
    {
      title: "Personal Portfolio Website Using React",
      img: PR,
      link: "https://aakashjain.netlify.app/",
      github: "https://github.com/jainaakash1002/React-Portfolio-Website.git",
    },
    {
      title: "Google Search Clone App",
      img: GC,
      link: null,
      github: null,
    },
    {
      title: "React Chat App",
      img: RCA,
      link: "https://a3chat.netlify.app/",
      github: null,
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro, index) => (
          <article className="portfolio__item" key={index}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <h3>{pro.title}</h3>
            <div className="portfolio__item-cta">
              {pro.github != null ? (
                <>
                  <a href={pro.github} className="btn btn-primary">
                    Github
                  </a>
                </>
              ) : null}
              {pro.link != null ? (
                <>
                  <a
                    href={pro.link}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live Demo
                  </a>
                </>
              ) : (
                <>
                  {" "}
                  <div className="btn">
                    No Preview {pro.github == null ? "Available" : "Avail."}
                  </div>{" "}
                </>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
