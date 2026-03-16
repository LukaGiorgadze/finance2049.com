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

for (const route of prerenderRoutes) {
  const renderedHtml = render(route);
  const { preloadLinks, appHtml } = extractPreloadLinks(renderedHtml);
  const html = template
    .replace("<!--preload-links-->", preloadLinks)
    .replace("<!--app-html-->", appHtml);
  const outputPath = getOutputPath(route);

  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html);
  console.log("pre-rendered:", path.relative(rootDir, outputPath));
}

const viteDir = toAbsolute("dist/static/.vite");

if (fs.existsSync(viteDir)) {
  fs.rmSync(viteDir, { recursive: true, force: true });
}
