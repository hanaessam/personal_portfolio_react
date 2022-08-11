
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer">
        <div className="social-icon">
          <a href="https://www.linkedin.com/in/hana-essam/" target="_blank">
            <img src={navIcon1} alt="Icon" />
          </a>
          <a href="https://www.facebook.com/alienhana/" target="_blank">
            <img src={navIcon2} alt="Icon" />
          </a>
          <a href="https://www.instagram.com/hana_eessam/" target="_blank">
            <img src={navIcon3} alt="Icon" />
          </a>
          <a href="https://github.com/hanaessam" target="_blank">
            <img src={navIcon4} alt="Icon" />
          </a>
        </div>
        <p>Copyright 2022. All Rights Reserved</p>
      </div>
    </footer>
  );
};
