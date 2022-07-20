import React, { useEffect, useRef } from 'react';
import { gsap, Power3 } from 'gsap';

const MainVisual: React.FC = () => {
  const logoItem = useRef<HTMLImageElement>(null);

  const setAnimation = () => {
    gsap.fromTo(
      logoItem.current,
      2,
      {
        opacity: 0,
        y: 15,
        ease: Power3.easeOut,
        delay: 0.1,
      },
      {
        opacity: 1,
        y: 0,
        ease: Power3.easeInOut,
        delay: 0.1,
      },
    );
  };

  useEffect(() => {
    setAnimation();
  }, []);

  return (
    <div className="custom-container" id="main">
      <div
        className="flex h-95% w-95% flex-col items-center justify-center rounded-xl border-2 border-primary-light"
        ref={logoItem}
      >
        <img
          src="./assets/products-stoffelMPC-logo.png"
          alt="stoffel"
          className="w-48 object-contain"
        />
        <div className="flex max-w-3xl flex-col items-center justify-center text-center">
          <h2 className="custom-text-shadow font-bold text-primary-light">
            Stoffel MPC
          </h2>
          <h5 className="mt-1 font-bold text-secondary-dark">
            A framework for building expressive confidential blockchain
            applications using multiparty computation (MPC)
          </h5>
        </div>
        <div className="mt-4 flex w-2/5 flex-col items-center justify-center border-t-2 border-gray-400	pt-4">
          <h5 className="Class Properties custom-text-shadow mb-1.5 text-secondary-main">
            Follow us
          </h5>
          <div className="flex justify-center px-1">
            <div className="mx-4 flex flex-col justify-center">
              <a
                href="https://twitter.com/StoffelFinance"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-anchor"
              >
                <img
                  src="./assets/twitter-logo.png"
                  alt="twitter"
                  className="custom-img"
                />
                <p className="mt-0 mb-3 whitespace-nowrap rounded-md bg-tertiary-main px-1.5 text-white hover:bg-tertiary-dark">
                  Twitter
                </p>
              </a>
              <a
                href="https://cryptpad.fr/form/#/3/form/view/3b4ed9a8bde9ba12924acdd86fad2a39/"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-anchor"
              >
                <img
                  src="./assets/products-developer-survey.svg"
                  alt="developer-survey"
                  style={{ width: '25px' }}
                  className="custom-img"
                />
                <p className="mt-0 mb-3 whitespace-nowrap rounded-md bg-tertiary-main px-1.5 text-white hover:bg-tertiary-dark">
                  Developer Survey
                </p>
              </a>
            </div>
            <div className="mx-1 flex flex-col justify-center">
              <a
                href="https://github.com/hashcloak/stoffelMPC"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-anchor"
              >
                <img
                  src="./assets/github-logo-black.png"
                  alt="github"
                  className="custom-img"
                />
                <p className="mt-0 mb-3 whitespace-nowrap rounded-md bg-tertiary-main px-1.5 text-white hover:bg-tertiary-dark">
                  Github
                </p>
              </a>
              <a
                href="https://docs.stoffelmpc.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-anchor"
              >
                <img
                  src="./assets/products-mkbook.png"
                  alt="documentation"
                  className="custom-img"
                />
                <p className="mt-0 mb-3 whitespace-nowrap rounded-md bg-tertiary-main px-1.5 text-white hover:bg-tertiary-dark">
                  Stoffel MPC Docs
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainVisual;
