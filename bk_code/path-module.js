// Module
// CommonJS, every file is module (by default)

// Built-in Modules

// - OS
// - Path
// - FS
// - HTTP

const path = require("path");

console.log(path.sep);

const filePath = path.join("/content", "subfolder", "text.txt");
console.log(filePath);

const baseName = path.basename(filePath);
console.log(baseName);

const absolute = path.resolve(__dirname, "content", "subfolder", "text.txt");
console.log(absolute);
