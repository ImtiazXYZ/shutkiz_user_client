import sharp from "sharp";
import fs from "fs";  
import path from "path";

const inputDir = "./public/sliders";
const outputDir = "./public/sliders-optimized";

console.log("Optimizing images...");
console.log(`Input directory: ${inputDir}`);
console.log(`Output directory: ${outputDir}`);

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/)) {
    sharp(path.join(inputDir, file))
      .resize(1400) // resize width, auto height
      .webp({ quality: 82 })
      .toFile(path.join(outputDir, file.split(".")[0] + ".webp"))
      .then(() => console.log(`${file} optimized`))
      .catch(err => console.error(err));
  }
});