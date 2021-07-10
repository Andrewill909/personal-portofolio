import * as React from "react";
import Tilt from "react-tilt";
//component
//ui
import who from "../../asset/who.svg";

export default function About() {
  return (
    <>
      <div className=" text-center place-self-center text-2xl md:text-3xl text-cust-cyan font-sans">
        {/* <div className="border border-gray-200 bg-clip-padding bg-purple-800 shadow-lg rounded-3xl bg-opacity-10 backdrop-filter backdrop-blur-xl p-4" data-aos="fade-right"> About Me</div> */}
        
          <Tilt options={{ max: 35 }}>
            <img src={who} alt="question" />
          </Tilt>
        
      </div>
      <div className=" p-4 font-sans md:col-start-2 md:col-end-3 md:row-start-2 md:row-end-3 text-xl md:text-2xl text-justify flex flex-col justify-evenly text-pink-100">
        <p className="block leading-normal md:leading-loose indent-sm md:indent-md">
          Hello there, my name is Andre William and I am 20 years old. While studying in my 4th semester in the Computer Science field, I have done many projects in web development using modern web technologies/languages and frameworks such as Javascript, ReactJS, NodeJS, Laravel, and many more. Besides web applications, I'm interested in artificial intelligence and database management too. My motto is always learn from the best practices and write clean codes.
        </p>
      </div>
    </>
  );
}
