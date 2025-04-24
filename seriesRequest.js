exports.handleSeriesEndpoint = (req,res) => {

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
