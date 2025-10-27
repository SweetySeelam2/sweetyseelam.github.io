/* dynamicTitle.js — safe rotating words, no truncation */
(function () {
  const el = document.querySelector(".animated-text");
  if (!el) return;

  // words can come from data-words="a, b, c" or child spans
  let words = [];
  const attr = el.getAttribute("data-words");
  if (attr) words = attr.split(",").map(s => s.trim()).filter(Boolean);
  if (!words.length) {
    words = [...el.querySelectorAll("span")].map(s => s.textContent.trim());
  }
  if (!words.length) {
    el.textContent = ""; // nothing to rotate
    return;
  }

  let i = 0;
  const render = () => {
    el.textContent = words[i % words.length];
    i++;
  };
  render();
  setInterval(render, 2200); // rotate every ~2.2s
})();