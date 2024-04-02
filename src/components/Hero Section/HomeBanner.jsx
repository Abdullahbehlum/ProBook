import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";
import Serviceimg from "../../assets/images/services.webp";
import Trustiplot from "../../assets/images/trustpilot.webp";
import Bark from "../../assets/images/bark.webp";
import Clush from "../../assets/images/clutch.webp";
import Sitejob from "../../assets/images/site-jabbar.svg";
import "../styles/HireProfessional.css";
import Rating from "../../assets/images/rating-half.webp";
import { Link } from "react-router-dom";
import { firebaseConfig } from "../config/Config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "../styles/Popup.css"
function HomeBanner() {
  const [OpenModal, SetOpenModal] = useState(false);
  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });
  // Database connection is given
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "clients"), ClientData);
      console.log(docRef);
      toast.success("Message send successfully!");
      SetClientData({ name: "", email: "", number: "" });
      return true;
    } catch (error) {
      toast.error("Failed to submit form. Please try again later.");
    }
  };
  // Database connection is End
  useEffect(() => {
    setTimeout(() => {
      SetOpenModal(true);
    }, 2500);
  }, []);
  return (
    <>
    {/* xl:z-[999] z-[60] xl:h-auto h-[480px]  xl:w-[850px] w-[400px] */}
      <div
        className={`fixed inset-0 transition-all duration-75  flex xl:justify-start xl:items-start justify-center items-center 
         xl:my-6 my-24
 ml-4 xl:mx-0   bg-poup  ${
   OpenModal ? "block" : "hidden"
 } xl:ml-[14em]`}
      >
        <div className="popupform xl:py-24 xl:px-12 py-12  px-4 ">
          <div>
            <h2 className="text-black xl:text-white head-h2 font-bold mb-5">
              Get Ready To <br />
              Become a Bestseller!
            </h2>
            <form
              onSubmit={handleFormSubmit}
              className="xl:py-3 flex flex-col justify-start items-start"
            >
              <input
                type="text"
                className="mb-5 text-black xl:w-[380px] w-full p-4 border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
                value={ClientData.name}
                onChange={(e) =>
                  SetClientData({ ...ClientData, name: e.target.value })
                }
              />
              <input
                type="number"
                className="mb-5 xl:w-[380px] w-full p-4 text-black border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Number"
                required
                value={ClientData.number}
                onChange={(e) =>
                  SetClientData({ ...ClientData, number: e.target.value })
                }
              />
              <input
                type="email"
                className="mb-5 xl:w-[380px] w-full p-4 text-black border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Email Address"
                required
                value={ClientData.email}
                onChange={(e) =>
                  SetClientData({ ...ClientData, email: e.target.value })
                }
              />

              <button className="btn  uppercase">
                Submit
              </button>
            </form>
            <i
              className="fa-solid fa-xmark text-center flex justify-center
         items-center xl:mt-12 mt-6 xl:mx-16 ml-1 mx-5 xl:ml-0 bg-[#a44099] text-white
          w-[35px] h-[30px] rounded-[4px] cursor-pointer absolute top-0 right-0"
              onClick={() => SetOpenModal(false)}
            ></i>
          </div>
        </div>
      </div>

      <section className="bg-banner">
        <div className="flex justify-around text-white item-center xl:flex-row md:flex-row sm:flex-row flex-col">
          <div className="xl:ml-12 mx-2">
            <h1 className="big-head">
              Collaborate With The Best Book
              <span className="frist-span text-[#1cf0fd] space-0 ">
                <Typewriter
                  options={{
                    autoStart: true,
                    strings: ["Writing", "Publishing", "Marketing"],
                    loop: true,
                    delay: 50,
                  }}
                />
              </span>
              Services In USA
            </h1>
            <p className="para xl:mb-[30px] mb-6 xl:w-[580px]">
              When we get your manuscript the first priority set by our expert
              online book writers for the project is elevating the literature.
              <br className="mb-hide" /> Connect with a creative and affordable
              book writing agency, a team of professionals who have the
              expertise to bring your aspirations to life. Hire custom book
              writers that can help you convert your big dreams into pleasant
              reality.
            </p>
            <button
              className="btn w-full xl:w-auto mb-2 xl:mb-0 xl:mx-2 mx-0 "
              onClick={() => SetOpenModal(true)}
            >
              Get a Free Quote
            </button>
            <br className="block xl:hidden md:hidden sm:hidden" />
            <button className="btn w-full xl:w-auto mb-2 xl:mb-0">
              <Link
                to={
                  "https://www.bark.com/en/us/company/the-writers-tree/NXj97/"
                }
                target="_blank"
              >
                Live Chat
              </Link>
            </button>
            <div className="mb-hide my-8">
              <div className="flex justify-around mb-[20px] items-center xl:flex-row md:flex-row flex-col sm:flex-row">
                <div className="w-[100px] mx-1">
                  <img src={Trustiplot} alt="No" className="object-cover" />
                </div>
                <div className="w-[100px]  mx-1">
                  <img src={Bark} alt="No" className="object-cover" />
                </div>
                <div className="w-[100px]  -ml-1">
                  <img src={Clush} alt="No" className="object-cover" />
                </div>
                <div className="w-[120px] mx-1">
                  <img src={Sitejob} alt="No" className="object-cover" />
                </div>
              </div>
              <div className="flex justify-around  items-center xl:flex-row md:flex-row flex-col sm:flex-row">
                <div>
                  <div className="flex">
                    <h4 className="text-[26px] font-semibold">4.6</h4>
                    <div className="text-center">
                      <img src={Rating} alt="no" className="w-[100px] mx-1" />
                      Rating
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <h4 className="text-[26px] font-semibold">5.0</h4>
                    <div className="text-center">
                      <img src={Rating} alt="no" className="w-[100px] mx-1" />
                      Rating
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <h4 className="text-[26px] font-semibold">5.0</h4>
                    <div className="text-center">
                      <img src={Rating} alt="no" className="w-[100px] mx-1" />
                      Rating
                    </div>
                  </div>
                </div>
                <div>
                  <div className="flex">
                    <h4 className="text-[26px] font-semibold">4.9</h4>
                    <div className="text-center">
                      <img src={Rating} alt="no" className="w-[100px] mx-1" />
                      Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:w-[600px] w-[300px] ">
            <img src={Serviceimg} alt="Not" className="object-cover" />
          </div>
        </div>
      </section>
    </>
  );
}

export default HomeBanner;
