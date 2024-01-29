import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        xl: "80%",
      },
    },
    extend: {
      fontSize: {
        h1: [
          "67px",
          {
            fontWeight: "500",
          },
        ],
        h2: [
          "50px",
          {
            fontWeight: "500",
          },
        ],
        h3: [
          "37px",
          {
            fontWeight: "500",
          },
        ],
        h4: [
          "28px",
          {
            fontWeight: "500",
          },
        ],
        h5: [
          "21px",
          {
            fontWeight: "600",
          },
        ],
        h6: [
          "16px",
          {
            fontWeight: "600",
          },
        ],
        subtitle: "16px",
        subtitle2: [
          "14px",
          {
            fontWeight: "500",
          },
        ],
        body: [
          "74px",
          {
            fontWeight: "300",
          },
        ],
        body2: "34px",
        button: "18px",
        "button-large": "29px",
        "button-small": "16px",
        span: [
          "16px",
          {
            fontWeight: "600",
          },
        ],
        "span-2": [
          "14px",
          {
            fontWeight: "600",
          },
        ],
        "span-3": "16px",
        a: "16px",
        "a-2": "14px",
        "input-text": [
          "16px",
          {
            fontWeight: "600",
          },
        ],
        overline: [
          "12px",
          {
            fontWeight: "600",
          },
        ],
      },
      colors: {
        background: "hsl(var(--white))",
        foreground: "hsl(var(--dark))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--white))",
        },
        black: {
          DEFAULT: "hsl(var(--black))",
          foreground: "hsl(var(--white))",
        },
        dark: {
          DEFAULT: "hsl(var(--dark))",
          foreground: "hsl(var(--white))",
        },
        stroke: "hsl(var(--stroke))",
      },
    },
  },
  plugins: [],
};

export default config;
