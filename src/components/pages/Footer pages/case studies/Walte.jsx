import React, { Suspense, lazy } from "react";
import "../../../styles/CaseDetails.css";
import Jeamimg from "../../../../assets/images/27.jpeg";
import PORW from "../../../../assets/images/28.jpg";
import Userimg from "../../../../assets/images/user_img.png";
function Waltere() {
  const Contact = lazy(() => import("../../../pages/other sections/Contact"));
  return (
    <>
      <section className="case_details">
        <div>
          <img
            src={Jeamimg}
            alt="No"
            className="  w-[400px] px-4 object-cover mb-[10px]"
          />
        </div>
        <div className="case_data">
          <h4>
            <span>Stories</span> <i className="fa fa-arrow-right pr-2"></i>
            Waltere Asili Koti
          </h4>
          <h1 className=" mb-[10px]">
            Embracing the Power of Sex Unlocking a Journey of Fulfillment
          </h1>
          <div className="flex items-center">
            <img
              src={Userimg}
              className="object-cover w-[50px] rounded-[50%] mr-2"
            />{" "}
            <h5 className="text-[22px] font-semibold">
              Waltere Asili Koti
              <p className="text-[16px]">Author</p>
            </h5>
          </div>
        </div>
      </section>
      <section>
        <div className="jeam_details">
          <h3 className="head-h2">
            Embracing the Power of Sex Unlocking a Journey of Fulfillment
          </h3>
          <p>
            Sex is both enjoyable and destructive. It brings fulfillment and
            displeasure. This is the most joyous act on earth, but can also be
            the most destructive." - Waltere Asili Koti
          </p>
          <p>
            In a world where sexual needs affect everything, it's essential to
            talk about sex in an educated manner. Passion and pleasure can
            change our lives, whether we take advantage of what they offer or
            give in to what they do to us. "The Power of Sex: The Irresistible
            Force" by Waltere Asili Koti is a fascinating book that helps people
            discover their sexual skills and happiness.
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
            While 'The Power of Sex' acknowledges the prevalence of sexual chaos
            and confusion in today's society, it also offers hope and guidance.
            It advises parents, young adults, and couples seeking counselling
            for premarital, marital, or divorce. The book recognizes the
            pervasive impact of technological advancements and the rise of
            pornography, offering insights on breaking free from its grip and
            finding genuine fulfillment beyond the realm of explicit imagery.
          </p>
          <p>
            At its core, 'The Power of Sex' invites readers on a journey of
            self-discovery and empowerment. It encourages individuals to embrace
            their sexual desires and cultivate a deeper understanding of
            themselves and their partners. Through its pages, readers will gain
            a fresh perspective on love, passion, and the power of human
            connection.
          </p>
          <p>
            So, if you find yourself seeking answers, longing for guidance, or
            simply yearning to unlock the true potential of your sexuality, 'The
            Power of Sex: The Irresistible Force' is a must-read. Let Waltere
            Asili Koti be your trusted companion as you navigate the complex
            terrain of desires, discover your sexual superpowers, and embark on
            a path of authentic fulfillment.
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

export default Waltere;
