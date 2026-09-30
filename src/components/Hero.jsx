import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

function Hero() {
  const heroRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      /* =====================================
         INITIAL LOAD ANIMATION
      ===================================== */

      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-small-text", {
        opacity: 0,
        y: 30,
        duration: 0.8,
      })
        .from(
          ".hero-title",
          {
            opacity: 0,
            y: 60,
            duration: 1.1,
          },
          "-=0.4"
        )
        .from(
          ".hero-description",
          {
            opacity: 0,
            y: 30,
            duration: 0.8,
          },
          "-=0.5"
        )
        .from(
          ".stat",
          {
            opacity: 0,
            y: 40,
            stagger: 0.15,
            duration: 0.7,
          },
          "-=0.3"
        )
        .from(
          ".visual-circle",
          {
            opacity: 0,
            scale: 0.5,
            duration: 1.1,
          },
          "-=0.6"
        )
        .from(
          ".visual-card",
          {
            opacity: 0,
            scale: 0.7,
            rotation: 10,
            duration: 1.1,
          },
          "-=0.8"
        );


      /* =====================================
         SCROLL — CARD
      ===================================== */

      gsap.to(".visual-card", {
        x: -160,
        y: 100,
        rotation: 18,
        scale: 0.75,

        ease: "none",

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });


      /* =====================================
         SCROLL — CIRCLE
      ===================================== */

      gsap.to(".visual-circle", {
        x: 80,
        y: -50,
        rotation: 20,
        scale: 1.15,

        ease: "none",

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.5,
        },
      });


      /* =====================================
         HERO CONTENT PARALLAX
      ===================================== */

      gsap.to(".hero-content", {
        y: -70,
        opacity: 0.55,

        ease: "none",

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.2,
        },
      });


      /* =====================================
         STATISTICS PARALLAX
      ===================================== */

      gsap.to(".stats", {
        y: -45,
        opacity: 0.7,

        ease: "none",

        scrollTrigger: {
          trigger: ".hero",
          start: "top top",
          end: "bottom top",
          scrub: 1.3,
        },
      });

    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="hero" ref={heroRef}>

      {/* HERO CONTENT */}

      <div className="hero-content">

        <p className="hero-small-text">
          WELCOME TO
        </p>

        <h1 className="hero-title">
          W E L C O M E I T Z F I Z Z
        </h1>

        <p className="hero-description">
          Experience smooth motion, modern design
          and interactive web animation.
        </p>

      </div>


      {/* STATISTICS */}

      <div className="stats">

        <div className="stat">
          <h2>95%</h2>

          <p>
            Creative
            <br />
            Experience
          </p>
        </div>

        <div className="stat">
          <h2>87%</h2>

          <p>
            Visual
            <br />
            Impact
          </p>
        </div>

        <div className="stat">
          <h2>92%</h2>

          <p>
            User
            <br />
            Engagement
          </p>
        </div>

      </div>


      {/* MAIN VISUAL */}

      <div className="hero-visual" aria-hidden="true">

        <div className="visual-circle"></div>

        <div className="visual-card">

          <span>ITZ</span>

          <strong>FIZZ</strong>

        </div>

      </div>

    </section>
  );
}

export default Hero;