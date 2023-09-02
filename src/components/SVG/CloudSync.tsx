import { useTheme as useNextTheme } from 'next-themes';
import { useState, useEffect } from 'react';
import { SVG } from '../../types';

const CloudSync = ({
  width = 96,
  height = 96,
  vBW = 32,
  vBH = 32,
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
      <path
        fill={theme === 'light' ? fillColors[0] : fillColors[1]}
        d="m24.972 12.288c-.364-4.631-4.249-8.288-8.972-8.288-4.04 0-7.508 2.624-8.628 6.451-3.191 1.108-5.372 4.132-5.372 7.549 0 4.411 3.589 8 8 8h13c3.859 0 7-3.141 7-7 0-3.149-2.07-5.852-5.028-6.712zm-4.679 7.419-2-2c-.286-.286-.372-.716-.217-1.09.154-.373.52-.617.924-.617h.858c-.447-1.72-1.999-3-3.858-3-.558 0-1.097.112-1.602.333-.508.22-1.096-.01-1.317-.515-.222-.506.009-1.096.515-1.317.759-.332 1.569-.501 2.404-.501 2.967 0 5.431 2.167 5.91 5h1.09c.404 0 .77.244.924.617.155.374.069.804-.217 1.09l-2 2c-.195.195-.451.293-.707.293s-.512-.098-.707-.293zm-12-3.414 2-2c.391-.391 1.023-.391 1.414 0l2 2c.286.286.372.716.217 1.09-.154.374-.52.617-.924.617h-.858c.447 1.721 1.999 3 3.858 3 .556 0 1.094-.112 1.599-.332.505-.224 1.095.011 1.316.516.222.506-.01 1.096-.516 1.316-.758.332-1.566.5-2.399.5-2.967 0-5.431-2.167-5.91-5h-1.09c-.404 0-.77-.243-.924-.617-.155-.374-.069-.804.217-1.09z"
      />
    </svg>
  );
};

export default CloudSync;
