const SITE_URL = "https://finance2049.com";

const APP_NAME = "Finance 2049";
const APP_DESCRIPTION =
  "Finance 2049 is an open-source portfolio tracking app for long-term investors. Track cost basis, gains, allocation, and performance with a clean, local-first experience.";
const APP_CATEGORY = "FinanceApplication";
const APP_OPERATING_SYSTEMS = "iOS, Android";
const APP_IMAGE_URL = "https://finance2049.com/android-chrome-512x512.png";

type AggregateRatingSchema = {
  "@type": "AggregateRating";
  ratingValue: string;
  bestRating: number;
  reviewCount: number;
};

export type SoftwareApplicationSchema = {
  "@context": "https://schema.org";
  "@type": "SoftwareApplication";
  name: string;
  url: string;
  applicationCategory: string;
  operatingSystem: string;
  description: string;
  image?: string;
  screenshot: string[];
  aggregateRating: AggregateRatingSchema;
  offers?: { "@type": "Offer"; price: string; priceCurrency: string };
};

const toAbsoluteUrl = (path: string) => new URL(path, SITE_URL).toString();

type BuildSoftwareApplicationSchemaOptions = {
  ratingValue: number;
  reviewCount: number;
  screenshots: readonly string[];
};

export const buildSoftwareApplicationSchema = ({
  ratingValue,
  reviewCount,
  screenshots,
}: BuildSoftwareApplicationSchemaOptions): SoftwareApplicationSchema => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: APP_NAME,
  url: SITE_URL,
  applicationCategory: APP_CATEGORY,
  operatingSystem: APP_OPERATING_SYSTEMS,
  description: APP_DESCRIPTION,
  image: APP_IMAGE_URL,
  screenshot: screenshots.map(toAbsoluteUrl),
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: ratingValue.toFixed(1),
    bestRating: 5,
    reviewCount,
  },
  offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
});

export const softwareApplicationMeta = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  applicationCategory: APP_CATEGORY,
  operatingSystem: APP_OPERATING_SYSTEMS,
} as const;

// FAQ schema (Schema.org FAQPage)
export type FAQItem = { q: string; a: string };

export type FAQPageSchema = {
  "@context": "https://schema.org";
  "@type": "FAQPage";
  mainEntity: Array<{
    "@type": "Question";
    name: string;
    acceptedAnswer: { "@type": "Answer"; text: string };
  }>;
};

export const faqs: FAQItem[] = [
  {
    q: "Is Finance 2049 an investing or trading app?",
    a: "No. Finance 2049 is not a trading platform. You cannot buy or sell assets inside the app. It is built only for tracking, analyzing, and understanding your portfolio. This app is designed mainly for long-term investors who want a calm and simple way to track performance. But any trader can use it to track their portfolio and analyze their performance.",
  },
  {
    q: "Is the app free to use?",
    a: "Yes! All core features are free. Basic portfolio analytics like cost basis, gains tracking, and performance statistics are available without subscriptions.",
  },
  {
    q: "Where is my data stored?",
    a: "Your portfolio data is stored locally on your device. The app is built with a local-first approach, which means you keep full control over your financial information. It is fully open-source and transparent.",
  },
  {
    q: "Is Finance 2049 open source?",
    a: "Yes. The code is open source. Anyone can review how calculations work and how data is handled.",
  },
  {
    q: "What assets can I track?",
    a: "You can track stocks, ETFs, and other assets available through market search.",
  },
  {
    q: "Can I import my existing portfolio?",
    a: "Yes. You can import transactions from different formats such as spreadsheets, JSON files, PDFs, or screenshots. Our intelligent parser can handle any format. It's even smart enough to recognize transactions from images.",
  },
  {
    q: "Can I export my portfolio data?",
    a: "Yes. You can export all your data anytime. Your portfolio is fully portable.",
  },
  {
    q: "Does the app show real-time prices?",
    a: "Yes. Finance 2049 shows nearly real-time market prices so you can see up-to-date portfolio value and performance. Data update speed may vary slightly depending on the market and data source.",
  },
  {
    q: "Why not just use other apps like Google Finance?",
    a: "Google Finance is very simple and great for quick overview. Finance 2049 keeps that simplicity but adds deeper portfolio analytics like cost basis tracking, realized gains, and full transaction history.",
  },
  {
    q: "Will more features be added in the future?",
    a: "Yes. The roadmap includes improvements in analytics, portfolio insights, and platform availability. See the roadmap on Github for more details.",
  },
  {
    q: "Is it Google Finance alternative?",
    a: "Yes. Finance 2049 is a Google Finance alternative. It is a simple and clean portfolio tracking app for long-term investors.",
  },
];

export const buildFAQPageSchema = (items: FAQItem[]): FAQPageSchema => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: items.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
});
