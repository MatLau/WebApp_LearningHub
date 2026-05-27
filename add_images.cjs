const fs = require('fs');
const path = require('path');

const contentDir = path.join(__dirname, 'public', 'content');

const imageMap = {
  '01_Introduzione_Normativa': 'intro.png',
  '02_Area_Personale': 'personale.png',
  '03_Area_Alunni': 'alunni.png',
  '04_Protocollo_Archiviazione': 'protocollo.png',
  '05_Contabilita_Acquisti': 'intro.png',
  '06_Progetti_PNRR': 'lab.png',
  '07_Piattaforme_Avanzate': 'intro.png',
  '08_Organizzazione_Scadenze': 'personale.png',
  '09_Laboratorio_Prompt': 'lab.png'
};

const areas = fs.readdirSync(contentDir);

for (const area of areas) {
  const areaPath = path.join(contentDir, area);
  if (!fs.statSync(areaPath).isDirectory() || area === 'images') continue;

  const files = fs.readdirSync(areaPath).filter(f => f.endsWith('.md'));
  const imageName = imageMap[area] || 'intro.png';
  const imgTag = `\n![Immagine Modulo](/content/images/${imageName})\n`;

  for (const file of files) {
    const filePath = path.join(areaPath, file);
    let content = fs.readFileSync(filePath, 'utf-8');

    // Only add if it doesn't have an image tag already
    if (!content.includes('![') && !content.includes('<img')) {
      // Find the first line that is a title
      const lines = content.split('\n');
      if (lines.length > 0 && lines[0].startsWith('# ')) {
        lines.splice(1, 0, imgTag);
        fs.writeFileSync(filePath, lines.join('\n'));
        console.log(`Added image to ${file}`);
      }
    }
  }
}
