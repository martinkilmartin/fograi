import { useTheme as useNextTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SVG } from '../../types';

const Heart = ({
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
        d="m256 436a54.62 54.62 0 0 1 -29.53-8.64c-25-16.07-73.08-49.05-113.75-89.32-49.91-49.46-75.22-96.04-75.22-138.48 0-29.49 8.72-56.51 25.22-78.13a115.2 115.2 0 0 1 137.89-35.75c21.18 9.14 40.07 24.55 55.39 45 15.32-20.5 34.21-35.91 55.39-45a115.2 115.2 0 0 1 137.89 35.75c16.5 21.62 25.22 48.64 25.22 78.13 0 42.44-25.31 89-75.22 138.44-40.67 40.27-88.73 73.25-113.75 89.32a54.62 54.62 0 0 1 -29.53 8.68zm-101.84-334.94a89.41 89.41 0 0 0 -23.42 3.1 90.93 90.93 0 0 0 -48.15 32.44c-13.14 17.22-20.09 39-20.09 63 0 35.52 22.81 76.12 67.81 120.68 39 38.66 85.47 70.5 109.67 86a29.72 29.72 0 0 0 32 0c24.2-15.54 70.63-47.38 109.67-86 45-44.56 67.81-85.16 67.81-120.68 0-24-6.95-45.74-20.09-63a90.93 90.93 0 0 0 -48.15-32.44c-34.17-9.28-82.18.42-114.48 55.48a12.49 12.49 0 0 1 -21.56 0c-25.38-43.34-60.54-58.58-91.02-58.58z"
        stroke={someBool ? 'red' : theme === 'light' ? fillColors[0] : fillColors[1]}
        strokeWidth={40}
        fill={
          someBool ? 'red' : theme === 'light' ? fillColors[0] : fillColors[1]
        }
      />
    </svg>
  );
};

export default Heart;
