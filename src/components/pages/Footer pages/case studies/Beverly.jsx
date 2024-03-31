import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/04.jpg";
import Userimg from "../../../../assets/images/user_img.png";
function Beverly() {
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
            Beverly Ahlering Saltonstall
          </h4>
          <h1 className=" mb-[10px]">
            These Amusing Facts is Why You Should Read Saltonstall’s New Book!
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Beverly Ahlering Saltonstall
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            Choosing the Perfect Guide: Unleashing the Best Dog Trainer
          </h3>
          <p>
            Beverly Ahlering Saltonstall’s new book, Cape Coral Burrowing Owls
            Don’t Hoot is all about the resident winged friends of Cape Coral
            —the burrowing owls! Saltonstall, being an enthusiast when it comes
            to interesting birds, got to know these little creatures when she
            moved to Cape Coral, Florida, USA, in 2001. She, being a free and
            adventurous spirit, was out and about exploring her new hometown
            when she came across a barely ten-foot-tall bird with wide eyes,
            looking back at her and reflecting the same curiosity that she was
            showing.
          </p>
          <p>
            Her book is an encyclopedic compilation based on facts, research,
            and observation that she gathered herself for people interested in
            getting to know the burrowing owls on a more personal level: their
            habitat, personalities, physical appearances in every stage of life,
            and their way of living as they go through their daily lives.
          </p>
          <p>
            Saltonstall goes into depth about what makes these birds so unique
            and individual, comparing hatchlings and fully grown adults and
            explaining the difference and how to recognize them. Wanting to
            spread awareness about this particular owl species, Beverly has
            worked with the town organizations that are devoted to the cause as
            well as volunteering for other general wild life prevention
            organizations in Cape Coral, expressing her love for the animals
            living in the town long before the people started settling in
            communities.
          </p>
          <p>
            Cape Coral Burrowing Owls Don't Hoot is a fun and informative book
            that's great for unwinding while learning about Cape Coral's past
            and burrowing owls. And for people who love birds, burrowing owls
            are kind and trustworthy creatures that often come out and pose for
            the cameras if they don’t sense any risk, so that’s always much
            entertaining to witness! The book is available online on her
            official website and on Amazon, so don’t miss out and grab your copy
            today!
          </p>

        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Beverly;
