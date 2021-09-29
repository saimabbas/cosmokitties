import React, { useEffect } from "react";
import "./App.css";
import { FaDiscord, FaTwitterSquare } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import A1 from "./assets/a1.png";
import A2 from "./assets/a2.png";
import A3 from "./assets/a3.png";
import A4 from "./assets/a4.png";

import { Power4 } from "gsap/dist/gsap";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import $ from "jquery";

function App() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    /* Scroll-to-Top button visibility control */
    gsap.fromTo(
      ".moveToTop",
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: "#section1",
          toggleActions: "play pause resume none",
          start: "bottom 0%",
          scrub: true,
        },
      }
    );
  }, []);
  const moveTo1 = () => {
    gsap.to(window, {
      scrollTo: {
        y: "#section1",
        offsetY: 65,
      },
      ease: Power4.easeInOut,
    });
  };
  const moveTo2 = () => {
    gsap.to(window, {
      scrollTo: "#section2",
      ease: Power4.easeInOut,
    });
  };
  const moveTo3 = () => {
    gsap.to(window, {
      scrollTo: "#section3",
      ease: Power4.easeInOut,
    });
  };
  const moveTo4 = () => {
    gsap.to(window, {
      scrollTo: "#section4",
      ease: Power4.easeInOut,
    });
  };
  const moveTo5 = () => {
    gsap.to(window, {
      scrollTo: "#section5",
      ease: Power4.easeInOut,
    });
  };
  const handleToTop = () => {
    gsap.to(window, {
      duration: 1,
      scrollTo: "#section1",
      ease: Power4.easeInOut,
    });
  };
  return (
    <div className="App">
      {/* MoveToTop Button */}
      <span className="moveToTop" onClick={handleToTop}>
        <MdArrowUpward />
      </span>

      {/* Header */}
      <div className="header">
        <div className="box">
          <div className="header-content">
            <h1 onClick={moveTo1}>CosmoKitties</h1>
            <div>
              <a onClick={moveTo2} className="mt mt2">
                About
              </a>
              <a onClick={moveTo3} className="mt mt3">
                Roadmap
              </a>
              <a onClick={moveTo4} className="mt mt4">
                Collection
              </a>
              <a onClick={moveTo5} className="mt mt5">
                Community
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="hero section" id="section1">
        <div className="box">
          <div className="hero-content">
            <div className="hc-left">
              <h2>Cool site, huh?</h2>
              <h1>CosmoKitties</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque
                illum obcaecati sint a dignissimos dolorem, quo mollitia
                inventore? Vero voluptatibus, natus nemo maiores, iste quia
                totam odio ducimus voluptatem expedita voluptatum? Facilis sed
                laborum autem!
              </p>
              <button className="button">Mint Your Own!</button>
            </div>
            <div className="hc-right">
              <img src={A4} alt="" />
              <span>
                <a href="">
                  <FaDiscord />
                </a>
                <a href="">
                  <FaTwitterSquare />
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="about section" id="section2">
        <div className="box">
          <div className="about-content">
            <div className="ac-left">
              <h2 className="mainHeading">Know Us</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque
                sit accusantium iure ad. Dolorem repudiandae, delectus magni
                aspernatur ab debitis, mollitia tempore ducimus consequuntur
                harum fugit, quaerat vero obcaecati quibusdam eveniet voluptate
                possimus dolor natus vel officia blanditiis quam in. Veniam cum
                enim alias tempore eaque, eveniet expedita harum consequuntur
                ullam. Eius nam distinctio culpa voluptatem, cum tenetur magnam
                reiciendis.
              </p>
              <button className="button">View Roadmap</button>
            </div>
            <div className="ac-right">
              <span>
                <img src={A1} alt="" />
              </span>
              <span>
                <img src={A2} alt="" />
              </span>
              <span>
                <img src={A3} alt="" />
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Roadmap Section */}
      <div className="roadmap section" id="section3">
        <div className="box">
          <div className="roadmap-content">
            <h2 className="mainHeading">Roadmap</h2>
            <div className="roadmap-container">
              <div className="roadmap-box">
                <div className="roadmap-index">
                  <span>PRE</span>
                </div>
                <div className="roadmap-text">
                  <h3>PRE LAUNCH</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus, suscipit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-box">
                <div className="roadmap-index">
                  <span>GO</span>
                </div>
                <div className="roadmap-text">
                  <h3>LAUNCH</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus, suscipit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-box">
                <div className="roadmap-index">
                  <span>25%</span>
                </div>
                <div className="roadmap-text">
                  <h3>WINNER WINNER, CHICKEN DINNER</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus, suscipit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-box">
                <div className="roadmap-index">
                  <span>50%</span>
                </div>
                <div className="roadmap-text">
                  <h3>COMMUNITY ENGAGEMENT REWARDS</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-box">
                <div className="roadmap-index">
                  <span>75%</span>
                </div>
                <div className="roadmap-text">
                  <h3>MERCH, MERCH, MERCH</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus, suscipit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-box">
                <div className="roadmap-index">
                  <span>100%</span>
                </div>
                <div className="roadmap-text">
                  <h3>HOW RARE?</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus, suscipit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                  </ul>
                </div>
              </div>
              <div className="roadmap-box">
                <div className="roadmap-index">
                  <span>POST</span>
                </div>
                <div className="roadmap-text">
                  <h3>HOME YOUR TRASH</h3>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus, suscipit?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                    <li>
                      Lorem ipsum dolor sit amet consectetur adipisicing t?
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Collection Section */}
      <div className="collection section" id="section4">
        <div className="box">
          <div className="collection-content">
            <h2 className="mainHeading">Collection</h2>
            <div className="collection-grid">
              <div className="collection-grid-box">
                <img src={A1} alt="" />
                <main>
                  <h6>CosmoKitties</h6>
                  <span>#255</span>
                </main>
              </div>
              <div className="collection-grid-box">
                <img src={A2} alt="" />
                <main>
                  <h6>CosmoKitties</h6>
                  <span>#255</span>
                </main>
              </div>
              <div className="collection-grid-box">
                <img src={A3} alt="" />
                <main>
                  <h6>CosmoKitties</h6>
                  <span>#255</span>
                </main>
              </div>
              <div className="collection-grid-box">
                <img src={A4} alt="" />
                <main>
                  <h6>CosmoKitties</h6>
                  <span>#255</span>
                </main>
              </div>

              <div className="collection-grid-box">
                <img src={A1} alt="" />
                <main>
                  <h6>CosmoKitties</h6>
                  <span>#255</span>
                </main>
              </div>
              <div className="collection-grid-box">
                <img src={A2} alt="" />
                <main>
                  <h6>CosmoKitties</h6>
                  <span>#255</span>
                </main>
              </div>
              <div className="collection-grid-box">
                <img src={A3} alt="" />
                <main>
                  <h6>CosmoKitties</h6>
                  <span>#255</span>
                </main>
              </div>
              <div className="collection-grid-box">
                <img src={A4} alt="" />
                <main>
                  <h6>CosmoKitties</h6>
                  <span>#255</span>
                </main>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Community Section */}
      <div className="community section" id="section5">
        <div className="box">
          <div className="community-content">
            <div className="cc-left">
              <img src={A3} alt="" />
            </div>
            <div className="cc-right">
              <h3>We are too good to be cats</h3>
              <h2 className="mainHeading">Community</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Nesciunt quasi rem minus necessitatibus cumque ratione earum
                assumenda in officia eveniet?
              </p>
              <button className="button">Join Discord</button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="box">
        <div className="footer">
          {/*  <span>
            <FaDiscord />
            <FaTwitterSquare />
          </span> */}
          <p>Copyright © 2021 CosmoKitties. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
