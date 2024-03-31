import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/16.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function ABookThat() {
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
            Jay Borden
          </h4>
          <h1 className=" mb-[10px]">
            Growing Green Minds: Join an Exciting Farming Journey with Alex and
            Leah!
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Jay Borden
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            Growing Green Minds: Join an Exciting Farming Journey with Alex and
            Leah!
          </h3>
          <p>
            Learning about sustainable farming is not just about growing crops.
            It's about cultivating a deep connection to nature and the world
            around us.
          </p>
          <p>
            In a world where children are becoming increasingly disconnected
            from the source of their food, it is essential to teach them the
            importance of sustainable farming practices. That's where the
            captivating book series, "Alex and Leah Learn to Farm" by Jay
            Borden, comes in. Through the exciting adventures of Alex and Leah,
            young readers are introduced to the wonders of farm life and the
            magic of sustainable agriculture.
          </p>
          <p>
            Each book in the series takes kids on a trip full of discoveries,
            explorations, and lessons. The books have beautiful pictures and
            exciting stories. Alex and Leah's experiences with farming, like
            clearing land and building fences, taking care of animals, and
            growing food, show how attractive agriculture can be.
          </p>
          <p>
            The focus on STEM education is what makes this story stand out. By
            including science, technology, engineering, and math, these books
            entertain young minds and teach them. Children are taught to think
            critically, figure out how to solve problems and understand how
            farms and the environment are linked.
          </p>
          <p>
            Jay Borden is an experienced agriculture instructor. He brings his
            knowledge and heart to the pages, ensuring that the information
            matches what farmers actually do. Through these stories, children
            learn more about the hard work, dedication, and love that goes into
            producing the food on their plates.
          </p>
          <p>
            Alex and Leah Learn to Farm" is not just a book series; it's a
            gateway to a world of possibilities. It gets kids interested, helps
            them love nature, and sets the seeds of thought in a good way for
            the environment. These books are the perfect addition to your
            library, whether you're a teacher looking for new ways to teach or a
            parent trying to teach your kids about taking care of the earth.
          </p>
          <p>
            So, come along with Alex and Leah on their exciting farm trip, and
            let's teach the next generation how to farm in a good way for the
            world and the future.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default ABookThat;
