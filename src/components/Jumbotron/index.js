import * as React from 'react';
import Tilt from 'react-tilt';
//component
import Type from '../Type';
import Quotes from '../Quotes';
//ui
import svg from '../../asset/jumbo.svg';

export default function Jumbotron(){

    return(
        <div className="jumbotron border border-gray-200 bg-clip-padding bg-white shadow-lg rounded-3xl bg-opacity-10 backdrop-filter backdrop-blur-xl p-4 font-mont md:col-span-2 grid grid-cols-1 md:grid-cols-2" data-aos="zoom-in">
        <div className="typer flex flex-col justify-center items-center text-2xl md:text-4xl font-semibold">
          <div className="p-4">
            <div className="info">
              <h1 className="heading block text-cust-cyan">ANDRE WILLIAM</h1>
              <div className="typer md:mt-0 text-cust-cyan text-xl">
                <Type />
              </div>
            </div>
            <div className="quotes mt-5 font-sans text-xl text-pink-100">
              <Quotes />
            </div>
          </div>
        </div>
        <div className="image">
          <Tilt options={{ max: 35 }}>
            <img src={svg} alt="svg" />
          </Tilt>
        </div>
      </div>
    )
}