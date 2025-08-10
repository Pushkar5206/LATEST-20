#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Deploying Ignite Track...");

// Build the project
console.log("📦 Building project...");
execSync("npm run build:client", { stdio: "inherit" });

// Create 200.html for SPA routing
const indexPath = path.join("dist", "spa", "index.html");
const spa200Path = path.join("dist", "spa", "200.html");
fs.copyFileSync(indexPath, spa200Path);

console.log("✅ Build complete!");
console.log("📁 Files ready in dist/spa/");
console.log("");
console.log("🌐 Deployment options:");
console.log(
  "1. Netlify: Drag & drop the dist/spa folder to https://netlify.com",
);
console.log('2. Surge: Run "npx surge dist/spa" in terminal');
console.log('3. Firebase: Run "npx firebase deploy" after setup');
console.log("");
console.log("📝 Your app is ready to deploy!");

// List files in dist/spa
console.log("📂 Built files:");
const distFiles = fs.readdirSync(path.join("dist", "spa"));
distFiles.forEach((file) => {
  console.log(`  - ${file}`);
});
