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
                    data: data_to_csv
                });

                if (csv == null) return;

                filename = 'export.csv';

                if (!csv.match(/^data:text\/csv/i)) {
                    csv = 'data:text/csv;charset=utf-8,' + csv;
                }
                data = encodeURI(csv);
                console.log("here1");
                link = document.createElement('a');
                link.setAttribute('href', data);
                link.setAttribute('download', filename);
                link.click();
            }

chrome.runtime.onMessage.addListener(


  function(request, sender, sendResponse) {
    if (request.message === "download_data"){
      console.log("here")
      data_to_csv = JSON.parse(localStorage.getItem("data_to_save"));
      console.log(data_to_csv);
      hope1 = downloadCSV(data_to_csv);
      localStorage.removeItem('data_to_save');
      var emptyData = [];
                                            };
    if( request.message === "save_data" )   {
      var emptyData = [];
      data1 = printNames(class_names_for_linkedin)
      data1['url'] =window.location.href;
      emptyData.push(data1);
      // console.log(emptyData);
      console.log(data1)
      try{
      oldData = JSON.parse(localStorage.getItem('data_to_save'));
      oldData.push(data1);
      localStorage.setItem('data_to_save',JSON.stringify(oldData));
         }
      catch(err){console.log("starting here");localStorage.setItem('data_to_save',JSON.stringify(emptyData))}


      console.log('Data Saved');
                                            }
  }
);
