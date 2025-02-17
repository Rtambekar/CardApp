import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
const Bottomslice = (props) => (
  <Svg
    width={380}
    height={50}
    viewBox="0 0 360 34"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      opacity={0.8}
      d="M0 33C140.577 -9.22761 219.414 -10.1035 360 33"
      stroke="url(#paint0_linear_1385_66)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1385_66"
        x1={180}
        y1={3}
        x2={180}
        y2={33}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="white" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Bottomslice;
