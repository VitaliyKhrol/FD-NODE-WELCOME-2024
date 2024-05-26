const fc = require ('fs').promises;

const promice = fc.readFile('./text.txt', {encoding:'utf8'})
.then (promiseValue =>{
    console.log(promiseValue)
})


