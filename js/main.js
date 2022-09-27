import { createNote } from "./creat.js";
import { displayNotes } from "./display.js";
import {set} from "./set.js";
// import {drag} from "./darg.js"
let isDragging = false;
let dragTarget;
let lastOffsetX = 0;
let lastOffsetY = 0;
let notes = JSON.parse(localStorage.getItem("notes")) || []
var stickybutton = document.getElementById("creatnote")
stickybutton.addEventListener("click", function(){
  var title = document.getElementById("title").value
  var text = document.getElementById("text").value
  var id =  Math.floor(Math.random() * 100000)
  if(title === "" || text === ""){
    alert();
  }
  else {
    createNote(id,title,text);
    set(id,title,text);
// displayNotes(notes)
    // position(ele);
  }
})
displayNotes(notes)

function drag(e) {
  if ((!isDragging)) return;
  dragTarget.style.left = e.clientX - lastOffsetX + 'px';
  dragTarget.style.top = e.clientY - lastOffsetY + 'px';
  // console.log("drag!!!!!!!!!!!!!!!!!!!");
}
window.addEventListener('mousedown', e => {
  if (!e.target.classList.contains('drag')) {
    return;
  }
  dragTarget = e.target;
    dragTarget.parentNode.append(dragTarget);
    lastOffsetX = e.offsetX;
    lastOffsetY = e.offsetY;
    isDragging = true;
  });
  window.addEventListener('mousemove', drag);
  window.addEventListener('mouseup', () => (isDragging = false));
