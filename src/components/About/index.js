import * as React from "react";
import Tilt from "react-tilt";
//component
//ui
import who from "../../asset/who.svg";

export default function About() {
  return (
    <>
      <div className="text-center mt-5 place-self-center text-2xl md:text-3xl text-cust-cyan font-sans">
        <div className="border border-gray-200 bg-clip-padding bg-white shadow-lg rounded-3xl bg-opacity-10 backdrop-filter backdrop-blur-xl p-4" data-aos="fade-right"> About Me</div>
        <div>
          <Tilt options={{ max: 35 }}>
            <img src={who} alt="question" />
          </Tilt>
        </div>
      </div>
      <div className=" p-4 font-sans md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 text-xl md:text-2xl text-justify flex flex-col justify-evenly text-pink-100">
        <p className="block leading-normal md:leading-loose indent-sm md:indent-md">
          Whooops... before scrolling, please Let me to introduce myself first. My name is Andre William, i'am 20 years old and currently studying at Bina nusantara university - majoring in computer science. I fell in love with programming and have a big interest's on building a new Web based
          application using modern technologies/web frameworks including ReactJS, NodeJS, NextJS, Laravel, and many more.
        </p>
      </div>
    </>
  );
}
