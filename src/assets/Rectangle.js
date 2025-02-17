import * as React from "react";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
const Reactangle = (props) => (
  <Svg
    width={58}
    height={58}
    viewBox="0 0 58 58"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      opacity={0.2}
      x={0.5}
      y={0.5}
      width={57}
      height={57}
      rx={28.5}
      fill="black"
      stroke="url(#paint0_linear_1_305)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1_305"
        x1={0}
        y1={-12.6875}
        x2={0.00000100555}
        y2={59.1694}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#A90808" />
        <Stop offset={1} stopColor="#A90808" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Reactangle;
