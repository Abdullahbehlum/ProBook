import React, { Suspense, lazy } from "react";

function Hero() {
  const HomeBanner = lazy(() => import("./HomeBanner"));
  const NbcSlider = lazy(() => import("../pages/other sections/NbcSlider"));
  const HireBook = lazy(() => import("../pages/other sections/HireBooks"));
  const BenefitBook = lazy(() => import("../pages/other sections/BenefitBook"));
  const SellingBooks = lazy(() =>
    import("../pages/other sections/BestSelling")
  );
  const ProfesionalBook = lazy(() =>
    import("../pages/other sections/professionalBook")
  );
  const BookWritingService = lazy(() =>
    import("../pages/other sections/BookWriting")
  );
  const HireProfessional = lazy(() =>
    import("../pages/other sections/HireProfes")
  );

  const Testimonals = lazy(() =>
    import("../pages/other sections/Testimonails")
  );
  const Contact = lazy(() => import("../pages/other sections/Contact"));
  const HexgonSetion = lazy(() => import("../pages/other sections/Partnrer"));

  return (
    <>
      {/*Hero section is given  */}
      <div className="mb-4">
        <Suspense fallback={<></>}>
          <HomeBanner />
        </Suspense>
      </div>

      <Suspense fallback={<></>}>
        <NbcSlider />
      </Suspense>

      <Suspense fallback={<></>}>
        <HireBook />
      </Suspense>
      <Suspense fallback={<></>}>
        <BenefitBook />
      </Suspense>
      <Suspense fallback={<></>}>
        <SellingBooks />
      </Suspense>
      <Suspense fallback={<></>}>
        <HexgonSetion />
      </Suspense>
      <Suspense fallback={<></>}>
        <ProfesionalBook />
      </Suspense>
      <Suspense fallback={<></>}>
        <BookWritingService />
      </Suspense>
      <Suspense fallback={<></>}>
        <HireProfessional />
      </Suspense>
      <Suspense fallback={<></>}>
        <Testimonals />
      </Suspense>
      <Suspense fallback={<></>}>
        <Contact />
      </Suspense>

      {/* Hero section is end */}
    </>
  );
}

export default Hero;
