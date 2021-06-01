function IconUnity(props) {
    return (
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill={ props }
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_d)">
          <path
            d="M34.531 29.599L28.803 20l5.728-9.599L37.334 20l-2.803 9.599zm-12.667-.932l-7.197-7.068h11.469l5.728 9.599-10-2.531zm0-17.47l10-2.531-5.728 9.599H14.531c0 .136 7.333-7.068 7.333-7.068zM36.531 4L23.47 7.333l-2 3.333h-3.871L8 19.999l9.599 9.333h3.871l1.864 3.333 13.068 3.333 3.463-12.667-1.864-3.333 2-3.333L36.531 4z"
            fill={ props }
          />
        </g>
        <defs>
          <filter
            id="prefix__filter0_d"
            x={0}
            y={0}
            width={48.001}
            height={47.998}
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
  
  export default IconUnity