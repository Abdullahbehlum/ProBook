import React, { useState } from "react";
import "../../styles/Hexagon.css";
import { useMediaQuery } from "@mui/material";
function PartnerSection() {
  const [selectedService, setSelectedService] = useState("b");
  const Mobile = useMediaQuery("(max-width:800px)");
  const toggleService = (serviceId) => {
    setSelectedService(serviceId);
  };

  return (
    <div className="orion-section-wrap block-3">
      <section
        id="orion_interactive_0a0d54f7dd7712d3c9c83f435a08a365"
        className="orion_interactive 0a0d54f7dd7712d3c9c83f435a08a365 0a0d54f7dd7712d3c9c83f435a08a365 cacascasc"
      >
        <div className="interactive-wrapper">
          <div className="hexagon-home" id="hexagon-home">
            <div className="container-fluid">
              <div className="inner">
                <h3
                  className="wow fadeInUp"
                  data-wow-delay=".0s"
                  style={{
                    color: "white",
                    fontSize: Mobile ? "22px" : "32px",
                    letterSpacing: "-.02em",
                    lineHeight: Mobile ? "30px" : "44px",
                    margin: "0 auto 1rem",
                    maxWidth: "800px",
                    textAlign: "center",
                    fontWeight: "700",
                  }}
                >
                  Partner With The Best Bookwriting Company Online That Covers
                  All Your Writing Needs
                </h3>
                <div className="graphic">
                  <div className="selected-wrap">
                    <div className="selected">
                      {selectedService === "a" ? (
                        <>
                          <div className={`details`}>
                            <h3 className="mb-[14px]">Ghostwriting Services</h3>
                            <p className="mb-[14px]">
                              Our comprehensive ghostwriting services aim to
                              serve you with the superpower to take your author
                              journey to another level of literary success.
                              Ensure the best quality of your book by joining
                              hands with expert ghostwriters who are passionate
                              about writing, and elevating the level of your
                              book by conveying your book idea with
                              authenticity.
                            </p>
                            <p className="mb-[15px]">
                              We not only aim to write your aspirations exactly
                              how you imagined them to be but we also aspire to
                              serve you with a book that will enhance your
                              author journey with exceptional brilliance.
                            </p>
                            <ul>
                              <li>Relevant TOC</li>
                              <li>Chapter-wise Drafting</li>
                              <li>Authenticity Delivered</li>
                              <li>Readability Prioritized</li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      {selectedService === "b" ? (
                        <>
                          <div className={`details `}>
                            <h3 className="mb-[14px]">Book Editing Services</h3>
                            <p className="mb-[14px]">
                              Even if you’re an experienced writer, you still
                              need to get your book through the eyes of a
                              professional editor and proofreader, who’ll not
                              only help you compile your bunch of stories but
                              also assist you in eliminating all the errors in
                              your literary piece.
                            </p>
                            <p className="mb-[15px]">
                              Book editing absolutely changes the shape of your
                              book and by hiring an expert for editing and
                              proofreading purposes you can serve your book with
                              the dedication that your book really deserves.
                              Ensure the best quality of your manuscript before
                              getting it published on global platforms.
                            </p>
                            <ul>
                              <li>Grammar & Punctuation Errors</li>
                              <li>Readability Check</li>
                              <li>Relevancy Of The Information</li>
                              <li>Originality Of The Content</li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}

                      {selectedService === "d" ? (
                        <>
                          <div className={`details `}>
                            <h3 className="mb-[14px]">
                              Book Cover Design Services
                            </h3>
                            <p className="mb-[14px]">
                              A creative book cover design serves you with a
                              visually captivating approach, gives your book the
                              chance the grab the right attention, and leaves a
                              lasting impression on your readers. The book cover
                              design of your book deserves the right attention
                              as it’s the first thing that gets noticed by the
                              readers in the first place.
                            </p>
                            <p className="mb-[15px]">
                              Considering the phrase, “First impression is the
                              last impression”. Focus on leaving a lasting
                              impression on the readers who actually feel
                              attracted to your book. Our creative team of
                              designers is dedicated to serving you with an
                              engaging first impression.
                            </p>
                            <ul>
                              <li>Animated Book Covers</li>
                              <li>Hard-Back Covers</li>
                              <li>Paperback Covers</li>
                              <li>Ebook Covers</li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {selectedService === "e" ? (
                        <>
                          <div className={`details `}>
                            <h3 className="mb-[14px]">
                              Book Printing Services
                            </h3>
                            <p className="mb-[14px]">
                              Whether you need to publish an eBook or you aspire
                              to publish a printed book with a hardcover, we
                              have the expertise to help you get a book that
                              enhances your literary experience completely and
                              uplifts your author journey to another level.
                            </p>
                            <p className="mb-[15px]">
                              Book printing can turn out to be a daunting task
                              but The Writer's Tree is a team whose main motive
                              is to fulfill all your author needs to ensure you
                              the best services through the journey. At least
                              get some number of copies of your book to send to
                              the audience that has been waiting for your
                              manuscript since the pre-hype.
                            </p>
                            <ul>
                              <li>Print-Books</li>
                              <li>Magazines</li>
                              <li>Year-Books</li>
                              <li>Ebooks</li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {selectedService === "g" ? (
                        <>
                          <div className={`details `}>
                            <h3 className="mb-[14px]">
                              Book Marketing Services
                            </h3>
                            <p className="mb-[14px]">
                              Our marketing experts are extremely professional
                              in serving you with compelling marketing
                              strategies that are strategized according to your
                              needs. From identifying your target niche to
                              applying marketing campaigns that will actually
                              work for you, and help you get what you have
                              always desired for your literary journey.
                            </p>
                            <p className="mb-[15px]">
                              Hire professional book marketers who are not only
                              educated but are passionate about the work they
                              do, no need to worry about your book reaching your
                              potential audience by connecting with experts at
                              The Writer’s Tree.
                            </p>
                            <ul>
                              <li>Social Media Marketing</li>
                              <li>Press Releases/Articles</li>
                              <li>Content Marketing</li>
                              <li>Proxy Marketing</li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                      {selectedService === "f" ? (
                        <>
                          <div className={`details `}>
                            <h3 className="mb-[14px]">
                              Book Publishing Services
                            </h3>
                            <p className="mb-[14px]">
                              The Writer’s Tree also has a team of expert book
                              publishers who have the expertise to help
                              eliminate all the limitations and serve you with
                              access to a global audience, setting no boundaries
                              for your book in terms of readers. Collaborate
                              with a publishing firm that’s basically a hub of
                              writers who are experts in different genres to
                              navigate you through the journey on the go.
                            </p>
                            <p className="mb-[15px]">
                              Whatever genre your book belongs to, our book
                              publishing experts are dedicated to helping you
                              grab the right attention of readers globally.
                              Publish your book following the simplest procedure
                              by collaborating with the best in the field.
                            </p>
                            <ul>
                              <li>Simplest Publishing Process</li>
                              <li>Global Distribution</li>
                              <li>Keyword Targeting</li>
                              <li>Covering Major Platforms</li>
                            </ul>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div className="entries">
                    <div
                      className="hex-cell wow fadeIn"
                      data-wow-delay=".1s"
                      onClick={() => toggleService("a")}
                    >
                      <div className="hex-cell-inner"></div>
                      <span>
                        Ghostwriting <br /> Services
                      </span>
                    </div>
                    <div
                      className="hex-cell wow fadeIn"
                      data-wow-delay=".2s"
                      onClick={() => toggleService("b")}
                    >
                      <div className="hex-cell-inner"></div>
                      <span>
                        Book Editing <br /> Services
                      </span>
                    </div>
                    <div
                      className="hex-cell wow fadeIn"
                      data-wow-delay=".2s"
                      onClick={() => toggleService("f")}
                    >
                      <div className="hex-cell-inner"></div>
                      <span>
                        Book <br /> Publishing <br /> Services
                      </span>
                    </div>
                    <div
                      class="hex-cell center wow fadeIn"
                      data-wow-delay=".4s"
                    >
                      <div class="hex-cell-inner"></div>
                      <span></span>
                    </div>
                    <div
                      className="hex-cell wow fadeIn"
                      data-wow-delay=".2s"
                      onClick={() => toggleService("d")}
                    >
                      <div className="hex-cell-inner"></div>
                      <span>
                        Book Cover <br /> Design <br /> Services
                      </span>
                    </div>

                    <div
                      class="hex-cell wow fadeIn"
                      data-wow-delay=".6s"
                      onClick={() => toggleService("e")}
                    >
                      <div class="hex-cell-inner"></div>
                      <span>
                        Book Printing <br /> Services
                      </span>
                    </div>
                    <div
                      class="hex-cell wow fadeIn"
                      data-wow-delay=".7s"
                      onClick={() => toggleService("g")}
                    >
                      <div class="hex-cell-inner"></div>
                      <span>
                        Book Marketing <br /> Services
                      </span>
                    </div>

                    {/* Add similar divs for other services */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default PartnerSection;
