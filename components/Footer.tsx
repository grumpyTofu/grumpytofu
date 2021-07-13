import React from "react";

interface FooterProps {}

const Footer: React.FC<FooterProps> = ({}) => {
    const now = new Date();
  return (
    <div className="w-full pt-16 pb-6 px-10 text-sm text-center md:text-left fade-in">
      <a className="text-gray-500 no-underline hover:no-underline" href="#">
        &copy; GrumpyTofu {now.getFullYear()}
      </a>
    </div>
  );
};

export default Footer;
