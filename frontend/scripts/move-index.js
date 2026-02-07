import fs from 'fs';
import path from 'path';

const distDir = path.resolve('dist');
const source = path.join(distDir, 'public', 'index.html');
const dest = path.join(distDir, 'index.html');

if (fs.existsSync(source)) {
    fs.renameSync(source, dest);
    console.log('Moved dist/public/index.html -> dist/index.html');
    // Optional: cleanup
    // fs.rmdirSync(path.join(distDir, 'public'));
} else {
    console.error('Source index.html not found: ' + source);
    process.exit(1);
}
