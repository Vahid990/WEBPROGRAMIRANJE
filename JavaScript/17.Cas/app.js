const newP = document.createElement("p")
const txt  = document.createTextNode("This is a child")
newP.appendChild(txt);
const newEl = document.getElementsByid("div1")
newEl.appendChild(newP);