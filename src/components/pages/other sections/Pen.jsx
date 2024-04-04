import ScienceFiction from "../../../assets/images/science-fiction.gif";
import Guest from "../../../assets/images/guest.gif";
import Feathers from "../../../assets/images/feather-1.gif";
import Book from "../../../assets/images/book.gif";
import Scroll1 from "../../../assets/images/scroll-1.gif";
import Onlineclass from "../../../assets/images/online-class.gif";
import { useEffect } from "react";
import { Link } from "react-router-dom";
function Pen() {
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
      <div className="flex justify-evenly items-center xl:flex-row md:flex-row sm:flex-row flex-col uniquearea">
        <div className="xl:mx-5 mx-4 xl:w-[95%] sm:w-[460px] w-auto md:w-[450px]">
          <h1 className="head-h2 font-bold">
            Custom Ghostwriting Agency That Aims to Create Masterpieces for You!
          </h1>
          <p className="para mb-3">
            Do you have an experience that you want to share with the readers
            worldwide? Have you also been looking for a top ghostwriting agency
            in the USA? Look no further, Professional ghostwriters is a team
            that offers you custom ghostwriting solutions to help you
            efficiently write your stories so that you can live what you have
            been dreaming of as an author. Getting your ideas ghostwritten does
            not enhance your concept of the story but helps you enhance the
            literature of your art piece.
          </p>
          <p className="para mb-3">
            Your book needs to have authenticity in the content included, your
            readers must indulge in the scenarios that your book portrays, and
            for that, you need a supportive ghostwriting creative to help you
            with everything that needs to be taken care of concerning the
            literature of your book.
          </p>
          <p className="para mb-3">
            It may be tough work to delete a published book, so you should know
            that your book needs top-notch ghostwriters before it reaches the
            stage of publication. Hire top ghostwriters in the USA and ensure
            the highest quality of your book before releasing it to a worldwide
            audience.
          </p>
          <p className="para mb-3">
            To make a name for yourself in the book publishing market, team up
            with the top ghostwriting services online! Collaborate with a
            professional ghostwriter service online and put your worries about
            literary issues to rest.
          </p>
          <button
            onClick={handleLiveChatClick}
            className="btn mb-4 transition-all"
          >
            <Link to={"javascript:"}>Let's Talk</Link>
          </button>
        </div>
        <div>
          {/* 1 row */}
          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col xl:mb-3 mb-0 xl:mx-3 mx-2">
            <div className="hire_box">
              <img
                src={ScienceFiction}
                alt="Not Found"
                className="w-[30%] mb-[5px]"
              />
              <h3>FICTION</h3>
            </div>
            <div className="hire_box">
              <img src={Guest} alt="Not Found" className="w-[30%] mb-[5px]" />
              <h3>AUTOBIOGRAPHY</h3>
            </div>
          </div>
          {/* 2 row */}
          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col xl:mb-3 mb-0 xl:mx-3 mx-2">
            <div className="hire_box">
              <img
                src={Feathers}
                alt="Not Found"
                className="w-[30%] mb-[5px]"
              />
              <h3>POETRY</h3>
            </div>
            <div className="hire_box">
              <img src={Book} alt="Not Found" className="w-[30%] mb-[5px]" />
              <h3>NONFICTION</h3>
            </div>
          </div>
          {/* 3 row */}
          <div className="flex xl:flex-row md:flex-row sm:flex-row flex-col xl:mb-3 mb-0 xl:mx-3 mx-2">
            <div className="hire_box">
              <img src={Scroll1} alt="Not Found" className="w-[30%] mb-[5px]" />
              <h3>MEMOIR</h3>
            </div>
            <div className="hire_box">
              <img
                src={Onlineclass}
                alt="Not Found"
                className="w-[30%] mb-[5px]"
              />
              <h3>PUBLISHING</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pen;
