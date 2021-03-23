function IconWebpack(props) {
    return (
      <svg
        width={48}
        height={48}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_d)" fill="#000">
          <path d="M25.23 12.262l5.54 3.183 8.043-3.855L25.231 4v8.262zM22.77 4.002L9.186 11.59l8.044 3.852 5.538-3.182V4.002zM8 13.658v12.781l8.615-3.668v-4.986L8 13.658zM9.287 28.468L22.77 36v-8.26l-5.007-2.876-8.475 3.607v-.003zM25.23 36l13.483-7.532-8.476-3.606-5.006 2.878V36zM40 26.437V13.66l-8.615 4.125v4.988L40 26.441v-.004zM25.23 24.992l3.693-2.122v-3.908l-3.692 1.768v4.262zM22.77 20.73v4.262l-3.693-2.122v-3.908l3.692 1.768zM19.843 16.692L24 18.683l4.158-1.991L24 14.304l-4.157 2.388z" />
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
  
  export default IconWebpack