document.getElementById('inputfile') 
.addEventListener('change', function() { 

const fr=new FileReader(); 
fr.onload=function(){       
var myfileobj = JSON.parse(fr.result);
//     console.log(myfileobj);

const entries = myfileobj.log.entries;
myobj = [];

for (x in entries) {
    
    let myarray = entries[x];
    let url = myarray.request.url;
    var new_url = url.replace('http://','').replace('https://','').split(/[/?#]/)[0];

    myobj[x] = {
        startedDateTime: myarray.startedDateTime,
        timings: myarray.timings,
        serverIPAddress: myarray.serverIPAddress,
        request_method: myarray.request.method,
        request_URL: new_url,
        response_status: myarray.response.status,
        response_status_Text: myarray.response.statusText
        };
        console.log(myobj[x]);
    
    for(y in myarray.request.headers){
        
        let headerName1 = myarray.request.headers[y].name;
        let headerValue1 = myarray.request.headers[y].value;

        if (headerName1 === "content-type")
        {
            myobj[x].Request_content_type = headerValue1;
        }
        else if (headerName1 === "host")
        {
            myobj[x].Request_host = headerValue1;
        }
        else if (headerName1 === "age")
        {
            myobj[x].Request_age = headerValue1;
        }
        else if (headerName1 === "expires")
        {
            myobj[x].Request_expires = headerValue1;
        }
        else if (headerName1 === "pragma")
        {
            myobj[x].Request_pragma = headerValue1;
        }
        else if (headerName1 === "cache-control")
        {
            myobj[x].Request_cache_control = headerValue1;
        }
        else if (headerName1 === "last-modified")
        {
            myobj[x].Request_last_modified = headerValue1;
        }
    }
    
    for(y in myarray.response.headers){
        
        let headerName = myarray.response.headers[y].name;
        let headerValue = myarray.response.headers[y].value;

        if (headerName === "content-type")
        {
            myobj[x].Response_content_type = headerValue;
        }
        else if (headerName === "host")
        {
            myobj[x].Response_host = headerValue;
        }
        else if (headerName === "age")
        {
            myobj[x].Response_age = headerValue;
        }
        else if (headerName === "expires")
        {
            myobj[x].Response_expires = headerValue;
        }
        else if (headerName === "pragma")
        {
            myobj[x].Response_pragma = headerValue;
        }
        else if (headerName === "cache-control")
        {
            myobj[x].Response_cache_control = headerValue;
        }
        else if (headerName === "last-modified")
        {
            myobj[x].Response_last_modified = headerValue;
        }
    }
}
};          
fr.readAsText(this.files[0]);
}) 

//var exportJSON = document.getElementById("exportJSON");

//exportJSON.addEventListener("click",()=>{
function exportJson(el) {
       {
        var data = "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(myobj));
        // what to return in order to show download window?
        el.setAttribute("href", "data:"+data);
        el.setAttribute("download", "data.json");    
        }
      }    