#!/usr/bin/env node

const { execSync } = require("child_process");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("🚀 Ignite Track - Direct Deployment");
console.log("==================================");

// Check if npm is installed
try {
  execSync("npm --version", { stdio: "ignore" });
} catch (error) {
  console.log("❌ npm is not installed. Please install Node.js and npm first.");
  process.exit(1);
}

// Install dependencies if needed
if (!fs.existsSync("node_modules")) {
  console.log("📦 Installing dependencies...");
  execSync("npm install", { stdio: "inherit" });
}

// Build the project
console.log("🔨 Building the project...");
try {
  execSync("npm run build:client", { stdio: "inherit" });
  console.log("✅ Build successful!");
} catch (error) {
  console.log("❌ Build failed. Please check for errors.");
  process.exit(1);
}

console.log("");
console.log("📡 Choose your deployment option:");
console.log("1. Netlify (Recommended - Free tier, custom domains)");
console.log("2. Vercel (Great for React apps)");
console.log("3. Surge.sh (Simple and fast)");
console.log("4. View local preview");

rl.question("Enter your choice (1-4): ", (choice) => {
  switch (choice) {
    case "1":
      deployToNetlify();
      break;
    case "2":
      deployToVercel();
      break;
    case "3":
      deployToSurge();
      break;
    case "4":
      startPreview();
      break;
    default:
      console.log("❌ Invalid choice. Please run the script again.");
      process.exit(1);
  }
  rl.close();
});

function deployToNetlify() {
  console.log("🌐 Deploying to Netlify...");

  try {
    execSync("netlify --version", { stdio: "ignore" });
  } catch (error) {
    console.log("📦 Installing Netlify CLI...");
    execSync("npm install -g netlify-cli", { stdio: "inherit" });
  }

  console.log("🔑 Please login to Netlify when prompted...");
  try {
    execSync("netlify deploy --prod --dir=dist/spa", { stdio: "inherit" });
    showSuccessMessage("Netlify");
  } catch (error) {
    console.log("❌ Deployment failed. Please check the error messages above.");
  }
}

function deployToVercel() {
  console.log("🌐 Deploying to Vercel...");

  try {
    execSync("vercel --version", { stdio: "ignore" });
  } catch (error) {
    console.log("📦 Installing Vercel CLI...");
    execSync("npm install -g vercel", { stdio: "inherit" });
  }

  console.log("🔑 Please login to Vercel when prompted...");
  try {
    execSync("vercel --prod", { stdio: "inherit" });
    showSuccessMessage("Vercel");
  } catch (error) {
    console.log("❌ Deployment failed. Please check the error messages above.");
  }
}

function deployToSurge() {
  console.log("🌐 Deploying to Surge.sh...");

  try {
    execSync("surge --version", { stdio: "ignore" });
  } catch (error) {
    console.log("📦 Installing Surge CLI...");
    execSync("npm install -g surge", { stdio: "inherit" });
  }

  // Copy index.html to 200.html for SPA support
  try {
    fs.copyFileSync("dist/spa/index.html", "dist/spa/200.html");
  } catch (error) {
    console.log("⚠️  Could not create 200.html for SPA support");
  }

  console.log("🔑 Please login to Surge when prompted...");
  try {
    execSync("surge dist/spa", { stdio: "inherit" });
    showSuccessMessage("Surge.sh");
  } catch (error) {
    console.log("❌ Deployment failed. Please check the error messages above.");
  }
}

function startPreview() {
  console.log("🖥️  Starting local preview...");
  console.log("📝 Your app will be available at: http://localhost:3000");
  console.log("⏹️  Press Ctrl+C to stop the preview");

  try {
    execSync("npm run preview", { stdio: "inherit" });
  } catch (error) {
    // This is expected when user presses Ctrl+C
  }
}

function showSuccessMessage(platform) {
  console.log("");
  console.log("🎉 Deployment complete!");
  console.log("📝 Your app is now live at the URL shown above");

  if (platform === "Netlify" || platform === "Vercel") {
    console.log("💡 To add a custom domain:");
    console.log(`   1. Go to your ${platform} dashboard`);
    console.log("   2. Click on your site");
    console.log("   3. Go to Domain settings");
    console.log("   4. Add your custom domain");
  }

  console.log("");
  console.log(
    "✨ Success! Your Ignite Track platform is now accessible via direct URL",
  );
  console.log("🔗 No more builder.io dependency - you have full control!");
  console.log("");
  console.log("📋 Next steps:");
  console.log("   • Test all features on your live site");
  console.log("   • Set up a custom domain if desired");
  console.log("   �� Share your direct URL with users");
  console.log("");
  console.log("📖 For more deployment options, see DEPLOYMENT.md");
}
