const os = require('os');

const userInfo = os.userInfo();
console.log(userInfo);

console.log(`Syste up time is ${os.uptime()}`);

const systemInfo = {
 name: os.type(),
 version: os.version(),
 totalMem: os.totalmem(),
 freemem: os.freemem(),
}

console.log(systemInfo);