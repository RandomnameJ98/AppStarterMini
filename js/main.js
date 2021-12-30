const mainContainer=document.getElementById("main-container");

function starterCheck(){
    
    let jsMessage=document.createElement("P");
    jsMessage.className="sub-text";
    mainContainer.appendChild(jsMessage);
    jsMessage.innerText="main.js runs!";

    let phpMessage=document.createElement("P");
    phpMessage.className="sub-text";
    mainContainer.appendChild(phpMessage);
    let dataToSend=2.75;
    phpMessage.innerText="Making request to main.php... [data sent: "+dataToSend+"]";
    makeRequestWPromise(phpMessage,"data="+dataToSend);
}
starterCheck()

function addNewText(p,text){
    p.appendChild(document.createElement("BR"));
    p.appendChild(document.createTextNode(text));
}

function makeRequestWPromise(p,dataToSend=""){
    
    let promise=new Promise(function(resolve, reject){
    
        let request = new XMLHttpRequest();
        request.open('POST','php/main.php');
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        request.onload = function() {
            if(request.status==200){
                resolve(request.response);
            } 
            else{
                reject(request.status);
            }
        };
        request.send(dataToSend);

    });
    
    promise.then(
        function(value){
            addNewText(p,value);
        },
        function(error){
            addNewText(p,"Server connection error: "+error);
        }
    );
}