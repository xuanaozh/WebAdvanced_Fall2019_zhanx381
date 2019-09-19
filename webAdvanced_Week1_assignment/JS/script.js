console.log("test");



var information = "Hello people";

// alert("Greetings"+ " "+ information);

document.write("<p>"+information+"</p>");

var attributes = ["Blue","Purple","Red","Yellow"];
console.log(attributes[0]);

var myMSG = document.getElementsByClassName('msg');
 
for (var i=0; i<attributes.length;i++){
    // document.write("<p>"+attributes[i] +"</p>")

    for(var i=0;i<myMSG.length ;i++){
        myMSG[i].innerHTML = attributes[i];
    }
}

