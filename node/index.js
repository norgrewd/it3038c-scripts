const os = require('os');
const express = require('express');

const app = express();

app.get('/', (req, res) => {
  const systemInfo = [
    `IP Address: ${getIpAddress()}`,
    `Computer Name: ${os.hostname()}`,
    `Total Memory: ${formatBytes(os.totalmem())}`,
    `Free Memory: ${formatBytes(os.freemem())}`,
    `CPU Cores: ${os.cpus().length}`,
    `Uptime: ${formatUptime(os.uptime())}`,
  ];
  res.send(systemInfo.join('\n') + '\n');
});

function getIpAddress() {
  const ifaces = os.networkInterfaces();
  let ipAddress = '';
  Object.keys(ifaces).forEach((ifname) => {
    ifaces[ifname].forEach((iface) => {
      if (iface.family === 'IPv4' && !iface.internal) {
        ipAddress = iface.address;
      }
    });
  });
  return ipAddress;
}

function formatBytes(bytes) {
  const units = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
  let size = bytes;
  let i = 0;
  while (size >= 1024) {
    size /= 1024;
    i++;
  }
  return `${size.toFixed(2)} ${units[i]}`;
}

function formatUptime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secondsRemainder = seconds % 60;
  return `${hours}h ${minutes}m ${secondsRemainder}s`;
}

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
