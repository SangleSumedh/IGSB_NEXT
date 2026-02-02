const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const targetDir = "public/NEWFacilities";

console.log(`Scanning ${targetDir}...`);

const files = fs.readdirSync(targetDir, { recursive: true });

/* -------------------------------------------------
   STEP 1: DELETE EXISTING WEBP FILES
------------------------------------------------- */
files.forEach((file) => {
  const fullPath = path.join(targetDir, file);

  if (
    fs.existsSync(fullPath) &&
    fs.statSync(fullPath).isFile() &&
    /\.webp$/i.test(fullPath)
  ) {
    fs.unlinkSync(fullPath);
    console.log(`🗑️ Deleted old WebP: ${file}`);
  }
});

/* -------------------------------------------------
   STEP 2: CONVERT IMAGES TO WEBP (1280px inside)
------------------------------------------------- */
files.forEach((file) => {
  const fullPath = path.join(targetDir, file);

  if (
    fs.existsSync(fullPath) &&
    fs.statSync(fullPath).isFile() &&
    /\.(png|jpe?g)$/i.test(fullPath)
  ) {
    const destination = fullPath.replace(/\.(png|jpe?g)$/i, ".webp");

    sharp(fullPath)
      .rotate()
      .resize({
        width: 1280,
        height: 1280,
        fit: "inside",
        withoutEnlargement: true,
      })
      .webp({ quality: 75, effort: 6 })
      .toFile(destination)
      .then(() => console.log(`✅ Created: ${destination}`))
      .catch((err) =>
        console.error(`❌ Error converting ${file}:`, err)
      );
  }
});
