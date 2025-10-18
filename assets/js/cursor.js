
const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

const cursorDot = document.createElement("div");
cursorDot.classList.add("cursor-dot");
document.body.appendChild(cursorDot);

window.addEventListener("mousemove", (e) => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
  cursorDot.style.left = e.clientX + "px";
  cursorDot.style.top = e.clientY + "px";
});
