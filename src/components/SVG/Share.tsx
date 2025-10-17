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
        cy="20"
        r="2"
        stroke={'currentColor'}
        strokeWidth="0"
        fill={'currentColor'}
      />

      {/* Arrows pointing outward */}
      {/* Top arrow */}
      <path
        d="M12 20 C 10 17, 8 13, 7 8"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M7 6 L5.5 7.5"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M7 6 L8.5 7.5"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Right arrow */}
      <path
        d="M12 20 C 14 17, 16 13, 17 8"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M17 6 L15.5 7.5"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      <path
        d="M17 6 L18.5 7.5"
        stroke={'currentColor'}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Bottom arrow */}
      <path
        d="M0 0"
        stroke={'currentColor'}
        strokeWidth="0"
        strokeLinecap="round"
      />
      <path
        d="M0 0"
        stroke={'currentColor'}
        strokeWidth="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Left arrow */}
      <path
        d="M0 0"
        stroke={'currentColor'}
        strokeWidth="0"
        strokeLinecap="round"
      />
      <path
        d="M0 0"
        stroke={'currentColor'}
        strokeWidth="0"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default Share;
