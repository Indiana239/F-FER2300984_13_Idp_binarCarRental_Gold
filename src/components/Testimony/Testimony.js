import React, { useState } from "react";
import photo1 from "../../Assets/img_photo.png";
import photo2 from "../../Assets/img_photo1.png";
import { IoIosStar, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import bintang from "../../Assets/Rate.png";
import Testimoni from "../Testimony/Testimony.css";

const Testimony = () => {
  const [testimonialData, setTestimonialData] = useState([
    {
      image: photo1,
      rating: bintang,
      comment:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
      info: "Jean Dee 38, Bromo",
    },
    {
      image: photo2,
      rating: bintang,
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit praesentium ullam, ab explicabo tenetur earum impedit. Provident tenetur veniam aliquam!.",
      info: "Jessica 25, Bromo",
    },
    {
      image: photo1,
      rating: bintang,
      comment:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis quam architecto optio vel consequuntur. Animi iusto suscipit sit ratione iure neque dolorum consectetur debitis ullam..",
      info: "John Dee 32, Bromo",
    },
  ]);

  const moveItem = () => {
    const temp = testimonialData;
    temp.push(temp.shift());
    console.log(temp);
    setTestimonialData([...temp]);
  };

  return (
    <div className="testimonial-main-container container-fluid mt-5">
      <div className="testimonial-container">
        {testimonialData &&
          testimonialData.map((item, index) => (
            <div key={`item-${index + 1}`} className="carousel-card">
              <div className="carousel-content">
                <img
                  className="image-thumbnail-testimonial"
                  src={item.image}
                  alt=""
                />
                <div className="testimonial-details">
                  <div className="testimonial-info">
                    <div className="carousel-ratting">
                      {[...Array(item.rating)].map((rate, index) => (
                        <IoIosStar key={`rates-${index + 1}`} />
                      ))}
                    </div>
                    <h6>{item.comment}</h6>
                    <p>{item.info}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>

      <div className="testimonial-button-wrapper">
        <div
          onClick={() => moveItem()}
          className="testimonial-button arrow-back"
        >
          <IoIosArrowBack />
        </div>
        <div
          onClick={() => moveItem()}
          className="testimonial-button arrow-forward"
        >
          <IoIosArrowForward />
        </div>
      </div>
    </div>
  );
};

export default Testimony;
