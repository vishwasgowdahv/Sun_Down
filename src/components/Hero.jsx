import React from "react";
import styles from "./Hero.module.css";
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export default function Hero() {
  gsap.registerPlugin(useGSAP);

  useGSAP(()=>{
    gsap.from('#maintxt h1',{
      y:100,
      duration:.5,
      stagger:.2,
      opacity:0
    })
  })
 
  function showimage(e) {
    let a = document.getElementById("hoverimg");
    a.style.display = "block";
    let b = document.getElementById("imgtoShow");
    let c = e._targetInst.memoizedProps.dataImage;
    b.src = c;
    console.log(e._targetInst.memoizedProps.dataImage);
  }
  function hideimg() {
    let a = document.getElementById("hoverimg");
    a.style.display = "none";
  }
  return (
    <>
    <div id="maintainence" className={styles.maintainence}>
      This Site is yet only available to view in Desktop Mode Please Cooperate
    </div>
      <div id="hoverimg" className={styles.hoverimg}>
        <img id="imgtoShow" src="" alt="" />
      </div>
      <div className={styles.con}>
        <div className={styles.left}>
          <h3>
            Sundown is a multi-disciplinary studio focused on creating <br />{" "}
            unique, end-to-end experiences and environments.
          </h3>
        </div>
        <div id="maintxt" className={styles.right}>
         <div className={styles.headwrap}>
         <h1>
         SPACES</h1>
         </div>
         <div className={styles.headwrap}>
         <h1>
         THAT</h1>
         </div>
         <div className={styles.headwrap}>
         <h1>
         INSPIRE</h1>
         </div>
        </div>
        
        <div className={styles.ball}>
          <div className={styles.ball1}></div>
          <div className={styles.ball2}></div>
        </div>
      </div>
      <div className={styles.line}></div>
      <div className={styles.video}>
        <video autoPlay loop muted src="assets/videos/main.mp4"></video>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.textmove}>
          <div className={styles.circle}></div>
          <div className={styles.text}>Experiences</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Content</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Environments</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Experiences</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Content</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Environments</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Experiences</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Content</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Environments</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Experiences</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Content</div>
          <div className={styles.circle}></div>
          <div className={styles.text}>Environments</div>
          <div className={styles.circle}></div>
        </div>
      </div>

      <div className={styles.wrap2}>
        <div className={styles.wrap2ball}>
          <div className={styles.inwrap2ball}></div>
        </div>
        <div className={styles.wrap2left}>
          <p>
            We are a group of design-driven, goal-focused creators, producers,
            and designers who believe that the details make all the difference.
          </p>
        </div>
        <div className={styles.wrap2right}>
          <div className={styles.img}>
            <img src="assets/images/nike.webp" alt="" />
          </div>
          <div className={styles.para}>
            <p>
              We love to create, we love to solve, we love to collaborate, and
              we love to turn amazing ideas into reality. We’re here to partner
              with you through every step of the process and know that
              relationships are the most important things we build.
            </p>
          </div>
        </div>
      </div>
      {/* next section starts here */}
      <div className={styles.projects}>
        <div className={styles.title}>
          <h3> <span><img src="favicon.png" alt="" /></span>featured projects</h3>
        </div>
        <div className="projectitems">

        <div
          dataImage="assets/images/1.avif"
          onMouseLeave={hideimg}
          onMouseEnter={showimage}
          className={styles.projectitem}
        >
          NYFW Popup
        </div>
        <div
          dataImage="assets/images/2.avif"
          onMouseLeave={hideimg}
          onMouseEnter={showimage}
          className={styles.projectitem}
        >
          Converse SoHo
        </div>
        <div
          dataImage="assets/images/3.avif"
          onMouseLeave={hideimg}
          onMouseEnter={showimage}
          className={styles.projectitem}
        >
          50th Anniversary
        </div>
        <div
          dataImage="assets/images/4.avif"
          onMouseLeave={hideimg}
          onMouseEnter={showimage}
          className={styles.projectitem}
        >
          Carmelo Anthony 7pm In Broklyn Set
        </div>
        <div
          dataImage="assets/images/5.avif"
          onMouseLeave={hideimg}
          onMouseEnter={showimage}
          className={styles.projectitem}
        >
          Markers Studio HOI
        </div>
        <div
          dataImage="assets/images/6.avif"
          onMouseLeave={hideimg}
          onMouseEnter={showimage}
          className={styles.projectitem}
        >
          Play New Kidvision
        </div>
        <div
          dataImage="assets/images/7.avif"
          onMouseLeave={hideimg}
          onMouseEnter={showimage}
          className={styles.projectitem}
        >
          Kelce Super Bowl Party
        </div>
        <div
          dataImage="assets/images/8.avif"
          onMouseLeave={hideimg}
          onMouseEnter={showimage}
          className={styles.projectitem}
        >
          Capezio NYC Flagship
        </div>
        </div>
        <div className={styles.btn}>
          <button>All Projects  →</button>
        </div>
      </div>
    </>
  );
}
