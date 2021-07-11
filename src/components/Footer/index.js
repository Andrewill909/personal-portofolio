import * as React from 'react';
//components
import Container from '../Container';
import {AiOutlineCopyrightCircle, AiFillFacebook, AiFillGithub,
    AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

export default function Footer(){
    return <div className="mt-5 w-full">
        {/* <img src={svg} alt="" /> */}
        {/* <svg height="100%" width="100%" id="svg" viewBox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg" class="transition duration-300 ease-in-out delay-150"><defs><linearGradient id="gradient"><stop offset="5%" stop-color="#21d4fdff"></stop><stop offset="95%" stop-color="#b721ffff"></stop></linearGradient></defs><path d="M 0,400 C 0,400 0,200 0,200 C 78.47846889952157,187.66507177033492 156.95693779904315,175.33014354066987 250,162 C 343.04306220095685,148.66985645933013 450.6507177033492,134.3444976076555 561,137 C 671.3492822966508,139.6555023923445 784.44019138756,159.2918660287081 881,190 C 977.55980861244,220.7081339712919 1057.5885167464114,262.488038277512 1148,266 C 1238.4114832535886,269.511961722488 1339.2057416267944,234.755980861244 1440,200 C 1440,200 1440,400 1440,400 Z" stroke="none" stroke-width="0" fill="url(#gradient)" class="transition-all duration-300 ease-in-out delay-150"></path></svg> */}

        <footer className="flex items-center bg-purple-500 shadow-md 
       w-full top-0 z-50 text-lg bg-opacity-90 backdrop-filter backdrop-blur-md rounded-t-xl">
          <Container styling="grid grid-cols-1 md:grid-cols-3 place-items-center gap-1">
            <div className="">
                Designed and created by Andre William
            </div>
            <div className="">
                Copyright <AiOutlineCopyrightCircle className="inline"/> 2021 AW
            </div>
            <div className="flex text-2xl">
                <a className="mr-1" href="https://github.com/Andrewill909" target="_blank" rel="noreferrer"><AiFillGithub/></a>
                <a className="mr-1" href="https://www.linkedin.com/in/andre-william-203573160/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
                <a className="mr-1" href="https://www.facebook.com/andrecool.cool/" target="_blank" rel="noreferrer"><AiFillFacebook/></a>
                <a className="mr-1" href="https://www.instagram.com/andreeewill/" target="_blank" rel="noreferrer"><AiFillInstagram/></a>
            </div>
          </Container>
      </footer>
    </div>
}