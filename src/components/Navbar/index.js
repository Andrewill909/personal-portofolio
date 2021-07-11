import * as React from "react";
// import { Link } from "react-router-dom";
//icon
import HiMenuAlt3 from "@meronex/icons/hi/HiMenuAlt3";
import AiOutlineHome from "@meronex/icons/ai/AiOutlineHome";
import FdSocialSkillshare from '@meronex/icons/fd/FdSocialSkillshare';
import AiOutlineFundProjectionScreen from "@meronex/icons/ai/AiOutlineFundProjectionScreen";
import logo from '../../asset/logo3.png';
//components
import Container from "../Container";
//smooth scroll
import {Link} from 'react-scroll';

const Navbar = ({isBlurred}) => {

  return (
    <nav
      className={`flex items-center h-14 ${isBlurred ? 'bg-white shadow-md bg-opacity-10 backdrop-filter backdrop-blur-md' : '' } 
      fixed w-full top-0 z-50 text-lg`}
    >
      <Container styling="flex justify-between items-center">
        <Link to="/" className="px-4 md:pl-0 flex flex-row">
          <div className="h-10 w-10 self-center mr-2">
            <img className="h-10 w-10 self-center" src={logo} alt="logo" />
          </div>
          <div className="self-center">
            <h3 className="text-2xl font-bold text-cust-cyan">AW</h3>
          </div>
        </Link>

        <div className="px-4 cursor-pointer md:hidden">
          <HiMenuAlt3 className="w-7 h-7" />
        </div>

        <div className="md:pr-0 md:flex hidden md:justify-between md:items-center">
          <Link to="/" className="p-4">
            <div className="flex justify-between items-center">
              <div className="pb-1 pr-1">
                <AiOutlineHome />
              </div>
              <div>Home</div>
            </div>
          </Link>
          <Link to="skill" smooth={true} className="p-4">
            <div className="flex justify-between items-center">
              <div className="pb-1 pr-1">
                <FdSocialSkillshare />
              </div>
              <div>Skill</div>
            </div>
          </Link>
          <Link to="/" className="p-4 pr-0">
            <div className="flex justify-between items-center">
              <div className="pb-1 pr-1">
                <AiOutlineFundProjectionScreen />
              </div>
              <div>Project</div>
            </div>
          </Link>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
