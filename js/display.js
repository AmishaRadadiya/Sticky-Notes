import { createNote } from "./creat.js";
// import { set } from "./set.js";
export function displayNotes(notes){
// let notes = JSON.parse(localStorage.getItem("notes")) || []
  
  notes.forEach(el => {
    createNote(el.id,el.title,el.text)    
    // set(el.id,el.title,el.text)

  });
}
