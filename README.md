# Mysterium Community Status Proxy

A lightweight Express-based reverse proxy that safely routes requests to the [Mysterium Network community status page](https://status.adinetech.com), keeping backend IP private behind Cloudflare.

### Features
- Simple reverse proxy using Express + http-proxy-middleware
- Forwards all requests to your public status page

### Deploy on Render
1. Fork or clone this repo.
2. Go to [https://render.com](https://render.com) → New → Web Service.
3. Connect this repo.
4. Build Command: `npm install`
5. Start Command: `npm start`
6. Instance type: **Free**
7. After deploy, get your URL (e.g. `https://myst-status-proxy.onrender.com`).

### Environment Variables
None needed.
