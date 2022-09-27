
 export function dlt(id){
  // console.log(id);
const notes = JSON.parse(localStorage.getItem("notes")) || [];

  const index = notes.findIndex(item => item.id == id)
  // console.log(index)
  if(index == -1) return;
  notes.splice(index,1)
  localStorage.setItem("notes", JSON.stringify(notes))
  // xdlt.forEach(() => {

  // })
}