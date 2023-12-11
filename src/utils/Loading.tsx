import React, { FunctionComponent } from 'react'

interface LoadingPropsType {
  size?: string
}

export const Loading: FunctionComponent<LoadingPropsType> = ({ size }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        style={{ margin: 'auto', background: 'transparent', display: 'block' }}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
      >
        <circle cx="75" cy="50" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.9230769230769231s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.9230769230769231s"
          ></animate>
        </circle>
        <circle cx="72.13640064133025" cy="61.61807930109421" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.8461538461538461s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.8461538461538461s"
          ></animate>
        </circle>
        <circle cx="64.2016186682789" cy="70.57459664734141" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.7692307692307693s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.7692307692307693s"
          ></animate>
        </circle>
        <circle cx="53.01341700638307" cy="74.81772185245134" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.6923076923076923s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.6923076923076923s"
          ></animate>
        </circle>
        <circle cx="41.13487782393661" cy="73.37540606713537" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.6153846153846154s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.6153846153846154s"
          ></animate>
        </circle>
        <circle cx="31.28723129572247" cy="66.57806645601988" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.5384615384615384s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.5384615384615384s"
          ></animate>
        </circle>
        <circle cx="25.7264545643487" cy="55.98289160718894" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.46153846153846156s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.46153846153846156s"
          ></animate>
        </circle>
        <circle cx="25.726454564348696" cy="44.01710839281107" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.38461538461538464s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.38461538461538464s"
          ></animate>
        </circle>
        <circle cx="31.287231295722467" cy="33.421933543980124" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.3076923076923077s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.3076923076923077s"
          ></animate>
        </circle>
        <circle cx="41.134877823936606" cy="26.62459393286463" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.23076923076923078s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.23076923076923078s"
          ></animate>
        </circle>
        <circle cx="53.01341700638308" cy="25.18227814754865" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.15384615384615385s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.15384615384615385s"
          ></animate>
        </circle>
        <circle cx="64.20161866827887" cy="29.425403352658574" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="-0.07692307692307693s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="-0.07692307692307693s"
          ></animate>
        </circle>
        <circle cx="72.13640064133025" cy="38.38192069890579" fill="#caacd4" r="5">
          <animate
            attributeName="r"
            values="3;3;5;3;3"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            repeatCount="indefinite"
            begin="0s"
          ></animate>
          <animate
            attributeName="fill"
            values="#caacd4;#caacd4;#0070d2;#caacd4;#caacd4"
            repeatCount="indefinite"
            keyTimes="0;0.1;0.2;0.3;1"
            keySplines="0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;0.5 0 0.5 1;"
            dur="1s"
            begin="0s"
          ></animate>
        </circle>
      </svg>
    </div>
  )
}
