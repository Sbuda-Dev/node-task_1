const { getMovies, addMovie, getMovie } = require("./file_manager")

exports.handleMovieEndpoint = (req,res, paramId) => {

    if(req.method === 'GET') {

        if(paramId) {

            getMovie(paramId).then(result => {

                console.log(result)
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({movies:result}))
    
            }).catch (err => {
    
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'err'}))
            })

        } else {

            getMovies().then(result => {

                console.log(result)
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({movies:result}))
    
            }).catch (err => {
    
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'err'}))
            })
        }

        
        
    } else if (req.method === 'POST') {

        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'created', movies:movies}))

    } else if (req.method === 'PUT') {

        req.on('data', data => {

            const jsonData = JSON.parse(data)
            const {title, genre} = jsonData

            addMovie(title, genre).then(result => {

                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'updated', movies:result}))
    
            }).catch (err => {
                    
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'err'}))
    
            })
        })

        

        
    } else if (req.method === 'DELETE') {

        movies.splice(0,1)
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'deleted', movies:movies}))
    }

}