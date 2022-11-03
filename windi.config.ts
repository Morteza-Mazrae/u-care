import { defineConfig } from "windicss/helpers";
import plugin from "windicss/plugin";

export default defineConfig({
  darkMode: "class",
  safelist: "p-3 p-4 p-5",
  theme: {
    extend: {
      colors: {
        teal: {
          100: "#096",
        },
      },
    },
  },
  plugins: [
    plugin(({ addUtilities }) => {
      const newUtilities = {
        ".rtl": {
          direction: "rtl",
        },
        ".ltr": {
          direction: "ltr",
        },
      };
      addUtilities(newUtilities);
    }),
    plugin(({ addComponents }) => {
      const buttons = {
        ".btn": {
          padding: ".5rem 1rem",
          borderRadius: ".25rem",
          fontWeight: "600",
        },
        ".btn-blue": {
          backgroundColor: "#3490dc",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#2779bd",
          },
        },
        ".btn-red": {
          backgroundColor: "#e3342f",
          color: "#fff",
          "&:hover": {
            backgroundColor: "#cc1f1a",
          },
        },
      };
      addComponents(buttons);
    }),
    plugin(({ addDynamic, variants }) => {
      addDynamic(
        "skew",
        ({ Utility, Style }) => {
          return Utility.handler
            .handleStatic(Style("skew"))
            .handleNumber(0, 360, "int", (number) => `skewY(-${number}deg)`)
            .createProperty("transform");
        },
        variants("skew")
      );
    }),
  ],
});
