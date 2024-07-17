import React, { useState } from "react";

export const FavoriteStarFilledIcon = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fillOpacity="1.000000"
          id="Mask"
          fillRule="evenodd"
          d="M17.7363 20.95C17.5867 20.95 17.4361 20.915 17.2979 20.843L12.4692 18.3202L7.64151 20.843C7.32143 21.0087 6.93506 20.9803 6.64528 20.7682C6.35361 20.5561 6.20873 20.1972 6.27028 19.842L7.1898 14.5124L3.28824 10.7387C3.02877 10.4878 2.93502 10.1109 3.04581 9.76617C3.15661 9.42336 3.45302 9.17241 3.81097 9.12128L9.20876 8.33718L11.6217 3.48296C11.9417 2.83901 12.9976 2.83901 13.3177 3.48296L15.7306 8.33718L21.1284 9.12128C21.4864 9.17241 21.7828 9.42336 21.8936 9.76617C22.0043 10.1109 21.9106 10.4878 21.6511 10.7387L17.7496 14.5124L18.6691 19.842C18.7306 20.1972 18.5848 20.5561 18.2941 20.7682C18.1293 20.8894 17.9333 20.95 17.7363 20.95Z"
          fill={clicked ? "url(#paint0_linear_614_17571)" : "none"} // Conditional fill based on click
          stroke={clicked ? "none" : "#625FF4"} // Add stroke when not clicked
        />
        <defs>
          <linearGradient id="paint0_linear_614_17571" x1="12.4697" y1="3" x2="12.4697" y2="20.95" gradientUnits="userSpaceOnUse">
            <stop stop-color="#625FF4" />
            <stop offset="1" stop-color="#625FF8" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};
