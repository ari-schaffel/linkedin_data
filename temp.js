const fetch = require('node-fetch');

const url = 'https://linkedin-data-scrape.firebaseio.com/.json';
// fetch(url).then(response => {
//     return response.json()
// }).then(data =>{
//     console.log(data)
// })


async function getData(url){
    data = await fetch(url)
    json = await data.json();
    return json
}

async function doBoth(){
    names = []
    data = await getData(url)
    for (const property in data){
        names.push(`${data[property]['name']}`)
    }
    // console.log(names)
    return names
}
names = doBoth()
console.log(names)