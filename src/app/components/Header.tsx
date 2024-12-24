"use client";
import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { SiNike, SiJordan } from "react-icons/si";
import { TbBriefcase2, TbHeart} from "react-icons/tb";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b flex flex-col">
    {/* Top Bar */}
    <div className="text-black py-2 text-sm flex-wrap justify-between items-center gap-4 px-4 md:px-8 hidden md:flex">
      <div className="text-center flex-1">
        <a href="/" className="cursor-pointer">
        <SiJordan className="text-black" />
        </a>
      </div>
  
      <div className="flex items-center gap-2">
        <a href="/" className="text-black text-sm font-normal hover:underline">
          Find A Store 
        </a>
        |
      </div>
  
      <div className="flex items-center gap-2">
        <a href="/get-help" className="text-black text-sm font-normal hover:underline">
          Help
        </a>
        |
      </div>
  
      <div className="flex items-center gap-2">
        <a href="/join-us" className="text-black text-sm font-normal hover:underline">
          Join Us
        </a>
        |
      </div>
  
      <div className="flex items-center gap-2">
        <a href="/signin" className="text-black text-sm font-normal hover:underline">
          Sign In
        </a>
        |
      </div>
    </div>
  
    {/* Main Navigation */}
    <div className="flex justify-between items-center px-4 sm:px-10 py-4">
      {/* Logo */}
      <h1 className="text-3xl sm:text-5xl font-bold text-black">
        <a href="/">
          <SiNike />
        </a>
      </h1>
  
      {/* Hamburger Icon */}
      <div className="md:hidden">
        {isMenuOpen ? (
          <HiOutlineX
            className="text-black text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          />
        ) : (
          <HiOutlineMenu
            className="text-black text-3xl cursor-pointer"
            onClick={() => setIsMenuOpen(true)}
          />
        )}
      </div>
  
      {/* Navigation Links */}
      <nav
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } md:flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 items-center absolute md:static top-16 left-0 w-full md:w-auto bg-white md:bg-transparent z-10 shadow-md md:shadow-none p-4 md:p-0`}
      >
        <a href="/products" className="text-black hover:text-slate-600 hover:underline font-semibold">
          New & Featured
        </a>
        <a href="/men" className="text-black hover:text-slate-600 hover:underline font-semibold">
          Men
        </a>
        <a href="/women" className="text-black hover:text-slate-600 hover:underline font-semibold">
          Women
        </a>
        <a href="/kids" className="text-black hover:text-slate-600 hover:underline font-semibold">
          Kids
        </a>
        <a href="/sale" className="text-black hover:text-slate-600 hover:underline font-semibold">
          Sale
        </a>
        <a href="/snkrs" className="text-black hover:text-slate-600 hover:underline font-semibold">
          SNKRS
        </a>
        <a href="/cart" className="text-black hover:text-slate-600 hover:underline font-semibold md:hidden lg:hidden">
          CART
        </a>
      </nav>
  
      {/* Search & Icons */}
      <div className="hidden md:flex items-center space-x-4 sm:space-x-6">
        <div className="hidden lg:flex items-center bg-slate-100 rounded-[100px] px-3 py-2">
          <CiSearch className="text-black font-semibold text-lg" />
          <input
            type="text"
            placeholder="Search"
            className="bg-slate-100 outline-none text-sm"
          />
        </div>
        <a href="/cart">
        <TbHeart className="text-black text-xl sm:text-2xl hover:text-amber-500 cursor-pointer" />
        </a>
        <a href="/cart">

        <TbBriefcase2 className="text-black text-xl sm:text-2xl hover:text-amber-500 cursor-pointer" />
        </a>
      </div>
    </div>
  </header>
  
  );
}
