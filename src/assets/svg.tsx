import React, { FC, SVGAttributes } from "react";

export const LogoSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 91 146" {...props}>
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
);

export const HomeSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M4.5 21q-.625 0-1.063-.438T3 19.5v-1.9l4-3.55V21H4.5ZM8 21v-4h8v4H8Zm9 0v-8.2L12.725 9l3.025-2.675l4.75 4.225q.25.225.375.513t.125.612V19.5q0 .625-.438 1.063T19.5 21H17ZM3 16.25v-4.575q0-.325.125-.625t.375-.5L11 3.9q.2-.2.463-.287T12 3.525q.275 0 .537.088T13 3.9l2 1.775L3 16.25Z"
    />
  </svg>
);

export const WorkHistorySVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M18 11c1.49 0 2.87.47 4 1.26V8c0-1.11-.89-2-2-2h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h7.68A6.995 6.995 0 0 1 18 11zm-8-7h4v2h-4V4z"
    />
    <path fill="currentColor" d="M18 13c-2.76 0-5 2.24-5 5s2.24 5 5 5s5-2.24 5-5s-2.24-5-5-5zm1.65 7.35L17.5 18.2V15h1v2.79l1.85 1.85l-.7.71z" />
  </svg>
);

export const ProjectHistorySVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1.1em" height="1.1em" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M4 21q-.825 0-1.413-.588T2 19V5q0-.825.588-1.413T4 3h14q.825 0 1.413.588T20 5v2h1q.425 0 .713.288T22 8q0 .425-.288.713T21 9h-1v2h1q.425 0 .713.288T22 12q0 .425-.288.713T21 13h-1v2h1q.425 0 .713.288T22 16q0 .425-.288.713T21 17h-1v2q0 .825-.588 1.413T18 21H4Zm0-2h14V5H4v14Zm3-2h3q.425 0 .713-.288T11 16v-2q0-.425-.288-.713T10 13H7q-.425 0-.713.288T6 14v2q0 .425.288.713T7 17Zm6-7h2q.425 0 .713-.288T16 9V8q0-.425-.288-.713T15 7h-2q-.425 0-.713.288T12 8v1q0 .425.288.713T13 10Zm-6 2h3q.425 0 .713-.288T11 11V8q0-.425-.288-.713T10 7H7q-.425 0-.713.288T6 8v3q0 .425.288.713T7 12Zm6 5h2q.425 0 .713-.288T16 16v-4q0-.425-.288-.713T15 11h-2q-.425 0-.713.288T12 12v4q0 .425.288.713T13 17ZM4 5v14V5Z"
    />
  </svg>
);

export const ContactSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M20 0H4v2h16V0zM4 24h16v-2H4v2zM20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-8 2.75c1.24 0 2.25 1.01 2.25 2.25s-1.01 2.25-2.25 2.25S9.75 10.24 9.75 9S10.76 6.75 12 6.75zM17 17H7v-1.5c0-1.67 3.33-2.5 5-2.5s5 .83 5 2.5V17z"
    />
  </svg>
);

export const CloseToMenuSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" {...props}>
      <path d="M5 5L12 12L19 5">
        <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 12L19 5;M5 5L12 5L19 5" />
      </path>
      <path d="M12 12H12">
        <animate fill="freeze" attributeName="d" dur="0.4s" values="M12 12H12;M5 12H19" />
      </path>
      <path d="M5 19L12 12L19 19">
        <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 12L19 19;M5 19L12 19L19 19" />
      </path>
    </g>
  </svg>
);

export const MenuToCloseSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
    <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" {...props}>
      <path d="M5 5L12 5L19 5">
        <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 5L12 5L19 5;M5 5L12 12L19 5" />
      </path>
      <path d="M5 12H19">
        <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 12H19;M12 12H12" />
      </path>
      <path d="M5 19L12 19L19 19">
        <animate fill="freeze" attributeName="d" dur="0.4s" values="M5 19L12 19L19 19;M5 19L12 12L19 19" />
      </path>
    </g>
  </svg>
);

export const LinkedinSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
  </svg>
);
