import React from 'react'
import { Link } from "react-router-dom";

const links = [
  
  {
    name: "Recipes",
    href: "#recipes",
    
  },
 
  {
    name: "Colabs",
    href: "#colabs",
   
  },
  {
    name: "Contact",
    href: "#contact",
   
  },
];





export default function NavLinks() {
 
  const pathname = "usePathname";
  return (
    <>
      {links.map((link) => {
       
        return (
          <a
            key={link.name}
            href={link.href}
            className={`flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3  text-xl font-medium  hover:text-brand-3 hover:font-bold md:flex-none md:justify-start md:p-2 md:px-3
                        ${pathname === link.href ? "bg-sky-100" : ""}
              `}
          >
           
            <p className="block">{link.name}</p>
          </a>
        );
      })}
    </>
  );
}