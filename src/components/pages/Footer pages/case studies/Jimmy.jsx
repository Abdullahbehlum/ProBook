import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/18.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function Jimy() {
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
            Jimmy Haddad
          </h4>
          <h1 className=" mb-[10px]">
            The Power of Faith and Prayer: A Journey Through Heaven and Hell
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Jimmy Haddad
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            From Stay-at-Home Mom to Published Author: The Inspiring Journey of
            Jean Comito Gurny
          </h3>
          <p>
            My Journey through Heaven and Hell" is a book that takes readers on
            a journey of self-discovery, spiritual growth, and transformation.
            Jimmy Haddad's experience provides readers with a unique perspective
            on life and death, and the importance of faith, spirituality, and
            the power of prayer.
          </p>
          <p>
            Jimmy's story highlights the importance of faith and religion,
            offering a sense of comfort and hope that can help us navigate
            difficult times. His experience has taught him that faith offers a
            deeper meaning to life and that it can help us find strength and
            purpose in the darkest moments of our lives. By putting our faith in
            God, we can lead a more meaningful and fulfilling life.
          </p>
          <p>
            One of the key themes of the book is the importance of prayer. Jimmy
            emphasizes that prayer can offer a sense of hope and peace that
            cannot be found elsewhere. It can help us find clarity and direction
            in difficult times, and cultivate a sense of gratitude and
            gratefulness. By expressing our thanks for the blessings in our
            life, we can focus on the positive aspects of our existence.
          </p>
          <p>
            Jimmy's journey takes readers through his near-death experience,
            where he witnessed the beauty of heaven and the horrors of hell. His
            descriptions offer a unique perspective on the afterlife, reminding
            us that there is a higher purpose to our existence. He emphasizes
            the importance of being a positive influence in the world, spreading
            kindness, and striving for spiritual growth.
          </p>
          <p>
            My Journey through Heaven and Hell" is a must-read book that will
            leave readers feeling inspired and hopeful. Jimmy's story reminds us
            of the importance of faith, spirituality, and the power of prayer.
            It will inspire readers to live a more meaningful and fulfilling
            life, to appreciate the beauty in the world, and to strive for
            spiritual growth.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Jimy;
