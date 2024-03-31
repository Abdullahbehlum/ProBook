import React, { useState } from "react";
import R1 from "../../assets/images/trust-pilot.svg";
import R2 from "../../assets/images/bark.webp";
import R3 from "../../assets/images/review-io.svg";
import R4 from "../../assets/images/site-jabbar.svg";
import { Link, useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../config/Config";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";
function Footer() {
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const navigate = useNavigate();
  const [ClientData, SetClientData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleTop = () => {
    window.screenY(0, 0);
  };
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
  return (
    <>
      <footer className="bg-footer mb-0 overflow-hidden">
        <div className="text-white footer-col-4  my-1 mb-0 ">
          <div className="my-2">
            <div>
              <h4 className="let-talk">Let's Talk</h4>
            </div>
            <p className="xl:mb-3 mb-2 flex focus:text-[#015b71] hover:text-[#015b71] ">
              <i className="fa-solid fa-envelope icon-arrow  mx-2"></i>{" "}
              <span>
                <Link to={"mailto:info@thewriterstree.com"}>
                  info@thewriterstree.com
                </Link>
              </span>
            </p>
            <p className="xl:mb-4 mb-2 focus:text-[#015b71] hover:text-[#015b71]">
              <i className="fa-solid icon-arrow fa-phone mx-1"></i>{" "}
              <span>
                <Link to={"tel:+718516-5017"}>(718) 516-5017</Link>
              </span>
            </p>
            <p className="xl:mb-4 mb-2 focus:text-[#015b71] hover:text-[#015b71]">
              <i class="fa-solid fa-lightbulb icon-arrow mx-1"></i>
              <span>
                <Link
                  to={
                    "https://www.google.com/maps/place/415+W+14th+St,+New+York,+NY+10014,+USA/@40.7415955,-74.0061877,17z/data=!3m1!4b1!4m6!3m5!1s0x89"
                  }
                  target="_blank"
                >
                  415 W 14th St, New York, NY 10014
                </Link>{" "}
              </span>
            </p>
            <p className="xl:mb-4 mb-2 focus:text-[#015b71] hover:text-[#015b71]">
              <Link onClick={handleTop} to={"/privacy-policy"}>
                Privacy Policy
              </Link>
            </p>
            <p className="xl:mb-4 mb-2 hover:text-[#015b71] focus:text-[#015b71]">
              <Link onClick={handleTop} to={"/terms-condition"}>
                Terms & Conditions
              </Link>
            </p>
            <p className="xl:mb-10 mb-2">
              Follow us on
              <br />
              <div className="xl:my-2 my-3">
                <i
                  className="fa-brands hover:scale-[1.086] transition-all hover:bg-[#00bcbb] hover:text-white 
                 fa-linkedin bg-white  strip-icon  text-black p-[10px] rounded-[50%] mx-1"
                ></i>
                <i className="fa-brands strip-icon hover:scale-[1.086] transition-all  hover:bg-[#00bcbb] hover:text-white  fa-instagram bg-white text-black p-[10px] rounded-[50%] mx-1"></i>
                <i className="fa-brands strip-icon hover:scale-[1.086] transition-all hover:bg-[#00bcbb] hover:text-white fa-twitter mx-1 bg-white text-black p-[10px] rounded-[50%]"></i>
                <i className="fa-brands strip-icon  hover:scale-[1.086] transition-all hover:bg-[#00bcbb] hover:text-white fa-facebook bg-white text-black p-[10px] rounded-[50%]"></i>
              </div>
            </p>
          </div>
          <div className="my-2">
            <div>
              <h4 className="let-talk ">Services</h4>
              <ul className="footer-links">
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link
                    to={"/ghost-writing"}
                    onClick={handleTop}
                    className="px-2"
                  >
                    Ghostwriting
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link
                    to={"/book-editing"}
                    onClick={handleTop}
                    className="px-2"
                  >
                    Editing
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link
                    to={"/book-publishing"}
                    onClick={handleTop}
                    className="px-2"
                  >
                    Publishing
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link to={"/book-cover"} onClick={handleTop} className="px-2">
                    Book Cover
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link
                    to={"/book-printing"}
                    onClick={handleTop}
                    className="px-2"
                  >
                    Printing Books
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link
                    to={"/book-marketing"}
                    onClick={handleTop}
                    className="px-2"
                  >
                    Book Marketing
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link
                    to={"/book-trailer-video"}
                    onClick={handleTop}
                    className="px-2"
                  >
                    Book Trailer Video
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link
                    to={"/author-web-design"}
                    onClick={handleTop}
                    className="px-2"
                  >
                    Author Web Design
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link
                    to={"/case-studies"}
                    onClick={handleTop}
                    className="px-2"
                  >
                    Case Studies
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="my-2">
            <div>
              <h4 className="let-talk ">Quick Links</h4>
              <ul className="footer-links">
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link to={"/"} onClick={handleTop} className="px-2">
                    Home
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link to={"/about-us"} onClick={handleTop} className="px-2">
                    About Us
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link
                    to={"/pricing"}
                    onClick={handleTop}
                    className="px-2 capitalize"
                  >
                    pricing
                  </Link>
                </li>
                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link to={"/contact-us"} onClick={handleTop} className="px-2">
                    Contact Us
                  </Link>
                </li>

                <li>
                  <i className="fa-solid icon-arrow fa-chevron-right"></i>
                  <Link to={"/blogs"} onClick={handleTop} className="px-2">
                    Blogs
                  </Link>
                </li>
                <li
                  className=""
                  onClick={() => {
                    navigate("/using-stripe"), window.scrollTo(0, 0);
                  }}
                >
                  <h4 className="icon-arrow  font-bold">Payment Method</h4>
                  <i className="fa-brands strip-icon fa-stripe-s"></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="my-2">
            <div>
              <h4 className="let-talk">Get in touch with us</h4>
              <form onSubmit={(e) => handleFormSubmit(e)}>
                <div className="form-group">
                  <input
                    type="text"
                    onChange={(e) => {
                      SetClientData({ ...ClientData, name: e.target.value });
                    }}
                    placeholder="Name"
                    required
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    onChange={(e) => {
                      SetClientData({ ...ClientData, email: e.target.value });
                    }}
                    value={ClientData.email}
                    placeholder="Email"
                    required
                  />
                </div>
                <div className="form-group  ">
                  <input
                    value={ClientData.number}
                    onChange={(e) => {
                      SetClientData({ ...ClientData, number: e.target.value });
                    }}
                    type="number"
                    placeholder="Phone"
                    required
                  />
                </div>
                <input
                  type="submit"
                  value={"Submit  Request"}
                  className="nav-btn border-[2px] border-white uppercase cursor-pointer mt-1 w-full xl:w-auto"
                />
              </form>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-[#0197a1] font-semibold text-[16px] px-4 py-3 xl:py-1">
            Reviews
          </h3>
        </div>
        <div className="f-col-2">
          <div className="mb-4 xl:mx-4">
            <img
              src={R1}
              alt="No"
              className="w-[120px] xl:w-[150px] object-cover"
            />
          </div>
          <div className="mb-2">
            <img
              src={R2}
              alt="No"
              className="w-[120px] xl:w-[150px] object-cover"
            />
          </div>
          <div className="mb-2">
            <img
              src={R3}
              alt="No"
              className="w-[120px] ro-img xl:w-[150px] object-cover"
            />
          </div>
          <div className="mb-2">
            <img
              src={R4}
              alt="No"
              className="w-[120px] xl:w-[150px] object-cover"
            />
          </div>
        </div>
        <div
          className="bg-[#221d2d] text-white xl:text-[14px] text-[11px] "
          style={{ padding: "10px 0" }}
        >
          <span className="xl:mx-8 xl:my-2 ">
            © 2022{" "}
            <span className="text-[#00bcbb] cursor-pointer">The Writers</span>{" "}
            Tree All Rights Reserved.
          </span>
        </div>
      </footer>
    </>
  );
}

export default Footer;
