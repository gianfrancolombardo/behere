import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import QRCode from 'qrcode';

const __dirname = dirname(fileURLToPath(import.meta.url));
const repoRoot = join(__dirname, '../..');
const campaignsPath = join(repoRoot, 'head/ops/qr/campaigns.json');
const outputDir = join(repoRoot, 'head/ops/qr');

const campaigns = JSON.parse(readFileSync(campaignsPath, 'utf8'));

mkdirSync(outputDir, { recursive: true });

const qrOptions = {
  width: 512,
  margin: 2,
  errorCorrectionLevel: 'M',
  color: {
    dark: '#0a0a0a',
    light: '#ffffff',
  },
};

for (const campaign of campaigns) {
  const pngPath = join(outputDir, `${campaign.id}.png`);
  const svgPath = join(outputDir, `${campaign.id}.svg`);

  await QRCode.toFile(pngPath, campaign.url, qrOptions);
  await QRCode.toString(campaign.url, { ...qrOptions, type: 'svg' }).then((svg) => {
    writeFileSync(svgPath, svg, 'utf8');
  });

  console.log(`Generated ${campaign.id}:`);
  console.log(`  PNG: ${pngPath}`);
  console.log(`  SVG: ${svgPath}`);
  console.log(`  URL: ${campaign.url}`);
}

console.log(`\nDone — ${campaigns.length} QR campaigns in ${outputDir}`);
