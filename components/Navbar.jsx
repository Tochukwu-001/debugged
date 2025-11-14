"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiUser, FiLogOut } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosClose } from "react-icons/io";
import { useSession, signOut } from "next-auth/react";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  console.log(showNav);

  const { data: session } = useSession();
  console.log(session);


  const navItems = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About Us",
      url: "/about",
    },
    {
      name: "Fixes",
      url: "/fixes",
    },
    {
      name: "FAQs",
      url: "/faq",
    },
  ];

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <nav className="flex items-center justify-between shadow-md px-5 py-3">
      <Link href={"/"} className="flex items-center gap-1 z-30">
        <Image src={"/logo.png"} alt="logo" width={35} height={35} />
        <p className="font-semibold text-xl lg:flex hidden">Debugg</p>
      </Link>

      <div className="lg:flex hidden items-center gap-8">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.url}
            className="text-lg hover:text-blue-600 transition-all duration-200"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {session ? (
        // <img
        //   src={session?.user?.image}
        //   alt={session?.user?.name.slice(0, 1).toUpperCase()}
        // />
        <div className="max-lg:ml-auto z-30">
          <button
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
            className="border-none outline-none"
          >
            <Avatar
              alt={session?.user?.name.slice(0, 1).toUpperCase()}
              src={session?.user?.image}
            />
          </button>
          <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            slotProps={{
              list: {
                "aria-labelledby": "basic-button",
              },
            }}
          >
            <MenuItem onClick={handleClose}><Link href={"/profile"}>My Account</Link></MenuItem>
            <MenuItem onClick={handleClose}><Link href={"/post-fix"}>Post a Fix</Link></MenuItem>
            <MenuItem onClick={handleClose}>
              <button
                onClick={() => signOut()}
                className="flex items-center gap-1 text-red-600"
              >
                <FiLogOut />
                <span>Logout</span>
              </button>
            </MenuItem>
          </Menu>
        </div>
      ) : (
        <Link
          href={"/auth/signin"}
          className="lg:flex hidden items-center gap-1 bg-blue-600 text-white px-6 py-2 rounded-full"
        >
          <FiUser className="text-xl" />
          <p>My Account</p>
        </Link>
      )}

      <div className="lg:hidden text-2xl z-30 ml-3">
        <button onClick={() => setShowNav(!showNav)}>
          {showNav ? <IoIosClose className="text-3xl" /> : <HiMenuAlt4 />}
        </button>
      </div>

      {/* mobile and tablet navbar */}
      <div
        className={`bg-white h-full w-full lg:hidden absolute top-0 left-0 p-5 ${
          showNav ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col items-center gap-10 mb-10 mt-25">
          {navItems.map((item, index) => (
            <Link key={index} href={item.url}>
              {item.name}
            </Link>
          ))}
        </div>
        {!session && (
          <Link
            href={"/auth/signin"}
            className="flex items-center justify-center gap-1 bg-blue-600 text-white px-6 py-2 rounded-full"
          >
            <FiUser className="text-xl" />
            <p>My Account</p>
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
