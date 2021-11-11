import React, { useEffect } from "react";
import "./WalletPages.css";
import { FaDiscord, FaTwitterSquare } from "react-icons/fa";
import { MdArrowUpward, MdMenu, MdClose } from "react-icons/md";
import A4 from "../../assets/a4.png";

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
        duration: 1,
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
  return (
    <div className="App">
      {/* Wallet Header */}
      <div className="walletHeader">
        <div className="box">
          <div className="walletHeader-content">
            <h1 onClick={moveTo1}>CosmoKitties</h1>
            <button className="button">Select Wallet</button>
          </div>
        </div>
      </div>
      {/* Wallet Hero Section */}
      <div className="walletHero" id="section1">
        <div className="box">
          <div className="walletHero-content">
            <div className="whc-left">
              <h1>Connect to your wallet to start minting!</h1>
            </div>
            <div className="whc-right">
              <img src={A4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
