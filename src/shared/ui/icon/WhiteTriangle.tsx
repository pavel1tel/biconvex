import { SVGProps } from "react";

export const WhiteTriangle = (props: SVGProps<SVGSVGElement>) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 11 9" fill="none" {...props}>
      <path
        d="M5.92391 8.32224C5.72805 8.63539 5.27195 8.63539 5.07609 8.32224L0.349401 0.76514C0.14111 0.432121 0.38052 0 0.773313 0L10.2267 0C10.6195 0 10.8589 0.432122 10.6506 0.765141L5.92391 8.32224Z"
        fill="white"
      />
    </svg>
  );
};
