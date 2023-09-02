import { useTheme as useNextTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SVG } from '../../types';

const Search = ({
  width = 96,
  height = 96,
  vBW = 461.516,
  vBH = 461.516,
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
      enableBackground={`new 0 0 ${vBW} ${vBH}`}
      height={height}
      viewBox={`0 0 ${vBW} ${vBH}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <path
          fill={theme === 'light' ? fillColors[0] : fillColors[1]}
          d="m185.746 371.332c41.251.001 81.322-13.762 113.866-39.11l122.778 122.778c9.172 8.858 23.787 8.604 32.645-.568 8.641-8.947 8.641-23.131 0-32.077l-122.778-122.778c62.899-80.968 48.252-197.595-32.716-260.494s-197.594-48.252-260.493 32.716-48.252 197.595 32.716 260.494c32.597 25.323 72.704 39.06 113.982 39.039zm-98.651-284.273c54.484-54.485 142.82-54.486 197.305-.002s54.486 142.82.002 197.305-142.82 54.486-197.305.002c-.001-.001-.001-.001-.002-.002-54.484-54.087-54.805-142.101-.718-196.585.239-.24.478-.479.718-.718z"
        />
      </g>
    </svg>
  );
};

export default Search;
