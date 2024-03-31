import Pl1 from "../../../assets/images/placement.webp";
import Pl2 from "../../../assets/images/feedback.webp";
import Pl3 from "../../../assets/images/revision.webp";
import Pl4 from "../../../assets/images/publishing.webp";
function ProfessionalBook() {
  return (
    <>
      <section>
        <h1 className="xl:text-[40px] text-[29px] md:text-[40px]  sm:text-[40px] font-semibold text-center  ">
          PROFESSIONAL BOOK WRITER'S FOR HIRE TO CATER TO YOUR{" "}
          <span className="bg-blue">BOOK WRITING NEEDS</span>!
        </h1>
        <div className="flex flex-col xl:my-4 my-2 xl:flex-row md:flex-row sm:flex-row justify-around items-center">
          <div className="flex justify-center mb-5 xl:mb-0 items-center text-center flex-col">
            <div className="mb-2">
              <img
                src={Pl1}
                className="p-[10px] bg-white shadow-xl rounded-[50%]"
              />
            </div>
            <h4 className="font-semibold mb-2">PLACE YOUR ORDER</h4>
            <p className="text-slate-500 xl:w-[80%] w-[90%]">
              Our book writing process involves you subscribing through our
              website and then our qualified representatives will get back to
              you so that they can gather all the necessary information from you
              concerning your very own book.
            </p>
          </div>
          <div className="flex justify-center items-center text-center mb-5 xl:mb-0 flex-col">
            <div className="mb-2">
              <img
                src={Pl2}
                className="p-[10px] bg-white shadow-xl  rounded-[50%]"
              />
            </div>
            <h4 className="font-semibold mb-2">APPROVAL FOR TOC</h4>
            <p className="text-slate-500 xl:w-[80%] w-[90%] ">
              Once we get all the information from you about your very own book.
              Our book ghost writing team will serve you with the TOC for your
              manuscript, once they get the approval on the TOC, they’ll start
              with the writing process instantly.
            </p>
          </div>
          <div className="flex justify-center items-center text-center mb-5 xl:mb-0 flex-col">
            <div className="mb-2">
              <img
                src={Pl3}
                className="p-[10px] bg-white shadow-xl rounded-[50%]"
              />
            </div>
            <h4 className="font-semibold mb-2">DRAFTING CHAPTER-WISE</h4>
            <p className="text-slate-500 xl:w-[95%] w-[90%]">
              You’ll be receiving drafts chapter-wise so that all the changes
              become a part of the process for you, eliminating the hassle for
              our creative ghost book writers.
            </p>
          </div>
          <div className="flex justify-center items-center text-center flex-col mb-5 xl:mb-0">
            <div className="mb-2">
              <img
                src={Pl4}
                className="p-[10px] bg-white shadow-xl rounded-[50%]"
              />
            </div>
            <h4 className="font-semibold mb-2">GLOBAL PUBLISHING</h4>
            <p className="text-slate-500 xl:w-[90%] w-[90%]">
              Set your target audience on a global level by publishing your book
              on more than 10 platforms. We are not only a professional
              ghostwriting team but also expert publishers to help you bring
              your dreams to life.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default ProfessionalBook;
