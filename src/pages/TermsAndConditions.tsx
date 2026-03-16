import StaticTextPage from "@/components/legal/StaticTextPage";

const sections = [
  {
    heading: "Using Finance 2049",
    body: [
      "These Terms and Conditions are a short placeholder sample. They explain the basic rules for accessing and using Finance 2049 and will be replaced with the final legal copy later.",
      "By using the product, visitors agree to use it lawfully, avoid misuse, and understand that features, pricing, and availability may change over time.",
    ],
  },
  {
    heading: "Accounts and Service Updates",
    body: [
      "If an account system is introduced, users will be responsible for keeping their credentials secure and for activity that happens under their account.",
      "We may update, suspend, or discontinue parts of the service when necessary, including for maintenance, security, or product improvements.",
    ],
  },
];

const TermsAndConditions = () => (
  <StaticTextPage
    title="Terms and Conditions"
    description="This is sample placeholder text for the terms page. Replace it with the final agreement when your legal copy is ready."
    sections={sections}
  />
);

export default TermsAndConditions;
