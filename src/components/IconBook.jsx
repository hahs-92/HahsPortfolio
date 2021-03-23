function IconBook(props) {
    return (
      <svg
        width={48}
        height={44}
        viewBox="0 0 48 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_d)" fill="#000">
          <path d="M14.52 4H8.931C8.42 4 8 4.525 8 5.167v25.666c0 .642.42 1.167.931 1.167h5.59c.511 0 .93-.525.93-1.167V5.167c0-.642-.418-1.167-.93-1.167zm-.931 7H9.863V8.667h3.726V11zM21.972 4h-5.589c-.512 0-.931.525-.931 1.167v25.666c0 .642.419 1.167.931 1.167h5.589c.512 0 .931-.525.931-1.167V5.167c0-.642-.419-1.167-.931-1.167zm-.932 7h-3.726V8.667h3.726V11z" />
          <path d="M28.405 4.965l-4.99 3.15c-.22.14-.387.383-.464.676-.078.293-.06.613.05.89l8.383 20.836c.112.275.306.484.54.581.234.097.49.075.71-.063l4.99-3.15c.22-.14.387-.383.465-.676.077-.293.06-.613-.05-.89L29.654 5.484c-.111-.276-.306-.484-.54-.581a.766.766 0 00-.71.063zM40 18c0 .31-.099.606-.274.825-.174.219-.411.342-.658.342-.247 0-.484-.123-.659-.342a1.33 1.33 0 01-.273-.825c0-.31.098-.606.273-.825.175-.219.412-.342.659-.342.247 0 .484.123.658.342.175.219.273.515.273.825z" />
        </g>
        <defs>
          <filter
            id="prefix__filter0_d"
            x={0}
            y={0}
            width={47.999}
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
  
  export default IconBook