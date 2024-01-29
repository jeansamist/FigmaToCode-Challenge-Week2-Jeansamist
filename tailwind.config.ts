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
    fontSize: {
      xl: [
        "67px",
        {
          fontWeight: "500",
        },
      ],
      "2xl": [
        "50px",
        {
          fontWeight: "500",
        },
      ],
      "3xl": [
        "37px",
        {
          fontWeight: "500",
        },
      ],
      "4xl": [
        "28px",
        {
          fontWeight: "500",
        },
      ],
      "5xl": [
        "21px",
        {
          fontWeight: "600",
        },
      ],
      "6xl": [
        "16px",
        {
          fontWeight: "600",
        },
      ],
      body: [
        "74px",
        {
          fontWeight: "300",
        },
      ],
      md: "34px",
      sm: "18px",
      lg: "29px",
      xs: "16px",
    },
    extend: {
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
