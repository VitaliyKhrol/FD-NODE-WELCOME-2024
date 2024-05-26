const fc = require ('fs').promises;

const promice = fc.readFile('./text.txt', {encoding:'utf8'})
.then (promiseValue =>{
            const fileText = promiseValue + 'We can read !!!!!!!!!!!!!';
            fc.writeFile('./text2.txt', fileText)
})


