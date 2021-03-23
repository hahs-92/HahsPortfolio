// import * as React from "react"

function IconJs
(props) {
  return (
    <svg
      width={48}
      height={48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g filter="url(#prefix__filter0_d)">
        <path
          d="M8 10.667A6.667 6.667 0 0114.667 4h18.666A6.667 6.667 0 0140 10.667v18.666A6.667 6.667 0 0133.333 36H14.667A6.667 6.667 0 018 29.333V10.667zm14.667 4A1.333 1.333 0 0021.333 16v10.667A1.333 1.333 0 0120 28h-2.667a1.334 1.334 0 000 2.667H20a4 4 0 004-4V16a1.333 1.333 0 00-1.333-1.333zm2.666 4V20a4 4 0 004 4h1.334A1.334 1.334 0 0132 25.333v1.334A1.334 1.334 0 0130.667 28h-4a1.333 1.333 0 100 2.667h4a4 4 0 004-4v-1.334a4 4 0 00-4-4h-1.334A1.333 1.333 0 0128 20v-1.333a1.333 1.333 0 011.333-1.334h4a1.333 1.333 0 100-2.666h-4a4 4 0 00-4 4z"
          fill="#000"
        />
      </g>
      <defs>
        <filter
          id="prefix__filter0_d"
          x={0}
          y={0}
          width={48}
          height={48}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy={4} />
          <feGaussianBlur stdDeviation={4} />
          <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
          <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
        </filter>
      </defs>
    </svg>
  )
}

export default IconJs
