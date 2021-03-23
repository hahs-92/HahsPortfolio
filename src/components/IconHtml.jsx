function IconHtml(props) {
    return (
      <svg
        width={44}
        height={48}
        viewBox="0 0 44 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_d)">
          <path
            d="M24.2 6.4l1.4 1.76L27 6.4v2.4h2V4h-2l-1.4 1.76L24.4 4h-2.2v4.8h2V6.4zm10.6 2.4V7.2H32V4h-2v4.8h4.8zm-17.2 0h2V5.6h1.8V4h-5.6v1.6h1.8v3.2zm-6.4-1.6H13v1.6h2V4h-2v1.6h-1.8V4h-2v4.8h2V7.2zM8 10.4l2.4 23.04L22 36l11.6-2.56L36 10.4H8zm22.6 7.36H17l.4 2.88h12.8l-1 8.8-7.2 1.6-7.2-1.6-.6-4.64h3.6l.2 2.4 4 .8 4-.8.4-3.68H14l-1-8.48h18l-.4 2.72z"
            fill="#000"
          />
        </g>
        <defs>
          <filter
            id="prefix__filter0_d"
            x={-2}
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
  
  export default IconHtml