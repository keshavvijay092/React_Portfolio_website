import {FaLinkedin } from "react-icons/fa";
import {FaGithub } from "react-icons/fa";
import {FaSquareXTwitter } from "react-icons/fa6";
import {FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
     <nav className="  mb-20 flex items-center justify-between py-6">
     <div className="flex flex-string-0 iterms-center">
     <div className="text-white text-xl font-bold">KV</div>
     </div>
     <div className="m-8 flex iterms-center justify-center gap-4 text-2xl">
     <a href="https://www.linkedin.com/in/keshav-vijay-821169222?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> 
     <FaLinkedin/>
      </a>
      <a href="https://github.com/keshavvijay092"> <FaGithub/></a>
      <a href="https://www.instagram.com/keshav_vijay_92/"><FaInstagram/></a>
      <a href="https://x.com/keshavvijay92"><FaSquareXTwitter/></a>
  
      
      

     </div>
     </nav>
  );
};

export default Navbar;
