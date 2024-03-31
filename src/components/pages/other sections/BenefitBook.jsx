import React, { useState } from "react";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";
import Person from "../../../assets/images/about_girl_44.webp";
import Abouticon1 from "../../../assets/images/about_img1.png";
import Abouticon2 from "../../../assets/images/about_img2.png";
import Abouticon3 from "../../../assets/images/about_img3.png";
import Abouticon4 from "../../../assets/images/about_img4.png";
function BenefitBook() {
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
      <section className="benefit-bg ">
        <div className="flex xl:flex-row sm:flex-row md:flex-row flex-col">
          <div className="mb-hide">
            <img
              data-aos="fade-up"
              src={Person}
              alt="No"
              className="w-[900px]  object-fill "
            />
          </div>
          <div
            className=" text-white py-5 overflow-hidden  mx-4 xl:mr-[74px]"
            data-aos="fade-up"
          >
            <h1 className="xl:text-[39px] text-[29px] font-bold mb-[20px]">
              What Benefits Does A Professional Book Writing Agency Bring to You
              ?
            </h1>
            <p className="xl:w-[720px] mb-5">
              We started as an online book writing services, with the aim of
              serving aspiring authors with affordable ghost book writing
              company, ensuring that your book outshines the book publishing
              industry. You can trust us when it comes to getting expert book
              advice on your write-ups. Get your very own best book, edited
              according to the latest industry trends by the best online book
              writing services in the USA. Professional ghost bookwriters who
              are dedicated to fulfilling your writing needs, whether it’s
              fiction, non-fiction, horror, or a reality-based book that you
              want to put out in the book industry.
            </p>
            <div className=" col-4 text-black xl:mt-8 mt-4 ">
              <div className="about_box">
                <div className="about_icon">
                  <img src={Abouticon1} alt="No" className="object-cover" />
                </div>
                <h3>
                  Quality Over <br className="mb-hide" /> Anything
                </h3>
              </div>

              <div className="about_box">
                <div className="about_icon">
                  <img src={Abouticon2} alt="No" className="object-cover" />
                </div>
                <h3>
                  Timely <br className="mb-hide" /> Delivery
                </h3>
              </div>

              <div className="about_box">
                <div className="about_icon">
                  <img src={Abouticon3} alt="No" className="object-cover" />
                </div>
                <h3>
                  Cost-Effective <br className="mb-hide" />
                  Packages
                </h3>
              </div>

              <div className="about_box">
                <div className="about_icon">
                  <img src={Abouticon4} alt="No" className="object-cover" />
                </div>
                <h3>
                  Royalties <br className="mb-hide" />
                  Delivered
                </h3>
              </div>
            </div>
            <button
              className="btn mx-5 xl:mx-0 my-3 xl:my-0 "
              onClick={() => SetOpenModal(!OpenModal)}
            >
              Get a Free Quote
            </button>
          </div>
        </div>
      </section>
    </>
  );
}

export default BenefitBook;
