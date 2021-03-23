function IconInvision(props) {
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
            d="M37.096 4H10.9A2.898 2.898 0 008 6.9v26.198A2.901 2.901 0 0010.9 36h26.198A2.903 2.903 0 0040 33.098V6.9A2.9 2.9 0 0037.096 4zm-18.403 6.222c1.063 0 1.954.84 1.954 1.918 0 1.096-.891 1.922-1.954 1.922v.039a1.934 1.934 0 01-1.939-1.936c0-1.076.865-1.943 1.94-1.943zm13.085 18.419c-1.979 0-2.938-1.178-2.938-2.786 0-.463.06-.949.203-1.445l.94-3.391c.12-.37.153-.721.153-1.034 0-1.094-.667-1.75-1.728-1.75-1.354 0-2.242.965-2.704 2.842l-1.838 7.377h-3.223l.582-2.318c-.95 1.553-2.261 2.512-3.884 2.512-1.96 0-2.877-1.124-2.877-2.818a7.15 7.15 0 01.17-1.443l1.47-5.99h-2.273l.69-2.544h5.471l-2.163 8.548c-.143.55-.196.995-.196 1.313 0 .546.263.705.685.804.26.054 2.304.02 3.413-2.448l1.42-5.672h-2.303l.696-2.498h4.959l-.64 2.877c.862-1.6 2.584-3.135 4.282-3.135 1.8 0 3.3 1.295 3.3 3.756 0 .711-.112 1.416-.32 2.1l-.925 3.305c-.077.286-.121.58-.134.875 0 .58.242.862.655.862.424 0 .984-.322 1.6-2.086l1.26.484c-.737 2.621-2.104 3.703-3.803 3.703z"
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
  
  export default IconInvision