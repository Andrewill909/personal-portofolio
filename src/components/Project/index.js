import * as React from "react";

const project = [
  {name: 'REST API Foodstore', img: '', url: 'https://github.com/Andrewill909/web-API-foodstore-server'}
]

export default function Project() {
  return (
    <div className="bg-[#fd2e73] bg-clip-padding shadow-lg rounded-3xl bg-opacity-60 border border-gray-200 backdrop-filter backdrop-blur-xl p-4 font-mont md:col-span-2 text-2xl md:text-3xl text-cust-cyan flex flex-col">
      <div className="text-center p-10 font-sans">
        Projects and Learning
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="card">

        </div>

        <div className="max-w-sm rounded-3xl backdrop-filter backdrop-blur-xl bg-opacity-10 bg-red-700 overflow-hidden shadow-lg">
          <img className="w-full" src="projects/test.jpg" alt="Mountain" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Mountain</div>
            <p className="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>

      </div>
    </div>
  );
}
