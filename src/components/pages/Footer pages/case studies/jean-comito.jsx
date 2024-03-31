import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/17.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function jeancomito() {
    const Contact = lazy(()=>import("../../../pages/other sections/Contact"))
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
            Jean Comito Gurny
          </h4>
          <h1 className=" mb-[10px]">
            From Stay at Home Mom to Published Author The Inspiring Journey
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Jean Comito Gurny
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            From Stay-at-Home Mom to Published Author: The Inspiring Journey of
            Jean Comito Gurny
          </h3>
          <p>
            There have been many highs and lows in Jean Comito Gurny's life, but
            her love of writing has never wavered. Jean, the youngest of three
            girls, was up in the Bronx, New York, and was taught the importance
            of being trustworthy, open, spiritual, and kind. She was married
            when she was just 19 to her high school love, and they had two
            children, Christopher and Michelle. Jean, a stay-at-home parent,
            cherished being there for her kids at every turning point in their
            lives.
          </p>
          <p>
            Jean had a lifelong interest in writing, but she had to put her
            ambition on wait while she dealt with other priorities. However, as
            her offspring matured, so did she. She finished her education and
            picked up the reins of her literary career. After almost 45 years of
            marriage, her husband died suddenly, leaving Jean to go on an
            unfamiliar path alone. But writing brought her comfort, and with her
            newfound independence she could devote herself to her calling.
          </p>
          <p>
            As of now, Jean Comito Gurny has Book 1 of "The Adventure of Willow
            the Penguin" released. She thanks her husband, parents, and all the
            mothers and fathers who will read her book for being "angels" in her
            life. Her life is an uplifting tale of sticking to your goals
            despite setbacks and never giving up on your objectives.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact/>
      </Suspense>
    </>
  );
}

export default jeancomito;
