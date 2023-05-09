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

export const InfoSVG: FC<SVGAttributes<SVGSVGElement>> = (props: SVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M5 3h14a2 2 0 0 1 2 2v14c0 .53-.21 1.04-.59 1.41c-.37.38-.88.59-1.41.59H5c-.53 0-1.04-.21-1.41-.59C3.21 20.04 3 19.53 3 19V5c0-1.11.89-2 2-2m7.3 4.29c-.19.21-.3.45-.3.71c0 .27.11.5.3.71c.2.19.44.29.7.29c.27 0 .5-.1.71-.29c.19-.21.29-.44.29-.71c0-.26-.1-.5-.29-.71C13.5 7.11 13.27 7 13 7c-.26 0-.5.11-.7.29m-2.5 4.68c-.1.09-.1.1-.03.2l.05.08l.03.06c.07.13.08.13.19.05c.13-.09.35-.23.72-.45c.92-.59.74.09.33 1.59c-.22.83-.5 1.89-.71 3.12c-.24 1.75 1.33.85 1.74.58c.38-.24 1.32-.9 1.54-1.05l.04-.02c.12-.09.07-.13-.02-.27l-.06-.08c-.08-.11-.16-.03-.16-.03l-.16.11c-.45.3-1.07.73-1.17.39c-.09-.25.28-1.61.66-3c.17-.61.34-1.25.47-1.78l.02-.06c.07-.44.22-1.29-.51-1.23c-.8.07-2.97 1.79-2.97 1.79Z"
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

export const SkillsSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 15 15" {...props}>
    <path
      fill="currentColor"
      d="M7.5 15a5.502 5.502 0 0 1-5.255-3.873A6.47 6.47 0 0 0 5.5 12c.698 0 1.37-.11 2-.313a6.51 6.51 0 0 0 2 .313a6.47 6.47 0 0 0 3.255-.873A5.503 5.503 0 0 1 7.5 15Zm6.454-6.273A5.5 5.5 0 0 0 9 .023a6.5 6.5 0 0 1 2.96 4.748a6.484 6.484 0 0 1 1.994 3.956ZM6 .022a5.5 5.5 0 0 0-4.954 8.704A6.484 6.484 0 0 1 3.04 4.772A6.5 6.5 0 0 1 6 .022ZM2.005 9.747A5.477 5.477 0 0 0 6 10.977a6.5 6.5 0 0 1-2.953-4.704a5.475 5.475 0 0 0-1.04 3.474ZM13 9.5c0-1.205-.388-2.32-1.046-3.227a6.5 6.5 0 0 1-2.953 4.705a5.477 5.477 0 0 0 3.994-1.23c.003-.083.005-.165.005-.248ZM7.5.375a5.515 5.515 0 0 1 3.255 3.498A6.47 6.47 0 0 0 7.5 3a6.47 6.47 0 0 0-3.255.873A5.515 5.515 0 0 1 7.5.375ZM7.5 4c-1.327 0-2.544.47-3.495 1.253A5.502 5.502 0 0 0 7.5 10.625a5.502 5.502 0 0 0 3.495-5.372A5.477 5.477 0 0 0 7.5 4Z"
    />
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

export const GithubSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="-2 -2 24 24" {...props}>
    <path
      fill="currentColor"
      d="M18.88 1.099C18.147.366 17.265 0 16.233 0H3.746C2.714 0 1.832.366 1.099 1.099C.366 1.832 0 2.714 0 3.746v12.487c0 1.032.366 1.914 1.099 2.647c.733.733 1.615 1.099 2.647 1.099H6.66c.19 0 .333-.007.429-.02a.504.504 0 0 0 .286-.169c.095-.1.143-.245.143-.435l-.007-.885c-.004-.564-.006-1.01-.006-1.34l-.3.052c-.19.035-.43.05-.721.046a5.555 5.555 0 0 1-.904-.091a2.026 2.026 0 0 1-.872-.39a1.651 1.651 0 0 1-.572-.8l-.13-.3a3.25 3.25 0 0 0-.41-.663c-.186-.243-.375-.407-.566-.494l-.09-.065a.956.956 0 0 1-.17-.156a.723.723 0 0 1-.117-.182c-.026-.061-.004-.111.065-.15c.07-.04.195-.059.378-.059l.26.04c.173.034.388.138.643.311a2.1 2.1 0 0 1 .631.677c.2.355.44.626.722.813c.282.186.566.28.852.28c.286 0 .533-.022.742-.065a2.59 2.59 0 0 0 .585-.196c.078-.58.29-1.028.637-1.34a8.907 8.907 0 0 1-1.333-.234a5.314 5.314 0 0 1-1.223-.507a3.5 3.5 0 0 1-1.047-.872c-.277-.347-.505-.802-.683-1.365c-.177-.564-.266-1.215-.266-1.952c0-1.049.342-1.942 1.027-2.68c-.32-.788-.29-1.673.091-2.652c.252-.079.625-.02 1.119.175c.494.195.856.362 1.086.5c.23.14.414.257.553.352a9.233 9.233 0 0 1 2.497-.338c.859 0 1.691.113 2.498.338l.494-.312a6.997 6.997 0 0 1 1.197-.572c.46-.174.81-.221 1.054-.143c.39.98.424 1.864.103 2.653c.685.737 1.028 1.63 1.028 2.68c0 .737-.089 1.39-.267 1.957c-.177.568-.407 1.023-.689 1.366a3.65 3.65 0 0 1-1.053.865c-.42.234-.828.403-1.223.507a8.9 8.9 0 0 1-1.333.235c.45.39.676 1.005.676 1.846v3.11c0 .147.021.266.065.357a.36.36 0 0 0 .208.189c.096.034.18.056.254.064c.074.01.18.013.318.013h2.914c1.032 0 1.914-.366 2.647-1.099c.732-.732 1.099-1.615 1.099-2.647V3.746c0-1.032-.367-1.914-1.1-2.647z"
    />
  </svg>
);

export const LinkedinSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" data-supported-dps="24x24" fill="currentColor" width="1em" height="1em" {...props}>
    <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
  </svg>
);

export const DogSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 512 512" {...props}>
    <path
      fill="currentColor"
      d="M269.4 2.9C265.2 1 260.7 0 256 0s-9.2 1-13.4 2.9L54.3 82.8c-22 9.3-38.4 31-38.3 57.2c.5 99.2 41.3 280.7 213.6 363.2c16.7 8 36.1 8 52.8 0C454.7 420.7 495.5 239.2 496 140c.1-26.2-16.3-47.9-38.3-57.2L269.4 2.9zM160.9 286.2c4.8 1.2 9.9 1.8 15.1 1.8c35.3 0 64-28.7 64-64v-64h44.2c12.1 0 23.2 6.8 28.6 17.7L320 192h64c8.8 0 16 7.2 16 16v32c0 44.2-35.8 80-80 80h-48v50.7c0 7.3-5.9 13.3-13.3 13.3c-1.8 0-3.6-.4-5.2-1.1l-98.7-42.3c-6.6-2.8-10.8-9.3-10.8-16.4c0-2.8.6-5.5 1.9-8l15-30zM160 160h48v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-48c0-8.8 7.2-16 16-16zm128 48a16 16 0 1 0-32 0a16 16 0 1 0 32 0z"
    />
  </svg>
);

export const LinkSVG: FC<SVGAttributes<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" {...props}>
    <path
      fill="currentColor"
      d="M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2m-5.06 11.81L11.73 17c-.65.67-1.51 1-2.37 1c-.86 0-1.72-.33-2.36-1c-1.33-1.29-1.33-3.42 0-4.74l1.35-1.36l-.01.6c-.01.5.07 1 .23 1.44l.05.15l-.4.41a1.597 1.597 0 0 0 0 2.28c.61.62 1.67.62 2.28 0l2.2-2.19c.3-.31.48-.72.48-1.15c0-.44-.18-.83-.48-1.14a.87.87 0 0 1 0-1.24c.33-.33.91-.32 1.24 0c.63.64.98 1.48.98 2.38c0 .9-.35 1.74-.98 2.37M17 11.74l-1.34 1.36v-.6c.01-.5-.07-1-.23-1.44l-.05-.14l.4-.42a1.597 1.597 0 0 0 0-2.28c-.61-.62-1.68-.61-2.28 0l-2.2 2.2c-.3.3-.48.71-.48 1.14c0 .44.18.83.48 1.14c.17.16.26.38.26.62s-.09.46-.26.62a.86.86 0 0 1-.62.25c-.22 0-.45-.08-.62-.25a3.362 3.362 0 0 1 0-4.75L12.27 7A3.311 3.311 0 0 1 17 7c.65.62 1 1.46 1 2.36c0 .9-.35 1.74-1 2.38Z"
    />
  </svg>
);
