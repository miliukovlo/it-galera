import * as React from "react";
import { SVGProps } from "react";
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width='2em'
    height='2em'
    viewBox='0 0 16 16'
    {...props}>
    <path
      fillRule='evenodd'
      d='M4.11 2.697 2.698 4.11 6.586 8l-3.89 3.89 1.415 1.413L8 9.414l3.89 3.89 1.413-1.415L9.414 8l3.89-3.89-1.415-1.413L8 6.586l-3.89-3.89z'
      clipRule='evenodd'
    />
  </svg>
);
export default SvgComponent;
