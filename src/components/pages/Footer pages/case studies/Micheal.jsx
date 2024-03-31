import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/22.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function Micheal() {
  const Contact = lazy(() => import("../../../pages/other sections/Contact"));
  return (
    <>
      <section className="case_details">
        <div>
          <img
            src={Jeamimg}
            alt="No"
            className=" w-[400px] px-4 object-cover mb-[10px]"
          />
        </div>
        <div className="case_data">
          <h4>
            <span>Stories</span> <i className="fa fa-arrow-right pr-2"></i>
            Michael Reza
          </h4>
          <h1 className=" mb-[10px]">Michael Reza – A Multi-Faceted Icon</h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Michael Reza
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">Michael Reza – A Multi-Faceted Icon</h3>
          <p>
            Real estate is an industry that has been in the works for as long as
            people started settling in communities and in proper houses. With
            times and traditions changing like the seasons, this industry also
            saw its own evolution. Though people at first hesitated about
            investing in land and building structures, that soon changed as more
            and more awareness spread and it became a common norm.
          </p>

          <p>
            As people's interest in the industry increased, so did their
            attempts to use underhanded tricks to gain more profit, and with
            that, once again, came the fear of losing their wealth.
          </p>
          <p>
            Michael Reza’s book Real Estate Investment: The Road to Retirement
            and Building Generational Wealth is a handbook guide for people to
            learn about real estate investment and everything there is to know
            about it before they dive deeper into the business.
          </p>
          <p>
            Reza has been a part of the financial industry for more than twenty
            years and has accumulated enough experience and wealth under his
            name to correctly give advice about the matter. He is a politician,
            businessman, entrepreneur, and charitable advocate against human
            trafficking rings.
          </p>
          <p>
            Reza is a risk-taker and a professional when it comes to finances
            and investing in the right place at the right time. As the owner and
            CEO of MCapital LLC, a company that provides commercial and
            residential loans to other businesses, shops, properties, mortgage
            purposes, etc., he is a force to be reckoned with when it comes to
            investing his money and finance management.
          </p>
          <p>
            He wrote this book in hopes of helping guide people on the path to
            becoming rich enough to sustain many generations to come. As he
            wants to share the knowledge he acquired through his own hardships
            and ups and downs in life. He talks about his experiences as a
            startup organization owner and a multi-millionaire CEO.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Micheal;
