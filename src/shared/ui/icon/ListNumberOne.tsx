import { SVGProps } from "react";

export const ListNumberOne = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="80" height="80" viewBox="0 0 80 80" fill="none" {...props}>
    <g filter="url(#filter0_d_3472_11685)">
      <rect x="16" y="12" width="48" height="48" rx="4" fill="url(#paint0_linear_3472_11685)" shape-rendering="crispEdges" />
      <path d="M40.4516 26H44V47H40.4516V30.8037L35.1836 35.7387L33 33.1662L40.4516 26Z" fill="white" />
    </g>
    <defs>
      <filter id="filter0_d_3472_11685" x="0" y="0" width="80" height="80" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="4" />
        <feGaussianBlur stdDeviation="8" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.384314 0 0 0 0 0.372549 0 0 0 0 0.956863 0 0 0 0.32 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3472_11685" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3472_11685" result="shape" />
      </filter>
      <linearGradient id="paint0_linear_3472_11685" x1="40" y1="12" x2="40" y2="60" gradientUnits="userSpaceOnUse">
        <stop stopColor="#625FF4" />
        <stop offset="1" stopColor="#625FF8" />
      </linearGradient>
    </defs>
  </svg>
);
