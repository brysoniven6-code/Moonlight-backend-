
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json({ limit: "1mb" }));

app.get("/", (req, res) => {
  res.json({
    name: "Moonlight",
    description: "iOS game-service backend",
    version: "0.1.0",
    status: "online"
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    service: "Moonlight",
    status: "healthy",
    timestamp: new Date().toISOString()
  });
});
app.get("/api/v1/moonlight", (req, res) => {
  res.json({
    name: "Moonlight",
    creator: "Moonlight Development",
    version: "0.1.0",
    message: "My backend is working!"
  });
});

app.get("/api/v1/status", (req, res) => {
  res.json({
    name: "Moonlight",
    version: "0.1.0",
    environment: process.env.NODE_ENV || "development",
    maintenance: false,
    features: {
      profiles: true,
      catalog: true,
      testAuthentication: false
    }
  });
});

app.use((req, res) => {
  res.status(404).json({
    success: false,
    error: "Endpoint not found",
    path: req.path
  });
});

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Moonlight running on port ${PORT}`);
});
