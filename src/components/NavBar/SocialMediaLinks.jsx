import React from "react";

import logoInstagram from "../../assets/logos/logo-instagram.svg";
import logoTiktok from "../../assets/logos/logo-tiktok.svg";
import logoFacebook from "../../assets/logos/logo-facebook.svg";

const links = [
  {
    name: "Instagram",
    logo: logoInstagram,
    href: "https://www.instagram.com/delacruzcooks",
  },

  {
    name: "Tiktok",
    logo: logoTiktok,
    href: "https://www.tiktok.com/@delacruzcooks",
  },
  {
    name: "Facebook",
    logo: logoFacebook,
    href: "https://www.facebook.com/juan.torales/",
  },

  
];

export default function SocialMediaLinks() {
  const pathname = "usePathname";
  return (
    <>
      {links.map((link) => {
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3  font-medium  hover:text-brand-3 hover:font-bold md:flex-none md:justify-start md:p-2 md:px-3
                        ${pathname === link.href ? "bg-sky-100" : ""}
              `}
          >
            <img src={link.logo} className="h-full  "/>
            <p className="hidden md:block"></p>
          </a>
        );
      })}
    </>
  );
}
