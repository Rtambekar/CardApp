import * as React from "react";
import Svg, { Circle, Defs, LinearGradient, Stop } from "react-native-svg";
const Qrring = (props) => (
  <Svg
    width={60}
    height={60}
    viewBox="0 0 51 51"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Circle cx={25.5} cy={25.5} r={25} stroke="url(#paint0_linear_1414_78)" />
    <Defs>
      <LinearGradient
        id="paint0_linear_1414_78"
        x1={0}
        y1={0}
        x2={7.13681e-7}
        y2={51}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="white" />
        <Stop offset={1} stopColor="white" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default Qrring;
