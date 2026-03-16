import StaticTextPage from "@/components/legal/StaticTextPage";

const sections = [
  {
    heading: "1. Who We Are",
    body: [
      "Finance 2049 (“we”, “our”, or “us”) develops a portfolio tracking application for long-term investors.",
      "Contact: hi@finance2049.com",
    ],
  },
  {
    heading: "2. Information We Collect",
    body: [
      "Finance 2049 is built with a local-first approach.",
      "Portfolio data such as transactions, holdings, and analytics is stored only on your device.",
      "We may collect limited information including:",
    ],
    list: [
      "Anonymous authentication identifier (via Supabase anonymous login)",
      "Basic onboarding information",
      "Device information (device type, OS version)",
      "App usage analytics (via Google Analytics / Firebase)",
      "Crash logs and performance diagnostics",
      "IP address when requesting market data from third-party providers (e.g. Massive.com)",
    ],
  },
  {
    heading: "3. How We Use Information",
    body: [
      "We use collected data to:",
      "We do not sell personal data and we do not use your data for advertising profiling.",
    ],
    list: [
      "Provide and maintain the app",
      "Improve performance and stability",
      "Fix bugs and crashes",
      "Understand general feature usage",
      "Retrieve market prices and financial data",
    ],
  },
  {
    heading: "4. Portfolio Data",
    body: [
      "All portfolio tracking data is stored locally on your device.",
      "You are responsible for protecting access to your device and managing backups.",
      "If you export data, you control where and how it is stored or shared.",
    ],
  },
  {
    heading: "5. Anonymous Accounts",
    body: [
      "The app currently uses anonymous authentication to enable basic functionality.",
      "In the future, we may introduce optional user accounts with email or other identifiers.",
      "If this happens, we will update this Privacy Policy and inform users.",
    ],
  },
  {
    heading: "6. Data Sharing",
    body: [
      "We may share limited technical data with:",
      "We do not sell or rent your personal information.",
    ],
    list: [
      "Analytics and crash reporting providers (Google Analytics, Firebase)",
      "Market data providers (such as Massive.com)",
      "Legal authorities when required by law",
    ],
  },
  {
    heading: "7. Data Retention",
    body: [
      "Since portfolio data is stored locally, we do not retain it on our servers.",
      "Technical logs and analytics data may be stored for a limited time to improve the product.",
    ],
  },
  {
    heading: "8. Security",
    body: [
      "We design Finance 2049 to minimize data collection.",
      "However, no digital service can guarantee absolute security.",
      "Users should secure their devices using passcodes or biometric protection.",
    ],
  },
  {
    heading: "9. Children’s Privacy",
    body: [
      "Finance 2049 is not intended for children under 13.",
      "We do not knowingly collect personal data from children.",
    ],
  },
  {
    heading: "10. Third-Party Services",
    body: [
      "Finance 2049 relies on third-party services for analytics, authentication, and market data.",
      "These providers have their own privacy policies.",
    ],
  },
  {
    heading: "11. Changes to This Policy",
    body: [
      "We may update this Privacy Policy from time to time.",
      "Updates will be published on finance2049.com. Continued use of the app means you accept the updated policy.",
    ],
  },
  {
    heading: "12. Contact",
    body: ["For privacy questions, contact:", "hi@finance2049.com"],
  },
];

const PrivacyPolicy = () => (
  <StaticTextPage
    title="Privacy Policy"
    description="This Privacy Policy explains how Finance 2049 handles limited technical information while keeping portfolio data stored locally on your device."
    meta={["Finance 2049", "finance2049.com", "Effective date: 11 April, 2026"]}
    sections={sections}
  />
);

export default PrivacyPolicy;
