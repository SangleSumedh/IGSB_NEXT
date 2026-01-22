const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// The folder you want to target
const targetDir = 'public/';

console.log(`Scanning ${targetDir}...`);

// Node v20+ can read folders recursively natively!
// This gets every file inside 'induction' and all its sub-sub-folders.
const files = fs.readdirSync(targetDir, { recursive: true });

files.forEach(file => {
  // 'file' is just the relative path (e.g., "day1/photo.jpg")
  // We need to join it with the targetDir to get the full path
  const fullPath = path.join(targetDir, file);

  // Check if it is a file and has the right extension
  if (fs.statSync(fullPath).isFile() && fullPath.match(/\.(png|jpg|jpeg)$/i)) {
    
    // Create the new path (e.g., image.jpg -> image.webp)
    const destination = fullPath.replace(/\.(png|jpg|jpeg)$/i, '.webp');

    sharp(fullPath)
      .webp({ quality: 80 })
      .toFile(destination)
      .then(() => console.log(`✅ Converted: ${destination}`))
      .catch(err => console.error(`❌ Error on ${file}:`, err));
  }
});