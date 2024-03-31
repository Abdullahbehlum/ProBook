import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/13.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function EMjOHAN() {
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
            EM Johnson
          </h4>
          <h1 className=" mb-[10px]">
            Finding Strength in Faith —Imperfect Lives, Perfect Grace
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              EM Johnson
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
            There are many people’s stories in our lives that we come across
            that inspire us, whether to be a better person, to work harder, or
            to grow into a better version of ourselves, depending on our
            circumstances in life. Imperfect Lives, Perfect Grace by E.M.
            Johnson retells the stories of two Biblical women who became an
            example of courage, strength, and unshakable faith in God for all
            those who came after them till the end of times.
          </p>
          <p>
            Imperfect Lives, Perfect Grace is a ray of hope for people
            struggling in life —with no way out of a life that keeps dragging
            them down. Leah and Tamar, both extraordinary women, encourage us to
            hang on and pull through in our harshest times if we just believe in
            God and surrender to him our desires and dreams, and then and only
            then can our lives become peaceful.
          </p>
          <p>
            Tamar’s story is a devastating one, and it makes us feel sympathetic
            as well as conflicted about whether to support Tamar’s actions as a
            response to the tragedy that befell her or hold her responsible for
            her wrongdoings. The book explores the concept of sin and how it is
            never a singular deed, always influenced by the people around us and
            to fulfill our worldly desires, when the true and right way to
            achieve success and contentment in life is through the grace of God
            and by following His teachings from the Holy Bible —from both the
            Old and New Testaments.
          </p>
          <p>
            E.M. Johnson’s Imperfect Lives, Perfect Grace implores the readers
            to take a more contemplative stance on the way people are and what
            motivates them to make the decisions they do, making us more
            empathetic towards those lost in life and in need of a hand. The
            book is now available online on the official website or Amazon.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default EMjOHAN;
