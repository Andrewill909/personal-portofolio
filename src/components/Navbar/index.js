import * as React from "react";
//icon
import HiMenuAlt3 from "@meronex/icons/hi/HiMenuAlt3";
import AiOutlineHome from "@meronex/icons/ai/AiOutlineHome";
import FdSocialSkillshare from '@meronex/icons/fd/FdSocialSkillshare';
import AiOutlineFundProjectionScreen from "@meronex/icons/ai/AiOutlineFundProjectionScreen";
import AiOutlineClose from '@meronex/icons/ai/AiOutlineClose';
import AiFillContacts from '@meronex/icons/ai/AiFillContacts';
import logo from '../../asset/logo.png';
//components
import Container from "../Container";
//smooth scroll
import {Link} from 'react-scroll';

const Navbar = ({isBlurred, toggleNav, isOpen}) => {

  return (
    <nav
       className={`flex items-center h-14 transition duration-500 ${isBlurred ? 'bg-white shadow-md bg-opacity-10 backdrop-filter backdrop-blur-md' : '' } 
      fixed w-full top-0 z-50 text-lg`}
    >
      <Container styling="flex justify-between items-center">
        <Link to="jumbo" className="px-4 md:pl-0 flex flex-row" smooth={true} spy={true} offset={-100}>
          <div className="h-10 w-10 self-center mr-2">
            <img className="h-10 w-10 self-center" src={logo} alt="logo" />
          </div>       
        </Link>

        <div id="menuButton" className="px-4 cursor-pointer md:hidden" onClick={toggleNav}>
          {isOpen? <AiOutlineClose className="text-2xl"/> : <HiMenuAlt3 className="w-7 h-7" />}
        </div>

        <div className="md:pr-0 md:flex hidden md:justify-between md:items-center">
          <Link to="jumbo" className="p-4 cursor-pointer" activeClass="text-cust-cyan" smooth={true} spy={true} offset={-100}>
            <div className="flex justify-between items-center">
              <div className="pb-1 pr-1">
                <AiOutlineHome />
              </div>
              <div>Home</div>
            </div>
          </Link>
          <Link to="skill" activeClass="text-cust-cyan" smooth={true} spy={true} offset={-70} className="p-4 cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="pb-1 pr-1">
                <FdSocialSkillshare />
              </div>
              <div>Skills</div>
            </div>
          </Link>
          <Link to="project" activeClass="text-cust-cyan" smooth={true} spy={true} offset={-70} className="p-4 cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="pb-1 pr-1">
                <AiOutlineFundProjectionScreen />
              </div>
              <div>Projects</div>
            </div>
          </Link>
          <Link to="contact" activeClass="text-cust-cyan" smooth={true} spy={true} offset={0} className="p-4 pr-0 cursor-pointer">
            <div className="flex justify-between items-center">
              <div className="pb-1 pr-1">
                <AiFillContacts />
              </div>
              <div>Contact</div>
            </div>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
