import React, { useEffect, useState } from "react";
import "../../styles/Blog.css";
import Blog1 from "../../../assets/images/blog-1.webp";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";
import { firebaseConfig } from "../../config/Config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import "../../styles/Popup.css";
function Blog() {
  const [OpenModal, SetOpenModal] = useState(false);
  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const navigate = useNavigate();
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
      <div
        className={`fixed inset-0 transition-all duration-75  flex xl:justify-start xl:items-start justify-center items-center 
         xl:my-6 my-24
 ml-4 xl:mx-0   bg-poup  ${OpenModal ? "block" : "hidden"} xl:ml-[14em]`}
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

              <button className="btn  uppercase">Submit</button>
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
      <section className="bg-blog">
        <div className="xl:w-[800px] w-auto xl:ml-12 ml-4">
          <div className="block xl:hidden md:hidden sm:hidden">
            <div className="banner-star">
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <i className="fa fa-star"></i>
              <h4>100% Statisfaction Gauranteed</h4>
            </div>
          </div>
          <h2 className="xl:text-[40px] text-[28px] font-bold mb-[5px]">
            Blog
          </h2>
          <p className="xl:mb-[15px] mb-1">
            Welcome to the hub of ideas, solutions, and ruminations of all
            things writing, from writing a book to its publication. Leveraging
            the expertise and experience of hundreds of writers, editors and
            literary professionals to bring you fresh, crisp, and useful
            knowledge about the literary world.
          </p>
          <button onClick={() => SetOpenModal(true)} className="nav-btn">
            Get Started
          </button>
        </div>
      </section>
      <section>
        <div
          onClick={() => navigate("/book-blog")}
          className="xl:block flex flex-col justify-center items-center xl:mx-5"
        >
          <div className="bg-white shadow-2xl xl:w-[400px] p-[10px] rounded-lg cursor-pointer text-center w-[300px]  ">
            <img
              src={Blog1}
              alt="No"
              className="xl:w-[400px] w-[300px] object-cover mb-2 rounded-lg "
            />
            <h4
              className="font-semibold text-[14px]"
              style={{ color: "#6e6e6e" }}
            >
              How Do I Find Someone to Help Me Write a Book?
            </h4>
          </div>
        </div>
      </section>
    </>
  );
}

export default Blog;
