// content.js
var class_names_for_linkedin ={'name':'inline t-24 t-black t-normal break-words',
                                'professionalDescription':'mt1 t-18 t-black t-normal',
                                'location':'t-16 t-black t-normal inline-block',
                                'aboutDescription':'pv-about__summary-text mt4 t-14 ember-view',
                                'companyName':'text-align-left ml2 t-14 t-black t-bold full-width lt-line-clamp lt-line-clamp--multi-line ember-view'
                              };

function printNames(dict){
  data = {}
  //gets more for aboutDescription
  document.getElementsByClassName("lt-line-clamp__more")[0].click()
  // iterates over dict to get the data from the page
  var keys = Object.keys(dict);
  for (var i = 0;i<keys.length;i++){
    try{
      // console.log(class_names_for_linkedin[keys[i]]);console.log(i);
      data[keys[i]] =document.getElementsByClassName(class_names_for_linkedin[keys[i]])[0].textContent.trim();
    console.log(document.getElementsByClassName(class_names_for_linkedin[keys[i]])[0].textContent)
  }
  catch(err){console.log("error");console.log(" : ");console.log(keys[i])}
  }
  return data
}


chrome.runtime.onMessage.addListener(


  function(request, sender, sendResponse) {
    if( request.message === "clicked_browser_action" ) {

      data = printNames(class_names_for_linkedin)
      // This line is new!
      chrome.runtime.sendMessage({"message": "display_data", "data": data});
    }
  }
);
