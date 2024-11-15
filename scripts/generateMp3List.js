const fs = require('fs');
const path = require('path');

const voicesDir = path.join(__dirname, '../public/voices');
const outputFile = path.join(__dirname, '../src/mp3FileList.json');

function getMp3Files(dir) {
  let mp3Files = [];
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const fullPath = path.join(dir, file);
    const relativePath = path.relative(path.join(__dirname, '../public'), fullPath);
    if (fs.statSync(fullPath).isDirectory()) {
      mp3Files = mp3Files.concat(getMp3Files(fullPath));
    } else if (path.extname(fullPath) === '.mp3') {
      mp3Files.push('/' + relativePath.replace(/\\/g, '/'));
    }
  });
  return mp3Files;
}

const mp3List = getMp3Files(voicesDir);

fs.writeFileSync(outputFile, JSON.stringify(mp3List, null, 2));
console.log('MP3 list generated!');
