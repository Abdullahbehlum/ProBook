import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/24.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function Rickkaffman() {
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
            Rick Kauffman
          </h4>
          <h1 className=" mb-[10px]">
            The Love of Patricia and Kevin — Exiled
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Rick Kauffman
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            Can’t Decide Between Mystery and Romance? The Reluctant Courier is
            the Solution!
          </h3>
          <p>
            Falling in love with the person who saved your life and having it
            reciprocated is not an experience many of us have had, but the same
            can’t be said about Patricia Anne Albertson, one of the characters
            in Rick Kauffman’s third and latest book, Exiled: The Life and Times
            of Kevin Jamison.
          </p>
          <p>
            Patricia is the love interest of Kevin Jamison, introduced much
            later in the book. While running some errands on his day off, Kevin
            discovers her unconscious and injured. Waking up, she discovers that
            she has lost all memories of her life before waking up in Kevin’s
            cabin. She soon starts remembering things and feels touched when she
            realizes that Kevin has been taking care of her kids.
          </p>
          <p>
            Being cheated on by her husband and having nowhere to go, she
            extends her stay at Kevin’s place —calling it home, even. With each
            other as their only connection to the world around them, they
            develop feelings for each other. As time passes, so does their
            relationship grow into something more; by being there and taking
            care of each other and being the other’s support during the hard
            times, Patricia and Kevin become each other's, even if their bond
            was created through loss and grief.
          </p>
          <p>
            And as is the nature of human relationships, misunderstandings
            arise, and the seed of doubt grows into something ugly. But it is
            through understanding and the time they have spent together that
            they get through it. Patricia becomes the pillar that Kevin needs
            when he becomes a suspect in a murder and sexual assault case by the
            city police of his county, Idaho.
          </p>
          <p>
            Kauffman writes the relation between Kevin and Patricia in such a
            relatable manner that the readers can't help but get attached to
            them and feel like getting into a relation of their own. Though
            Exiled is not a romance story but the elements are mixed in so well
            with the adventurous and mystery vibe of the book.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Rickkaffman;
