function IconFacebook(props) {
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
            fillRule="evenodd"
            clipRule="evenodd"
            d="M8 20.09C8 28.043 13.777 34.658 21.333 36V24.444h-4V20h4v-3.556c0-4 2.578-6.221 6.223-6.221 1.155 0 2.4.177 3.555.354v4.09h-2.044c-1.956 0-2.4.977-2.4 2.222V20h4.266l-.71 4.444h-3.556V36C34.223 34.659 40 28.045 40 20.09 40 11.24 32.8 4 24 4S8 11.24 8 20.09z"
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
  
  export default IconFacebook