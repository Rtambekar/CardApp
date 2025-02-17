import * as React from "react";
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg";
const Qrshadow = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect
      opacity={0.7}
      width={20}
      height={20}
      fill="url(#paint0_linear_1414_84)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_1414_84"
        x1={10}
        y1={0}
        x2={10}
        y2={20}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="white" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Qrshadow;
