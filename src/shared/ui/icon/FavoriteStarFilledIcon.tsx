import React, { useState } from "react";

export const FavoriteStarFilledIcon = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div onClick={handleClick} style={{ cursor: "pointer" }}>
      <svg width="18.941406" height="17.949951" viewBox="0 0 18.9414 17.95" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="paint_linear_4491_6447_0" x1="9.469683" y1="0.000000" x2="9.469683" y2="17.950001" gradientUnits="userSpaceOnUse">
            <stop stopColor="#625FF4" />
            <stop offset="1.000000" stopColor="#625FF8" />
          </linearGradient>
        </defs>
        <path
          id="Mask"
          d="M14.7344 17.95C14.5859 17.95 14.4375 17.915 14.2969 17.843L9.46875 15.3203L4.64062 17.843C4.32031 18.0088 3.93359 17.9802 3.64453 17.7681C3.35547 17.5562 3.20703 17.1973 3.26953 16.842L4.19141 11.5125L0.289062 7.73877C0.0273438 7.48779 -0.0664062 7.11084 0.046875 6.76611C0.15625 6.42334 0.453125 6.17236 0.8125 6.12134L6.20703 5.33716L8.62109 0.48291C8.94141 -0.160889 9.99609 -0.160889 10.3164 0.48291L12.7305 5.33716L18.1289 6.12134C18.4883 6.17236 18.7812 6.42334 18.8945 6.76611C19.0039 7.11084 18.9102 7.48779 18.6523 7.73877L14.75 11.5125L15.668 16.842C15.7305 17.1973 15.5859 17.5562 15.293 17.7681C15.1289 17.8894 14.9336 17.95 14.7344 17.95Z"
          fill={clicked ? "url(#paint_linear_4491_6447_0)" : "none"} // Conditional fill based on click
          stroke={clicked ? "none" : "#625FF4"} // Add stroke when not clicked
          fillOpacity="1.000000"
          fillRule="evenodd"
        />
      </svg>
    </div>
  );
};
