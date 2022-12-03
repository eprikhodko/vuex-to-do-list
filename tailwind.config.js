const plugin = require("tailwindcss/plugin");

module.exports = {
  mode: "jit",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  // corePlugins: {
  //   preflight: false,
  // },
  theme: {
    screens: {
      null: {
        min: "0px",
      },
      "mobile-small": {
        min: `${320}px`,
      },
      "mobile-medium": {
        min: `${375}px`,
      },
      "mobile-large": {
        min: `${640}px`,
      },
      "tablet-small": {
        min: `${720}px`,
      },
      "tablet-medium": {
        min: `${840}px`,
      },
      "tablet-large": {
        min: `${1024}px`,
      },
      "desktop-small": {
        min: `${1200}px`,
      },
      "desktop-medium": {
        min: `${1440}px`,
      },
      "desktop-large": {
        min: `${1728}px`,
      },
    },

    colors: {
      letters: {
        // primary
        primary: "var(--text-primary)",
        "on-primary-button": "var(--text-on-primary-button)",
        accent: "var(--text-accent)",
        "accent-hover": "var(--text-accent-hover)",

        // secondary
        "secondary-01": "var(--text-secondary-01)",
        "secondary-02": "var(--text-secondary-02)",
        "secondary-03": "var(--text-secondary-03)",

        // on color
        "on-color": "var(--text-on-color)",

        // text-status
        error: "var(--text-error)",
        warning: "var(--text-warning)",
        success: "var(--text-success)",
      },

      surface: {
        accent: "var(--surface-accent)",
        "accent-hover": "var(--surface-accent-hover)",
        "secondary-01": "var(--surface-secondary-01)",
        "secondary-02": "var(--surface-secondary-02)",
        "secondary-03": "var(--surface-secondary-03)",
        "secondary-04": "var(--surface-secondary-04)",
        "secondary-05": "var(--surface-secondary-05)",
        territary: "var(--surface-territary)",

        // surface-status
        error: "var(--surface-error)",
        warning: "var(--surface-attention)",
        success: "var(--surface-success)",

        // surface-focus
        tab: "var(--surface-tab)",
      },

      card: {
        "01": "var(--bg-card-01)",
        "02": "var(--bg-card-02)",
        "03": "var(--bg-card-03)",
        "04": "var(--bg-card-04)",
        "05": "var(--bg-card-05)",
        "06": "var(--bg-card-06)",
        "07": "var(--bg-card-07)",
      },

      // BG
      bg: {
        primary: "var(--bg-primary)",
        secondary: "var(--bg-secondary)",
      },

      // others
      transparent: "transparent",
      current: "currentColor",
      test: "var(--surface-accent)",
    },

    spacing: {
      px: "1px",
      "1em": "1em",
      "1ch": "1ch",
      0: "0px",
      4: "4px",
      8: "8px",
      10: "10px",
      12: "12px",
      16: "16px",
      20: "20px",
      24: "24px",
      28: "28px",
      32: "32px",
      40: "40px",
      48: "48px",
      56: "56px",
      64: "64px",
      72: "72px",
      80: "80px",
      88: "88px",
      96: "96px",
      112: "112px",
      120: "120px",
      128: "128px",
      144: "144px",
      160: "160px",
      176: "176px",
      184: "184px",
      192: "192px",
      208: "208px",
      224: "224px",
      240: "240px",
      256: "256px",
      272: "272px",
      288: "288px",
      320: "320px",
      360: "360px",
      400: "400px",
      432: "432px",
      480: "480px",
      496: "496px",
      560: "560px",
      1024: "1024px",

      // Breakpoints
      640: "640px",
      840: "840px",
      960: "960px",
      1024: "1024px",
      1280: "1280px",
      1440: "1440px",
    },
    animation: {
      none: "none",
      spin: "spin 1s linear infinite",
      ping: "ping 1s cubic-bezier(0, 0, 0.2, 1) infinite",
      pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      bounce: "bounce 1s infinite",
      "shake-y": "shake-y 0.9s cubic-bezier(0.455, 0.030, 0.515, 0.955) both",
    },
    backgroundColor: (theme) => theme("colors"),
    backgroundImage: {
      none: "none",
      "gradient-to-t": "linear-gradient(to top, var(--tw-gradient-stops))",
      "gradient-to-tr":
        "linear-gradient(to top right, var(--tw-gradient-stops))",
      "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      "gradient-to-br":
        "linear-gradient(to bottom right, var(--tw-gradient-stops))",
      "gradient-to-b": "linear-gradient(to bottom, var(--tw-gradient-stops))",
      "gradient-to-bl":
        "linear-gradient(to bottom left, var(--tw-gradient-stops))",
      "gradient-to-l": "linear-gradient(to left, var(--tw-gradient-stops))",
      "gradient-to-tl":
        "linear-gradient(to top left, var(--tw-gradient-stops))",
    },
    backgroundOpacity: (theme) => theme("opacity"),
    backgroundPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
      "bottom-right-24": "bottom right 24px",
      "bottom-right-32": "bottom right 32px",
    },
    backgroundSize: {
      "s-auto": "auto",
      "s-cover": "cover",
      "s-contain": "contain",
      "size-x-0": "0",
      "size-x-100": "100%",
      "50%": "50%",
      "100%": "100%",
      "107%": "107%",
    },
    borderOpacity: (theme) => theme("opacity"),
    borderRadius: {
      0: "0px",
      4: "4px",
      8: "8px",
      12: "12px",
      16: "16px",
      24: "24px",
      80: "80px",
      full: "9999px",
    },
    boxShadow: {
      s: "0px 16px 24px 0px rgba(8, 60, 148, 0.08)",
      l: "0px 16px 24px 0px rgba(8, 60, 148, 0.16)",
    },
    container: {
      center: true,
    },
    cursor: {
      auto: "auto",
      default: "default",
      pointer: "pointer",
      wait: "wait",
      text: "text",
      move: "move",
      help: "help",
      inherit: "inherit",
      "not-allowed": "not-allowed",
    },
    divideColor: (theme) => theme("borderColor"),
    divideOpacity: (theme) => theme("borderOpacity"),
    divideWidth: (theme) => theme("borderWidth"),
    fill: {
      current: "currentColor",
    },
    flex: {
      1: "1 1 0%",
      auto: "1 1 auto",
      initial: "0 1 auto",
      equal: "1 0 0%",
      none: "none",
      "01100": "0 1 100%",
      xs: "0 1 0",
      sm: "1 1.5 0",
      md: "1 1 0",
      lg: "1.5 1 0",
      "2xl": "1 1 100%",
    },
    flexGrow: {
      0: "0",
      DEFAULT: "1",
    },
    flexShrink: {
      0: "0",
      DEFAULT: "1",
    },
    fontFamily: {
      sans: [
        "Inter",
        "ui-sans-serif",
        "system-ui",
        "-apple-system",
        "BlinkMacSystemFont",
        '"Segoe UI"',
        "Roboto",
        '"Helvetica Neue"',
        "Arial",
        '"Noto Sans"',
        "sans-serif",
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      mono: [
        "ui-monospace",
        "SFMono-Regular",
        "Menlo",
        "Monaco",
        "Consolas",
        '"Liberation Mono"',
        '"Courier New"',
        "monospace",
      ],
    },
    fontSize: {
      "title-1": [
        "48px",
        {
          lineHeight: "56px",
          letterSpacing: "0.326451px",
        },
      ],
      "title-2": [
        "34px",
        {
          lineHeight: "40px",
          letterSpacing: "0.326451px",
        },
      ],
      "title-3": [
        "28px",
        {
          lineHeight: "34px",
          letterSpacing: "0.326451px",
        },
      ],
      "title-4": [
        "24px",
        {
          lineHeight: "30px",
          letterSpacing: "0.38px",
        },
      ],
      "title-5": [
        "22px",
        {
          lineHeight: "26px",
          letterSpacing: "0.38px",
        },
      ],
      "title-6": [
        "20px",
        {
          lineHeight: "26px",
          letterSpacing: "-0.408px",
        },
      ],

      1: [
        "18px",
        {
          lineHeight: "26px",
          letterSpacing: "-0.408px",
        },
      ],
      2: [
        "16px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.408px",
        },
      ],
      3: [
        "14px",
        {
          lineHeight: "20px",
          letterSpacing: "-0.408px",
        },
      ],
      "3-medium": [
        "14px",
        {
          lineHeight: "24px",
          letterSpacing: "-0.408px",
        },
      ],
      4: [
        "12px",
        {
          lineHeight: "15.6px",
          letterSpacing: "0.32px",
        },
      ],
    },
    fontWeight: {
      black: "900",
      bold: "700",
      semibold: "600",
      medium: "500",
      regular: "400",
    },
    extend: {
      lineHeight: {
        18: "18px",
      },
    },
    gap: (theme) => ({
      ...theme("spacing"),
    }),
    gradientColorStops: (theme) => theme("colors"),
    gridAutoColumns: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridAutoRows: {
      auto: "auto",
      min: "min-content",
      max: "max-content",
      fr: "minmax(0, 1fr)",
    },
    gridColumn: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-7": "span 7 / span 7",
      "span-8": "span 8 / span 8",
      "span-9": "span 9 / span 9",
      "span-10": "span 10 / span 10",
      "span-11": "span 11 / span 11",
      "span-12": "span 12 / span 12",
      "span-full": "1 / -1",
    },
    gridColumnEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridColumnStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
    },
    gridRow: {
      auto: "auto",
      "span-1": "span 1 / span 1",
      "span-2": "span 2 / span 2",
      "span-3": "span 3 / span 3",
      "span-4": "span 4 / span 4",
      "span-5": "span 5 / span 5",
      "span-6": "span 6 / span 6",
      "span-full": "1 / -1",
    },
    gridRowStart: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
    },
    gridRowEnd: {
      auto: "auto",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
    },
    gridTemplateColumns: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
      14: "repeat(14, minmax(0, 1fr))",
    },
    gridTemplateRows: {
      none: "none",
      1: "repeat(1, minmax(0, 1fr))",
      2: "repeat(2, minmax(0, 1fr))",
      3: "repeat(3, minmax(0, 1fr))",
      4: "repeat(4, minmax(0, 1fr))",
      5: "repeat(5, minmax(0, 1fr))",
      6: "repeat(6, minmax(0, 1fr))",
      7: "repeat(7, minmax(0, 1fr))",
      8: "repeat(8, minmax(0, 1fr))",
      9: "repeat(9, minmax(0, 1fr))",
      10: "repeat(10, minmax(0, 1fr))",
      11: "repeat(11, minmax(0, 1fr))",
      12: "repeat(12, minmax(0, 1fr))",
      14: "repeat(14, minmax(0, 1fr))",
    },
    height: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      full: "100%",
      screen: "100vh",
      "1em": "1em",
      fit: "fit-content",
    }),
    inset: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
      "-1/2": "-50%",
      "-1/3": "-33.333333%",
      "-2/3": "-66.666667%",
      "-1/4": "-25%",
      "-2/4": "-50%",
      "-3/4": "-75%",
      "-full": "-100%",
    }),
    keyframes: {
      spin: {
        to: {
          transform: "rotate(360deg)",
        },
      },
      ping: {
        "75%, 100%": {
          transform: "scale(2)",
          opacity: "0",
        },
      },
      pulse: {
        "50%": {
          opacity: ".5",
        },
      },
      bounce: {
        "0%, 100%": {
          transform: "translateY(-25%)",
          animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
        },
        "50%": {
          transform: "none",
          animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
        },
      },
      "shake-y": {
        "0%, 80%": {
          transform: "translateY(0)",
        },
        "40%, 80%": {
          transform: "translateY(-8px)",
        },
        "20%, 60%": {
          transform: "translateY(8px)",
        },
      },
    },
    letterSpacing: {
      normal: "0",
      wide: "0.32px",
      bold: "0.4px",
    },
    lineHeight: {
      16: "16px",
      none: "1",
    },
    listStyleType: {
      none: "none",
      disc: "disc",
      decimal: "decimal",
    },
    margin: (theme, { negative }) => ({
      auto: "auto",
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    maxHeight: (theme) => ({
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    maxWidth: (theme, { breakpoints }) => ({
      none: "none",
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      prose: "65ch",
      ...breakpoints(theme("screens")),
      ...theme("spacing"),
    }),
    minHeight: (theme) => ({
      auto: "auto",
      0: "0px",
      full: "100%",
      screen: "100vh",
      ...theme("spacing"),
    }),
    minWidth: (theme, { breakpoints }) => ({
      0: "0px",
      full: "100%",
      min: "min-content",
      max: "max-content",
      ...breakpoints(theme("screens")),
      ...theme("spacing"),
    }),
    objectPosition: {
      bottom: "bottom",
      center: "center",
      left: "left",
      "left-bottom": "left bottom",
      "left-top": "left top",
      right: "right",
      "right-bottom": "right bottom",
      "right-top": "right top",
      top: "top",
    },
    opacity: {
      0: "0",
      30: "0.3",
      40: "0.4",
      50: "0.5",
      60: "0.6",
      80: "0.8",
      100: "1",
    },
    order: {
      first: "-9999",
      last: "9999",
      none: "0",
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
    },
    outline: {
      none: ["2px solid transparent", "2px"],
      white: ["2px dotted white", "2px"],
      black: ["2px dotted black", "2px"],
    },
    padding: (theme, { negative }) => ({
      ...theme("spacing"),
    }),
    placeholderColor: (theme) => theme("colors"),
    placeholderOpacity: (theme) => theme("opacity"),
    ringColor: (theme) => ({
      // NOTE opacity doesn't work on DEFAULT
      DEFAULT: theme("colors.blue.200"),
      ...theme("colors"),
    }),
    ringOffsetColor: (theme) => theme("colors"),
    ringOffsetWidth: {
      0: "0px",
      4: "4px",
    },
    ringOpacity: (theme) => ({
      DEFAULT: "1",
      ...theme("opacity"),
    }),
    ringWidth: {
      DEFAULT: "2px",
      0: "0px",
      1: "1px",
      2: "2px",
      10000: "10000px",
    },
    rotate: {
      "-180": "-180deg",
      "-90": "-90deg",
      "-45": "-45deg",
      "-12": "-12deg",
      "-6": "-6deg",
      "-3": "-3deg",
      "-2": "-2deg",
      "-1": "-1deg",
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
      45: "45deg",
      90: "90deg",
      180: "180deg",
    },
    scale: {
      0: "0",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
    },
    skew: {
      "-12": "-12deg",
      "-6": "-6deg",
      "-3": "-3deg",
      "-2": "-2deg",
      "-1": "-1deg",
      0: "0deg",
      1: "1deg",
      2: "2deg",
      3: "3deg",
      6: "6deg",
      12: "12deg",
    },
    space: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
    }),
    stroke: {
      current: "currentColor",
    },
    strokeWidth: {
      0: "0",
      1: "1",
      2: "2",
    },
    textColor: (theme) => theme("colors"),
    textOpacity: (theme) => theme("opacity"),
    transformOrigin: {
      center: "center",
      top: "top",
      "top-right": "top right",
      right: "right",
      "bottom-right": "bottom right",
      bottom: "bottom",
      "bottom-left": "bottom left",
      left: "left",
      "top-left": "top left",
    },
    transitionDelay: {
      75: "75ms",
      100: "100ms",
      150: "150ms",
      200: "200ms",
      300: "300ms",
      500: "500ms",
      700: "700ms",
      1000: "1000ms",
    },
    transitionDuration: {
      DEFAULT: "300ms",
      half: "150ms",
      none: "0ms",
    },
    transitionProperty: {
      none: "none",
      all: "all",
      height: "height",
      DEFAULT:
        "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
      colors: "background-color, border-color, color, fill, stroke",
      opacity: "opacity",
      shadow: "box-shadow",
      transform: "transform",
    },
    transitionTimingFunction: {
      DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
      linear: "linear",
      in: "cubic-bezier(0.4, 0, 1, 1)",
      out: "cubic-bezier(0, 0, 0.2, 1)",
      "in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
    },
    translate: (theme, { negative }) => ({
      ...theme("spacing"),
      ...negative(theme("spacing")),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      full: "100%",
      "-1/2": "-50%",
      "-1/3": "-33.333333%",
      "-2/3": "-66.666667%",
      "-1/4": "-25%",
      "-2/4": "-50%",
      "-3/4": "-75%",
      "-full": "-100%",
    }),
    width: (theme) => ({
      auto: "auto",
      ...theme("spacing"),
      "1/2": "50%",
      "1/3": "33.333333%",
      "2/3": "66.666667%",
      "1/4": "25%",
      "2/4": "50%",
      "3/4": "75%",
      "1/5": "20%",
      "2/5": "40%",
      "3/5": "60%",
      "4/5": "80%",
      "1/6": "16.666667%",
      "2/6": "33.333333%",
      "3/6": "50%",
      "4/6": "66.666667%",
      "5/6": "83.333333%",
      "1/12": "8.333333%",
      "2/12": "16.666667%",
      "3/12": "25%",
      "4/12": "33.333333%",
      "5/12": "41.666667%",
      "6/12": "50%",
      "7/12": "58.333333%",
      "8/12": "66.666667%",
      "9/12": "75%",
      "10/12": "83.333333%",
      "11/12": "91.666667%",
      full: "100%",
      min: "min-content",
      max: "max-content",
    }),
    zIndex: {
      auto: "auto",
      0: "0",
      1: "1",
      overlay: "100",
      popup: "10",
      "dev-badge": "3147483001",
    },
    aspectRatio: {
      1: "1",
      2: "2",
      3: "3",
      4: "4",
      5: "5",
      6: "6",
      7: "7",
      8: "8",
      9: "9",
      10: "10",
      11: "11",
      12: "12",
      13: "13",
      14: "14",
      15: "15",
      16: "16",
      342: "342",
      400: "400",
      456: "456",
      488: "488",
      496: "496",
      592: "592",
      696: "696",
      832: "832",
    },
  },
  variantOrder: [
    "first",
    "last",
    "odd",
    "even",
    "visited",
    "checked",
    "group-hover",
    "group-focus",
    "focus-within",
    "hover",
    "focus",
    "focus-visible",
    "active",
    "disabled",
  ],
  plugins: [
    // require("tailwind-scrollbar"),
    // require("tailwindcss-debug-screens"),
    // require("@tailwindcss/aspect-ratio"),
    // require("@graxmonzo/tailwind-caret-color"),
    // require("tailwindcss-autofill"),
    // // Based on this: https://github.com/tailwindlabs/tailwindcss/issues/493#issuecomment-610907147
    // plugin(function ({ addVariant }) {
    //   addVariant("important", ({ container }) => {
    //     container.walkRules((rule) => {
    //       rule.selector = `.\\!${rule.selector.slice(1)}`;
    //       rule.walkDecls((decl) => {
    //         decl.important = true;
    //       });
    //     });
    //   });
    // }),
    // plugin(function ({ addUtilities }) {
    //   addUtilities({
    //     /* Hide scrollbar for Chrome, Safari and Opera */
    //     ".no-scrollbar::-webkit-scrollbar": {
    //       display: "none",
    //     },
    //     /* Hide scrollbar for IE, Edge and Firefox */
    //     ".no-scrollbar": {
    //       "-ms-overflow-style": "none" /* IE and Edge */,
    //       "scrollbar-width": "none" /* Firefox */,
    //     },
    //   });
    // }),
  ],
};
