import type { RouteObject } from "react-router-dom";
import Index from "./pages/Index.tsx";
import NotFound from "./pages/NotFound.tsx";
import PrivacyPolicy from "./pages/PrivacyPolicy.tsx";
import TermsAndConditions from "./pages/TermsAndConditions.tsx";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <Index />,
  },
  {
    path: "/terms-and-conditions",
    element: <TermsAndConditions />,
  },
  {
    path: "/privacy-policy",
    element: <PrivacyPolicy />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];

export const prerenderRoutes = ["/", "/terms-and-conditions", "/privacy-policy", "/404"] as const;
