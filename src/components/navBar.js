import React, { useState } from "react";
import { Link } from "react-router-dom";

function NavBar() {
  const [navOpened, setNavOpened] = useState(false);

  return (
    <div className={navOpened ? "navBar opened" : "navBar"}>
      <div className="mbHeader">
        <div className="logo">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 146">
            <path
              id="Selection"
              fill="currentColor"
              stroke="black"
              strokeWidth="1"
              d="M 0.57,25.77
           C 2.42,15.95 6.53,8.05 15.86,3.27
             20.92,0.69 24.75,0.52 30.26,0.58
             44.48,0.75 55.65,11.57 56.35,25.77
             56.35,25.77 47.35,25.77 47.35,25.77
             46.71,21.87 46.04,19.91 43.45,16.79
             41.74,14.73 39.77,13.03 37.45,11.70
             29.73,7.31 20.40,9.40 14.68,16.03
             11.07,20.20 10.81,23.49 8.94,24.88
             7.27,26.11 2.68,25.77 0.57,25.77 Z
           M 48.25,30.27
           C 48.25,30.27 57.25,30.27 57.25,30.27
             57.25,30.27 57.25,40.16 57.25,40.16
             57.25,42.26 57.05,45.21 58.16,47.03
             59.89,49.82 64.02,50.46 68.25,57.26
             75.56,68.17 74.19,78.80 68.25,89.64
             75.19,92.03 78.87,93.45 83.94,99.54
             87.13,103.38 88.63,107.28 89.55,112.13
             94.08,136.28 68.32,153.94 47.35,141.51
             31.91,132.35 29.64,110.90 41.47,97.89
             48.01,90.71 54.81,91.51 60.13,84.23
             68.81,72.40 62.00,57.18 48.25,54.56
             48.25,54.56 48.25,30.27 48.25,30.27 Z
           M 41.05,91.44
           C 39.70,93.46 37.10,97.59 34.67,98.24
             28.91,99.82 20.62,88.01 18.80,83.35
             14.60,72.60 17.58,58.81 26.69,51.44
             31.97,47.16 37.30,45.88 43.75,44.66
             43.75,46.72 44.09,51.41 42.86,53.01
             41.47,54.80 38.12,54.80 33.89,57.97
             26.15,63.74 23.82,73.02 28.30,81.55
             29.55,83.94 30.90,85.76 32.99,87.49
             35.48,89.56 37.99,90.57 41.05,91.44 Z
           M 61.74,98.25
           C 56.19,98.66 51.69,100.03 47.83,104.31
             36.79,116.51 44.97,136.40 61.74,136.40
             81.13,136.40 87.41,113.46 74.30,102.59
             70.42,99.38 66.61,98.54 61.74,98.25 Z"
            />
          </svg>
        </div>
        <div
          className={navOpened ? "burger opened" : "burger"}
          onClick={(ev) => setNavOpened(!navOpened)}
        >
          <div className="bar1" />
          <div className="bar2" />
          <div className="bar3" />
        </div>
      </div>
      <div className="navigation">
        <div className="list">
          <Link to="portfolio" onClick={() => setNavOpened(false)}>
            Home
          </Link>
          {/* <Link to="portfolio/experience" onClick={() => setNavOpened({ navOpened: false })}>Experience</Link> */}
          <Link to="portfolio/projects" onClick={() => setNavOpened(false)}>
            Projects
          </Link>
          <Link to="portfolio/contact" onClick={() => setNavOpened(false)}>
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
