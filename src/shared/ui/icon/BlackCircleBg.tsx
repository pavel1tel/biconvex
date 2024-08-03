import { SVGProps } from "react";

export const BlackCircleBg = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="96" height="96" viewBox="0 0 96 96" fill="none" {...props}>
    <g filter="url(#filter0_d_3472_11640)">
      <circle cx="48" cy="40" r="40" fill="#0C0D10" />
    </g>
    <defs>
      <filter id="filter0_d_3472_11640" x="0" y="0" width="96" height="96" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy="8" />
        <feGaussianBlur stdDeviation="4" />
        <feComposite in2="hardAlpha" operator="out" />
        <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0509804 0 0 0 0 0.0627451 0 0 0 0.32 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3472_11640" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3472_11640" result="shape" />
      </filter>
    </defs>
  </svg>
);
