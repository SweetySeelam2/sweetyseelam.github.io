/* research.js — lists hackathons/competitions/articles */
window.PortfolioResearch = (function () {
  const items = [
    {
      title: "ARC Prize 2025 – Reasoning Systems Challenge",
      meta: "Kaggle · 2025",
      link: "https://github.com/SweetySeelam2",
      desc: "Multi-solver framework for abstract reasoning and compositional generalization."
    },
    {
      title: "Red-Teaming Challenge – OpenAI gpt-oss-20b",
      meta: "Kaggle · 2025",
      link: "https://github.com/SweetySeelam2/Red-Teaming-Challenge-OpenAI-gpt-oss-20b",
      desc: "Vulnerability probing & behavior evaluation for open-weight models."
    },
    {
      title: "Tableau Next – Agentic Analytics Dashboard",
      meta: "Devpost · 2025",
      link: "https://github.com/SweetySeelam2/Tableau-Next-Devpost",
      desc: "Agentic KPI concierge merging churn, revenue and CX metrics."
    }
  ];

  const init = () => {
    const container = document.querySelector("[data-research-list]");
    if (!container) return;

    container.innerHTML = items.map(i => `
      <article class="card">
        <h3>${i.title}</h3>
        <p class="meta">${i.meta}</p>
        <p>${i.desc}</p>
        <div class="actions">
          <a class="btn" target="_blank" rel="noopener" href="${i.link}">View</a>
        </div>
      </article>
    `).join("");
  };

  return { init };
})();