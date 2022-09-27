let isDragging = false;
// let dragTarget;
let lastOffsetX = 0;
let lastOffsetY = 0;

export function drag(e, dragTarget) {
    if ((!isDragging)) return;
    dragTarget.style.left = e.clientX - lastOffsetX + 'px';
    dragTarget.style.top = e.clientY - lastOffsetY + 'px';
  }