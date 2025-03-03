// Module
// CommonJS, every file is module (by default)

// Built-in Modules

// - OS
// - Path
// - FS
// - HTTP

const os = require("os");
const user = os.userInfo();
// Usage

console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Total Memory:", os.totalmem() / (1024 * 1024 * 1024)); // in GB
console.log("Free Memory:", os.freemem() / (1024 * 1024 * 1024)); // in GB
console.log("CPU Cores:", os.cpus().length);

console.log(`User Info: ${user.username} - ${user.email}`);
console.log(`The System UpTime is : ${os.uptime()} seconds`);
