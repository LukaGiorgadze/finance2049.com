import StaticTextPage from "@/components/legal/StaticTextPage";

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: [
      "By downloading, installing, accessing, or using the Finance 2049 mobile application, website (finance2049.com), or related services (collectively, the “Service”), you agree to be bound by these Terms of Service (“Terms”). If you do not agree, you must not use the Service.",
    ],
  },
  {
    heading: "2. Description of Service",
    body: [
      "Finance 2049 is a portfolio tracking application designed to help users monitor investment performance, track transactions, and understand portfolio analytics.",
      "Finance 2049 is not a brokerage, trading platform, financial advisor, or investment service. The Service does not support buying or selling financial instruments.",
    ],
  },
  {
    heading: "3. Eligibility",
    body: [
      "You must be at least 18 years old or the legal age of majority in your jurisdiction to use the Service. By using the Service, you confirm that you have the legal capacity to enter into these Terms.",
    ],
  },
  {
    heading: "4. No Financial Advice",
    body: [
      "All information provided through the Service is for informational and educational purposes only.",
      "Finance 2049 does not provide financial, investment, legal, or tax advice.",
      "You are solely responsible for your investment decisions.",
    ],
  },
  {
    heading: "5. Market Data",
    body: [
      "The Service may display market prices and financial data from third-party providers. While we aim to provide timely and accurate information, we do not guarantee data accuracy, completeness, or real-time availability.",
    ],
  },
  {
    heading: "6. Local Data Storage",
    body: [
      "Finance 2049 is designed with a local-first approach. Portfolio data is primarily stored on your device.",
      "You are responsible for maintaining backups and protecting access to your device.",
    ],
  },
  {
    heading: "7. License to Use",
    body: [
      "Subject to these Terms, Finance 2049 grants you a limited, non-exclusive, revocable, non-transferable license to use the Service for personal, non-commercial purposes.",
    ],
  },
  {
    heading: "8. Open Source",
    body: [
      "Parts of the Service may be available as open-source software. Use of open-source components may also be governed by their respective licenses.",
    ],
  },
  {
    heading: "9. User Responsibilities",
    body: ["You agree not to:"],
    list: [
      "Use the Service for unlawful purposes",
      "Attempt to disrupt, hack, reverse engineer, or interfere with the Service",
      "Upload malicious software or harmful data",
      "Misrepresent financial data or impersonate others",
    ],
  },
  {
    heading: "10. Fees",
    body: [
      "Core portfolio tracking features are free.",
      "Future optional features or services may be offered for a fee. Any pricing will be clearly communicated before purchase.",
    ],
  },
  {
    heading: "11. Intellectual Property",
    body: [
      "All trademarks, branding, and proprietary materials related to Finance 2049 remain the property of their respective owners. These Terms do not grant you ownership rights in the Service.",
    ],
  },
  {
    heading: "12. Disclaimer of Warranties",
    body: [
      "The Service is provided “as is” and “as available.”",
      "We make no warranties regarding reliability, accuracy, availability, or suitability for a particular purpose.",
    ],
  },
  {
    heading: "13. Limitation of Liability",
    body: [
      "To the fullest extent permitted by law, Finance 2049 shall not be liable for any indirect, incidental, special, consequential, or financial losses arising from the use of the Service, including investment losses or data loss.",
    ],
  },
  {
    heading: "14. Termination",
    body: [
      "We may suspend or terminate access to the Service at any time if you violate these Terms or use the Service in a harmful or unlawful manner.",
    ],
  },
  {
    heading: "15. Changes to Terms",
    body: [
      "We may update these Terms from time to time. Updated Terms will be published on finance2049.com. Continued use of the Service after updates constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "16. Governing Law",
    body: [
      "These Terms are governed by the laws of Georgia (country).",
      "Any disputes shall be resolved in the courts of Tbilisi, Georgia.",
    ],
  },
  {
    heading: "17. Contact",
    body: ["For questions about these Terms, contact:", "hi@finance2049.com"],
  },
];

const TermsAndConditions = () => (
  <StaticTextPage
    title="Terms of Use"
    description="These Terms of Use govern your use of Finance 2049, including the mobile application, website, and related services."
    meta={["Finance 2049", "finance2049.com", "Effective date: 11 April, 2026"]}
    sections={sections}
  />
);

export default TermsAndConditions;
