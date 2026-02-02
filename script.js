const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const targetDir = "public/IGSB/student-engagement";

console.log(`Scanning ${targetDir}...`);

/* -------------------------------------------------
   CONVERT/OPTIMIZE IMAGES TO WEBP
   Handles: PNG, JPEG, JPG, and WebP files
   (No deletion - re-optimizes existing WebP)
------------------------------------------------- */
const imageFiles = fs
  .readdirSync(targetDir, { recursive: true })
  .filter((file) => {
    const fullPath = path.join(targetDir, file);
    return (
      fs.existsSync(fullPath) &&
      fs.statSync(fullPath).isFile() &&
      /\.(png|jpe?g|webp)$/i.test(fullPath)
    );
  });

let completed = 0;

imageFiles.forEach((file) => {
  const fullPath = path.join(targetDir, file);
  const destination = fullPath.replace(/\.(png|jpe?g|webp)$/i, ".webp");

  sharp(fullPath)
    .rotate()
    .resize({
      width: 1280,
      height: 1280,
      fit: "inside",
      withoutEnlargement: true,
    })
    .webp({ quality: 50, effort: 6 })
    .toFile(destination)
    .then(() => {
      completed++;
      console.log(`✅ Created: ${destination}`);
      if (completed === imageFiles.length) {
        console.log(`\n✨ All ${completed} images converted successfully!`);
      }
    })
    .catch((err) => console.error(`❌ Error converting ${file}:`, err));
});
