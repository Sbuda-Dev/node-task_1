const { log } = require('node:console')
const fs = require('node:fs')
const { open } = require('node:fs')

const FILE_NAME = 'database.json'

const createFile = () => {

    open (FILE_NAME, 'wx', (err, fd) => {

        if (err) {

            if (err.code === "EXIST") {

                console.log('File already exists.')
            }
        }
    })
}