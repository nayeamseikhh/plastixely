import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const TopRightLayout = () => {
  return (
    <>
      <div className="flex md:gap-x-5 md:my-2 items-center md:justify-end justify-center gap-x-2 p-4 md:p-0">
      
        <a href="https://www.facebook.com/share/1CdWFtmWXP/" target="_blank"
              rel="noopener noreferrer" aria-label="facebook page"><FaFacebook size={22} className="cursor-pointer" /></a>
        
        <a href="https://www.instagram.com/fd_plastix_toolz_n_sparez_ltd?igsh=dmJzdHRoZzBkZHo3"  target="_blank"
              rel="noopener noreferrer" aria-label="Instagram page"><FaInstagram size={22} className="cursor-pointer" /></a>
        
        <a href="https://www.linkedin.com/company/fd-plastix-toolz-n-sparez-ltd/" target="_blank"
              rel="noopener noreferrer" aria-label="Linkedin Business page"><FaLinkedin size={22} className="cursor-pointer" /></a>
        
        
      </div>
    </>
  );
};

export default TopRightLayout;
