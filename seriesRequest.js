const { getSeries, addSeries, findSeries, deleteSeries } = require("./file_manager")

exports.handleSeriesEndpoint = (req,res, paramId) => {

    if(req.method === 'GET') {

        if(paramId) {

            findSeries(paramId).then(result => {

                console.log(result)
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({series:series}))
    
            }).catch (err => {
    
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({series:series}))
            })


        } else {

            getSeries().then(result => {

                console.log(result)
                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({series:series}))
    
            }).catch (err => {
    
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({series:series}))
            })

        }


    } else if (req.method === 'POST') {

        req.on('data', data => {

            const jsonData = JSON.parse(data)
            const {tile, numberOfSeasons} = jsonData

            addSeries(title, numberOfSeasons).then(result => {

                res.statusCode = 200
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'added', series:series}))
        
            }).catch (err => {
    
                res.statusCode = 500
                res.setHeader('Content-Type', 'application/json')
                res.end(JSON.stringify({message:'err', series:series}))
    
            })

        })
    
        
    } else if (req.method === 'PUT') {

        series.push = {'tile':'Friends', 'number of seasons':10}
        res.statusCode = 200
        res.setHeader('Content-Type', 'application/json')
        res.end(JSON.stringify({message:'updated', series:series}))
    
    } else if (req.method === 'DELETE') {

        deleteSeries(paramId).then(result => {

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({message:'deleted', series:result}))

        }).catch (err => {

            res.statusCode = 200
            res.setHeader('Content-Type', 'application/json')
            res.end(JSON.stringify({message:'deleted', series:series}))
        })
        
        
    }

}
