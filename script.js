var list = document.getElementsByTagName("li");
var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

buildList();

// builds the initial list for pre-existing items
function buildList() {
    for (item of list) {
        createListListener(item);
        createDelButton(item);
    }
}

function createDelButton(listElement) {
    var btn = document.createElement("button");
    btn.appendChild(document.createTextNode("Delete"));
    btn.onclick = function(event) {
        event.target.parentNode.remove()
    };
    listElement.appendChild(btn);
}

// this function takes a list element and assigns it a listener
function createListListener(listElement) {
    if (listElement.tagName === "LI") { //check if passed argument is a list element
        listElement.addEventListener("click", function(event) {
            if (event.target.tagName === "LI") { // only apply strike-through if target is a list item
                event.target.classList.toggle("done"); // apply the class ".done" to selected list item
            }
        });
    } else {
        console.log("Element is not a list element");
    }
}

// every new list element is assigned a strike-through listener and delete button
function createListElement() {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li);
    input.value = "";
    createListListener(li);
    createDelButton(li);
}

function addListAfterClick() {
    if (input.value.length > 0) {
        createListElement();
    }
}

function addListAfterKeypress(event) {
    if (input.value.length > 0 && event.keyCode === 13) {
        createListElement();
    }
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);