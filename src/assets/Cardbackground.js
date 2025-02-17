import * as React from "react";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
const Cardbackground = (props) => (
  <Svg
    width={186}
    height={296}
    viewBox="0 0 186 296"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      width={186}
      height={296}
      fill="url(#paint0_linear_1_248)"
      fillOpacity={0.9}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_248"
        x1={93}
        y1={0}
        x2={93}
        y2={364.5}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopOpacity={0.4} />
        <Stop offset={0.323731} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Cardbackground;
