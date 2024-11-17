import React from "react";
import { Link } from "react-router-dom";
import { MdEmail, MdCall } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <div className="flex items-center justify-center gap-4 pb-5">
        <Link to={"https://main--ashutoshsportfolio.netlify.app/"}>
          Ashutosh Fase
        </Link>
        <span> | </span>
        <Link to={"mailto:ashutoshfase74@gmail.com"}>
          <MdEmail />
        </Link>
        <span> | </span>
        <Link to={"tel:+918055610899"}>
          <MdCall />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
