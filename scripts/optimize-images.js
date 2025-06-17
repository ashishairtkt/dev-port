import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { optimize } from 'svgo';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PUBLIC_DIR = path.join(__dirname, '../public');
const IMAGES_DIR = path.join(PUBLIC_DIR, 'images');

async function optimizeSVG(inputPath, outputPath) {
  try {
    const svgContent = fs.readFileSync(inputPath, 'utf8');
    const result = optimize(svgContent, {
      path: inputPath,
      multipass: true,
      plugins: [
        'preset-default',
        'removeDimensions',
        'removeViewBox',
        'sortAttrs'
      ]
    });
    
    fs.writeFileSync(outputPath, result.data);
    console.log(`Optimized SVG: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing SVG ${inputPath}:`, error);
  }
}

async function optimizeImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    // Handle SVG files separately
    if (metadata.format === 'svg') {
      await optimizeSVG(inputPath, outputPath);
      return;
    }

    // Resize if image is too large
    if (metadata.width > 1920) {
      image.resize(1920, null, {
        fit: 'inside',
        withoutEnlargement: true
      });
    }

    // Convert to WebP for better compression
    await image
      .webp({
        quality: 80,
        effort: 6
      })
      .toFile(outputPath.replace(/\.[^.]+$/, '.webp'));

    // Optimize original format
    await image
      .toFormat(metadata.format, {
        quality: 80,
        progressive: true
      })
      .toFile(outputPath);

    console.log(`Optimized: ${path.basename(inputPath)}`);
  } catch (error) {
    console.error(`Error optimizing ${inputPath}:`, error);
  }
}

async function optimizeImages() {
  const files = fs.readdirSync(IMAGES_DIR);

  for (const file of files) {
    const inputPath = path.join(IMAGES_DIR, file);
    const outputPath = path.join(IMAGES_DIR, `optimized-${file}`);

    if (fs.statSync(inputPath).isFile()) {
      await optimizeImage(inputPath, outputPath);
    }
  }
}

optimizeImages().catch(console.error); 