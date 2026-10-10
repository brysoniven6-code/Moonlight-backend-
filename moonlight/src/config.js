
const fs = require("fs");
const path = require("path");

const configPath = path.join(
  __dirname,
  "../config/config.json"
);

function loadConfig() {
  const file = fs.readFileSync(configPath, "utf8");
  const config = JSON.parse(file);

  if (!config.name || !config.version) {
    throw new Error("Moonlight config is missing required fields");
  }

  if (typeof config.maintenanceMode !== "boolean") {
    throw new Error("maintenanceMode must be true or false");
  }

  return config;
}

module.exports = loadConfig();
