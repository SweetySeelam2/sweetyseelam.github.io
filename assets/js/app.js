/* app.js — site boot + utilities */
(function () {
  // 1) remove preloader once page assets are ready
  window.addEventListener("load", () => {
    const loader = document.querySelector(".loader-container");
    if (loader) loader.classList.add("is-done");
    setTimeout(() => loader && loader.remove(), 400);
  });

  // 2) sticky nav active-state on scroll
  const setActiveNav = () => {
    const links = document.querySelectorAll(".navbar a[href^='#'], .nav a[href^='#']");
    const sections = [...document.querySelectorAll("section[id]")];
    const y = window.scrollY + 120;
    let current = null;
    for (const s of sections) if (y >= s.offsetTop) current = s.id;
    links.forEach(a => {
      if (!a.hash) return;
      a.classList.toggle("active", a.hash.replace("#", "") === current);
    });
  };
  window.addEventListener("scroll", setActiveNav);
  setActiveNav();

  // 3) smooth anchors
  document.addEventListener("click", (e) => {
    const a = e.target.closest("a[href^='#']");
    if (!a) return;
    const el = document.querySelector(a.getAttribute("href"));
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });

  // 4) external links new tab + rel
  document.querySelectorAll("a[target='_blank']").forEach(a => {
    a.rel = "noopener noreferrer";
  });

  // 5) guard: init page modules if present
  if (window.PortfolioProjects) window.PortfolioProjects.init();
  if (window.PortfolioExperience) window.PortfolioExperience.init();
  if (window.PortfolioEducation) window.PortfolioEducation.init();
  if (window.PortfolioResearch) window.PortfolioResearch.init();
  if (window.TechStack) window.TechStack.init();
})();