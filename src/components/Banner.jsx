import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/header-img.svg";
import { useState, useEffect } from "react";
import "animate.css";

export const Banner = () => {
  const toRotate = [
    "A Computer Science Student",
    "Flutter Developer",
    "Web Developer",
    "UI/UX Designer",
  ];
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const period = 2000;
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section class="banner" id="home">
      <div>
        <span className="tagline">Wlecome to my Portfolio</span>
        <h1>
          {"Hi I'm Hana, "} <span className="wrap">{text}</span>{" "}
        </h1>

        <p>
          Hello, I'm Hana, I'm 19 years old. I study computer science at Faculty
          of Computers and Artificial Intelligence - Cairo University, I'm going
          to be a third year student this year. I do UI/UX design, Web
          development and Mobile App development.{" "}
        </p>
        <a href="#connect">
        <button onClick={() => console.log("Contacting!")}>
          {" "}
          Contact me! <ArrowRightCircle size={45} />
        </button>
        </a>
      </div>
      <div>
        <img src={headerImg} alt="header img" />
      </div>
    </section>
  );
};
