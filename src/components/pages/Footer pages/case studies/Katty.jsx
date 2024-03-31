import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/20.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function Katty() {
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
            Katy Mack
          </h4>
          <h1 className=" mb-[10px]">The Outsider’s Perspective Logan</h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Katy Mack
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">The Outsider’s Perspective Logan</h3>
          <p>
            Books with the themes of trauma, recovery, and loss are often very
            difficult to read, not in terms of reading comprehension but more so
            because of their heavy nature. But there’s one book that breaks that
            routine and keeps the mood as balanced as it could be while talking
            about such topics: Logan by Katy Mack. The book’s plot revolves
            around the premises of addiction, recovery, and redemption but also
            adds some flavor with the help of romance and friendship.
          </p>

          <p>
            High school is the time to experience new things, get to know new
            people, and give love a chance. Our protagonists do the same thing
            every teenager does —fall in love. The problem lies in managing a
            relationship while also following their dreams. It’s a tough choice
            that Mikayla and Logan have to make, and it does take them on
            separate roads, but eventually things work out.
          </p>
          <p>
            The addiction to drugs and other unhealthy coping mechanisms comes
            in when Logan gets injured in the war, losing his chance at a career
            as a professional football player. Having had tunnel vision to
            achieve that goal, once lost, he spirals. The time it takes him to
            get back up on his feet is long and tedious, and he loses much more
            along the way to recovery.
          </p>
          <p>
            The realism of him making bad decisions, pushing people away, and
            isolating himself comes from all the research Mack did to express
            her empathy for people going through the process. Having never
            experienced addiction before, she wanted people to know how
            difficult and non-linear the journey is. Maybe this outside
            perspective is what keeps the book from getting too dark and heavy,
            as it has given us hope for a better future all along.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Katty;
