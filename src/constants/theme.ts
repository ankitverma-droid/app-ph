/**
 * Playhaus brand design system
 */

import "@/global.css";
import { Platform } from "react-native";

export const Colors = {
  light: {
    // Brand colors
    primary: "#B5E51D",
    primaryDark: "#9CC918",
    navy: "#091A49",
    lime: "#B5E51D",
    cream: "#FFF0DA",
    accent: "#B5E51D",

    // Backgrounds
    background: "#FFFFFF",
    backgroundElement: "#FFF0DA",
    backgroundSelected: "#EDF7C9",
    card: "#FFFFFF",

    // Text
    text: "#171B35",
    textSecondary: "#737B8D",

    // UI
    border: "#E5E7EB",
    success: "#238636",
    error: "#DC2626",
  },

  dark: {
    primary: "#B5E51D",
    primaryDark: "#9CC918",
    navy: "#091A49",
    lime: "#B5E51D",
    cream: "#FFF0DA",
    accent: "#B5E51D",

    background: "#12172A",
    backgroundElement: "#202943",
    backgroundSelected: "#35451E",
    card: "#1B2236",

    text: "#FFFFFF",
    textSecondary: "#B4BACC",

    border: "#343D55",
    success: "#4ADE80",
    error: "#F87171",
  },
} as const;

export type ThemeColor = keyof typeof Colors.light & keyof typeof Colors.dark;

export const Fonts = Platform.select({
  ios: {
    sans: "system-ui",
    serif: "ui-serif",
    rounded: "ui-rounded",
    mono: "ui-monospace",
  },
  default: {
    sans: "normal",
    serif: "serif",
    rounded: "normal",
    mono: "monospace",
  },
  web: {
    sans: "var(--font-display)",
    serif: "var(--font-serif)",
    rounded: "var(--font-rounded)",
    mono: "var(--font-mono)",
  },
});

export const Spacing = {
  half: 2,
  one: 4,
  two: 8,
  three: 16,
  four: 24,
  five: 32,
  six: 64,
} as const;

export const BottomTabInset = Platform.select({ ios: 50, android: 80 }) ?? 0;

export const MaxContentWidth = 800;
