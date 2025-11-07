// assets/js/research.js — fills the "Competitions & Research" grid
window.PortfolioResearch = (function () {
  const items = [
    {
      title: "ARC Prize 2025 – Reasoning Systems Challenge",
      meta: "Kaggle · 2025",
      link: "https://github.com/SweetySeelam2/ARC_Prize_Hackathon",
      img: "assets/images/projects-images/arc-prize.png",
      tags: ["Meta-learning", "Reasoning", "Search"],
      desc: "Multi-solver framework for abstract reasoning and compositional generalization."
    },
    {
      title: "Red-Teaming Challenge – OpenAI gpt-oss-20b",
      meta: "Kaggle · 2025",
      link: "https://github.com/SweetySeelam2/Red-Teaming-Challenge-OpenAI-gpt-oss-20b",
      img: "assets/images/projects-images/red-team.png",
      tags: ["Safety", "Evaluation", "Security"],
      desc: "Vulnerability probing & behavior evaluation for open-weight models."
    },
    {
      title: "Tableau Next – Agentic Analytics Dashboard",
      meta: "Devpost · 2025",
      link: "https://github.com/SweetySeelam2/Tableau-Next-Devpost",
      img: "assets/images/projects-images/tableau-next.png",
      tags: ["Agentic", "Dashboards", "KPI"],
      desc: "Agentic KPI concierge merging churn, revenue and CX metrics."
    }
  ];

  const chip = (t) => `<span class="chip">${t}</span>`;

  const init = () => {
    const container = document.querySelector("[data-research-list]");
    if (!container) return;

    container.innerHTML = items.map(i => `
      <article class="card">
        ${i.img ? `<img src="${i.img}" alt="${i.title}">` : ""}
        <h3>${i.title}</h3>
        <p class="meta">${i.meta}</p>
        <p>${i.desc}</p>
        ${i.tags?.length ? `<div class="tag-row">${i.tags.map(chip).join("")}</div>` : ""}
        <div class="actions">
          <a class="btn small" target="_blank" rel="noopener" href="${i.link}">View</a>
        </div>
      </article>
    `).join("");
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", () => {
  window.PortfolioResearch?.init?.();
});