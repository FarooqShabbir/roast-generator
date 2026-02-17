export default function handler(req, res) {
  const cfg = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  const missing = Object.entries(cfg).filter(([_, v]) => !v);
  if (missing.length) {
    res.status(500).json({ error: "Missing Firebase env vars", missing: missing.map(([k]) => k) });
    return;
  }
  res.setHeader("Content-Type", "application/javascript; charset=utf-8");
  res.status(200).send(`window.__FIREBASE_CONFIG=${JSON.stringify(cfg)};`);
}
