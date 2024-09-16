//todo with dom
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");
btn.addEventListener("click", function() {
    let item = document.createElement("li");
    item.innerText = inp.value;
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    item.appendChild(delBtn);
    ul.appendChild(item);
    inp.value = "";
})
//event bubbling and delegation
ul.addEventListener("click", function(event) {
    if(event.target.nodeName == "BUTTON") { //delete the item when clicking on the button only and not on the item text
        let listItem = event.target.parentElement;
        console.log(listItem);
        listItem.remove();
        console.log("delete");
    }
});