import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/theme";
import plugin from "tailwindcss/plugin";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    fontFamily: {
      inherit: ["inherit"],
      sans: ["inherit"],
      cairo: ["var(--font-cairo)", "var(--font-poppins)"],
      poppins: ["var(--font-poppins)", "var(--font-cairo)"],
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
      },
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      animation: {
        spotlight: "spotlight 2s ease .75s 1 forwards",
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "meteor-effect": "meteor 5s linear infinite",
        "shiny-text": "shiny-text 8s infinite",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        meteor: "meteor 5s linear infinite",
        shine: "shine var(--duration) infinite linear",
        gradient: "gradient 8s linear infinite",
        ripple: "ripple var(--duration,2s) ease calc(var(--i, 0)*.2s) infinite",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        spotlight: {
          "0%": {
            opacity: "0",
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: "1",
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        shine: {
          "0%": {
            "background-position": "0% 0%",
          },
          "50%": {
            "background-position": "100% 100%",
          },
          to: {
            "background-position": "0% 0%",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        ripple: {
          "0%, 100%": {
            transform: "translate(-50%, -50%) scale(1)",
          },
          "50%": {
            transform: "translate(-50%, -50%) scale(0.9)",
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      screens: {
        mid: "768px",
        "3xl": "1600px",
      },
      gridTemplateRows: {
        "[auto,auto,1fr]": "auto auto 1fr",
      },
      colors: {
        black: {
          "100": "#000319",
          "200": "rgba(17, 25, 40, 0.75)",
          "300": "rgba(255, 255, 255, 0.125)",
          DEFAULT: "#000",
        },
        white: {
          "100": "#BEC1DD",
          "200": "#C1C2D3",
          DEFAULT: "#FFF",
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      spacing: {
        "11": "2.75rem",
        "13": "3.25rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "16": "4rem",
        "17": "4.25rem",
        "18": "4.5rem",
        "19": "4.75rem",
        "21": "5.25rem",
        "22": "5.5rem",
        "25": "6.25rem",
        "26": "6.5rem",
        "27": "6.75rem",
        "29": "7.25rem",
        "30": "7.5rem",
        "31": "7.75rem",
        "34": "8.5rem",
        "35": "8.75rem",
        "39": "9.75rem",
        "40": "10rem",
        "44": "11rem",
        "45": "11.25rem",
        "46": "11.5rem",
        "49": "12.25rem",
        "50": "12.5rem",
        "52": "13rem",
        "54": "13.5rem",
        "55": "13.75rem",
        "59": "14.75rem",
        "60": "15rem",
        "65": "16.25rem",
        "67": "16.75rem",
        "70": "17.5rem",
        "73": "18.25rem",
        "75": "18.75rem",
        "90": "22.5rem",
        "94": "23.5rem",
        "95": "23.75rem",
        "100": "25rem",
        "115": "28.75rem",
        "125": "31.25rem",
        "150": "37.5rem",
        "180": "45rem",
        "203": "50.75rem",
        "230": "57.5rem",
        "4.5": "1.125rem",
        "5.5": "1.375rem",
        "6.5": "1.625rem",
        "7.5": "1.875rem",
        "8.5": "2.125rem",
        "9.5": "2.375rem",
        "10.5": "2.625rem",
        "11.5": "2.875rem",
        "12.5": "3.125rem",
        "13.5": "3.375rem",
        "14.5": "3.625rem",
        "15.5": "3.875rem",
        "16.5": "4.125rem",
        "17.5": "4.375rem",
        "18.5": "4.625rem",
        "19.5": "4.875rem",
        "21.5": "5.375rem",
        "22.5": "5.625rem",
        "24.5": "6.125rem",
        "25.5": "6.375rem",
        "27.5": "6.875rem",
        "29.5": "7.375rem",
        "32.5": "8.125rem",
        "34.5": "8.625rem",
        "36.5": "9.125rem",
        "37.5": "9.375rem",
        "39.5": "9.875rem",
        "42.5": "10.625rem",
        "47.5": "11.875rem",
        "52.5": "13.125rem",
        "54.5": "13.625rem",
        "55.5": "13.875rem",
        "62.5": "15.625rem",
        "67.5": "16.875rem",
        "72.5": "18.125rem",
        "132.5": "33.125rem",
        "171.5": "42.875rem",
        "187.5": "46.875rem",
        "242.5": "60.625rem",
      },
      maxWidth: {
        "3": "0.75rem",
        "4": "1rem",
        "11": "2.75rem",
        "13": "3.25rem",
        "14": "3.5rem",
        "15": "3.75rem",
        "25": "6.25rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "35": "8.75rem",
        "40": "10rem",
        "44": "11rem",
        "45": "11.25rem",
        "70": "17.5rem",
        "90": "22.5rem",
        "94": "23.5rem",
        "125": "31.25rem",
        "150": "37.5rem",
        "180": "45rem",
        "203": "50.75rem",
        "230": "57.5rem",
        "270": "67.5rem",
        "280": "70rem",
        "2.5": "0.625rem",
        "22.5": "5.625rem",
        "42.5": "10.625rem",
        "132.5": "33.125rem",
        "142.5": "35.625rem",
        "242.5": "60.625rem",
        "292.5": "73.125rem",
      },
      maxHeight: {
        "35": "8.75rem",
        "70": "17.5rem",
        "90": "22.5rem",
        "300": "18.75rem",
        "550": "34.375rem",
      },
      minWidth: {
        "75": "18.75rem",
        "22.5": "5.625rem",
        "42.5": "10.625rem",
        "47.5": "11.875rem",
      },
    },
  },

  plugins: [
    nextui(),
    require("tailwindcss-animate"),
    plugin(function spicyGradients({ addUtilities }) {
      addUtilities({
        ".bg-none": { "background-image": "none" },
        ".bg-gradient-to-t": {
          "background-image":
            "linear-gradient(to top, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to top, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to top, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-b": {
          "background-image":
            "linear-gradient(to bottom, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to bottom, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to bottom, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-l": {
          "background-image":
            "linear-gradient(to left, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to left, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to left, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-r": {
          "background-image":
            "linear-gradient(to right, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to right, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to right, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-tl": {
          "background-image":
            "linear-gradient(to top left, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to top left, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to top left, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-tr": {
          "background-image":
            "linear-gradient(to top right, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to top right, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to top right, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-bl": {
          "background-image":
            "linear-gradient(to bottom left, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to bottom left, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to bottom left, var(--tw-gradient-stops))",
            },
        },
        ".bg-gradient-to-br": {
          "background-image":
            "linear-gradient(to bottom right, var(--tw-gradient-stops))",
          "@supports (background: linear-gradient(in oklch to bottom right, black, white))":
            {
              "background-image":
                "linear-gradient(in oklch to bottom right, var(--tw-gradient-stops))",
            },
        },
      });
    }),
  ],
} satisfies Config;
