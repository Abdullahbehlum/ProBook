import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/06.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function Charles() {
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
            Charles Hill
          </h4>
          <h1 className=" mb-[10px]">
            The Return of Jesus Christ A Glorious Revelation by Charles Hill
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Charles Hill
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">A Glorious Revelation by Charles Hill</h3>
          <p>
            Are you ready for a trip that will change the course of humanity for
            all time? "The Return of Jesus Christ" by the famous author Charles
            Hill is all you need to know. In this interesting book, Charles Hill
            explores the deep idea of Jesus's second coming and what it means
            for our lives.
          </p>
          <p>
            Charles Hill starts by looking at the Bible's predictions about the
            second coming of Jesus Christ. He figures out what these predictions
            mean by doing careful study and having deep religious thoughts. From
            the signs that point to His coming to what will happen during this
            important event, Charles Hill tells a story that grabs the reader's
            attention.
          </p>
          <p>
            The author of "The Return of Jesus Christ" is able to mix religious
            analysis with personal stories and experiences, which makes the book
            stand out. Charles Hill talks about his own experiences and
            thoughts, which help readers see that Christ's return is real. His
            real interest in the topic shines through, making the reader excited
            and looking forward to what comes next.
          </p>
          <p>
            Charles Hill also talks about what the second coming means in real
            life. He emphasizes how important it is to get spiritually ready and
            pay more attention to faith. With wisdom and clarity, he tells
            people to look at their lives, get their goals straight, and get
            closer to God. This book is a wake-up call that reminds us to live
            in a way that shows how close the return of Christ is.
          </p>
          <p>
            "The Return of Jesus Christ" is a must-read if you want to find
            answers, get ideas, and feel more hopeful. Charles Hill takes us on
            a fascinating trip and asks us to rethink our lives in light of the
            fact that our Savior is coming back soon. As you read this amazing
            book, you can expect to learn new things, be pushed, and feel
            hopeful joy.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Charles;
