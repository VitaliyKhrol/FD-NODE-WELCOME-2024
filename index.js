const fc = require ('fs').promises;

const textPromise = fc.readFile('text.txt', 'utf-8');

const userDataPromise = fc.readFile('./userData.json', 'utf-8');

Promise.all([textPromise, userDataPromise])
    .then(([textData, userData]) => {
        const obj = JSON.parse(userData);
        const fullName = `Hello, ${obj.firstName} ${obj.lastName} ${textData}`;
        return fc.writeFile('text1.txt', fullName);
    })
    .then(() => {
        console.log('Содержимое успешно записано в файл text1.txt');
    })
    .catch((error) => {
        console.error('Произошла ошибка:', error);
    });