function IconWhatsapp(props) {
    return (
      <svg
        width={32}
        height={32}
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <g filter="url(#prefix__filter0_d)">
          <path
            d="M37.607 11.4c-4.787-7.4-14.56-9.6-22.14-5-7.379 4.6-9.772 14.6-4.985 22l.399.6-1.596 6 5.983-1.6.599.4c2.593 1.4 5.385 2.2 8.177 2.2 2.992 0 5.984-.8 8.577-2.4C40 28.8 42.194 19 37.607 11.4zm-4.189 15.4c-.797 1.2-1.795 2-3.19 2.2-.799 0-1.796.4-5.785-1.2-3.39-1.6-6.183-4.2-8.177-7.2-1.197-1.4-1.795-3.2-1.995-5 0-1.6.598-3 1.596-4 .399-.4.797-.6 1.197-.6h.997c.399 0 .797 0 .997.8.399 1 1.396 3.4 1.396 3.6.2.2.2.6 0 .8.2.4 0 .8-.2 1-.199.2-.398.6-.598.8-.399.2-.598.6-.399 1 .798 1.2 1.795 2.4 2.793 3.4 1.196 1 2.393 1.8 3.79 2.4.398.2.797.2.997-.2.199-.4 1.196-1.4 1.595-1.8.399-.4.599-.4.997-.2l3.192 1.6c.398.2.797.4.997.6.2.6.2 1.4-.2 2z"
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
  
  export default IconWhatsapp