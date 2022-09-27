import { set } from "./set.js";
import { position } from "./noteposition.js";
import { dlt } from "./dlt.js";
export function createNote(id,title,text){
  var ele = document.createElement("div");
  var h3 = document.createElement("h3");
  var p = document.createElement("p");
  var dltbutton = document.createElement("i");
  dltbutton.classList.add("fa-solid", "fa-xmark","delete")
  dltbutton.setAttribute("id",id)
  const htmlh3 = change(title);
  const htmlp = change(text);
    h3.innerHTML = htmlh3;
    // h3.value = htmlh3;
    p.innerHTML = htmlp;
    ele.classList.add("drag","nt");
    ele.append(dltbutton)
    ele.append(h3)
    ele.append(p)
    main.appendChild(ele);
    position(ele);
    clearform()
    let xdlt = document.querySelectorAll(".delete")
    // console.log(xdlt.length)
    for (let i = 0; i < xdlt.length; i++) {
      xdlt[i].addEventListener("click", function(){
        dlt(xdlt[i].getAttribute("id"))
        this.parentNode.remove()
        // console.log("Delete Click")
      })
    }
    // set(id,title,text)
}
function clearform(){
  title.value="";
  text.value = ""
}
function change(val) {
  return val
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
}
// function position(note){
//   note.style.left =
//   window.innerWidth / 2 -
//   note.clientWidth / 2 +
//   (+200 + Math.round(Math.random() * 300)) +
//   'px';
//   note.style.top =
//   window.innerHeight / 2 -
//   note.clientHeight / 2 +
//   (-100 + Math.round(Math.random() * 300)) +
//   'px';
// }