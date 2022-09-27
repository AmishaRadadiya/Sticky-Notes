export function position(note){
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