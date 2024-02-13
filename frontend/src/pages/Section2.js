import "./Section2.css";
import {useEffect, useState} from 'react'
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";


const Section2 = () => {

  const navigate = useNavigate();
  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutClick = useCallback(() => {
    navigate("/section-2");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/section-2");
  }, [navigate]);






  const[a,setA]=useState();
  const[b,setB]=useState();


  useEffect(()=>{
    const cursor = document.getElementById('cursor');

    // Function to move the cursor to the specified coordinates
    function moveCursor(x, y) {
      cursor.style.transform = `translate(${x}px, ${y}px)`;
    }
  
    // Function to continuously update the cursor position
    function animateCursor() {
      // Example: Move cursor in a circle
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const radius = 100;
      const angle = Date.now() / 1000; // Adjust speed of movement
  
      const x = centerX + Math.cos(angle) * radius;
      const y = centerY + Math.sin(angle) * radius;

      setA(x)
      setB(y)
  
      moveCursor(x, y);
  
      // Request next frame
      requestAnimationFrame(animateCursor);
    }
  
    // Start the animation loop
    animateCursor();
  },[])



 

  return (
    <div className="section-3">
      <div className="frame3">
        <div className="frame4">
          <div className="frame5">
            <a className="home5" >Home</a>
            <div className="frame6">
              <a className="contact3">Contact</a>
              <a className="about3">About</a>
            </div>
          </div>
        </div>
        <div className="frame7">
          <div className="frame-child" />
          <a className="eyepoint2">EyePoint</a>
          <img
            className="eye-lens-sharingan-png-clipart-icon2"
            alt=""
            src="/eyelenssharinganpngclipart-1@2x.png"
          />
          <div className="frame8">
          <a className="home2" onClick={onHomeClick}>
          Home
        </a>
        <a className="about1" onClick={onAboutClick}>
          About
        </a>
        <a className="contact1" onClick={onContactClick}>
          Contact
        </a>
          </div>
        </div>
      </div>
      <div className="frame9">
        <div className="frame10">
          <div className="frame11">
            <div className="frame-item" />
            <div className="fun-window5">Fun Window</div>
            <div className="frame-inner" />
            
            <div className="system-requirements2">System Requirements</div>
            <div className="webcam-net-35-container2">
              <ul className="webcam-net-35-good-internet2">
                <li className="webcam2">
                  <span>Webcam</span>
                </li>
                <li className="webcam2">
                  <a
                    className="net-357"
                    href="http://www.softpedia.com/get/Others/Signatures-Updates/Microsoft-NET-Framework-Pre-Release.shtml"
                    target="_blank"
                  >
                    <span>
                      <span className="net-358">.NET 3.5</span>
                    </span>
                  </a>
                </li>
                <li>
                  <span>Good interne</span>
                  <span className="t2">t</span>
                </li>
              </ul>
            </div>
            
            <div className="frame-child2" />
            <div className="features1">Features</div>
            <div className="fun-window-track-container1">
              <p className="left-eye">
                <span className="fun-window7">
                  <span className="fun-window8">Fun window</span>webcam-net-35-container2
                </span>
              </p>
              <p className="left-eye">
                <span className="fun-window7">
                  <b></b>
                </span>
              </p>
              <p className="left-eye">
                <span className="fun-window7">
                  <span className="track-your-screen1">
                    Track your screen with your eyes via webcam.
                  </span>
                </span>
              </p>
              <p className="left-eye">
                <span>
                  <span className="fun-window7"></span>
                </span>
              </p>
              <p className="fun-window-is-a-webcam-eye-tra2">
                <span>
                  <span className="fun-window-is-a-webcam-eye-tra3">
                    <span>
                      Fun window is a Webcam eye tracking tool that lets you
                      track your screen and highlight using your eyes. You don’t
                      have to install any kind of costly retina scanning
                      hardware or complex hardware system. This website will
                      track your eye gaze and highlight screen accordingly. This
                      software can be very useful for the physically disabled.
                    </span>
                    <span className="t2"></span>
                  </span>
                </span>
              </p>
            </div>
            <div className="frame-child3" />
            <div className="frame-child4" />
            <div className="left-eye-container">
              <p className="left-eye">Left eye : {a}</p>
              <p className="left-eye">Right eye : {b}</p>
            </div>
            <div className="searchbar1">
              <div className="content1">
                <div className="magnifyingglass">
                  <div className="magnifyingglass1">􀊫</div>
                </div>
                <div className="placeholder-label">
                  <span>|</span>
                  <span className="search">Search</span>
                </div>
              </div>
            </div>
            <div className="pages2">Pages</div>
            <div className="div1">
              <div className="demo2">
                <span className="fun-window8">Demo</span>
                <span className="span7">{` `}</span>
              </div>
              <div className="real-time-gaze-visualization-container1">
                <ul className="real-time-gaze-visualization2">
                  <li className="webcam2">Real-time Gaze Visualization</li>
                  <li className="webcam2">Pixel Highlighting Animation</li>
                  <li className="webcam2">Interactive Calibration Check</li>
                  <li className="webcam2">
                    User-Customizable Fun Window Themes
                  </li>
                  <li className="webcam2">Free head movements</li>
                  <li>Compatibility with Different Screen Resolutions</li>
                </ul>
              </div>
            </div>
            <img
              className="youtube-placeholder2b05e7d68d-icon"
              alt=""
              src="/youtubeplaceholder2b05e7d68dsvg.svg"
            />
        
            <div id="cursor"></div>
          </div>
        </div>
        <div className="frame12">
          <div className="frame13">
            <div className="div-text-center2">
              <div className="copyright-eyepoint2">
                Copyright EyePoint © All rights reserved.
              </div>
            </div>
            <div className="div-pointer-events-auto2">
              <div className="link-flex2">
                <img className="icon2" alt="" src="/icon.svg" />
              </div>
              <img className="link-flex-icon4" alt="" src="/link-flex.svg" />
              <img className="link-flex-icon4" alt="" src="/link-flex1.svg" />
            </div>
          </div>
        </div>
        <div className="frame14">
          <div className="list-gap-x-82">
            <div className="link-text-dark-bright10">
              <div className="privacy-policy2">Privacy Policy</div>
            </div>
            <div className="link-text-dark-bright11">
              <div className="privacy-policy2">Terms of Service</div>
            </div>
            <div className="link-text-dark-bright12">
              <div className="privacy-policy2">Docs</div>
            </div>
            <div className="link-text-dark-bright13">
              <div className="privacy-policy2">Changelog</div>
            </div>
            <div className="link-text-dark-bright14">
              <div className="privacy-policy2">Home</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
