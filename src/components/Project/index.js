import * as React from "react";

const project = [
  {name: 'REST API Foodstore', img: ''}
]

export default function Project() {
  return (
    <div className="bg-white bg-clip-padding shadow-lg rounded-3xl bg-opacity-10 border border-gray-200 backdrop-filter backdrop-blur-xl p-4 font-mont md:col-span-2 text-2xl md:text-3xl text-cust-cyan flex flex-col">
      <div className="text-center p-10 font-sans">
        Projects and Learning
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2">

        <div className="card">

        </div>

        <div class="max-w-sm rounded-3xl backdrop-filter backdrop-blur-xl bg-opacity-10 bg-white overflow-hidden shadow-lg">
          <img class="w-full" src="/mountain.jpg" alt="Mountain" />
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">Mountain</div>
            <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
          </div>
          <div class="px-6 pt-4 pb-2">
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
            <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
          </div>
        </div>

      </div>
    </div>
  );
}
