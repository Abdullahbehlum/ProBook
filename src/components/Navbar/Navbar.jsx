import React, { Suspense, lazy, useState } from "react";
import MainLogo from "../../assets/images/PRO BOOK WRITER LOG.svg";
import { Link, Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import { motion } from "framer-motion";

function Navbar() {
  const Annoucement = lazy(() => import("./Annoucement"));
  const [SideBar, SetSidebar] = useState(false);
  const [Nav, Setnav] = useState("home");
  const handlenav = (tab) => {
    Setnav(tab);
  };
  return (
    <>
      <header className="overflow-hidden" >
        <Suspense fallback={<></>}>
          <Annoucement />
        </Suspense>
        {/* Navbar is given */}

        {/* logo */}
        <div className="xl:w-[200px] w-[150px] xl:mx-10 mx-5 xl:-mt-3 ">
          <Link to={"/"}>
            <img src={MainLogo} alt="Not" className="object-cover" />
          </Link>
          <div className="xl:hidden sm:hidden absolute top-6  right-12 block">
            <i
              className={` transition-all duration-75 cursor-pointer  fa fa-${
                SideBar ? "xmark" : "bars"
              }`}
              onClick={() => SetSidebar(!SideBar)}
            ></i>
          </div>
        </div>

        <ul
          className={`text-[15px] font-semibold transition-all duration-100 sidebar ${
            SideBar ? "show p-2 " : ""
          } `}
        >
          <li
            className={` pt-2 ${
              Nav === "home" ? "border-b border-[#00bcbb]" : ""
            }`}
            onClick={() => {
              SetSidebar(false);
              handlenav("home");
            }}
          >
            <Link to={"/"}>Home</Link>
          </li>
          <li
            className={`${Nav === "ghost" ? "border-b border-[#00bcbb]" : ""}`}
            onClick={() => {
              SetSidebar(false);
              handlenav("ghost");
            }}
          >
            <Link
              className={`${
                Nav === "writing" ? "border-b border-[#00bcbb]" : ""
              }`}
              onClick={() => {
                SetSidebar(false);
                handlenav("writing");
              }}
              to={"/ghost-writing"}
            >
              Ghostwriting
            </Link>
          </li>
          <li
            className={`${
              Nav === "publishing" ? "border-b border-[#00bcbb]" : ""
            }`}
            onClick={() => {
              SetSidebar(false);
              handlenav("publishing");
            }}
          >
            <Link to={"/book-publishing"}> Publishing</Link>
          </li>
          <li
            className={`${Nav === "bcover" ? "border-b border-[#00bcbb]" : ""}`}
            onClick={() => {
              SetSidebar(false);
              handlenav("bcover");
            }}
          >
            <Link to={"/book-cover"}> Book Cover</Link>
          </li>
          <li
            className={`${
              Nav === "editing" ? "border-b border-[#00bcbb]" : ""
            }`}
            onClick={() => {
              SetSidebar(false);
              handlenav("editing");
            }}
          >
            <Link to={"/book-editing"}> Editing</Link>
          </li>
          <li
            className={`${Nav === "web" ? "border-b border-[#00bcbb]" : ""}`}
            onClick={() => {
              SetSidebar(false);
              handlenav("web");
            }}
          >
            <Link to={"/author-web-design"}> Author Web Design</Link>
          </li>
          <li
            className={`${Nav === "about" ? "border-b border-[#00bcbb]" : ""}`}
            onClick={() => {
              SetSidebar(false);
              handlenav("about");
            }}
          >
            <Link to={"/about-us"}> About Us</Link>
          </li>
          <li
            className={`${
              Nav === "contact" ? "border-b border-[#00bcbb]" : ""
            }`}
            onClick={() => {
              SetSidebar(false);
              handlenav("contact");
            }}
          >
            <Link to={"/contact-us"}> Contact Us</Link>
          </li>
        </ul>

        <div className="mb-hide">
          <div className="flex justify-end items-center px-4 xl:-mt-6 ">
            <ul className="inline_wrap text-[15px] font-semibold">
              <li className="">
                <Link to={"/"}>Home</Link>
              </li>
              <li>
                <Link to={"/ghost-writing"}>Ghostwriting</Link>
              </li>
              <li>
                <Link to={"/book-publishing"}> Publishing</Link>
              </li>
              <li>
                <Link to={"/book-cover"}> Book Cover</Link>
              </li>
              <li>
                <Link to={"/book-editing"}> Editing</Link>
              </li>
              <li>
                <Link to={"/author-web-design"}> Author Web Design</Link>
              </li>
              <li>
                <Link to={"/about-us"}> About Us</Link>
              </li>
              <li>
                <Link to={"/contact-us"}> Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <Outlet />
      <Footer />
    </>
  );
}

export default Navbar;
