import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/01.jpeg";
import PORW from "../../../../assets/images/03.png";
import Userimg from "../../../../assets/images/03.png";
function Susan() {
  const Contact = lazy(() => import("../../../pages/other sections/Contact"));
  return (
    <>
      <section className="case_details uniquearea">
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
            Susan Wilson
          </h4>
          <h1 className=" mb-[10px]">
            Choosing the Perfect Guide: Unleashing the Best Dog Trainer
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Susan Wilson
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3>Choosing the Perfect Guide: Unleashing the Best Dog Trainer</h3>
          <p>
            Welcoming a dog into your family is an extraordinary experience, but
            it also comes with its fair share of challenges. From obedience
            training to addressing behavioral issues, finding the right dog
            trainer can make a difference in nurturing a strong and healthy bond
            with your furry companion. In the book "How to Find Your Ideal Dog
            Trainer" by Susan M. Wilson, you'll discover a comprehensive guide
            to navigating the complex realm of dog training and behaviorists,
            ensuring you find the perfect match for your four-legged friend.
          </p>
          <p>
            Training your dog is not just about teaching tricks; it's about
            creating a harmonious and fulfilling relationship. The book
            emphasizes the importance of making an informed decision by
            understanding your dog's unique needs and your own training goals
            and values.
          </p>
          <p>
            Observation is key when evaluating a trainer's methods and skills.
            Attending classes or sessions without your dog allows you to assess
            how the trainer works with other dogs and their owners. Look for
            trainers who employ positive reinforcement techniques and create a
            positive and encouraging learning environment.
          </p>
          <p>
            Choosing the right training setting is crucial for your dog's
            success. Whether you opt for private in-home coaching, group
            coaching, or other options, the book guides you through the
            considerations for each setting. It emphasizes the importance of a
            seamless transition between training environments and the transfer
            of learned behaviors to your home.
          </p>
          <p>
            "How to Find Your Ideal Dog Trainer" is your ultimate companion in
            the search for the perfect guide. Empower yourself as a dog owner,
            make an informed decision, and forge a strong partnership with a
            trainer who understands your unique needs. Remember, the journey to
            a well-trained and happy dog begins with finding the right guide.
            Unleash your dog's potential and create a lifetime of cherished
            memories together.
          </p>

          <img src={PORW} alt="No" className="h-[450px] object-cover" />
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default Susan;
