
export function set(id, title, text){
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  let obj = {
    id: id,
    title: title,
    text: text
  }
  notes.push(obj)
  localStorage.setItem("notes", JSON.stringify(notes))
}