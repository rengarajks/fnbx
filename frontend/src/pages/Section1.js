import { useCallback } from "react";
import { TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import "./Section1.css";

const Section1 = () => {
  const navigate = useNavigate();

  const onFrameLinkClick = useCallback(() => {
    navigate("/section-2");
  }, [navigate]);

  const onHomeClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAboutClick = useCallback(() => {
    navigate("/section-2");
  }, [navigate]);

  const onContactClick = useCallback(() => {
    navigate("/section-2");
  }, [navigate]);

  return (
    <div className="section-1">
      <div className="section-1-child" />
      <div className="fun-window">Fun Window</div>
      <div className="try-it-wrapper">
        <div className="try-it">Try It</div>
      </div>
      <div className="section-1-item" />
      <div className="section-1-inner" />
      <div className="ellipse-div" />
      <div className="system-requirements">System Requirements</div>
      <div className="webcam-net-35-container">
        <ul className="webcam-net-35-good-internet">
          <li className="webcam">
            <span>Webcam</span>
          </li>
          <li className="webcam">
            <a
              className="net-351"
              href="http://www.softpedia.com/get/Others/Signatures-Updates/Microsoft-NET-Framework-Pre-Release.shtml"
              target="_blank"
            >
              <span>
                <span className="net-352">.NET 3.5</span>
              </span>
            </a>
          </li>
          <li>
            <span>Good interne</span>
            <span className="t">t</span>
          </li>
        </ul>
      </div>
      <div className="pages">Pages</div>
      <div className="section-1-child" />
      <Link
        className="try-it-container"
        to="/section-2"
        onClick={onFrameLinkClick}
      >
        <div className="try-it">Try It</div>
      </Link>
      <div className="section-1-item" />
      <div className="section-1-inner" />
      <div className="section-1-child4" />
      <div className="rectangle-div" />
      <div className="real-time-gaze-visualization-container">
        <ul className="real-time-gaze-visualization">
          <li className="webcam">Real-time Gaze Visualization</li>
          <li className="webcam">Pixel Highlighting Animation</li>
          <li className="webcam">Interactive Calibration Check</li>
          <li className="webcam">User-Customizable Fun Window Themes</li>
          <li className="webcam">Free head movements</li>
          <li>Compatibility with Different Screen Resolutions</li>
        </ul>
      </div>
      <div className="features">Features</div>
      <div className="fun-window-track-container">
        <p className="p">
          <span className="span">
            <span className="fun-window3">Fun window</span>
          </span>
        </p>
        <p className="p">
          <span className="span">
            <b></b>
          </span>
        </p>
        <p className="p">
          <span className="span">
            <span className="track-your-screen">
              Track your screen with your eyes via webcam.
            </span>
          </span>
        </p>
        <p className="p">
          <span>
            <span className="span"></span>
          </span>
        </p>
        <p className="fun-window-is-a-webcam-eye-tra">
          <span>
            <span className="fun-window-is-a-webcam-eye-tra1">
              <span>
                Fun window is a Webcam eye tracking tool that lets you track
                your screen and highlight using your eyes. You don’t have to
                install any kind of costly retina scanning hardware or complex
                hardware system. This website will track your eye gaze and
                highlight screen accordingly. This software can be very useful
                for the physically disabled.
              </span>
              <span className="t"></span>
            </span>
          </span>
        </p>
      </div>
      <div className="section-1-child5" />
      <div className="searchbar">
        <TextField className="content" label="| Search" />
      </div>
      <div className="system-requirements">System Requirements</div>
      <div className="frame">
        <div className="home">Home</div>
        <div className="about">About</div>
        <div className="contact">Contact</div>
      </div>
      <div className="webcam-net-35-container">
        <ul className="webcam-net-35-good-internet">
          <li className="webcam">
            <span>Webcam</span>
          </li>
          <li className="webcam">
            <a
              className="net-351"
              href="http://www.softpedia.com/get/Others/Signatures-Updates/Microsoft-NET-Framework-Pre-Release.shtml"
              target="_blank"
            >
              <span>
                <span className="net-352">.NET 3.5</span>
              </span>
            </a>
          </li>
          <li>
            <span>Good interne</span>
            <span className="t">t</span>
          </li>
        </ul>
      </div>
      <div className="pages">Pages</div>
      <a className="eyepoint">EyePoint</a>
      <img
        className="eye-lens-sharingan-png-clipart-icon"
        alt=""
        src="/eyelenssharinganpngclipart-1@2x.png"
      />
      <div className="list-gap-x-8">
        <div className="link-text-dark-bright">
          <div className="privacy-policy">Privacy Policy</div>
        </div>
        <div className="link-text-dark-bright1">
          <div className="privacy-policy">Terms of Service</div>
        </div>
        <div className="link-text-dark-bright2">
          <div className="privacy-policy">Docs</div>
        </div>
        <div className="link-text-dark-bright3">
          <div className="privacy-policy">Changelog</div>
        </div>
        <div className="link-text-dark-bright4">
          <div className="privacy-policy">Home</div>
        </div>
      </div>
      <div className="div-text-center">
        <div className="copyright-eyepoint">
          Copyright EyePoint © All rights reserved.
        </div>
      </div>
      <div className="div-pointer-events-auto">
        <div className="link-flex">
          <img className="icon" alt="" src="/icon.svg" />
        </div>
        <img className="link-flex-icon" alt="" src="/link-flex.svg" />
        <img className="link-flex-icon" alt="" src="/link-flex1.svg" />
      </div>
      <div className="div">
        <a className="youtube-placeholder2b05e7d68d">
          <img
            className="youtube-placeholder-icon"
            alt=""
            src="/youtubeplaceholder.svg"
          />
        </a>
        <div className="demo">
          <span className="fun-window3">Demo</span>
          <span className="span3">{` `}</span>
        </div>
      </div>
      <div className="frame1">
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
  );
};

export default Section1;
