const http = require('node:http')
const url = require ('url')
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

const handleMusicEndpoint = (req,res) => {

    if(req.method === 'GET') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({music:music}))

    } else if (req.method === 'POST') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'created', music:music}))

    } else if (req.method === 'PUT') {

        music.push = {'song':'Hometown', 'artist':'Adele'}
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'updated', music:music}))
    
    } else if (req.method === 'DELETE') {

        music.splice(0,1)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'deleted', music:music}))
    }

}

const handleSeriesEndpoint = (req,res) => {

    if(req.method === 'GET') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({series:series}))

    } else if (req.method === 'POST') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'created', series:series}))

    } else if (req.method === 'PUT') {

        series.push = {'tile':'Friends', 'number of seasons':10}
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'updated', series:series}))
    
    } else if (req.method === 'DELETE') {

        series.splice(0,1)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'deleted', series:series}))
    }

}

const handleMovieEndpoint = (req,res) => {

    if(req.method === 'GET') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({movies:movies}))

    } else if (req.method === 'POST') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'created', movies:movies}))

    } else if (req.method === 'PUT') {

        movies.push = {'tile':'The Vow', 'genre':'Drama'}
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'updated', movies:movies}))
    
    } else if (req.method === 'DELETE') {

        movies.splice(0,1)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'deleted', movies:movies}))
    }

}

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






