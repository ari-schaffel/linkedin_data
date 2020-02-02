// content.js
var class_names_for_linkedin ={'name':'inline t-24 t-black t-normal break-words',
                                'professionalDescription':'mt1 t-18 t-black t-normal',
                                'location':'t-16 t-black t-normal inline-block',
                                'aboutDescription':'lt-line-clamp__raw-line',
                                'companyName':'text-align-left ml2 t-14 t-black t-bold full-width lt-line-clamp lt-line-clamp--multi-line ember-view'
                              };

function printNames(dict){
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
      // console.log(class_names_for_linkedin[keys[i]]);console.log(i);
      data[keys[i]] =document.getElementsByClassName(class_names_for_linkedin[keys[i]])[0].textContent.replace(/<br\s*\/?>/gi,' ').trim();
    // console.log(document.getElementsByClassName(class_names_for_linkedin[keys[i]])[0].textContent)
  }
  catch(err){data[keys[i]]='';console.log("error");console.log(" : ");console.log(keys[i])}
  }
  return data
}



var stockData = [
        {
            Symbol: "AAPL",
            Company: "Apple Inc.",
            Price: 132.54
        },
        {
            Symbol: "INTC",
            Company: "Intel Corporation",
            Price: 33.45
        },
        {
            Symbol: "GOOG",
            Company: "Google Inc",
            Price: 554.52
        },
    ];
var emptyData = [];

function convertArrayOfObjectsToCSV(args) {
            var result, ctr, keys, columnDelimiter, lineDelimiter, data;

            data = args.data || null;
            if (data == null || !data.length) {
                return null;
            }

            columnDelimiter = args.columnDelimiter || '|';
            lineDelimiter = args.lineDelimiter || '\n';

            keys = Object.keys(data[0]);

            result = '';
            result += keys.join(columnDelimiter);
            result += lineDelimiter;

            data.forEach(function(item) {
                ctr = 0;
                keys.forEach(function(key) {
                    if (ctr > 0) result += columnDelimiter;

                    result += item[key];
                    ctr++;
                });
                result += lineDelimiter;
            });

            return result;
        }

function downloadCSV(args) {
                var data, filename, link;
                var csv = convertArrayOfObjectsToCSV({
                    data: emptyData
                });

                if (csv == null) return;

                filename = 'export.csv';

                if (!csv.match(/^data:text\/csv/i)) {
                    csv = 'data:text/csv;charset=utf-8,' + csv;
                }
                data = encodeURI(csv);
                console.log("here");
                link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename);
                link.click();
            }

chrome.runtime.onMessage.addListener(


  function(request, sender, sendResponse) {
    if (request.message1 === "hello"){hope1 = downloadCSV(emptyData)};
    if( request.message === "clicked_browser_action" ) {

      data1 = printNames(class_names_for_linkedin)
      emptyData.push(data1);
      console.log(emptyData);


      // hope = convertArrayOfObjectsToCSV();
      // ;
      // This line is new!
      chrome.runtime.sendMessage({"message": "display_data", "data": data});
    }
  }
);
