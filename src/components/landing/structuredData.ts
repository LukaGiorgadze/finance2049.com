const SITE_URL = "https://finance2049.com";

const APP_NAME = "Finance 2049";
const APP_DESCRIPTION =
  "Finance 2049 is an open-source portfolio tracking app for long-term investors. Track cost basis, gains, allocation, and performance with a clean, local-first experience.";
const APP_CATEGORY = "FinanceApplication";
const APP_OPERATING_SYSTEMS = "iOS, Android";

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
  aggregateRating: AggregateRatingSchema;
  screenshot: string[];
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
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: ratingValue.toFixed(1),
    bestRating: 5,
    reviewCount,
  },
  screenshot: screenshots.map(toAbsoluteUrl),
});

export const softwareApplicationMeta = {
  name: APP_NAME,
  description: APP_DESCRIPTION,
  applicationCategory: APP_CATEGORY,
  operatingSystem: APP_OPERATING_SYSTEMS,
} as const;
