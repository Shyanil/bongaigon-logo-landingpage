import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const distDir = "dist";
const indexPath = join(distDir, "index.html");
const staticRoutes = ["thank-you", "thank you"];

for (const route of staticRoutes) {
  const routeDir = join(distDir, route);
  mkdirSync(routeDir, { recursive: true });
  copyFileSync(indexPath, join(routeDir, "index.html"));
}
