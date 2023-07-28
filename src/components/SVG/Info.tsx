import { SVG } from '../../types';

const Info = ({
  width = 48,
  height = 48,
  fillColors = ['#2196f3', '#fff'],
}: SVG): JSX.Element => {
  return (
    <svg
      enableBackground={`new 0 0 ${width} ${height}`}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      width={width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="24" cy="24" fill={fillColors[0]} r="18" />
      <g fill={fillColors[1]}>
        <circle cx="24" cy="15.5" r="2.5" />
        <path d="m22 21h4v14h-4z" />
      </g>
    </svg>
  );
};

export default Info;
