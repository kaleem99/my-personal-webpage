import image from "../assets/images/myPic.png";
import "./Home.css";
import { useSpring, animated } from "react-spring";
import React, { useState, useEffect } from "react";
import SocialMedia from "../Components/SocialMedia";
import "../output.css";

const Home = () => {
  const [drawn, setDrawn] = useState(false);

  useEffect(() => {
    setDrawn(true);
  }, []);
  const isVisible = true;
  const styles = useSpring({
    opacity: isVisible ? 1 : 0,
    y: isVisible ? 0 : 24,
  });
  const { width, color } = useSpring({
    from: { width: "0%", color: "white" },
    to: {
      width: drawn ? "100%" : "0%",
      color: drawn ? "#ec4858" : "rgba(0, 0, 0, 0)",
    },
    config: { duration: 10500 },
  });

  return (
    <div className="grid-container">
      <SocialMedia />
      <div className="grid-item1">
        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mx-auto md:max-w-6xl w-11/12 md:min-w-lg w-12/12">
          <img
            class="w-24 h-24 md:w-48 md:h-auto md:rounded rounded-1 mx-auto"
            src={image}
            alt=""
            width="384"
            height="512"
          />
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <figcaption class="font-medium">
              <animated.h1
                style={{
                  display: "inline-block",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  width,
                  color,
                }}
              >
                Kaleem Mohammad
              </animated.h1>
              {/* <div class="text-sky-500 dark:text-sky-400">Sarah Dayan</div> */}
              <div class="text-slate-700 dark:text-slate-500">
                Software Developer
              </div>
            </figcaption>
            <blockquote>
              <p class="text-md font-medium">
                A hardworking individual eager to learn more and showcase my
                experience and knowledge with 2 years of experience as a
                Software Developer. Ready to face new challenges and explore
                diverse technologies while collaborating with other IT
                professionals. I have worked with frontend technologies such as
                HTML5, CSS, PHP, JavaScript, and React, as well as backend
                technologies including ExpressJS, NodeJS, and PostgreSQL.
                Additionally, I am proficient in using tools and languages like
                Git, Github, Jasmine, Storybook, Postman, Docker, and C
                Programming.
              </p>
            </blockquote>
          </div>
        </figure>

        <figure class="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 mx-auto mt-8 md:max-w-6xl w-11/12 md:min-w-lg w-12/12">
          <div class="pt-6 md:p-8 text-center md:text-left space-y-4">
            <blockquote>
              <p class="text-md font-medium">
                I have experience in modifying and maintaining an open-source
                learning platform called Tilde, including reviewing code and
                collaborating with both frontend and backend developers in an
                Agile environment. I also have a track record of maintaining
                existing applications and contributing to the development of new
                applications.
              </p>
            </blockquote>
          </div>
        </figure>
      </div>
    </div>
  );
};

export default Home;
