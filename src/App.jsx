import Hero from "./components/Hero";
import { useLayoutEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function App() {
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* =================================
         SECOND SECTION ANIMATION
      ================================= */

      gsap.from(".scroll-label", {
        opacity: 0,
        y: 30,

        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top 80%",
          end: "top 50%",
          scrub: 1,
        },
      });


      gsap.from(".scroll-heading", {
        opacity: 0,
        y: 100,
        scale: 0.9,

        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top 75%",
          end: "top 40%",
          scrub: 1,
        },
      });


      gsap.from(".scroll-line", {
        scaleX: 0,
        transformOrigin: "left center",

        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top 70%",
          end: "top 30%",
          scrub: 1,
        },
      });

    });

    return () => ctx.revert();
  }, []);

  return (
    <main>

      <Hero />

      {/* =================================
          SECOND SECTION
      ================================= */}

      <section className="scroll-section">

        <div className="scroll-content">

          <p className="scroll-label">
            KEEP SCROLLING
          </p>

          <div className="scroll-line"></div>

          <h2 className="scroll-heading">
            EXPLORE THE
            <br />
            EXPERIENCE
          </h2>

          <p className="scroll-description">
            Scroll-driven motion creates a smooth and
            interactive experience between the user
            and the interface.
          </p>

        </div>

      </section>

    </main>
  );
}

export default App;