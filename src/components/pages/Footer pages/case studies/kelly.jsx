import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/21.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function kelly() {
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
            Kelly Grennan
          </h4>
          <h1 className=" mb-[10px]">
            The Goat That Escaped and Survived A Must Read for Those Effected by
            Abuse
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Kelly Grennan
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            The Goat That Escaped and Survived A Must Read for Those Effected by
            Abuse
          </h3>
          <p>
            People are complicated beings, which makes relationships with them
            also complicated. Whether it’s a romantic, platonic, or familial
            relationship, it is inevitable to have ups and downs —good moments
            and bad. Sometimes you hurt someone else, and other times you end up
            hurting yourself. More often than not, after communicating with each
            other, people end up moving on and overcoming the challenge.
          </p>
          <p>
            There are times when words aren’t enough to mend the wounds
            inflicted on each other, and all you can do is try to redeem
            yourself. Kelly Grennan’s new book, The Goat that Escaped and
            Survived, tells the story of her life and how she survived abuse at
            the hands of her most trusted ones and came out on top of it all.
          </p>
          <p>
            In her book, she talks about how, due to her abuse, she was
            diagnosed with post-traumatic stress disorder (PTSD), depression,
            and anxiety in recent years and has started to walk the path of
            healing and recovery. The book explains some of the relevant terms
            for people to understand in a much easier way what it is to be
            isolated, abused, lonely, and battling with many mental health
            issues as a reaction to certain events with significant influence in
            your life. How guilt and shame can be overwhelming emotions and
            feelings for victims of abuse, along with hopelessness and fear.
          </p>
          <p>
            Experiencing all this herself gave Kelly an inside perspective that
            helped her show the reality of abusive relationships and how they
            have an effect on people even years later, and how healing from
            trauma isn’t a linear path but an uphill battle. Which can only be
            made easier if the abuser realizes their mistake and tries to fix
            what they broke.
          </p>
          <p>
            The Goat that Escaped and Survived is a book recommended to those
            who have experienced any kind of abuse by their loved ones and to
            those affected by it indirectly who are looking to understand the
            situation better.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default kelly;
