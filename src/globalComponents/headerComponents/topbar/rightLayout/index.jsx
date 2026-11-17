import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const TopRightLayout = () => {
  return (
    <>
      <div className="flex md:gap-x-2 items-center justify-center md:justify-end lg:gap-x-4 gap-x-2 py-4 md:p-0 text-[11px] lg:text-[13px] xl:text-[16px] 2xl:text-[18px]">
        <a
          href="https://www.facebook.com/share/1CdWFtmWXP/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook page"
        >
          <FaFacebook size={22} className="cursor-pointer" />
        </a>

        <a
          href="https://www.instagram.com/fd_plastix_toolz_n_sparez_ltd?igsh=dmJzdHRoZzBkZHo3"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram page"
        >
          <FaInstagram size={22} className="cursor-pointer " />
        </a>

        <a
          href="https://www.linkedin.com/company/fd-plastix-toolz-n-sparez-ltd/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin Business page"
        >
          <FaLinkedin size={22} className="cursor-pointer" />
        </a>
      </div>
    </>
  );
};

export default TopRightLayout;
