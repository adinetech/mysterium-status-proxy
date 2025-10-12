import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

// Environment-based target (easy to switch if needed)
const TARGET = process.env.TARGET_URL || "https://status.adinetech.com";

// Optional health check (Render uses this for “up” checks)
app.get("/health", (req, res) => {
  res.status(200).send("OK");
});

// Main proxy — forwards all traffic to your status page via Cloudflare
app.use(
  "/",
  createProxyMiddleware({
    target: TARGET,
    changeOrigin: true,
    followRedirects: true,
    secure: true,
    onProxyReq(proxyReq) {
      proxyReq.setHeader("User-Agent", "Mysterium-Community-Status-Proxy");
    }
  })
);

const port = process.env.PORT || 80;
app.listen(port, () => {
  console.log(`✅ Proxy live on port ${port}`);
  console.log(`🔁 Forwarding traffic to: ${TARGET}`);
});
