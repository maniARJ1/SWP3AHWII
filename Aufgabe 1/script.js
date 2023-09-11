"use strict";
/*
const ul = document.getElementById("meineUL");

function addElement() {
    const li = document.createElement("li");
    li.innerHTML = "Neues Element";
    ul.appendChild(li);
}
*/


function addElement() {

    
let text = document.getElementById("text");
const textInput = text.value;

let ul = document.getElementById("ul");
const li = document.createElement("li");

li.appendChild(document.createTextNode(textInput));
ul.appendChild(li);
text.value = "";
}

  