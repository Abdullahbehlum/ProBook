import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/26.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function Streven() {
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
            Steven M Waterfield
          </h4>
          <h1 className=" mb-[10px]">
            A Book That Gives –The Real Life Adventures of Stew
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Steven M Waterfield
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            A Book That Gives –The Real Life Adventures of Stew
          </h3>
          <p>
            Steven M. Waterfield’s The Real Life Adventures of Stew is a book
            that gives us a lot of things. Written in a style that makes it
            harder to put down once you have picked it up, Waterfield writes
            about his adventures for people who have experienced loss and yet
            still have love inside them for people, places, and the world around
            them.
          </p>
          <p>
            The book starts when our protagonist, Stew, a world-weary old man,
            wakes up in the morning of a new day, a metaphor for a new adventure
            that awaits him as he gets out of bed, as tired as he is, to start
            his day. Stew is staying at Jackson Island Campground, Tennessee,
            for the time being. Busking for a living as he travels across the
            country in a nomadic lifestyle, music and memories are his only
            companions.
          </p>
          <p>
            Stew lives a life of freedom, doing what he desires, a thing most of
            us only dream of with the struggles of our everyday lives, but he
            lives bravely and to the fullest. Many people, including readers and
            his fellow characters in the story, adore Stew as a character.
          </p>
          <p>
            The Real Life Adventures of Stew, based on Steven Waterfield’s own
            adventures and experiences on the road, makes for a lovely read, and
            as readers get lost in the stories that the author tells, his style
            of writing is elegant, attention-grabbing, and simply enjoyable.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Streven;
