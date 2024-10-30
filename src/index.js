import dotenv from 'dotenv'
import logger from 'winston'
import express, { json } from 'express'

logger.configure({
  level: process.env.LOG_LEVEL || 'info',
  format: logger.format.cli(),
  transports: [new logger.transports.Console()],
})

// Config
dotenv.config()

const server = express()

//server.use(json())

server.set('view engine', 'ejs');
//server.use(express.static(__dirname + '/public'));
server.get('/', function(req, res) {
  res.render('pages/index');
});

server.get('/', async (req, res) => {
    res.json({ status: true, message: "Our node.js app works" })
});

const port = process.env.PORT || 8080
server.listen(port, () => logger.info(`Server listening to ${port}`))
