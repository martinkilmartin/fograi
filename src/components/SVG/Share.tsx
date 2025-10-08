import { useTheme as useNextTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SVG } from '../../types';

const Share = ({
  width = 32,
  height = 32,
  vBW = 24,
  vBH = 24,
  fillColors = ['#000', '#fff'],
  someBool = false,
}: SVG): JSX.Element | null => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useNextTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const color = someBool ? '#3b82f6' : theme === 'light' ? fillColors[0] : fillColors[1];

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Central circle */}
      <circle
        cx="12"
        cy="12"
        r="3"
        stroke={color}
        strokeWidth="2"
        fill="none"
      />

      {/* Arrows pointing outward */}
      {/* Top arrow */}
      <path
        d="M12 2V6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 4L12 2L14 4"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
      />

      {/* Right arrow */}
      <path
        d="M22 12H18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 10L22 12L20 14"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
      />

      {/* Bottom arrow */}
      <path
        d="M12 22V18"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 20L12 22L10 20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
      />

      {/* Left arrow */}
      <path
        d="M2 12H6"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 14L2 12L4 10"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={color}
      />
    </svg>
  );
};

export default Share;
