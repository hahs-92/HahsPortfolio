function IconGame(props) {
    return (
      <svg
        width={48}
        height={44}
        viewBox="0 0 48 44"
        fill={ props }
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_d)">
          <path
            d="M35.754 7.632C34.558 5.211 32.367 4 29.976 4H18.024c-2.391 0-4.582 1.21-5.778 3.632-4.582 8.475-5.578 21.308-2.39 23.971 3.187 2.664 10.359-8.959 14.144-8.959s10.758 11.623 14.144 8.96c3.188-2.664 2.192-15.497-2.39-23.972zm-15.738 8.475h-1.992v2.421h-1.992v-2.421h-1.993v-2.422h1.993v-2.421h1.992v2.421h1.992v2.422zm10.757 1.21c0 1.211-.797 2.18-1.793 2.18-.996 0-1.793-.969-1.793-2.18 0-1.21.797-2.179 1.793-2.179.996 0 1.793.969 1.793 2.18zm3.785-4.842c0 1.21-.797 2.179-1.793 2.179-.996 0-1.793-.969-1.793-2.18 0-1.21.797-2.178 1.793-2.178.996 0 1.793.968 1.793 2.179z"
            fill={ props }
          />
        </g>
        <defs>
          <filter
            id="prefix__filter0_d"
            x={0}
            y={0}
            width={48}
            height={44}
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
  
  export default IconGame