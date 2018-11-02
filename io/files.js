const fs = require('fs')

// define quantidade de threads no pool de i/o
process.env.UV_THREADPOOL_SIZE = 4

let thread = 1
let count = 1
while (count <= 6) {
    console.time(`file${count}`)
    fs.readFile('./movie.mp4', function (err, data) {
        if (err) {
            console.error(err)
        } else {
            console.log('Thread #' + thread++ + ' finish')
        }
        console.timeEnd(`file${thread}`)
    })
    count++
}
