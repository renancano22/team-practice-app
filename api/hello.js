// This is the "backend" part of the app.
// On Vercel, any file inside the /api folder becomes a serverless function,
// so this one is reachable at:  https://your-app.vercel.app/api/hello
// Locally, server.js routes /api/hello to this same function.

const APP_VERSION = "1.0.0";

module.exports = (req, res) => {
  const data = {
    message: "Hello from the Node.js backend!",
    version: APP_VERSION,
    time: new Date().toISOString(),
  };

  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");
  res.end(JSON.stringfy(data));
};
