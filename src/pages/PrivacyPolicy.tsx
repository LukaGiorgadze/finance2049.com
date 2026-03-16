import StaticTextPage from "@/components/legal/StaticTextPage";

const sections = [
  {
    heading: "Information We Collect",
    body: [
      "This Privacy Policy currently contains short sample copy. It is meant to show the final page layout and will be updated with the complete policy later.",
      "Finance 2049 may collect basic information needed to operate the app, respond to support requests, and improve product performance.",
    ],
  },
  {
    heading: "How Information Is Used",
    body: [
      "Collected information may be used to provide the service, communicate updates, troubleshoot issues, and understand how the product is being used.",
      "We can revise this policy from time to time, and the final version should explain retention, third-party services, and user rights in more detail.",
    ],
  },
];

const PrivacyPolicy = () => (
  <StaticTextPage
    title="Privacy Policy"
    description="This is sample placeholder text for the privacy page. Replace it with the final privacy policy content when it is ready."
    sections={sections}
  />
);

export default PrivacyPolicy;
