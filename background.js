// background.js

// will this work to allow me to make shortcut?
chrome.commands.onCommand.addListener( function(command) {
  if(command === "save-feature"){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { "message": "save_data" });
      });
  }
});


// will this work to allow me to make shortcut?
chrome.commands.onCommand.addListener( function(command) {
  if(command === "toggle-feature"){
      chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
          chrome.tabs.sendMessage(tabs[0].id, { "message": "download_data" });
      });
  }
});
