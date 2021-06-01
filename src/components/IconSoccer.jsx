function IconSoccer(props) {
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
            d="M24 4a16 16 0 100 32 16 16 0 000-32zm-3.328 2.398a14.034 14.034 0 016.66 0L24 8.34 20.672 6.4v-.002zm-2.488.864l4.82 2.81v3.4l-5.538 3.904-3.12-1.134-1.252-5.024a14.05 14.05 0 015.09-3.958v.002zm-6.582 6.23l.786 3.16-2.328 2.068c.17-1.874.708-3.64 1.544-5.228h-.002zm-1.534 7.892l3.654-3.24 3.092 1.122 2.09 6.58-1.434 2.146h-4.966a13.92 13.92 0 01-2.436-6.608zm4.126 8.608h3.108l1.02 2.808a14.026 14.026 0 01-4.128-2.808zm6.552 3.628l-1.63-4.492 1.42-2.126h6.934l1.422 2.126-1.63 4.49a14.029 14.029 0 01-6.516 0v.002zm8.942-.824l1.02-2.804h3.098a14.033 14.033 0 01-4.118 2.804zm5.808-4.804H30.54l-1.44-2.15 2.05-6.574 3.134-1.128 3.648 3.244a13.92 13.92 0 01-2.436 6.608zm2.446-9.276l-2.32-2.062.786-3.144a13.921 13.921 0 011.534 5.206zm-3.028-7.484l-1.25 5.006-3.168 1.14-5.494-3.904v-3.4L29.82 7.26a14.048 14.048 0 015.096 3.97l-.002.002zm-16.12 7.66L24 15.214l5.172 3.674L27.268 25h-6.534l-1.94-6.112v.004z"
            fill={ props }
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
  
  export default IconSoccer