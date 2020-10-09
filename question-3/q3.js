var fs = require('fs')

const path = './question-3'

const logdir = path + '/logs'


// delete files

for(let i = 0; i < 10; i++){
    fs.unlink(`${logdir}/log${i}.txt`, (err) => {
        if(err){
            console.log(err)
        }
    
        console.log(`delete files...log${i}.txt`)
    })
}
// delete dir
fs.rmdir(logdir, (err) => {
    if (err){
        console.log(err)
    }
})


// create dir
fs.mkdir(logdir, (err) => {
    if(err){
        console.log(err)
    }
})

// create files
for(let i = 0; i < 10; i++){
    let text = `log${i} is created`
    fs.open(`${logdir}/log${i}.txt`, 'w', (err, text) => {
        if (err) {
            console.log(err)
        }
    
        console.log(`log${i}.txt`);
    })
}

