import { SVG } from '../../types';

const Share = ({
  width = 32,
  height = 32,
}: SVG): JSX.Element | null => {
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
        stroke={'currentColor'}
        strokeWidth="2"
        fill="none"
      />

      {/* Arrows pointing outward */}
      {/* Top arrow */}
      <path
        d="M12 2V6"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M10 4L12 2L14 4"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={'currentColor'}
      />

      {/* Right arrow */}
      <path
        d="M22 12H18"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M20 10L22 12L20 14"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={'currentColor'}
      />

      {/* Bottom arrow */}
      <path
        d="M12 22V18"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M14 20L12 22L10 20"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={'currentColor'}
      />

      {/* Left arrow */}
      <path
        d="M2 12H6"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M4 14L2 12L4 10"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill={'currentColor'}
      />
    </svg>
  );
};

export default Share;
