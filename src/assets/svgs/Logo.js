import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

const SvgComponent = (props) => (
  <Svg
    width={109}
    height={100}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M66.039 39.816s-8.634 10.186-5.386 23.788C63.9 77.207 76.713 88.3 93.003 81.85c16.292-6.45 21.143-37.468 8.366-55.3C88.592 8.717 68.416-6.725 36.566 3.019 4.716 12.762-20.728 64.885 24.419 100c0 0-13.88-14.928-12.51-34.123 1.371-19.195 13.94-38.848 37.363-43.532 0 0-19.653 13.025-20.224 34.734-.571 21.709 11.883 45.589 47.417 42.39 0 0-18.129-4.362-23.79-22.673-5.663-18.312 7.694-33.12 13.364-36.98Z"
      fill="url(#a)"
    />
    <Path
      d="M76.465 99.468c-35.534 3.2-47.988-20.68-47.417-42.39.557-21.199 19.313-34.118 20.192-34.712-5.864 5.462-14.745 16.082-15.127 30.571-.482 18.351 8.34 38.252 32.544 42.04 5.255 3.396 9.808 4.49 9.808 4.49Z"
      fill="url(#b)"
    />
    <Path
      d="M104.078 71.08c-2.646 5.025-6.386 8.916-11.074 10.77-16.29 6.45-29.103-4.643-32.351-18.245-3.227-13.512 5.273-23.656 5.384-23.788l.001-.002c-2.2 4.221-4.627 11.237-2.65 19.518 3.249 13.602 16.06 24.695 32.352 18.246 3.25-1.288 6.048-3.554 8.338-6.499Z"
      fill="url(#c)"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={6.414}
        y1={79.552}
        x2={100.721}
        y2={25.104}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0.1} stopColor="#F27121" />
        <Stop offset={0.6} stopColor="#E94057" />
        <Stop offset={1} stopColor="#8A2387" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={29.38}
        y1={47.37}
        x2={87.252}
        y2={80.783}
        gradientUnits="userSpaceOnUse"
      >
        <Stop offset={0} stopColor="#8A2387" />
        <Stop offset={0.7} stopColor="#8A2387" stopOpacity={0} />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={59.922}
        y1={61.775}
        x2={104.078}
        y2={61.775}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#8A2387" stopOpacity={0.7} />
        <Stop offset={0.5} stopColor="#8A2387" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  </Svg>
)

export default SvgComponent
