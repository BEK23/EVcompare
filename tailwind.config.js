const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
      },
      spacing: {
        7.5: "1.875rem",
        15: "3.75rem",
      },
      fontFamily: {
        montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans],
      },
      animation: {
        "fade-up": "fadeUp 1s ease-in-out",
        "fade-down": "fadeDown 1s ease-in-out",
      },
      keyframes: () => ({
        fadeUp: {
          "0%": { opacity: 0, transform: "translate(0, 2rem)" },
          "100%": { opacity: 100 },
        },
        fadeDown: {
          "0%": { opacity: 0, transform: "translate(0, -2rem)" },
          "100%": { opacity: 100 },
        },
      }),
    },
  },
  plugins: [],
};
