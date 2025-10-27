/* cursor.js — minimalist cursor dots (disabled on touch) */
(function () {
  if ("ontouchstart" in window) return;

  const dot = document.querySelector(".cursor-dot");
  const outline = document.querySelector(".cursor-dot-outline");
  if (!dot || !outline) return;

  let x = window.innerWidth / 2, y = window.innerHeight / 2;
  let ox = x, oy = y;

  const move = (e) => { x = e.clientX; y = e.clientY; dot.style.transform = `translate(${x}px, ${y}px)`; };
  const animate = () => {
    ox += (x - ox) * 0.15;
    oy += (y - oy) * 0.15;
    outline.style.transform = `translate(${ox}px, ${oy}px)`;
    requestAnimationFrame(animate);
  };

  window.addEventListener("mousemove", move);
  animate();
})();