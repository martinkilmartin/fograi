import { useTheme as useNextTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SVG } from '../../types';

const Bookmark = ({
  width = 32,
  height = 32,
  vBW = 512,
  vBH = 512,
  fillColors = ['#000', '#fff'],
  someBool = false,
}: SVG): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useNextTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;
  return (
    <svg
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width={width}
      height={height}
      viewBox={`0 0 ${vBW} ${vBH}`}
    >
      <path
        d="M416.667,0H95.333c-8.284,0-15,6.716-15,15v482c0,6.067,3.655,11.536,9.26,13.858c1.856,0.769,3.805,1.142,5.737,1.142
			c3.904,0,7.74-1.523,10.61-4.394l150.063-150.061L406.06,507.606c4.29,4.29,10.742,5.573,16.347,3.252
			c5.605-2.322,9.26-7.791,9.26-13.858V15C431.667,6.716,424.951,0,416.667,0z M256.002,321.332c-3.978,0-7.793,1.58-10.606,4.394
			L110.333,460.787V30h291.333v430.785L266.609,325.726C263.796,322.912,259.981,321.332,256.002,321.332z"
        stroke={someBool ? 'red' : theme === 'light' ? fillColors[0] : fillColors[1]}
        strokeWidth={40}
        fill={
          someBool ? 'red' : theme === 'light' ? fillColors[0] : fillColors[1]
        }
      />
    </svg>
  );
};

export default Bookmark;
