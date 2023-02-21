const fs = require('fs')
const http = require('http')
// const { text } = require('node:stream/consumers')

// const textIn = fs.readFileSync('./txt/input.txt', 'utf-8')



// console.log(textIn)


// const textOut = `this is what we know about the avocado ${textIn}\n Created on ${Date.now()}` 
// fs.writeFileSync('./txt/output.txt', textOut)

// console.log('File written')

const server= http.createServer((req, res) => {
	res.end('hello from the server')
})

server.listen(8000, '127.0.0.1', () => {
	console.log('listening to requests on port 8000')
})