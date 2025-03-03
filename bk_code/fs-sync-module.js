// Module
// CommonJS, every file is module (by default)

// Built-in Modules

// - OS
// - Path
// - FS
// - HTTP

const { readFileSync, writeFileSync } = require("fs");

const filePath = "./content/data.txt";

const first = readFileSync(filePath, "utf8");

console.log(first);

writeFileSync(filePath, "Hello, World!", { flags: "a" });

const last = readFileSync(filePath, "utf8");

console.log(last);
