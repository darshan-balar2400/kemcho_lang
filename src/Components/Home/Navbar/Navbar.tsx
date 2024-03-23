"use client";
import Image from "next/image";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  const openNav = () => {
    let mobile_menu = document.getElementById(
      "mobile_menu_slide"
    ) as HTMLDivElement;

    if (open) {
      mobile_menu.style.display = "none";
      setOpen(false);
    } else {
      mobile_menu.style.display = "block";
      setOpen(true);
    }
  };

  return (
    <nav className="nav_container ">
      <div className="content">
        <div className="left_nav ">
          <div className="logo">
            <div className="image">
              <Image
                src="/images/logo/rangoli.png"
                width={70}
                height={70}
                alt="logo"
              />
            </div>

            <div className="logo_title">
              <h1>KEMCHO</h1>
            </div>
          </div>

          <div className="links mx-0">
            <ul className="">
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <Link href="#playground_section">Playground</Link>
              </li>
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <Link href="#documentation_section">Documentation</Link>
              </li>
              <li className="text-gray-500 hover:text-gray-900 delay-200">
                <Link href="#developer_section">Contact Developer</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="right_nav justify-self-end">
          <div className="versions">
            <div className="version">
              <h5>1.0.1</h5>
            </div>
          </div>
          <div className="sidemenu" onClick={() => openNav()}>
            {!open ? <CiMenuFries /> : <AiOutlineClose />}
          </div>
        </div>
      </div>

      <div className="mobile_menu_slide" id="mobile_menu_slide">
        <div className="links mx-0">
          <ul className="">
            <li className="text-gray-500 hover:text-gray-900 delay-200">
              <Link href="#playground_section" onClick={() => openNav()}>
                Playground
              </Link>
            </li>
            <li className="text-gray-500 hover:text-gray-900 delay-200">
              <Link href="#documentation_section" onClick={() => openNav()}>
                Documentation
              </Link>
            </li>
            <li className="text-gray-500 hover:text-gray-900 delay-200">
              <Link href="#developer_section" onClick={() => openNav()}>
                Contact Developer
              </Link>
            </li>

            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
