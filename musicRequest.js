exports.handleMusicEndpoint = (req,res) => {

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