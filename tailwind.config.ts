import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ピッチデックのブランドカラーを踏襲
        navy: {
          DEFAULT: "#1A2138",
          700: "#293352",
          500: "#44506E",
        },
        gold: {
          DEFAULT: "#C8A451",
          light: "#E2C882",
        },
        vermilion: "#D64541",
        paper: {
          DEFAULT: "#F7F4EC",
          2: "#F2EFE7",
        },
        ink: {
          muted: "#6A7185",
        },
        hairline: "#EAECF2",
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Noto Serif JP", "serif"],
        sans: ["var(--font-sans)", "Noto Sans JP", "sans-serif"],
      },
      letterSpacing: {
        kicker: "0.2em",
      },
      maxWidth: {
        content: "72rem",
      },
      // 角丸を引き締める（テンプレ的な“ぷっくり”感を抑え、編集的でシャープに）。
      // 円形要素（ドット・バッジ・アイコン）のための full は維持する。
      borderRadius: {
        none: "0px",
        sm: "1px",
        DEFAULT: "2px",
        md: "2px",
        lg: "3px",
        xl: "4px",
        "2xl": "5px",
        "3xl": "6px",
        full: "9999px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "drift": {
          "0%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
          "100%": { transform: "translateY(0) rotate(0deg)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.7s ease-out both",
        drift: "drift 9s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
