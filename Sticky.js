var main = document.getElementById("main");
var btn = document.getElementById("btn")
var nt = document.getElementsByClassName("nt")
var stickybutton = document.getElementById("creatnote")
var title = document.getElementById("title")
var text = document.getElementById("text")
var form = document.getElementsByClassName("form")
// const cnt ={};

let isDragging = false;
let dragTarget;
let lastOffsetX = 0;
const notes = JSON.parse(localStorage.getItem("notes")) || [];
let lastOffsetY = 0;
console.log(notes)

function dlt(id){
  // console.log(id);
  const index = notes.findIndex(item => item.id == id)
  // console.log(index)
  if(index == -1) return;
  notes.splice(index,1)
  localStorage.setItem("notes", JSON.stringify(notes))
  // xdlt.forEach(() => {

  // })
}
// var cnt = {};
// document.addEventListener("DOMContentLoaded",function(){
  stickybutton.addEventListener("click", display)
// })
 


// document.addEventListener("DOMContentLoaded",function(){
//   nt.forEach(() => {
//     for(var j = 0; j < nt.length; j++){
//       if (nt[j].childNode.innerHTML == "") {
//         nt[j].remove()
//       }
//     }
    
//   })
// })
function CreatNote(id, title, text){
  // var title = title.value;
  // var text = text.value;

  var ele = document.createElement("div");
  var h3 = document.createElement("h3");
  var p = document.createElement("p");
  var dltbutton = document.createElement("i");
  dltbutton.classList.add("fa-solid", "fa-xmark","delete")
  dltbutton.setAttribute("id",id)
  const htmlh3 = title;
  const htmlp = text;
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
      })
    }
    
   
    // deletenote(id)
  }
  function clearform(){
    title.value="";
    text.value = ""
  }
  function position(note){
    note.style.left =
    window.innerWidth / 2 -
    note.clientWidth / 2 +
    (+200 + Math.round(Math.random() * 300)) +
    'px';
    note.style.top =
    window.innerHeight / 2 -
    note.clientHeight / 2 +
    (-100 + Math.round(Math.random() * 300)) +
    'px';
  }
  // function deletenote(id) {
  //   let xdlt = document.querySelectorAll(".fa-solid")
  //   xdlt.forEach(dnote => {
  //     dnote.removeEventListener("click",dlt, false);
  //     dnote.addEventListener("click",dlt(id));
  //   });
  // }
function drag(e) {
  if ((!isDragging)) return;
  dragTarget.style.left = e.clientX - lastOffsetX + 'px';
  dragTarget.style.top = e.clientY - lastOffsetY + 'px';
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
  
function display(){
  // const notes = get()
  if(title.value == "" || text.value == ""){
    alert("Title and Text cannot be empty");
  } else {
    const cnt = {
      id: Math.floor(Math.random() * 100000),
      title : title.value,
      text : text.value
    } 
    CreatNote(cnt.id, cnt.title, cnt.text)
    notes.push(cnt);
    set(notes)
  }    
  }
  // function click(){
    //     for (let i = 0; i < main.children.length; i++) {
//         main.children[i].addEventListener("click", function(e){
  //             e.stopPropagation()
  //         })
//     }
// }
// function get(){
//   return ;
// }
function set(notes){
    localStorage.setItem("notes", JSON.stringify(notes))
    console.log(notes)
    // window.localStorage.clear();
  }
  displayNotes()
function displayNotes(){
  notes.forEach(item =>{
    CreatNote(item.id,item.title,item.text)
  })
}

  