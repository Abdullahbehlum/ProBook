import { Suspense, lazy, useEffect, useState } from "react";
import IconAbout from "../../assets/images/exellent.webp";
import BookBanner from "../../assets/images/our-journey.webp";
import { Dialog, DialogActions, DialogContent } from "@mui/material";
import { Link } from "react-router-dom";
import { firebaseConfig } from "../config/Config";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { toast } from "react-toastify";
function Aboutus() {
  const Contact = lazy(() => import("../pages/other sections/Contact"));
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
      <div
        className={`fixed inset-0 transition-all duration-75  flex xl:justify-start xl:items-start justify-center items-center 
         xl:my-6 my-24
 ml-4 xl:mx-0   bg-poup xl:z-[999] z-[60] xl:h-auto h-[480px] xl:w-[850px] w-[330px] ${
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
                className="mb-5 text-black xl:w-[380px] w-[290px] p-4 border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Name"
                required
                value={ClientData.name}
                onChange={(e) =>
                  SetClientData({ ...ClientData, name: e.target.value })
                }
              />
              <input
                type="number"
                className="mb-5 xl:w-[380px] w-[290px] p-4 text-black border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Number"
                required
                value={ClientData.number}
                onChange={(e) =>
                  SetClientData({ ...ClientData, number: e.target.value })
                }
              />
              <input
                type="email"
                className="mb-5 xl:w-[380px] w-[290px] p-4 text-black border border-[#00838c] focus:border-[#00838c] hover:border-[#00838c] outline-[#00838c]"
                placeholder="Email Address"
                required
                value={ClientData.email}
                onChange={(e) =>
                  SetClientData({ ...ClientData, email: e.target.value })
                }
              />

              <button className="btn xl:w-auto w-[290px] uppercase">
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
      <section className="bg-about  ">
        <h1 className="head-h2 font-bold  mb-[22px]">
          Pro Book Writer is the hub of <br className="mb-hide" /> skilled and
          creative writers
        </h1>
        <p className="mb-[22px] font-semibold">
          At Pro Book Writer, we have the most brilliant and experienced authors
          who are <br className="mb-hide" /> adaptable and who specialize in a
          variety of book genres, if not all of them!
        </p>
        <div className="flex  xl:flex-row flex-col md:flex-row sm:flex-row mb-[30px]">
          <div>
            <button
              onClick={() => SetOpenModal(true)}
              className="btn xl:w-auto w-full rounded-[50px] mb-4 xl:mb-0 "
            >
              Get a Free Quote
            </button>
            <button
              onClick={handleLiveChatClick}
              className="live-chat xl:mx-4 xl:w-auto w-full rounded-[50px]"
            >
              Live Chat
            </button>
          </div>
        </div>
        <div>
          <img src={IconAbout} alt="No" className="object-cover " />
        </div>
      </section>
      <section className="uniquearea  text-center flex flex-col justify-center items-center mb-[50px]">
        <h2 className="head-h2 font-semibold text-center pt-6 xl:pt-1  xl:mb-[30px] mb-[12px]">
          Everyone has a success story to tell
        </h2>
        <p className="xl:w-[760px] w-auto mx-5 xl:mx-0 xl:mb-[30px] mb-[12px]">
          We assure quality content. Our creative team of ghostwriters takes
          pride in providing you with relevant content, making sure that your
          aspirations are bought to life. Pro Book Writer is a promising
          ghostwriting service provider that is well-known to pull off ideas
          just how the author wants them to be. Our execution of the writing
          process depends on how briefly you describe your vision to us. In
          order to get your idea executed properly, you need to communicate your
          vision clearly.
        </p>
        <div className="flex  xl:flex-row flex-col md:flex-row sm:flex-row mb-[30px]">
          <div>
            <button
              onClick={() => SetOpenModal(true)}
              className="btn xl:w-auto w-full rounded-[50px] mb-4 xl:mb-0 "
            >
              Get a Free Quote
            </button>
            <button
              onClick={handleLiveChatClick}
              className="live-chat xl:mx-4 xl:w-auto w-full rounded-[50px]"
            >
              Live Chat
            </button>
          </div>
        </div>
        <div>
          <img src={BookBanner} className="w-full object-fill" />
        </div>
      </section>
      <section className="bg-accom mt-[-3em] xl:mt-[-9em] ">
        <div className="flex justify-evenly items-center xl:flex-row md:flex-row sm:flex-row flex-col ">
          <div className="mx-5 xl:mx-6 xl:w-[850px] sm:w-[460px] w-auto md:w-[450px] ">
            <h1 className="xl:text-[42px]  text-[28px] leading-[38px] text-[#333] mx-0 text-center xl:text-left mb-[20px]  font-bold pt-12 xl:pt-0">
              Our <br className="mb-hide" /> accomplishments
            </h1>
            <p className="paragraph text-balance mb-[15px]">
              We are a prestigious and well-respected ghostwriting firm, having
              to serve a variety of clients, we have dusted every nook and
              cranny of the industry when it comes to ghostwriting a book. Our
              clients include aspiring and established independent authors,
              editorial and publishing firms, small and large businesses, and
              college and university students. Our services include ghostwriting
              your book from scratch, editing your manuscripts, and book
              publications. It doesn’t matter what you are looking for, we have
              got you covered.
            </p>

            <button
              onClick={handleLiveChatClick}
              className="nav-btn xl:w-auto w-full mb-4 xl:mb-0"
            >
              <Link to={"javascript:"}>GET IN TOUCH WITH US</Link>
            </button>
          </div>
          <div></div>
          <div className="mb-[5px] xl:mb-0 md:mb-0 sm:mb-0 publish-col-2  mx-5">
            <div className="info-expert w-[300px] xl:w-auto">
              <span>
                <i className="fas fa-check"></i>
              </span>
              <h1 className="text-[33px] text-left relative left-[-2em] font-semibold">
                15+
              </h1>

              <h4>Years in the Industry</h4>
            </div>

            <div className="info-expert w-[300px] xl:w-auto">
              <span>
                <i className="fas fa-check"></i>
              </span>
              <h1 className="text-[33px] text-left relative left-[-1.6em] font-semibold">
                1000+
              </h1>

              <h4>Books Ghostwritten</h4>
            </div>

            <div className="info-expert w-[300px] xl:w-auto">
              <span>
                <i className="fas fa-check"></i>
              </span>
              <h1 className="text-[33px] text-left relative left-[-2em] font-semibold">
                150+
              </h1>

              <h4>Internationally Acclaimed Titles</h4>
            </div>
            <div className="info-expert w-[300px] xl:w-auto">
              <span>
                <i className="fas fa-check"></i>
              </span>
              <h1 className="text-[33px] text-left relative left-[-2em] font-semibold">
                350+
              </h1>

              <h4>Professional Writers</h4>
            </div>
          </div>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Aboutus;
