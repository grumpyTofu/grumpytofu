import Link from "next/link";
import React from "react";

interface FooterProps extends Partial<HTMLDivElement> {
  className?: string;
}

const Footer = ({ className }: FooterProps) => {
  let classes = "dark grid grid-cols-12 gap-4 p-12 glass-frosted";
  if (className) classes += ` ${className}`;
  return (
    <footer className={classes}>
      <div className="col-span-full">
        <Link href="/">Spyre Development</Link>
      </div>
      <div className="col-span-4 flex flex-col space-y-1 text-sm xl:col-span-3">
        <div className="text-secondary">Company</div>
        <a href="/about">About</a>
        <a href="/blog">Blog</a>
        <a href="/careers">Careers</a>
      </div>
      <div className="col-span-4 flex flex-col space-y-1 text-sm xl:col-span-3">
        <div className="text-secondary">Product</div>
        <a href="/customers">Case studies</a>
        <a href="/enterprise">Enterprise</a>
        <a href="/pricing">Pricing</a>
        <a href="/changelog">Changelog</a>
      </div>
      <div className="col-span-4 flex flex-col space-y-1 text-sm xl:col-span-3">
        <div className="text-secondary">Open Source</div>
        <a href="/vitess">Vitess</a>
        <a href="https://vitess.io/slack" target="_blank" rel="nofollow noopener noreferrer">
          Community
        </a>
        <a href="https://github.com/planetscale" target="_blank" rel="me nofollow noopener noreferrer">
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
