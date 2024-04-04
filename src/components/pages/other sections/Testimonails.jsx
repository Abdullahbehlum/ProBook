import useMediaQuery from "@mui/material/useMediaQuery";
import Star from "../../../assets/images/star.png";
import User from "../../../assets/images/pic 01.jpg";
function Testimonails() {
  const Mobile = useMediaQuery("(max-width:600px)");


  return (
    <>
      <section className="uniquearea">
        <div className="text-center mb-[30px]">
          <h1 className="head-h2  font-semibold">Testimonials</h1>
        </div>
        <div className="flex justify-center items-center xl:flex-row flex-col ">
          <div className="test_card">
            <div className="flex items-center mb-[16px]">
              <img src={User} className="w-[65px] xl:mr-3 rounded-[150px]" />
              <h3 className="xl:mt-4 text-[16px] font-semibold ">
                Hazel J. Nixon
                <img src={Star} className="w-[75px] xl:mt-[-7px]" />
              </h3>
            </div>
            <p>
              I’m grateful, that I was able to find the author’s book
              publishing. Their team of creative ghostwriters was able to bring
              my author persona to life. Thankyou the author's book publishing!
            </p>
          </div>
          <div className="test_card">
            <div className="flex items-center mb-[16px]">
              <img src={User} className="w-[65px] xl:mr-3 rounded-[150px]" />
              <h3 className="xl:mt-4 text-[16px] font-semibold ">
                Hazel J. Nixon
                <img src={Star} className="w-[75px] xl:mt-[-7px]" />
              </h3>
            </div>
            <p>
              I’m grateful, that I was able to find the author’s book
              publishing. Their team of creative ghostwriters was able to bring
              my author persona to life. Thankyou the author's book publishing!
            </p>
          </div>
          <div className="test_card">
            <div className="flex items-center mb-[16px]">
              <img src={User} className="w-[65px] xl:mr-3 rounded-[150px]" />
              <h3 className="xl:mt-4 text-[16px] font-semibold ">
                Hazel J. Nixon
                <img src={Star} className="w-[75px] xl:mt-[-7px]" />
              </h3>
            </div>
            <p>
              I’m grateful, that I was able to find the author’s book
              publishing. Their team of creative ghostwriters was able to bring
              my author persona to life. Thankyou the author's book publishing!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Testimonails;
