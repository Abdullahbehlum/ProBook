import React, { Suspense, lazy, useEffect, useState } from "react";
import "../../../styles/CaseStudies.css";
// Case study images is given
import Case1 from "../../../../assets/images/14.png";
import Case2 from "../../../../assets/images/15.png";
import Case3 from "../../../../assets/images/16.jpeg";
import Case4 from "../../../../assets/images/26.jpeg";
import Case5 from "../../../../assets/images/27.jpeg";
import Case6 from "../../../../assets/images/01.jpeg";
import Case7 from "../../../../assets/images/17.jpeg";
import Case8 from "../../../../assets/images/18.jpeg";
import Case9 from "../../../../assets/images/19.jpg";
import Case10 from "../../../../assets/images/09.jpeg";
import Case11 from "../../../../assets/images/23.jpeg";
import Case12 from "../../../../assets/images/24.jpeg";
import Case13 from "../../../../assets/images/25.jpeg";
import Case15 from "../../../../assets/images/20.jpeg";
import Case16 from "../../../../assets/images/21.jpeg";
import Case17 from "../../../../assets/images/22.jpeg";
import Case18 from "../../../../assets/images/01.jpeg";
import Case19 from "../../../../assets/images/04.jpg";
import Case20 from "../../../../assets/images/06.jpeg";
import Case21 from "../../../../assets/images/12.jpeg";
import Case22 from "../../../../assets/images/13.jpeg";

import UserProfile from "../../../../assets/images/user_img.png";
import UserProfile5 from "../../../../assets/images/03.png";
import UserProfile6 from "../../../../assets/images/11.jpeg";
import UserProfile7 from "../../../../assets/images/05.jpg";
import UserProfile8 from "../../../../assets/images/08.jpg";
import { useMediaQuery } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../../../config/Config";
import { toast } from "react-toastify";
// Case study images is End
function CaseStudies() {
  const Contact = lazy(() => import("../../other sections/Contact"));
  const Mobile = useMediaQuery("(max-width:700px)");
  const navigate = useNavigate();
  const [OpenModal, SetOpenModal] = useState(false);
  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });
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
  useEffect(() => {
    const s1 = document.createElement("script");
    const s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/65fdade3a0c6737bd123b4ad/1hpjeuhgs";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
    return () => {
      s1.parentNode.removeChild(s1);
    };
  }, []);

  const handleLiveChatClick = () => {
    if (typeof Tawk_API !== "undefined") {
      Tawk_API.toggle();
    }
  };
  return (
    <>
      {/* onClick={() => {
                navigate("/glady-gsriffin"), window.scrollTo(0, 0);
              }}
  */}

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
      <section>
        <div className="text-center xl:my-8 my-4 mx-6 xl:mx-0 ">
          <h1 className="head-h2 font-bold mb-[10px]">
            Our authors have stories to tell
          </h1>
          <p className=" text-balance">
            <span className="text-[#015b71] font-bold">Pro Book Writer</span>{" "}
            helped bring them to life
          </p>
        </div>
        <div className="xl:mx-8 my-12 xl:my-16">
          <div
            className="grid grid-cols-1 xl:grid-cols-3 sm:grid-cols-3 md:grid-cols-2  *:xl:w-[400px] *:w-[300px]   grid-flow-row place-content-center 
           xl:my-4 my-2   place-items-center gap-[50px]"
          >
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/steven-waterfield"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case4}
                  alt="No"
                  className="object-left-bottom xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>423</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>A Book That Gives –The Real Life Adventures of Stew</h4>
                  <p className="text-[14px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Steven M. Waterfield’s The Real Life Adventures of Stew is a
                    book that gives us a lot of things. Written in a style that
                    makes it harder to put down once you have picked it up,
                    Waterfield writes. about his adventures for people who have
                    experienced loss.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div>
                      <img src={UserProfile} alt="No" className="w-[50px]" />
                    </div>
                    <div className="mt-2">
                      <h3>Jay Borden</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/waltere-asili"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case5}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>831</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    Embracing the Power of Sex: Unlocking a Journey of
                    Fulfillment
                  </h4>
                  <p className=" text-[14px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Sex is both enjoyable and destructive. It brings fulfillment
                    and displeasure. This is the most joyous act on earth, but
                    can also be the most destructive." - Waltere Asili Koti In a
                    world where sexual needs affect everything.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div>
                      <img src={UserProfile} alt="No" className="w-[50px]" />
                    </div>
                    <div className="mt-2">
                      <h3>Waltere Asili Koti</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/susan-wilson"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case6}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>274</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    Choosing the Perfect Guide: Unleashing the Best Dog Trainer
                  </h4>
                  <p className="text-[14px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Welcoming a dog into your family is an extraordinary
                    experience, but it also comes with its fair share of
                    challenges. From obedience training to addressing behavioral
                    issues, finding the right dog trainer.can make a difference
                    in nurturing a strong.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile5}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Susan Wilson</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/jeancomito"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case7}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>158</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    From Stay-at-Home Mom to Published Author: The Inspiring
                    Journey of Jean
                  </h4>
                  <p className="text-[14px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    There have been many highs and lows in Jean Comito Gurny's
                    life, but her love of writing has never wavered. Jean, the
                    youngest of three girls, was up in the Bronx, New York, and
                    was taught the importance of being trustworthy.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Jean Comito Gurny</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/jimmy-haddad"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case8}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>789</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    The Power of Faith and Prayer: A Journey Through Heaven and
                    Hell
                  </h4>
                  <p className="text-[14px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    My Journey through Heaven and Hell" is a book that takes
                    readers on a journey of self-discovery, spiritual growth,
                    and transformation. Jimmy Haddad's experience provides
                    readers with a unique perspective.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Jimmy Haddad</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/joe-woods"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case9}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>312</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    The Adventures of Cat & Hamster: Where Fun and Learning
                  </h4>
                  <p className="text-[14px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Looking for a children's book series that will entertain and
                    educate your little ones? Look no further than "The
                    Adventures of Cat & Hamster" by Joe Woods Jr. This
                    delightful collection of stories is designed to spark.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Joe Woods</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/katy-mack"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case15}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>318</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>The Outsider’s Perspective Logan</h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Books with the themes of trauma, recovery, and loss are
                    often very difficult to read, not in terms of reading
                    comprehension but more so because of their heavy nature. But
                    there’s one book that breaks that routine.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Katy Mack</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/kelly-grennan"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case16}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>546</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>The Goat That Escaped and Survived</h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    People are complicated beings, which makes relationships
                    with them also complicated. Whether it’s a romantic,
                    platonic, or familial relationship, it is inevitable to have
                    ups and downs —good moments and bad. Sometimes you hurt
                    someone else.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Kelly Grennan</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/michael-reza"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case17}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>742</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>Michael Reza – A Multi-Faceted Icon</h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Real estate is an industry that has been in the works for as
                    long as people started settling in communities and in proper
                    houses. With times and traditions changing like the seasons,
                    this industry also saw its own evolution.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Michael Reza</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="case-box  hover:scale-[1.055] cursor-pointer   transition-all overflow-hidden "
              onClick={() => {
                navigate("/david-carter"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case10}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>312</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    The God Conundrum: Reflections on a Universal Perspective
                  </h4>
                  <p className="text-[14px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    While talking about God, it seems that most people envision
                    a watchful deity who scrutinizes our every move on Earth.
                    Our Mysterious Lives by David A. Carter explores the enigma
                    that is our existence and the mysteries that
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile6}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>David A Carter</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/john-jacobs"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case21}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>312</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>Embracing Your Dreams: A Journey of Faith and Purpose</h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    In the midst of life's uncertainties, it's all too easy to
                    lose sight of our dreams and the purpose that God has in
                    store for each of us. Yet, deep within us, there is a
                    flicker of hope and a longing to fulfill our true calling.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Dr. John L. Jacobs</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/em-johnson"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case22}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>312</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    Finding Strength in Faith Imperfect Lives, Perfect Grace
                  </h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    There are many people’s stories in our lives that we come
                    across that inspire us, whether to be a better person, to
                    work harder, or to grow into a better version of ourselves,
                    depending on our circumstances in life.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>EM Johnson</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/pam-stevens"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case11}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>312</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    Finding Strength in Faith Imperfect Lives, Perfect Grace
                  </h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    There are many people’s stories in our lives that we come
                    across that inspire us, whether to be a better person, to
                    work harder, or to grow into a better version of ourselves,
                    depending on our circumstances in life.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>EM Johnson</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/rick-kauffman"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case12}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>852</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>The Love of Patricia and Kevin — Exiled</h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Falling in love with the person who saved your life and
                    having it reciprocated is not an experience many of us have
                    had, but the same can’t be said about Patricia Anne
                    Albertson, one of the characters in Rick Kauffman’s. third
                    and latest book, Exiled: The Life and Times of Kevin
                    Jamison.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Rick Kauffman</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/taras-chubenko"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case13}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>901</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>Knowing Yourself, leads to Knowing God</h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Rt. Rev. Dr. Taras Chubenko’s book, “Connecting to God: A
                    Journey Over 50 Years,” explores the significance of
                    introspection and self-discovery in the search for spiritual
                    enlightenment. The chapter emphasizes that the first step.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Dr.Taras Chubenko</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/glady-gsriffin"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case1}
                  alt="No"
                  className="object-left-bottom xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>896</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    An Olive Branch in Her Time of Need —God’s Grace is
                    Sufficient for Me
                  </h4>
                  <p className=" text-[14px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    God’s Grace is Sufficient for Me is a book that tells the
                    journey of Gladys H. Griffin as she suffered through five
                    illnesses at the same time during the year 2020, and it is
                    only because God bestowed his grace on her that she made it
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div>
                      <img src={UserProfile} alt="No" className="w-[50px]" />
                    </div>
                    <div className="mt-2">
                      <h3>Gladys Griffin</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]    transition-all overflow-hidden "
              onClick={() => {
                navigate("/greg-johnson"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case2}
                  alt="No"
                  className="object-left-bottom xl:w-[400px] w-[300px] xl:h-[399px] "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>196</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    The King of Charnley Farm: Unraveling the Mysteries of a
                    Peculiar Place
                  </h4>
                  <p className="text-[14.6px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    The King of Charnley Farm" by Greg E. Johnson is an exciting
                    story of discovery and adventure. Charles Brack, on behalf
                    of the Entomology Society of London, searches Charnley Farm
                    for a mysterious bee species.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div>
                      <img src={UserProfile} alt="No" className="w-[50px]" />
                    </div>
                    <div className="mt-2">
                      <h3>Gladys Griffin</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/jay-borden"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case3}
                  alt="No"
                  className="object-left-bottom xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>163</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>A Book That Gives –The Real Life Adventures of Stew</h4>
                  <p className="text-[14px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Learning about sustainable farming is not just about growing
                    crops. It's about cultivating a deep connection to nature
                    and the world around us.In a world where children are
                    becoming increasingly disconnected from the source.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div>
                      <img src={UserProfile} alt="No" className="w-[50px]" />
                    </div>
                    <div className="mt-2">
                      <h3>Jay Borden</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/susan-wilson"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case18}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>456</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    Choosing the Perfect Guide: Unleashing the Best Dog Trainer
                  </h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Welcoming a dog into your family is an extraordinary
                    experience, but it also comes with its fair share of
                    challenges. From obedience training to addressing behavioral
                    issues, finding the right dog trainer.can make a difference
                    in nurturing a strong.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile5}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Susan Wilson</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/beverly-ahlering-saltonstall"),
                  window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case19}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>105</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    These Amusing Facts is Why You Should Read Saltonstall’s New
                    Book!
                  </h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[12px]">
                    Beverly Ahlering Saltonstall’s new book, Cape Coral
                    Burrowing Owls Don’t Hoot is all about the resident winged
                    friends of Cape Coral —the burrowing owls! Saltonstall,
                    being an enthusiast when it comes to interesting birds.
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap  ">
                    <div className="mr-1">
                      <img
                        src={UserProfile7}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Beverly Ahlering Saltonstall</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="case-box  hover:scale-[1.055]   transition-all overflow-hidden "
              onClick={() => {
                navigate("/charles-hill"), window.scrollTo(0, 0);
              }}
            >
              <figure className="mb-[10px]">
                <img
                  src={Case20}
                  alt="No"
                  className="object- xl:w-[400px] w-[300px] xl:h-[400px]  "
                />
              </figure>
              <div className="case_body cursor-pointer ">
                <div className="xl:mb-[8px] mb-[10px] xl:mx-2">
                  <i className="fa fa-eye text-black" aria-hidden="true"></i>{" "}
                  <span>186</span>
                  &nbsp;&nbsp;
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div>
                  <h4>
                    The Return of Jesus Christ: A Glorious Revelation by Charles
                    Hill
                  </h4>
                  <p className="text-[14.3px] font-normal flex justify-center items-center flex-col mb-[16px]">
                    Are you ready for a trip that will change the course of
                    humanity for all time? "The Return of Jesus Christ" by the
                    famous author Charles Hill is all you need to know. In this
                    interesting book, Charles Hill
                  </p>
                </div>
                <div>
                  <div className="flex flex-row flex-wrap mb-3 ">
                    <div className="mr-1">
                      <img
                        src={UserProfile8}
                        alt="No"
                        className="w-[40px] rounded-[50%]"
                      />
                    </div>
                    <div className="mt-2">
                      <h3>Charles Hill</h3>
                      <span>Author</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="xl:mt-12 mt-16 mx-6 xl:mx-1">
            <h1 className="head-h2 font-bold mb-[12px]">
              11,000 books and counting
            </h1>
            <p className="text-slate-500 ">
              Over the past three years, thewriterstree has helped thousands of
              authors realize their publishing potential by partnering them with
              industry professionals. Editors have polished rough manuscripts
              into glittering final drafts, designers have prepared books to be
              judged by their covers, and marketers have placed titles at the
              top of Amazon’s rankings.
            </p>
            <div className="flex xl:flex-row flex-col xl:my-4 my-2">
              <button
                className="nav-btn mb-3 xl:mb-0 relative "
                style={{
                  width: Mobile ? "380px" : "auto",
                  right: Mobile ? "2%" : "0%",
                }}
                onClick={() => SetOpenModal(true)}
              >
                Get a Free Quote
              </button>
              <button
                onClick={handleLiveChatClick}
                className="live-chat xl:mx-3"
              >
                Live Chat
              </button>
            </div>
          </div>
        </div>
        <Suspense fallback={<></>}>
          <Contact />
        </Suspense>{" "}
      </section>
    </>
  );
}

export default CaseStudies;
