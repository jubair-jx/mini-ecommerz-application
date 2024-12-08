import React from "react";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
      <div className="container mx-auto font-roboto">
        <p>
          &copy; 2024 - 2025 Mini E-Commerce. All Rights Reserved. Develop by{" "}
          <span className=" text-violet-400">
            <Link to={"https://mohammad-jubair.vercel.app/"} target="_blank">
              Mohammad Jubair
            </Link>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
