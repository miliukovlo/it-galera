import * as React from "react";
import { SVGProps } from "react";
const DarkThemeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="2em"
    height="2em"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={props.fill}
      fillRule="nonzero"
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Zm0-1.5v-17a8.5 8.5 0 1 1 0 17Z"
    />
  </svg>
);
export default DarkThemeIcon;
