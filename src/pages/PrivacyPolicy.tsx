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
      "We do not directly collect personal information, authentication data, onboarding details, device information, or IP addresses.",
      "Some limited technical information may be collected by third-party services we use:",
    ],
    list: [
      "App usage analytics (via Google Analytics / Firebase)",
      "Crash logs and performance diagnostics (via Sentry)",
      "Market data request information handled by third-party providers such as Massive.com",
    ],
  },
  {
    heading: "3. How We Use Information",
    body: [
      "Finance 2049 is designed so that your portfolio data remains on your device.",
      "When third-party services collect technical information, it is used to operate and improve those services within the app.",
      "We do not sell personal data and we do not use your data for advertising profiling.",
    ],
    list: [
      "Measure general app usage through Google Analytics / Firebase",
      "Monitor crashes and performance through Sentry",
      "Retrieve market prices and financial data through providers such as Massive.com",
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
      "Finance 2049 does not currently require user accounts or directly collect authentication data.",
      "If account-based features are introduced in the future, we will update this Privacy Policy before those changes take effect.",
    ],
  },
  {
    heading: "6. Data Sharing",
    body: [
      "We may share limited technical data with:",
      "We do not sell or rent your personal information.",
    ],
    list: [
      "Analytics providers (Google Analytics, Firebase)",
      "Crash reporting provider (Sentry)",
      "Market data providers (such as Massive.com)",
      "Legal authorities when required by law",
    ],
  },
  {
    heading: "7. Data Retention",
    body: [
      "Since portfolio data is stored locally, we do not retain it on our servers.",
      "Any technical logs, analytics data, or diagnostics collected by third-party providers are retained according to their own policies.",
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
      "Finance 2049 relies on third-party services for analytics, crash reporting, and market data.",
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
    description="This Privacy Policy explains how Finance 2049 keeps portfolio data stored locally on your device while relying on limited third-party analytics, crash reporting, and market data services."
    meta={["Finance 2049", "finance2049.com", "Effective date: 11 April, 2026"]}
    sections={sections}
  />
);

export default PrivacyPolicy;
