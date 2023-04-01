import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/-kamal-jain/",
      name: "Kamal Jain",
      role: "Senior Product Engineer at Temenos",
      test: "As a developer, problem solver and a brother, I think Aakash is responsible, creative and innovative quite a rational thinker. Coding as a way of life, his work presents products with great quality, following standards and good practices. I am so impressed with his techniques. He has always been hardworking ,creative,and absolute genius in his creative criticial thinking. He is always ready to take challege as his new opprotunities.",
    },
    {
      id: 2,
      link: "https://www.linkedin.com/in/iamsharmanish/",
      name: "Manish Sharma",
      role: "Ex-Front-end developer at MedPiper Technologies Inc.",
      test: "It was a pleasure collaborating with Aakash on company projects. One of the things that I think is special about him is that he never settles, even after completing the projects he finds other resources to improvise what he has delivers in the less time and strengthens his knowledge. Collaborating with him is easy and comfortable, it's like working with someone you've known for a long period of time.",
    },
    {
      id: 3,
      link: "https://www.linkedin.com/in/tanvi-vats-07a7b1188/",
      name: "Tanvi Vats",
      role: "Ex-Front-end Developer at NovoInvent Software | Game Developer at Ingenuity Gaming",
      test: "I worked with Aakash in the same team and his communication skills are very strong. His programming skill is one of the bests, given the time frame in the field. He is a good team player.  He will probably fit in most of the companies not only because he's a good team worker, but also because he has very good skills and I know he has much more potential to be shown.",
    },
  ];
  return (
    <section id="testmonials">
      <h5>Feedback from my peers</h5>
      <h2>Testimonials</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            {test.link && (
              <div className="client__avatar">
                <a href={test.link} target="_blank" rel="noreferrer">
                  <BsLinkedin />
                </a>
              </div>
            )}
            <p>{test.name}</p>
            <h5 className="client__name">{test.role}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
