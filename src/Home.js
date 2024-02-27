import React from "react";
import styles from "./styles/Home.module.css";
import Logo from "./asserts/logo.png";
import prizeCup from "./asserts/1.png";
import award from "./asserts/2.png";
import Tools from "./asserts/3.png";
function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.img}>
        <img src={Logo} alt="Logo" className={styles.comImg} />
      </div>
      <div className={styles.awardContainer}>
          <img src={prizeCup} alt="Prize" className={styles.awardImg} />
        <div className="criWinContainer">
          <h4>
            C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
            the 4th time.
          </h4>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img
            src={award}
            alt="Win"
            width={"80%"}
            style={{ marginTop: "30px" }}
          />
          <p>
            Government of India has awarded the "National Energy Conservation
            Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I.
            Group received the award from Smt. Sumitra Mahajan, Speaker of Lok
            Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
          </p>
        </div>
      </div>
      <p style={{ margin: "30px 0", textAlign: "center" }}>
        INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING
        IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE
        NATION.
      </p>
      <div className={styles.tools}>
        <img src={Tools} alt="Tools" style={{ width: "80%" }} />
      </div>
      <p style={{ textAlign: "center", margin: "30px 0" }}>
        Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
        Solar Systems - Motors{" "}
      </p>
      <div className={styles.line}>
        <div className={styles.height}></div>
      </div>
      <p style={{ textAlign: "center", marginBottom: "30px" }}>
        C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
      </p>
      <p style={{ textAlign: "center", marginBottom: "30px", maxWidth:'90%',margin:'auto' }}>
        CHEMICALS & PROCESS <span style={{ color: "red" }}>|</span> POWER{" "}
        <span style={{ color: "red" }}>|</span> WATER & WASTE WATER{" "}
        <span style={{ color: "red" }}>|</span> OILS & GAS{" "}
        <span style={{ color: "red" }}>|</span> PHARMA{" "}
        <span style={{ color: "red" }}>|</span> SUGARS & DISTILLERIES{" "}
        <span style={{ color: "red" }}>|</span> PAPER & PULP{" "}
        <span style={{ color: "red" }}>|</span> MARINE & DEFENCE{" "}
        <span style={{ color: "red" }}>|</span> METAL & MINING{" "}
        <span style={{ color: "red" }}>|</span> FOOD & BEVERAGE{" "}
        <span style={{ color: "red" }}>|</span> PETROCHEMICAL & REFINERIES{" "}
        <span style={{ color: "red" }}>|</span> SOLAR{" "}
        <span style={{ color: "red" }}>|</span> BUILDING{" "}
        <span style={{ color: "red" }}>|</span> HVAC{" "}
        <span style={{ color: "red" }}>|</span> FIRE FIGHTING{" "}
        <span style={{ color: "red" }}>|</span> AGRICULTURE & RESIDENTIAL
      </p>
      <div className={styles.footer}>
        <p>Toll Free : <a href="tel:18002001234"> 1800 200 1234 </a></p>
        <a href="https://www.facebook.com/cripumps" target="_blank" rel="noreferrer">www.facebook.com/cripumps</a>
        <a href="https://www.crigroups.com" target="_blank" rel="noreferrer">www.crigroups.com</a>
      </div>
    </div>
  );
}

export default Home;
