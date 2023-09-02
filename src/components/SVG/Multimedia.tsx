import { useTheme as useNextTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SVG } from '../../types';

const Multimedia = ({
  width = 96,
  height = 96,
  vBW = 683,
  vBH = 683,
  fillColors = ['#000', '#fff'],
}: SVG): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useNextTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <svg
      height={height}
      viewBox={`0 0 ${vBW} ${vBH}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs id="defs2383">
        <clipPath clipPathUnits="userSpaceOnUse" id="clipPath2393">
          <path d="M 0,512 H 512 V 0 H 0 Z" id="path2391" />
        </clipPath>
      </defs>
      <g id="g2385" transform="matrix(1.3333333,0,0,-1.3333333,0,682.66667)">
        <g id="g2387">
          <g id="g2389" clip-path="url(#clipPath2393)">
            <g id="g2395" transform="translate(226.2012,21.9248)">
              <path
                d="m 0,0 h -190.259 c -14.327,0 -25.942,11.615 -25.942,25.943 v 123.808 c 0,14.328 11.615,25.943 25.942,25.943 H 0 c 14.328,0 25.942,-11.615 25.942,-25.943 V 25.943 C 25.942,11.615 14.328,0 0,0 Z"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2397"
              />
            </g>
            <g id="g2399" transform="translate(474.5811,93.2588)">
              <path
                d="M 0,0 H 1.472 C 15.8,0 27.419,11.619 27.419,25.947 v 136.365 c 0,14.329 -11.619,25.947 -25.947,25.947 h -228.995 c -14.329,0 -25.937,-11.618 -25.937,-25.947 v -57.954 h 5.079 c 14.329,0 25.947,-11.608 25.947,-25.937 V 0 h 134.513"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2401"
              />
            </g>
            <g id="g2403" transform="translate(95.7202,490.0732)">
              <path
                d="m 0,0 c -14.294,-0.041 -25.873,-11.642 -25.873,-25.945 v -191.759 c 0,-14.329 11.619,-25.938 25.947,-25.938 H 125.4 v 9.14 c 0,14.328 11.609,25.947 25.938,25.947 h 186.319 v 182.61 c 0,14.328 -11.608,25.947 -25.937,25.947 H 87.99"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2405"
              />
            </g>
            <g id="g2407" transform="translate(140.7153,490.0752)">
              <path
                d="M 0,0 V 0"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2409"
              />
            </g>
            <g id="g2411" transform="translate(332.7129,177.938)">
              <path
                d="m 0,0 h -26.103 c -6.452,0 -11.682,5.23 -11.682,11.683 v 26.861 c 0,6.452 5.23,11.683 11.682,11.683 H 0 Z"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2413"
              />
            </g>
            <g id="g2415" transform="translate(332.7129,228.1646)">
              <path
                d="M 0,0 V -50.227 L 93.666,-65.145 V 14.918 Z"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2417"
              />
            </g>
            <g id="g2419" transform="translate(332.7129,177.938)">
              <path
                d="M 0,0 V -46.245 H 28.523 L 41.289,-6.576 Z"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2421"
              />
            </g>
            <g id="g2423" transform="translate(426.3784,205.3862)">
              <path
                d="M 0,0 H 11.918"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2425"
              />
            </g>
            <g id="g2427" transform="translate(430.3379,93.2588)">
              <path
                d="M 0,0 V 0"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2429"
              />
            </g>
            <g id="g2431" transform="translate(105.3696,145.0527)">
              <path
                d="m 0,0 v -69.862 l 61.008,37.133 z"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2433"
              />
            </g>
            <g id="g2435" transform="translate(344.1172,281.5181)">
              <path
                d="m 0,0 h -97.059 c -14.329,0 -25.938,-11.619 -25.938,-25.947 v -9.139 h -125.326 c -14.328,0 -25.947,11.608 -25.947,25.937 v 24.217 l 129.866,105.279 z"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2437"
              />
            </g>
            <g id="g2439" transform="translate(299.2871,318.8813)">
              <path
                d="M 0,0 65.142,49.372 134.09,0.228 V -37.363 H 44.834 Z"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2441"
              />
            </g>
            <g id="g2443" transform="translate(323.5986,424.1387)">
              <path
                d="m 0,0 c 0,-13.436 -10.892,-24.328 -24.328,-24.328 -13.436,0 -24.327,10.892 -24.327,24.328 0,13.436 10.891,24.328 24.327,24.328 C -10.892,24.328 0,13.436 0,0 Z"
                style={{
                  fill: 'none',
                  stroke: theme === 'light' ? fillColors[0] : fillColors[1],
                  strokeWidth: 20,
                  strokeLinecap: 'round',
                  strokeLinejoin: 'round',
                  strokeMiterlimit: 10,
                  strokeDasharray: 'none',
                  strokeOpacity: 1,
                }}
                id="path2445"
              />
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export default Multimedia;
