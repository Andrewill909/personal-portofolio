import * as React from 'react';
//components
import Container from '../Container';
import {AiOutlineCopyrightCircle, AiFillFacebook, AiFillGithub,
    AiFillInstagram, AiFillLinkedin} from 'react-icons/ai';

export default function Footer(){
    return <div className="mt-5 w-full">
        <footer className="flex items-center bg-footer-purple shadow-md 
       w-full top-0 z-50 text-base  md:text-lg bg-opacity-90 backdrop-filter backdrop-blur-md rounded-t-md">
          <Container styling="grid grid-cols-1 md:grid-cols-3 place-items-center gap-1">
            <div className="font-medium">
                Designed and created by Andre William
            </div>
            <div className="font-medium">
                Copyright <AiOutlineCopyrightCircle className="inline"/> 2021 Dre
            </div>
            <div className="flex text-2xl p-1 font-medium">
                <a className="mr-1" href="https://github.com/Andrewill909" target="_blank" rel="noreferrer"><AiFillGithub/></a>
                <a className="mr-1" href="https://www.linkedin.com/in/andre-william-203573160/" target="_blank" rel="noreferrer"><AiFillLinkedin/></a>
                <a className="mr-1" href="https://www.facebook.com/andrecool.cool/" target="_blank" rel="noreferrer"><AiFillFacebook/></a>
                <a className="mr-1" href="https://www.instagram.com/andreeewill/" target="_blank" rel="noreferrer"><AiFillInstagram/></a>
            </div>
          </Container>
      </footer>
    </div>
}