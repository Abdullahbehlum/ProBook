import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/15.jpeg";
import Userimg from "../../../../assets/images/user_img.png";
function TheKing() {
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
            Greg E. Johnson
          </h4>
          <h1 className=" mb-[10px]">
            The King of Charnley Farm: Unraveling the Mysteries of a Peculiar
            Place
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Greg E. Johnson
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            The King of Charnley Farm: Unraveling the Mysteries of a Peculiar
            Place
          </h3>
          <p>
            The King of Charnley Farm" by Greg E. Johnson is an exciting story
            of discovery and adventure. Charles Brack, on behalf of the
            Entomology Society of London, searches Charnley Farm for a
            mysterious bee species. The farm's unsociable inhabitants and
            interesting background have sparked rumors and inquiries locally and
            Charles Brack becomes determined to not only solve the mystery of
            the bee, but also the mystery of Charnley Farm itself.
          </p>
          <p>
            The book's suspense draws readers further into Charnley Farm's plot
            and intrigue. The narrative masterfully combines scientific
            investigation, personal connection, and communal power. Charles
            makes new friends and gains trust as he investigates the farm and
            bees. These links help Charles discover the farm's mysteries.
          </p>
          <p>
            The novel's story twists and turns, and just when readers think they
            have it figured out, another hint is provided to throw them off. The
            huge bee that's important to the tale is fascinating. Why is the
            town obsessed with it? The bee represents Charnley Farm's larger
            mystery as the story progresses.
          </p>
          <p>
            King of Charnley Farm" is a must-read for mystery and adventure
            fans. The book's riveting premise, well-developed characters, and
            great writing will keep readers on edge until the finish. The story
            brilliantly blends scientific discovery, personal connection, and
            communal power, making it a compelling and thought-provoking read.
          </p>
          <p>
            The book's location, Haversford, enhances Charnley Farm's mystery.
            The farm's seclusion is heightened by the town's population.
          </p>
          <p>
            The King of Charnley Farm" is a great adventure novel. The book's
            complicated narrative, well-developed characters, and distinctive
            location make it a mystery and adventure highlight. "The King of
            Charnley Farm" is a great read for genre fans and non-fans alike.
          </p>
        </div>
      </section>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>
    </>
  );
}

export default TheKing;
