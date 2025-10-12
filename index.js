import express from "express";
import { createProxyMiddleware } from "http-proxy-middleware";

const app = express();

app.use(
  "/",
  createProxyMiddleware({
    target: "https://status.adinetech.com", // Cloudflare-protected status page
    changeOrigin: true,
    followRedirects: true,
    secure: true,
    onProxyReq(proxyReq, req, res) {
      proxyReq.setHeader("User-Agent", "Community-Status-Proxy");
    }
  })
);

// Start
const port = process.env.PORT || 80;
app.listen(port, () => console.log(`🚀 Proxy live on port ${port}`));