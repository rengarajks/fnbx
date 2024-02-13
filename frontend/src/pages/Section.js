import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import "./Section.css";



const Section = () => {
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


  const onFrameContainer1Click = useCallback(() => {
    navigate("/section-3");
  }, [navigate]);

  return (
    <div className="section-2">
      <div className="section-2-child" />
      <div className="fun-window4">Fun Window</div>
      <div className="section-2-item" />
      <div className="section-2-inner" />
      <div className="section-2-child1" />
      <div className="eyepoint1">EyePoint</div>
      <img
        className="eye-lens-sharingan-png-clipart-icon1"
        alt=""
        src="/eyelenssharinganpngclipart-1@2x.png"
      />
      <div className="rectangle-div2"></div>
      <div className="frame2">
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
      <div className="online-caliberations-and">
        Online caliberations and eye tracking
      </div>
      <div
        className="start-eye-tracking-wrapper"
        onClick={onFrameContainer1Click}
      >
        <div className="start-eye-tracking">Start eye tracking</div>
      </div>
      <div className="div-text-center1">
        <div className="copyright-eyepoint1">
          Copyright EyePoint © All rights reserved.
        </div>
        <div className="div-pointer-events-auto1">
          <div className="link-flex1">
            <img className="icon1" alt="" src="/icon.svg" />
          </div>
          <img className="link-flex-icon2" alt="" src="/link-flex.svg" />
          <img className="link-flex-icon2" alt="" src="/link-flex1.svg" />
        </div>
      </div>
      <div className="list-gap-x-81">
        <div className="link-text-dark-bright5">
          <div className="privacy-policy1">Privacy Policy</div>
        </div>
        <div className="link-text-dark-bright6">
          <div className="privacy-policy1">Terms of Service</div>
        </div>
        <div className="link-text-dark-bright7">
          <div className="privacy-policy1">Docs</div>
        </div>
        <div className="link-text-dark-bright8">
          <div className="privacy-policy1">Changelog</div>
        </div>
        <div className="link-text-dark-bright9">
          <div className="privacy-policy1">Home</div>
        </div>
      </div>
    </div>
  );
};

export default Section;
