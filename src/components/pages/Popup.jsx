import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
function Popup() {
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
            className="fa-solid fa-xmark text-center flex flex-col justify-center items-center  bg-[#a44099] w-[30px] h-[30px] p-[1px] rounded-[4px]  cursor-pointer"
            onClick={() => SetOpenModal(false)}
          ></i>
        </DialogActions>
        <DialogContent>
          <div className="popupform">
            <h2>
              Get Ready To <br />
              Become a Bestseller!
            </h2>
            <form className="xl:py-3 flex flex-col justify-start items-start">
              <input
                type="text"
                className=" xl:mb-[20px] mb-[15px] text-black  w-[300px] p-[10px]
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, name: e.target.value });
                }}
              />
              <input
                type="number"
                className=" xl:mb-[20px] mb-[15px]  w-[300px] p-[10px] text-black
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Number"
                required
                onChange={(e) => {
                  SetClientData({ ...ClientData, number: e.target.value });
                }}
              />
              <input
                type="email"
                className=" xl:mb-[20px] mb-[15px]  w-[300px] p-[10px] text-black
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
      </Dialog>
    </>
  );
}

export default Popup;
