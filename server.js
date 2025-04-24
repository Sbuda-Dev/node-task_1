const http = require('node:http')
const url = require('url')
const { handleMovieEndpoint } = require('./moviesRequest')
const { handleSeriesEndpoint } = require('./seriesRequest')
const { handleMusicEndpoint } = require('./musicRequest')


const hostname = '127.0.0.1'
const port = 3001

let movies = [
    {'title':'The Matrix',
     'genre':'Action'
    },
    {
        'title':'Titanic',
        'genre':'Romance'
    },
    {
        'title':"Oh Schucks!",
        'genre':'Comedy'
    }
]

let music = [
    {'song':'Remember when it rained',
     'artist':'Dj Sbu'
    },
    {
        'song':'Ndawo Yami',
        'artist':'Zamajobe'
    },
    {
        'song':'Dream',
        'artist':'Boyz II Men'
    }
]

let series = [
    {'title':'How I met your mother',
     'number of seasons':9
    },
    {
        'title':'Modern Family',
        'number of seasons':11
    },
    {
        'title':'Everybody hates Chris',
        'number of seasons':4
    }
]


const server = http.createServer((req,res) => {

    const parsedUrl = url.parse(req.url, true)
    const path = parsedUrl.pathname
    
    if(path === '/movies') {

        handleMovieEndpoint(req,res)
    
    } else if (path === '/music') {

        handleMusicEndpoint(req,res)

    } else if (path === '/series') {

        handleSeriesEndpoint(req, res)
    
    } else {

        res.statusCode = 404
        res.end()

    } 
    

})

server.listen(port, hostname, () => {

    console.log('server is running')    
    

})






