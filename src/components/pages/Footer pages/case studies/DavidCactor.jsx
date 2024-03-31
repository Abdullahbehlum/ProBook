import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/09.jpeg";
import Userimg from "../../../../assets/images/11.jpeg";
function DavidACactor() {
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
            David A Carter
          </h4>
          <h1 className=" mb-[10px]">
            The God Conundrum: Reflections on a Universal Perspective
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              David A Carter
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            The God Conundrum: Reflections on a Universal Perspective
          </h3>
          <p>
            While talking about God, it seems that most people envision a
            watchful deity who scrutinizes our every move on Earth. Our
            Mysterious Lives by David A. Carter explores the enigma that is our
            existence and the mysteries that shroud our universe from a
            scientific, mathematical, and religious perspective by shedding
            light on the historical events that had a significant impact on the
            making of the life that is today.
          </p>
          <p>
            David A. Carter argues the existence of God in his book with a
            rational and objective viewpoint, stating references that neither
            accept nor deny the existence of a higher being but simply encourage
            readers to open their minds to the vastness that is the power of
            contemplation and not only leave the happenings of this universe and
            our existence to the doings of nature or an outer being. Especially
            so when observing the cosmic context and positioning of Earth in the
            Milky Way galaxy and how unremarkable it seems in the void of the
            Universe —bigger than our imagination, but also bigger than what we
            can imagine.
          </p>
          <p>
            The origin of everything —the Big Bang, has been shrouded in
            mysteries and surrounded by myths since the first humans started
            contemplating the meaning of the universe. With no scientific
            discoveries and no concept of religion the early humans started
            worshiping the Heavenly bodies and phenomena as gods and miracles.
            Thus, the earliest religions were polytheistic in nature, spawning
            numerous deities.
          </p>
          <p>
            But as time passed, people became more civilized and awareness of
            such matters spread, but even so, the majority of the masses still
            continued to follow the dated religions from ancient times, such as
            Christianity, Hinduism, Islam, and Judaism, restricting themselves
            in their ways of life and observation.
          </p>
          <p>
            David A. Carter’s book, Our Mysterious Lives, is a must-read for all
            science lovers and for those who are willing to broaden their
            mindset to understand the universe a little better. Available on
            Amazon.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default DavidACactor;
