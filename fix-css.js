const fs = require('fs');

let str = fs.readFileSync('src/app/globals.css', 'utf8');

const idx = str.indexOf('@\x00l\x00a\x00y\x00e\x00r');
if (idx !== -1) {
  str = str.substring(0, idx);
}
const idx2 = str.indexOf('@layer base');
if (idx2 !== -1) {
  str = str.substring(0, idx2);
}

const baseLayer = `
@layer base {
  html, body {
    font-family: var(--font-inter, "Inter", sans-serif) !important;
  }
  h1, h2, h3, h4, h5, h6 {
    font-family: var(--font-bricolage, "Bricolage Grotesque", sans-serif) !important;
  }
  button, input, textarea {
    font-family: inherit;
  }
}
`;

fs.writeFileSync('src/app/globals.css', str + baseLayer);
console.log('Successfully fixed and appended base layer!');
