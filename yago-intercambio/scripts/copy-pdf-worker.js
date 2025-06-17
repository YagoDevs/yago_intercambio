const fs = require('fs');
const path = require('path');

// Source and destination paths
const sourcePath = path.join(__dirname, '../node_modules/pdfjs-dist/build/pdf.worker.min.mjs');
const destPath = path.join(__dirname, '../public/pdf.worker.min.js');

// Create public directory if it doesn't exist
if (!fs.existsSync(path.dirname(destPath))) {
  fs.mkdirSync(path.dirname(destPath), { recursive: true });
}

// Copy the file
fs.copyFileSync(sourcePath, destPath);
console.log('PDF worker file copied successfully!');