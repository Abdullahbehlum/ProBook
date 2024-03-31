import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/25.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function Taras() {
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
            Dr.Taras Chubenko
          </h4>
          <h1 className=" mb-[10px]">Knowing Yourself, leads to Knowing God</h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Dr.Taras Chubenko
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">Knowing Yourself, leads to Knowing God</h3>
          <p>
            Rt. Rev. Dr. Taras Chubenko’s book, “Connecting to God: A Journey
            Over 50 Years,” explores the significance of introspection and
            self-discovery in the search for spiritual enlightenment. The
            chapter emphasizes that the first step towards discovering our
            divinity is knowing ourselves better, and developing a stronger
            connection to God by understanding our own beliefs, values, and
            behaviors.
          </p>
          <p>
            The importance of introspection cannot be overstated when it comes
            to spiritual growth. However, many people are unaware of how their
            upbringing, social conditioning, and cultural conventions have
            shaped their worldview. Therefore, understanding our early exposure
            to media, culture, and social conditioning can help us identify our
            biases and beliefs that may be hindering our spiritual growth.
          </p>
          <p>
            The book also highlights the importance of learning from both
            positive and negative life experiences to deepen our understanding
            of ourselves and our relationship with God. Through introspection,
            we can gain insights into our beliefs and connect with our inner
            divinity.
          </p>
          <p>
            Learning about oneself is a crucial part of spiritual growth. By
            being open to self-examination and being truthful about our ideas,
            emotions, and worldviews, we can better known ourselves and connect
            with our inner divinity. To remove obstacles and become closer to
            God, we must first accept ourselves as we truly are.
          </p>
          <p>
            Connecting to God" shows how important self-reflection,
            self-discovery, and self-acceptance are for spiritual growth. By
            understanding ourselves better, we can develop a deeper connection
            to God, and live a more fulfilling life.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Taras;
