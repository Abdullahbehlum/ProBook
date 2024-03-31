import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";

function Anoucementbar() {
  const [OpenModal, SetOpenModal] = useState(false);
  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });
  return (
    <>
      <Dialog open={OpenModal}>
        <DialogActions>
          <i
            className="fa-solid fa-xmark text-center flex flex-col justify-center items-center mt-4 xl:mt-0 mr-1 xl:mr-0  bg-[#a44099] w-[30px] h-[30px] p-[1px] rounded-[4px]  cursor-pointer"
            onClick={() => SetOpenModal(false)}
          ></i>
        </DialogActions>
        <DialogContent>
          <div className="popupform">
            <h2 className="text-black xl:text-white font-bold mb-[10px]">
              Get Ready To <br />
              Become a Bestseller!
            </h2>
            <form className="xl:py-3 flex flex-col justify-start items-start">
              <input
                type="text"
                className=" xl:mb-[20px] mb-[15px] text-black xl:w-[300px] w-full p-[10px] 
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, name: e.target.value });
                }}
              />
              <input
                type="number"
                className=" xl:mb-[20px] mb-[15px] xl:w-[300px] w-full p-[10px] text-black
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Number"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, number: e.target.value });
                }}
              />
              <input
                type="email"
                className=" xl:mb-[20px] mb-[15px] xl:w-[300px] w-full p-[10px] text-black
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Email Address"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, email: e.target.value });
                }}
              />

              <button className="popup-btn uppercase xl:relative xl:left-[0.2em] ">
                Submit
              </button>
            </form>
          </div>
        </DialogContent>
      </Dialog>{" "}
      <div className="mb-hide">
        <div className="flex justify-end items-center xl:flex-row md:flex-row sm:flex-row flex-col px-3">
          <div>
            <span className="mx-1 cursor-pointer text-[15px]">
              <i className="fa-solid fa-phone px-2"></i>
              <span>
                <Link to={"tel:+718516-5017"}>(718) 516-5017</Link>
              </span>
            </span>
            <span className="mx-4 cursor-pointer text-[15px]">
              <i className="fa fa-envelope mr-2"></i>
              <span>
                <Link to={"mailto:info@thewriterstree.com"}>
                info@thewriterstree.com
                </Link>
               </span>
            </span>
            <span>
              <button
                className="nav-btn cursor-pointer"
                onClick={() => SetOpenModal(!OpenModal)}
              >
                Request a Quote
              </button>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Anoucementbar;
