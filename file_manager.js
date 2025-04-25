const { log } = require('node:console')
const fs = require('node:fs')
const { open, readFile, appendFile, readFileSync } = require('node:fs')

const FILE_NAME = 'database.json'

const createCollections = () => {

    readfile(FILE_NAME, 'utf8', (err, data) =>{

        console.log(data)
        const dataCollection = {

            music: [],
            series: [],
            movies: []


        }

        appendFile(FILE_NAME, JSON.stringify(dataCollection), err => {

            if (err) throw err
            console.log("Collection created")
        })
    })
}

const createFile = () => {

    open (FILE_NAME, 'wx', (err, fd) => {

        if (err) {

            if (err.code === "EXIST") {

                console.log('File already exists.')
                return
            }
        } else {

            console.log("Creating collections")
            createCollections()
        }
    })
}

exports.getMusic = async() =>{

    const data = readFileSync(FILE_NAME)
    console.log({data})
    const jsonData = JSON.parse(data)
    return jsonData.music

}

exports.findSong = async(songId) => {

    const data = readFileSync(FILE_NAME)
    const jsonData = JSON.parse(data)
    return jsonData.music.filter(song => song.id === songId)
}

exports.addMusic = async(song, artist) => {

    readFile(FILE_NAME, 'utf8', (err, data) => {

        console.log({data})
        const jsonData = JSON.parse(data)
        jsonData.music.push({
            song:song, 
            artist:artist})
    })

    writeFile(FILE_NAME, JSON.stringify(jsonData), (err => {

        if (err) throw err
        console.log("Updated")
    }))
}

exports.getMovies = async(movieID) =>{

    const data = readFileSync(FILE_NAME)
    console.log({data})
    const jsonData = JSON.parse(data)
    return jsonData

}

exports.getMovie = async(movieId) => {

    const data = readFileSync(FILE_NAME)
    const jsonData = JSON.parse(data)
    return jsonData.movies.filter(movie => movie.id === movieId)
}

exports.addMovie = async(title, genre) => {

    readFile(FILE_NAME, 'utf8', (err, data) => {

        const jsonData = JSON.parse(data)
        jsonData.movies.push({
            title:tile,
            genre:genre})
    })

    writeFile(FILE_NAME, JSON.stringify(jsonData), (err => {

        if (err) throw err
        console.log("Updated")
    }))
}

exports.getSeries = async() =>{

    const data = readFileSync(FILE_NAME)
    console.log({data})
    const jsonData = JSON.parse(data)
    return jsonData.series

}

exports.findSeries = async(seriesId) => {

    const data = readFileSync(FILE_NAME)
    const jsonData = JSON.parse(data)
    return jsonData.series.filter(story => story.id == seriesId) 
}

exports.addSeries = async(title, numberOfSeasons) => {

    readFile(FILE_NAME, 'utf8', (err, data) => {

        const jsonData = JSON.parse(data)
        jsonData.series.push({
            title:title, 
            numberOfSeasons:numberOfSeasons})
    })

    writeFile(FILE_NAME, JSON.stringify(jsonData), (err => {

        if (err) throw err
        console.log("Updated")
    }))
}

exports.deleteSeries = async(seriesId) => {

    const data = readFileSync(FILE_NAME)
    const jsonData = JSON.parse(data)
    jsonData.series = jsonData.series.filter(story => story.id !== seriesId)

}