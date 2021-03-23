function IconFigma(props) {
    return (
      <svg
        width={45}
        height={48}
        viewBox="0 0 45 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_d)" fill="#000">
          <path d="M28.97 14.665c1.828-.041 3.562-.622 4.836-1.617 1.273-.996 1.985-2.328 1.985-3.715 0-1.388-.712-2.72-1.985-3.716C32.532 4.622 30.798 4.042 28.97 4H14.91c-1.827.042-3.562.622-4.835 1.617-1.274.996-1.986 2.328-1.986 3.716 0 1.387.712 2.72 1.986 3.715 1.273.995 3.008 1.575 4.835 1.617-1.843.024-3.6.597-4.893 1.595C8.724 17.257 8 18.6 8 20c0 1.398.724 2.741 2.017 3.739 1.292.997 3.05 1.57 4.893 1.594-1.834.034-3.579.611-4.86 1.608-1.282.996-2 2.333-2 3.726 0 1.392.718 2.73 2 3.725 1.281.997 3.026 1.574 4.86 1.608 1.865 0 3.652-.563 4.97-1.564 1.319-1 2.06-2.356 2.06-3.77v-16h7.03z" />
          <path d="M29.03 25.667c3.882 0 7.03-2.388 7.03-5.334 0-2.945-3.148-5.333-7.03-5.333-3.883 0-7.03 2.388-7.03 5.333 0 2.946 3.147 5.334 7.03 5.334z" />
        </g>
        <defs>
          <filter
            id="prefix__filter0_d"
            x={0}
            y={0}
            width={44.06}
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
  
  export default IconFigma
  