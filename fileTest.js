const fs = require('fs')
Reading File
fs.readFile('./abc.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
})


Writing file
fs.writeFile('def.txt', 'Hello World! Hello World!', (err) => {
    if (err) {
        console.log('error...')
    }
    console.log('file wrote')
}
)


if (!fs.existsSync('./d.txt')) {
    fs.writeFile('./d.txt', 'abcdef', (err) => {
        if (err) {
            console.log(err);

        }

    })
} else {
    console.log('file exists')
}

Folder Creation
fs.mkdir('./docs', (err) => {
    if (err) {
        console.log(err)
    }
    console.log('folder created')
})

Folder Deletion
fs.rmdir('./docs', (err) => {
    if (err) { console.log(err) }
    console.log('folder deleted')
})