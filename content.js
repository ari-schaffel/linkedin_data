// content.js

var class_names_for_linkedin ={'name':'inline t-24 t-black t-normal break-words',
                                'professionalDescription':'mt1 t-18 t-black t-normal',
                                'location':'t-16 t-black t-normal inline-block',
                                'aboutDescription':'lt-line-clamp__raw-line',
                                'companyName':'text-align-left ml2 t-14 t-black t-bold full-width lt-line-clamp lt-line-clamp--multi-line ember-view'
                              };

const url = 'https://linkedin-data-scrape.firebaseio.com/.json';

function getDataFromeLinkedin(dict){
  data = {}
  //gets more for aboutDescription
  try{
  document.getElementsByClassName("lt-line-clamp__more")[0].click()
  }
  catch(err){}
  // iterates over dict to get the data from the page
  var keys = Object.keys(dict);
  for (var i = 0;i<keys.length;i++){
    try{
      data[keys[i]] =document.getElementsByClassName(class_names_for_linkedin[keys[i]])[0].textContent.replace(/<br\s*\/?>/gi,' ').trim();
  }
  catch(err){data[keys[i]]='';console.log("error");console.log(" : ");console.log(keys[i])}
  }
  return data
}




async function getData(url){
  data = await fetch(url)
  json = await data.json();
  return json
}


async function checkNameinDB(){
  names = []
  data = await getData(url)
  for (const property in data){
      names.push(`${data[property]['name']}`)
  }
  // console.log(names)
  return names
}



chrome.runtime.onMessage.addListener(


  async function(request, sender, sendResponse) {
    console.log('here')
    names = await checkNameinDB()
    console.log(names)
    if( request.message === "save_data" )   {
      linkedinData = getDataFromeLinkedin(class_names_for_linkedin)
      linkedinData['url'] =window.location.href;
      if (names.includes(linkedinData['name'])){alert('Already Saved')}

      else{
        console.log(data)
        $.post('https://linkedin-data-scrape.firebaseio.com/.json',   JSON.stringify(linkedinData),   function () {     alert("success");   } )
        console.log('Data Saved');
      }

      
}
  }
);
// https://linkedin-data-scrape.firebaseio.com/

// $.post('https://linkedin-data-scrape.firebaseio.com/.json',   JSON.stringify(params),   function () {     alert("success");   } );