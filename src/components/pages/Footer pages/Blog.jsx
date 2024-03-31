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
            <form
              onSubmit={(e) => handleFormSubmit(e)}
              className="xl:py-3 flex flex-col justify-start items-start"
            >
              <input
                type="text"
                className=" xl:mb-[20px] mb-[15px] text-black xl:w-[300px] w-full p-[10px] 
                   border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
                value={ClientData.name}
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
                value={ClientData.number}
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
                value={ClientData.email}
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
