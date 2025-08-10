#!/bin/bash

# Ignite Track - Direct Deployment Script
# This script deploys your app to get a direct URL without builder.io

echo "🚀 Ignite Track - Direct Deployment"
echo "=================================="

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install Node.js and npm first."
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building the project..."
npm run build:client

if [ $? -ne 0 ]; then
    echo "❌ Build failed. Please check for errors."
    exit 1
fi

echo "✅ Build successful!"

# Check for deployment options
echo ""
echo "📡 Choose your deployment option:"
echo "1. Netlify (Recommended - Free tier, custom domains)"
echo "2. Vercel (Great for React apps)"
echo "3. Surge.sh (Simple and fast)"
echo "4. View local preview"

read -p "Enter your choice (1-4): " choice

case $choice in
    1)
        echo "🌐 Deploying to Netlify..."
        if ! command -v netlify &> /dev/null; then
            echo "📦 Installing Netlify CLI..."
            npm install -g netlify-cli
        fi
        
        echo "🔑 Please login to Netlify when prompted..."
        netlify deploy --prod --dir=dist/spa
        
        echo ""
        echo "🎉 Deployment complete!"
        echo "📝 Your app is now live at the URL shown above"
        echo "💡 To add a custom domain:"
        echo "   1. Go to your Netlify dashboard"
        echo "   2. Click on your site"
        echo "   3. Go to Domain settings"
        echo "   4. Add your custom domain"
        ;;
    2)
        echo "🌐 Deploying to Vercel..."
        if ! command -v vercel &> /dev/null; then
            echo "📦 Installing Vercel CLI..."
            npm install -g vercel
        fi
        
        echo "🔑 Please login to Vercel when prompted..."
        vercel --prod
        
        echo ""
        echo "🎉 Deployment complete!"
        echo "📝 Your app is now live at the URL shown above"
        ;;
    3)
        echo "🌐 Deploying to Surge.sh..."
        if ! command -v surge &> /dev/null; then
            echo "📦 Installing Surge CLI..."
            npm install -g surge
        fi
        
        # Copy index.html to 200.html for SPA support
        cp dist/spa/index.html dist/spa/200.html
        
        echo "🔑 Please login to Surge when prompted..."
        surge dist/spa
        
        echo ""
        echo "🎉 Deployment complete!"
        echo "📝 Your app is now live at the URL shown above"
        ;;
    4)
        echo "🖥️  Starting local preview..."
        echo "📝 Your app will be available at: http://localhost:3000"
        echo "⏹️  Press Ctrl+C to stop the preview"
        npm run preview
        ;;
    *)
        echo "❌ Invalid choice. Please run the script again."
        exit 1
        ;;
esac

echo ""
echo "✨ Success! Your Ignite Track platform is now accessible via direct URL"
echo "🔗 No more builder.io dependency - you have full control!"
echo ""
echo "📋 Next steps:"
echo "   • Test all features on your live site"
echo "   • Set up a custom domain if desired"
echo "   • Share your direct URL with users"
echo ""
echo "📖 For more deployment options, see DEPLOYMENT.md"
