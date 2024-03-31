import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/19.jpg";
import Userimg from "../../../../assets/images/user_img.png";
function JOE() {
  const Contact = lazy(() => import("../../../pages/other sections/Contact"));
  return (
    <>
      <section className="case_details">
        <div>
          <img
            src={Jeamimg}
            alt="No"
            className="  w-[400px]  xl:w-[550px] px-4 object-left-bottom mb-[10px]"
          />
        </div>
        <div className="case_data">
          <h4>
            <span>Stories</span> <i className="fa fa-arrow-right pr-2"></i>
            Joe Woods
          </h4>
          <h1 className=" mb-[10px]">
            The Adventures of Cat & Hamster: Where Fun and Learning Come
            Together!
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Joe Woods
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            The Adventures of Cat & Hamster: Where Fun and Learning Come
            Together!
          </h3>
          <p>
            Looking for a children's book series that will entertain and educate
            your little ones? Look no further than "The Adventures of Cat &
            Hamster" by Joe Woods Jr. This delightful collection of stories is
            designed to spark your child's imagination, inspire them to face
            challenges with courage and confidence, and teach them the
            importance of friendship, perseverance, and positive thinking.
          </p>
          <p>
            In these charming tales, readers follow the adventures of Cat and
            Hamster, two unlikely friends who navigate their way through
            challenges and obstacles while learning valuable life lessons. With
            beautifully crafted illustrations, each book captures the hearts and
            minds of young readers, inspiring them to embrace challenges,
            believe in themselves, and learn the value of friendship.
          </p>
          <p>
            This thought-provoking book explores the origins and purpose of sex
            and the disastrous effects of sexual deviation and STDs. It shows
            how sight and mind shape sexuality and how marriage transforms. The
            book "The Power of Sex" looks at the complexities and problems of
            personal life and chapters on sexual addiction, marital issues, and
            sex commercialization.
          </p>
          <p>
            One of the standout features of "The Adventures of Cat & Hamster" is
            its ability to address real-life issues that children face in a
            relatable and engaging way. From dealing with fear and uncertainty
            to learning how to work together as a team, each book in the series
            provides valuable insights that children can apply to their own
            lives.
          </p>
          <p>
            At the heart of the series is the powerful friendship between Cat
            and Hamster. They learn to rely on each other, but they also make
            new friends along the way. From Jumpy the wise and mysterious deer
            to Bobby the Vulture and Slew the Snake, each character brings their
            own unique perspective and wisdom to the table.
          </p>
          <p>
            Whether you're a parent looking for a fun and educational series for
            your child or a teacher searching for a valuable teaching book, "The
            Adventures of Cat & Hamster" is an excellent choice. With its
            heartwarming stories, lovable characters, and valuable life lessons,
            it's sure to become a beloved favorite on the bookshelves of
            children everywhere.
          </p>
          <p>
            So what are you waiting for? Join Cat and Hamster on their exciting
            adventures today and discover the magic that awaits in "The
            Adventures of Cat & Hamster" by Joe Woods Jr. This series proves
            that with a little bit of courage, perseverance, and positive
            thinking, anything is possible!
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default JOE;
