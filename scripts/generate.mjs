import fs from "node:fs";
import path from "node:path";
import url from "node:url";

const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");

const toAbsolute = (filePath) => path.resolve(rootDir, filePath);

const template = fs.readFileSync(toAbsolute("dist/static/index.html"), "utf-8");
const { prerenderRoutes, render } = await import(
  url.pathToFileURL(toAbsolute("dist/server/entry-server.js")).href
);

const routeMeta = {
  "/": {
    title: "Finance 2049 | Portfolio Tracking for Long-Term Investors",
    description:
      "Finance 2049 is an open-source portfolio tracking app for long-term investors. Track cost basis, gains, allocation, and performance with a clean, local-first experience.",
    canonicalPath: "/",
    ogType: "website",
  },
  "/terms-and-use": {
    title: "Terms of Use | Finance 2049",
    description:
      "These Terms of Use govern your use of Finance 2049, including the mobile application, website, and related services.",
    canonicalPath: "/terms-and-use",
    ogType: "article",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Finance 2049",
    description:
      "This Privacy Policy explains how Finance 2049 keeps portfolio data stored locally on your device while relying on limited third-party analytics, crash reporting, and market data services.",
    canonicalPath: "/privacy-policy",
    ogType: "article",
  },
  "/404": {
    title: "Page Not Found | Finance 2049",
    description: "The requested Finance 2049 page could not be found.",
    canonicalPath: "/404",
    ogType: "website",
  },
};

const extractPreloadLinks = (html) => {
  const match = html.match(/^((?:<link\b[^>]*\/>)+)(.*)$/s);

  if (!match) {
    return { preloadLinks: "", appHtml: html };
  }

  return {
    preloadLinks: match[1],
    appHtml: match[2],
  };
};

const getOutputPath = (route) => {
  if (route === "/") {
    return toAbsolute("dist/static/index.html");
  }

  if (route === "/404") {
    return toAbsolute("dist/static/404.html");
  }

  return toAbsolute(`dist/static${route}/index.html`);
};

const replaceOrInsertTag = (html, pattern, replacement, anchor) => {
  if (pattern.test(html)) {
    return html.replace(pattern, replacement);
  }

  return html.replace(anchor, `${replacement}\n    ${anchor}`);
};

const applyRouteHead = (html, route) => {
  const meta = routeMeta[route] ?? routeMeta["/404"];
  const canonicalUrl = `https://finance2049.com${meta.canonicalPath}`;

  let updatedHtml = html
    .replace(/<title>.*?<\/title>/s, `<title>${meta.title}</title>`)
    .replace(
      /<meta\s+name="description"\s+content=".*?"\s*\/>/,
      `<meta name="description" content="${meta.description}" />`
    )
    .replace(
      /<meta\s+property="og:title"\s+content=".*?"\s*\/>/,
      `<meta property="og:title" content="${meta.title}" />`
    )
    .replace(
      /<meta\s+property="og:description"\s+content=".*?"\s*\/>/,
      `<meta property="og:description" content="${meta.description}" />`
    )
    .replace(
      /<meta\s+property="og:type"\s+content=".*?"\s*\/>/,
      `<meta property="og:type" content="${meta.ogType ?? "website"}" />`
    )
    .replace(
      /<meta\s+property="og:url"\s+content=".*?"\s*\/>/,
      `<meta property="og:url" content="${canonicalUrl}" />`
    )
    .replace(
      /<meta\s+name="twitter:title"\s+content=".*?"\s*\/>/,
      `<meta name="twitter:title" content="${meta.title}" />`
    )
    .replace(
      /<meta\s+name="twitter:description"\s+content=".*?"\s*\/>/,
      `<meta name="twitter:description" content="${meta.description}" />`
    );

  updatedHtml = replaceOrInsertTag(
    updatedHtml,
    /<link\s+rel="canonical"\s+href=".*?"\s*\/>/,
    `<link rel="canonical" href="${canonicalUrl}" />`,
    `<link rel="preconnect" href="https://fonts.googleapis.com" />`
  );

  return updatedHtml;
};

for (const route of prerenderRoutes) {
  const renderedHtml = render(route);
  const { preloadLinks, appHtml } = extractPreloadLinks(renderedHtml);
  const html = applyRouteHead(
    template
    .replace("<!--preload-links-->", preloadLinks)
    .replace("<!--app-html-->", appHtml),
    route
  );
  const outputPath = getOutputPath(route);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);
  console.log("pre-rendered:", path.relative(rootDir, outputPath));
}

const viteDir = toAbsolute("dist/static/.vite");

if (fs.existsSync(viteDir)) {
  fs.rmSync(viteDir, { recursive: true, force: true });
}
