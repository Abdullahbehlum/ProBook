import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/23.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function Pamstevens() {
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
            Pam Stevens
          </h4>
          <h1 className=" mb-[10px]">
            Can’t Decide Between Mystery and Romance? The Reluctant Courier is
            the Solution!
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Pam Stevens
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
            It is often enough that a book doesn’t juggle two different genres
            at the same time well enough for readers of all genres to be
            satisfied with it, and it is even more frustrating when the plot and
            characters are written in just the right way. It leaves us feeling
            bitter and unsatisfied. But not this book, readers! Pam Stevens’ new
            book, The Reluctant Courier, does justice to romance and mystery
            lovers all around!
          </p>

          <p>
            Pam Stevens is an emerging writer making her debut in the writing
            industry. At the age of seventy-seven, she is a businesswoman, a
            grandmother, and a literary enthusiast. Her love for writing is
            quite apparent from the characters and how the plot unravels, giving
            each detail such a unique manner that readers can’t help but be
            attentive. The book balances both genres elegantly and gives the
            lovers of each genre a taste of the other.
          </p>
          <p>
            The plot revolves around Sandy Stanford, a twenty-five-year-old girl
            who gets involved in a plot that uncovers lies greater than she
            anticipates. Being at the wrong place at the wrong time makes her
            the target of people with higher authority who are willing to abuse
            their positions. She ends up in the care of Steven Hoyt, a
            congressman shrouded in mystery and the unknown but seemingly kind
            to Sandra.
          </p>
          <p>
            Stevens writes in a simplistic manner that keeps the plot from
            revealing too much all at once, and the reader is hooked in from the
            start of the book to the very end, when all the threads untangle and
            everything connects to make a giant web and gives the reader a
            feeling of joy and fulfillment. The mystery is balanced out by the
            slow-burn romantic relationship of Steven and Sandra, which develops
            gradually as they face the ups and downs caused by the nature and
            circumstances of their relationship.
          </p>
          <p>
            The Reluctant Courier is a book that’s a must-read for those looking
            for a light read with the right amount of entertainment, suspense,
            romance, mystery, and adventure! The book is available on Amazon, so
            get a copy today!
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Pamstevens;
