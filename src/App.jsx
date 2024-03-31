import React, { Suspense, lazy, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  useEffect(() => {
    Aos.init({
      duration: 1200,
    });
  }, []);
  const Navbar = lazy(() => import("./components/Navbar/Navbar"));
  const HeroSection = lazy(() => import("./components/Hero Section/Hero"));
  const GhostWriting = lazy(() => import("./components/pages/GhostWriting"));
  const BookPublishing = lazy(() =>
    import("./components/pages/BookPublishing")
  );
  const BookCover = lazy(() => import("./components/pages/BookCover"));
  const BookEditing = lazy(() => import("./components/pages/Bookediting"));
  const WebDesign = lazy(() => import("./components/pages/Webdesign"));
  // Other Section Routes is given
  const About = lazy(() => import("./components/Hero Section/Aboutus"));
  const Contactus = lazy(() => import("./components/Hero Section/Contact-us"));
  // Footer pages is given
  const BookPrint = lazy(() =>
    import("./components/pages/Footer pages/Bookprint")
  );
  const Pricing = lazy(() => import("./components/pages/Footer pages/pricing"));
  const Blog = lazy(() => import("./components/pages/Footer pages/Blog"));
  const Blog1 = lazy(() => import("./components/pages/Footer pages/Blog1"));
  const BookTrailler = lazy(() =>
    import("./components/pages/Footer pages/BookTrailler")
  );
  const BookMarketing = lazy(() =>
    import("./components/pages/Footer pages/BookMarket")
  );
  const CaseStudies = lazy(() =>
    import("./components/pages/Footer pages/case studies/CaseStudies")
  );
  // Case detail page is given
  const Jeam = lazy(() =>
    import("./components/pages/Footer pages/case studies/jean-comito")
  );
  const Gadyd = lazy(() =>
    import("./components/pages/Footer pages/case studies/Glady")
  );
  const TheKing = lazy(() =>
    import("./components/pages/Footer pages/case studies/TheKing")
  );
  const ABookThat = lazy(() =>
    import("./components/pages/Footer pages/case studies/ABookThat")
  );
  const Streven = lazy(() =>
    import("./components/pages/Footer pages/case studies/Streven")
  );
  const SexBook = lazy(() =>
    import("./components/pages/Footer pages/case studies/Walte")
  );
  const Susan = lazy(() =>
    import("./components/pages/Footer pages/case studies/Susan")
  );
  const Joe = lazy(() =>
    import("./components/pages/Footer pages/case studies/Joe")
  );
  const Jimmy = lazy(() =>
    import("./components/pages/Footer pages/case studies/Jimmy")
  );
  const David = lazy(() =>
    import("./components/pages/Footer pages/case studies/DavidCactor")
  );
  const JohnJabbar = lazy(() =>
    import("./components/pages/Footer pages/case studies/Johnjabar")
  );
  const Emjohan = lazy(() =>
    import("./components/pages/Footer pages/case studies/Emjohan")
  );
  const Katty = lazy(() =>
    import("./components/pages/Footer pages/case studies/Katty")
  );
  const Kelly = lazy(() =>
    import("./components/pages/Footer pages/case studies/kelly")
  );
  const Micheal = lazy(() =>
    import("./components/pages/Footer pages/case studies/Micheal")
  );
  const Pamstevens = lazy(() =>
    import("./components/pages/Footer pages/case studies/Pamstevens")
  );
  const Rick = lazy(() =>
    import("./components/pages/Footer pages/case studies/Rickkaffman")
  );
  const Taras = lazy(() =>
    import("./components/pages/Footer pages/case studies/Taras")
  );
  const Beverly = lazy(() =>
    import("./components/pages/Footer pages/case studies/Beverly")
  );
  const Charles = lazy(() =>
    import("./components/pages/Footer pages/case studies/Charles")
  );
  // Policies page is given
  const Policy = lazy(() => import("./components/policy/Privacypolicy"));
  const Terms = lazy(() => import("./components/policy/Terms"));
  const Stripe = lazy(() => import("./components/pages/Stripe"));
  // Policies page is End
  var Tawk_API = Tawk_API || {},
    Tawk_LoadStart = new Date();
  (function () {
    var s1 = document.createElement("script"),
      s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/65fdade3a0c6737bd123b4ad/1hpjeuhgs";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
  })();

  // Footer pages is End
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<>LOADNG......</>}>
              <Navbar />
            </Suspense>
          }
        >
          <Route
            index
            element={
              <Suspense fallback={<>loading...</>}>
                <HeroSection />
              </Suspense>
            }
          />
          <Route
            path="ghost-writing"
            element={
              <Suspense fallback={<>loading...</>}>
                <GhostWriting />
              </Suspense>
            }
          />
          <Route
            path="book-publishing"
            element={
              <Suspense fallback={<>loading...</>}>
                <BookPublishing />
              </Suspense>
            }
          />
          <Route
            path="book-cover"
            element={
              <Suspense fallback={<>loading...</>}>
                <BookCover />
              </Suspense>
            }
          />
          <Route
            path="book-editing"
            element={
              <Suspense fallback={<>loading...</>}>
                <BookEditing />
              </Suspense>
            }
          />
          <Route
            path="author-web-design"
            element={
              <Suspense fallback={<>loading...</>}>
                <WebDesign />
              </Suspense>
            }
          />
          <Route
            path="about-us"
            element={
              <Suspense fallback={<>loading...</>}>
                <About />
              </Suspense>
            }
          />
          <Route
            path="contact-us"
            element={
              <Suspense fallback={<>loading...</>}>
                <Contactus />
              </Suspense>
            }
          />
          {/* Footer Page is given */}
          <Route
            path="book-printing"
            element={
              <Suspense fallback={<>loading...</>}>
                <BookPrint />
              </Suspense>
            }
          />
          <Route
            path="pricing"
            element={
              <Suspense fallback={<>loading...</>}>
                <Pricing />
              </Suspense>
            }
          />
          <Route
            path="blogs"
            element={
              <Suspense fallback={<>loading...</>}>
                <Blog />
              </Suspense>
            }
          />
          <Route
            path="book-blog"
            element={
              <Suspense fallback={<>loading...</>}>
                <Blog1 />
              </Suspense>
            }
          />
          <Route
            path="book-trailer-video"
            element={
              <Suspense fallback={<>loading...</>}>
                <BookTrailler />
              </Suspense>
            }
          />
          <Route
            path="book-marketing"
            element={
              <Suspense fallback={<>loading...</>}>
                <BookMarketing />
              </Suspense>
            }
          />
          <Route
            path="case-studies"
            element={
              <Suspense fallback={<>loading...</>}>
                <CaseStudies />
              </Suspense>
            }
          />
          <Route
            path="jeancomito"
            element={
              <Suspense fallback={<>loading...</>}>
                <Jeam />
              </Suspense>
            }
          />
          <Route
            path="glady-gsriffin"
            element={
              <Suspense fallback={<>loading...</>}>
                <Gadyd />
              </Suspense>
            }
          />
          <Route
            path="greg-johnson"
            element={
              <Suspense fallback={<>loading...</>}>
                <TheKing />
              </Suspense>
            }
          />
          <Route
            path="jay-borden"
            element={
              <Suspense fallback={<>loading...</>}>
                <ABookThat />
              </Suspense>
            }
          />
          <Route
            path="steven-waterfield"
            element={
              <Suspense fallback={<>loading...</>}>
                <Streven />
              </Suspense>
            }
          />
          <Route
            path="waltere-asili"
            element={
              <Suspense fallback={<>loading...</>}>
                <SexBook />
              </Suspense>
            }
          />
          <Route
            path="susan-wilson"
            element={
              <Suspense fallback={<>loading...</>}>
                <Susan />
              </Suspense>
            }
          />
          <Route
            path="joe-woods"
            element={
              <Suspense fallback={<>loading...</>}>
                <Joe />
              </Suspense>
            }
          />
          <Route
            path="jimmy-haddad"
            element={
              <Suspense fallback={<>loading...</>}>
                <Jimmy />
              </Suspense>
            }
          />
          <Route
            path="david-carter"
            element={
              <Suspense fallback={<>loading...</>}>
                <David />
              </Suspense>
            }
          />
          <Route
            path="john-jacobs"
            element={
              <Suspense fallback={<>loading...</>}>
                <JohnJabbar />
              </Suspense>
            }
          />
          <Route
            path="em-johnson"
            element={
              <Suspense fallback={<>loading...</>}>
                <Emjohan />
              </Suspense>
            }
          />
          <Route
            path="katy-mack"
            element={
              <Suspense fallback={<>loading...</>}>
                <Katty />
              </Suspense>
            }
          />
          <Route
            path="kelly-grennan"
            element={
              <Suspense fallback={<>loading...</>}>
                <Kelly />
              </Suspense>
            }
          />
          <Route
            path="michael-reza"
            element={
              <Suspense fallback={<>loading...</>}>
                <Micheal />
              </Suspense>
            }
          />
          <Route
            path="pam-stevens"
            element={
              <Suspense fallback={<>loading...</>}>
                <Pamstevens />
              </Suspense>
            }
          />
          <Route
            path="rick-kauffman"
            element={
              <Suspense fallback={<>loading...</>}>
                <Rick />
              </Suspense>
            }
          />
          <Route
            path="taras-chubenko"
            element={
              <Suspense fallback={<>loading...</>}>
                <Taras />
              </Suspense>
            }
          />
          <Route
            path="beverly-ahlering-saltonstall"
            element={
              <Suspense fallback={<>loading...</>}>
                <Beverly />
              </Suspense>
            }
          />
          <Route
            path="charles-hill"
            element={
              <Suspense fallback={<>loading...</>}>
                <Charles />
              </Suspense>
            }
          />
          <Route
            path="privacy-policy"
            element={
              <Suspense fallback={<>loading...</>}>
                <Policy />
              </Suspense>
            }
          />
          <Route
            path="terms-condition"
            element={
              <Suspense fallback={<>loading...</>}>
                <Terms />
              </Suspense>
            }
          />
          <Route
            path="using-stripe"
            element={
              <Suspense fallback={<>loading...</>}>
                <Stripe />
              </Suspense>
            }
          />
          {/* Footer Page is End */}
        </Route>
      </Routes>
      <ToastContainer theme="dark" pauseOnHover={true} />
    </>
  );
}

export default App;
