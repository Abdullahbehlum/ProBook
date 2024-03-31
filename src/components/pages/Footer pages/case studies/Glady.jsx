import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/14.png";
import Userimg from "../../../../assets/images/user_img.png";
function Gladdy() {
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
            Gladys Griffin
          </h4>
          <h1 className=" mb-[10px]">
            An Olive Branch in Her Time of Need God’s Grace is Sufficient for Me
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Gladys Griffin
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            An Olive Branch in Her Time of Need God’s Grace is Sufficient for Me
          </h3>
          <p>
            God’s Grace is Sufficient for Me is a book that tells the journey of
            Gladys H. Griffin as she suffered through five illnesses at the same
            time during the year 2020, and it is only because God bestowed his
            grace on her that she made it alive and well to stand where she is
            today. As a mother, widow, grandmother, and retired university
            professor, Gladys now spends her time developing her hobby of
            writing into a more professional thing as she publishes her first
            book, God’s Grace is Sufficient for Me, and works on her second
            manuscript, Stepping Out in Grace.
          </p>
          <p>
            Gladys talks about how the only reason our lives are not condemned
            is through God’s grace, and it is because of His blessings and His
            blessings alone that we can achieve true happiness in this life and
            the one after. The only way to be successful in life is if we follow
            the word of God in the Bible—both the Old and New Testaments—and
            live life accordingly. Gladys, in her book, discusses how merciful
            and beneficent God is, and even if we turn to him once in our time
            of need, that would be enough to invite all his blessings into our
            lives.
          </p>
          <p>
            To walk the path of righteousness that God intended for us to do in
            order for us to live peaceful and content lives, we must take what
            He says to heart and be patient. For hardships —no matter how
            hopeless and bleak they seem—can only be endured through the
            strength that comes from believing in God and everything we do
            outside of it; all the struggles and efforts are worthless if not
            done in the name of God.
          </p>
          <p>
            Of course, it can be assumed that the only reason that we are
            bestowed by the grace of God is because of Jesus Christ’s sacrifice
            for us and that our good or bad deeds have no effect on this gift
            from God. Gladys discusses her viewpoints and opinions on the topic
            in depth in her book, God’s Grace is Sufficient for Me, now
            available on Amazon and the official website.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Gladdy;
