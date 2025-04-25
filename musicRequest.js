const { getMusic, addMusic, findSong } = require("./file_manager")

exports.handleMusicEndpoint = (req,res, paramId) => {

    if(req.method === 'GET') {

        if(paramId) {

            findSong(paramId).then(result => {

                console.log(result)
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({music:result}))
    
            }).catch (err => {
    
                res.statusCode = 500   
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'err'}))
            })


        } else {

            getMusic().then(result => {

                console.log(result)
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({music:result}))
    
            }).catch (err => {
    
                res.statusCode = 500   
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'err'}))
            })
        }
        

    } else if (req.method === 'POST') {

        req.on('data', data => {

            const jsonData = JSON.parse(data)
            const {song, artist} = jsonData

            addMusic(song, artist).then(result => {

                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'created', music:result}))
    
            }).catch (err => {
    
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'err'}))
            })
        })

        
    

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