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
        <div className="box walletHero-content">
          <h2 className="mainHeading">Terms & Conditions</h2>
          <div className="walletHero-content">
            {/* <div className="whc-left">
              <div className="mint-box-form">
                <main>
                  <input type="text" placeholder="Name" />
                </main>
                <main>
                  <input type="text" placeholder="Email" />
                </main>
                <div className="wallet-checkbox">
                  <input type="checkbox" name="terms" id="terms" />
                  <label htmlFor="terms">Accept Terms & Conditions</label>
                </div>
                <div className="recaptcha-box"></div>
                <button className="button">Submit</button>
              </div>
            </div>
            <div className="whc-right">
              <img src={A4} alt="" />
            </div> */}
            <div className="terms-content">
              <h6>Lorem Ipsum</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                eligendi eos voluptatibus voluptas a pariatur maiores quisquam
                doloremque, facere quae et dicta! Exercitationem, obcaecati ab
                quas ea placeat saepe, voluptatibus molestiae quod, dolor
                doloremque assumenda natus magni. Tempore atque eius cum
                officiis, ratione earum expedita modi aspernatur obcaecati
                maiores ullam voluptatibus repellendus. Necessitatibus, autem
                commodi sequi officia repellendus sapiente deserunt explicabo
                voluptatem, nulla, obcaecati iusto aspernatur nobis quae.
                Impedit minima, eius vitae perspiciatis quisquam consequuntur
                maiores pariatur eligendi, excepturi praesentium nam ex expedita
                enim labore itaque explicabo, corrupti illo ullam. Perspiciatis,
                optio. Perferendis, molestias mollitia repellendus reprehenderit
                consectetur unde, excepturi voluptates minima ab asperiores,
                temporibus totam atque! Natus, porro ea perspiciatis eius autem
                incidunt tempora doloribus nam sed necessitatibus! Consectetur,
                aspernatur officiis quaerat omnis cupiditate incidunt ab,
                possimus provident rerum veritatis praesentium voluptas sunt,
                maiores eum facilis non et. Quo facilis nam aperiam quisquam
                pariatur sint ipsum, laudantium dignissimos iusto.
              </p>
              <br />
              <br />
              <h6>Lorem Ipsum</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                eligendi eos voluptatibus voluptas a pariatur maiores quisquam
                doloremque, facere quae et dicta! Exercitationem, obcaecati ab
                quas ea placeat saepe, voluptatibus molestiae quod, dolor
                doloremque assumenda natus magni. Tempore atque eius cum
                officiisatus, porro ea perspiciatis eius autem incidunt tempora
                doloribus nam sed necessitatibus! Consectetur, aspernatur
                officiis quaerat omnis cupiditate incidunt ab, possimus
                provident rerum veritatis praesentium voluptas sunt, maiores eum
                facilis non et. Quo facilis nam aperiam quisquam pariatur sint
                ipsum, laudantium dignissimos iusto.
              </p>
              <br />
              <br />
              <h6>Lorem Ipsum</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                eligendi eos voluptatibus voluptas a pariatur maiores quisquam
                doloremque, facere quae et dicta! Exercitationem, obcaecati ab
                quas ea placeat saepe, voluptatibus molestiae quod, dolor
                doloremque assumenda natus magni. Tempore atque eius cum
                officiis, ratione earum expedita modi aspernatur obcaecati
                maiores ullam voluptatibus repellendus. Necessitatibus, autem
                commodi sequi officia repellendus sapiente deserunt explicabo
                voluptatem, nulla, obcaecati iusto aspernatur nobis quae.
                Impedit minima, eius vitae perspiciatis quisquam consequuntur
                maiores pariatur eligendi, excepturi praesentium nam ex expedita
                enim labore itaque explicabo, corrupti illo ullam. Perspiciatis,
                optio. Perferendis, molestias mollitia repellendus reprehenderit
                consectetur unde, excepturi voluptates minima ab asperiores,
                temporibus totam atque! Natus, porro ea perspiciatis eius autem
                incidunt tempora doloribus nam sed necessitatibus! Consectetur,
                aspernatur officiis quaerat omnis cupiditate incidunt ab,
                possimus provident rerum veritatis praesentium voluptas sunt,
                maiores eum facilis non et. Quo facilis nam aperiam quisquam
                pariatur sint ipsum, laudantium dignissimos iusto.
              </p>
              <br />
              <br />
              <h6>Lorem Ipsum</h6>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
                eligendi eos voluptatibus voluptas a pariatur maiores quisquam
                doloremque, facere quae et dicta! Exercitationem, obcaecati ab
                quas ea placeat saepe, voluptatibus molestiae quod, dolor
                doloremque assumenda natus magni. Tempore atque eius cum
                officiisatus, porro ea perspiciatis eius autem incidunt tempora
                doloribus nam sed necessitatibus! Consectetur, aspernatur
                officiis quaerat omnis cupiditate incidunt ab, possimus
                provident rerum veritatis praesentium voluptas sunt, maiores eum
                facilis non et. Quo facilis nam aperiam quisquam pariatur sint
                ipsum, laudantium dignissimos iusto.
              </p>
            </div>
          </div>
          <div className="terms-vow">
            <input type="checkbox" name="vow" id="vow" />
            <label htmlFor="vow">
              <p>
                I <input type="text" placeholder="Name" />, with email{" "}
                <input type="email" placeholder="Email" /> Lorem ipsum dolor
                sit, amet consectetur adipisicing elit. Rerum consequuntur sit,
                amet consectetur adipisicing elit. Rerum consequuntur expedita
                rem. Unde pariatur
              </p>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
