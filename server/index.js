

const server = require('live-server');
const params = {
  host: 'localhost',
  post: 3000,
  open: false,
  root: './client'
}

server.start(params)

// console.log(process.env.LANG);