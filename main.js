const chalk = require('chalk');
const https = require('https')

module.exports = {
  halo: (str) => {
    console.log(`${chalk.white('halo ')}${chalk.green(str)}`);
  },

  cekIP: () => {
    // ini lookup ke domain saya, buat return IPv4
    https.get('https://sqlite.coollabs.work/', res => {
      let data = ""
      res.on('data', chunk => data+=chunk)
      res.on('end', () => {
        console.log('ip anda:', chalk.yellow(data))
      })
    })
  }
}