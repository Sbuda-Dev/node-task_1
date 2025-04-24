exports.handleMovieEndpoint = (req,res) => {

    if(req.method === 'GET') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({movies:movies}))

    } else if (req.method === 'POST') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'created', movies:movies}))

    } else if (req.method === 'PUT') {

        movies[3] = {'tile':'The Vow', 'genre':'Drama'}
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