const http = require('node:http')
const url = require('url')
const { handleMovieEndpoint } = require('./moviesRequest')
const { handleSeriesEndpoint } = require('./seriesRequest')
const { handleMusicEndpoint } = require('./musicRequest')


const hostname = '127.0.0.1'
const port = 3001


const server = http.createServer((req,res) => {

    const parsedUrl = url.parse(req.url, true)
    const urlPath = parsedUrl.pathname

    const urlSegments = urlPath.split('/')
    const path = urlSegments[1]
    const paramId = urlSegments[2]

    
    if(path === '/movies') {

        handleMovieEndpoint(req,res, paramId)
    
    } else if (path === '/music') {

        handleMusicEndpoint(req,res, paramId)

    } else if (path === '/series') {

        handleSeriesEndpoint(req, res, paramId)
    
    } else {

        res.statusCode = 404
        res.end()

    } 
    

})

server.listen(port, hostname, () => {

    console.log('server is running')    
    

})






