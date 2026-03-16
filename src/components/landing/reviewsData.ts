import mariamAvatar from "/mariam.webp";
import nikaAvatar from "/nika.webp";
import temurAvatar from "/temur.webp";
import apolonAvatar from "/apolon.webp";
import nataliaAvatar from "/natalia.webp";
import sabaAvatar from "/saba.webp";

export const reviews = [
  {
    name: "Mariam K.",
    role: "Founder of Fitroom.ge",
    text: "Finally a portfolio app that is simple and calm. I can see how much I invested and how much I earned.",
    rating: 5,
    avatar: mariamAvatar,
  },
  {
    name: "Saba M.",
    role: "AML, Compliance, Virtual Assets",
    text: "I like that all data stays on my phone. It feels transparent and safe. Also no useless features.",
    rating: 5,
    avatar: sabaAvatar,
  },
  {
    name: "Temur M.",
    role: "Co-Founder of Slick.global",
    text: "Very clean experience. It reminds me of Google Finance but with real analytics. Exactly what I needed.",
    rating: 5,
    avatar: temurAvatar,
  },
  {
    name: "Nika M.",
    role: "Head of Graphic Design",
    text: "Design is super simple and easy to understand. I can check my portfolio in seconds.",
    rating: 5,
    avatar: nikaAvatar,
  },
  {
    name: "Apolon P.",
    role: "Founder at Fundamental Education",
    text: "Great tool for long-term investing. I can track cost basis and gains without using spreadsheets anymore.",
    rating: 5,
    avatar: apolonAvatar,
  },
  {
    name: "Natalia G.",
    role: "QA Specialist",
    text: "Importing my transactions was very easy. Now I clearly see my performance and history in one place.",
    rating: 5,
    avatar: nataliaAvatar,
  },
] as const;
