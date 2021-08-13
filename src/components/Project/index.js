import * as React from "react";
import {DiGithubBadge} from 'react-icons/di';

const project = [
  {
    name: 'Foodstore REST API',
    img: 'restapi.png', 
    url: 'https://github.com/Andrewill909/web-API-foodstore-server',
    tags: ['NodeJs', 'ExpressJS', 'MongoDB'],
    desc: `This project is created in terms of learning javascript's runtime environtment which is NodeJS. Foodstore API provides database
    for food data, JWT auth, payment gateway, and many more. This is built for e-commerce development (general).`
  },
  {
    name: 'Foodstore-UI',
    img: 'foodstoreui.png',
    url: 'https://github.com/Andrewill909/foodstore-ui',
    tags: ['ReactJS', 'TailwindCSS', 'consume API'],
    desc: `This project is the frontend side which consume API provided by "Foodstore REST API". Using upkit liblary and tailwindCSS
    caused this website is fully responsive and user friendly with it's sleek design. Foodstore-UI consumes almost all of the APIs provided, except for the administrator endpoints.`
  },
  {
    name: 'Restaurant Database System',
    img: 'databasesystem.png',
    url: 'https://github.com/Andrewill909/Restaurant-management-system',
    tags: ['Javascript', 'PHP', 'Jquery-AJAX'],
    desc: `This project is made as my 4th semester final project in database system course. Using AJAX to fetch data from the backend (php native) and bootstrap for templating/layouting. This system support for authentication, view products (including sorting), and checkout.
    `
  },
  {
    name: 'Discussion forum stackoverflow (clone)',
    img: 'tumpukan.png',
    url: 'https://github.com/Andrewill909/Discussion-Forum-Tumpukan-luber',
    tags: ['Laravel', 'PHP', 'MySQL'],
    desc: `This project is made as final project for Sanbercode lavarel bootcamp on july 2020. It's basicly a website forum where programmers can discuss their problems in programming. The features included in this websites are posting thread, replying thread, up/downvote a thread, etc .`
  }
]

export default function Project() {

  return (
    <div id="project" className="bg-clip-padding shadow-lg rounded-3xl bg-opacity-60 border border-grey-200 backdrop-filter backdrop-blur-xl p-4 font-mont md:col-span-2 text-2xl md:text-3xl text-cust-cyan flex flex-col">
      <div className="text-center p-10 font-sans font-black">
        Projects and Learning
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 gap-y-20">
        
        {project.map((itm,idx) => {
          return (
        <div key={idx} className="max-w-sm rounded-3xl backdrop-filter backdrop-blur-xl bg-opacity-10 bg-white overflow-hidden shadow-lg
            place-self-center border border-gray-200" data-aos="zoom-in">

          <div className="image relative border-b border-gray-200 h-56 object-cover">
            <img className="w-full border-bottom border-gray-200 h-full" src={`projects/${itm.img}`} alt="Mountain" />
            <a className="overlay absolute bg-purple-500 z-50 w-full h-full top-0 left-0 opacity-0 hover:opacity-80 transition duration-500
            flex items-center justify-center" href={itm.url} rel="noreferrer" target="_blank">
              <div className="text-6xl">
                <DiGithubBadge/>
              </div>
            </a>
          </div>

          <div className="px-6 py-4 flex-1">
            <div className="font-bold text-xl mb-2">{itm.name}</div>
            <p className="text-pink-100 text-base indent-sm text-justify">
              {itm.desc}
            </p>
          </div>

          <div className="px-6 pt-4 pb-2">
            {itm.tags.map((itm, idx) => {
              return (
                <span key={idx} className="inline-block bg-white rounded-full px-3 py-1 text-sm font-semibold text-purple-700 mr-2 mb-2">{itm}</span>
              )
            })}
            
          </div>
        </div>
          )
        })}

      </div>
    </div>
  );
}
