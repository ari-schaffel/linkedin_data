const axios = require('axios')
const fetch = require("node-fetch");
// axios.post('http://127.0.0.1:8000/backend/',
// {
//        "created": "2020-03-24T21:49:32.911506Z",
//        "name": "Hello WOrld",
//        "url": "https://www.linkedin.com/in/jackbutcher/#",
//        "location": "Greater New York City Area",
//        "about_description": "",
//        "company_name": "Opponent",
//        "professional_description": "Founder. Visualize Value, Opponent."

//    })

async function getData(url){
       data = await fetch(url)
       json = await data.json();
       return (json)
     }
const url1 = 'http://127.0.0.1:8000/backend/';
async function checkNameinDB(){
       names = []
       data = await getData(url1)
       for (const property in data){
           names.push(`${data[property]['name']}`)
       }
       // console.log(names)
       return names
     }
async function getNames(){   
names = await checkNameinDB()
console.log(names)
}
getNames()