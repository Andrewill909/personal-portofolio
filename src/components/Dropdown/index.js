import * as React from "react";
import { Link } from "react-scroll";
//icon
import AiOutlineHome from "@meronex/icons/ai/AiOutlineHome";
import FdSocialSkillshare from "@meronex/icons/fd/FdSocialSkillshare";
import AiOutlineFundProjectionScreen from "@meronex/icons/ai/AiOutlineFundProjectionScreen";
import AiFillContacts from '@meronex/icons/ai/AiFillContacts';


export default function Dropdown({ isOpen, toggleNav }) {

  return(
        <div id="modal" className={`p-1 fixed z-50 w-full transform ${!isOpen && 'translate-x-full'} transition duration-500 md:hidden`}>
            <div className="flex flex-col mx-auto bg-footer-purple shadow-md bg-opacity-20 backdrop-filter backdrop-blur-md text-xl
            border border-gray-200 rounded-3xl">
            <Link to="jumbo" className="p-4 cursor-pointer" activeClass="text-cust-cyan" smooth={true} spy={true} offset={-100}
            onClick={toggleNav}>
                <div className="flex justify-center items-center">
                <div className="pb-1 pr-1">
                    <AiOutlineHome />
                </div>
                <div>Home</div>
                </div>
            </Link>
            <Link to="skill" activeClass="text-cust-cyan" smooth={true} spy={true} offset={-70} className="p-4 cursor-pointer"
            onClick={toggleNav}>
                <div className="flex justify-center items-center">
                <div className="pb-1 pr-1">
                    <FdSocialSkillshare />
                </div>
                <div>Skill</div>
                </div>
            </Link>
            <Link to="project" activeClass="text-cust-cyan" smooth={true} spy={true} offset={-70} className="p-4 cursor-pointer"
            onClick={toggleNav}>
                <div className="flex justify-center items-center">
                <div className="pb-1 pr-1">
                    <AiOutlineFundProjectionScreen />
                </div>
                <div>Project</div>
                </div>
            </Link>
            <Link to="contact" activeClass="text-cust-cyan" smooth={true} spy={true} offset={0} className="p-4 cursor-pointer"
            onClick={toggleNav}>
                <div className="flex justify-center items-center">
                <div className="pb-1 pr-1">
                    <AiFillContacts />
                </div>
                <div>Contact</div>
                </div>
            </Link>
            </div>
        </div>
  );
}
