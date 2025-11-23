// assets/js/research.js — fills the "Competitions & Research" grid
window.PortfolioResearch = (function () {
  const items = [
    {
      title: "ARC Prize 2025 – Reasoning Systems Challenge",
      meta: "Kaggle · 2025",
      link: "https://github.com/SweetySeelam2/ARC_Prize_Hackathon",
      img: "assets/images/projects-images/arc-prize-2025.png",
      tags: ["Meta-learning", "Reasoning", "Search"],
      desc: "Multi-solver framework for abstract reasoning and compositional generalization."
    },
    {
      title: "Red-Teaming Challenge – OpenAI gpt-oss-20b",
      meta: "Kaggle · 2025",
      link: "https://github.com/SweetySeelam2/Red-Teaming-Challenge-OpenAI-gpt-oss-20b",
      img: "assets/images/projects-images/Red-Teaming-ossGPT-kaggle.png",
      tags: ["Safety", "Evaluation", "Security"],
      desc: "Vulnerability probing & behavior evaluation for open-weight models."
    },
    {
      title: "Tableau Next – Agentic Analytics Dashboard",
      meta: "Devpost · 2025",
      link: "https://github.com/SweetySeelam2/Tableau-Next-Devpost",
      img: "assets/images/projects-images/Tableau-Next-devpost-hackathon.png",
      tags: ["Agentic", "Dashboards", "KPI"],
      desc: "Agentic KPI concierge merging churn, revenue and CX metrics."
    },
    {
      title: "AlgoFest – Competitive Algorithms",
      meta: "Devpost · 2025",
      link: "https://github.com/SweetySeelam2/AlgoFest-Devpost-Hackathon",
      img: "assets/images/projects-images/AlgoFest.png",
      tags: ["Algorithms"],
      desc: "High-performance algorithmic problem solving with optimized implementations."
    },
    {
      title: "Medi-Hack – Clinical AI & Diagnostics",
      meta: "Devpost · 2025",
      link: "https://github.com/SweetySeelam2/Medi-Hack-Devpost-Hackathon",
      img: "assets/images/projects-images/Medihack-Devpost-hackathon.png",
      tags: ["Healthcare", "AI"],
      desc: "Clinical analytics prototypes with explainability and diagnostic modeling."
    },
    {
      title: "Trojan Horse Hunt – Space Telemetry Security",
      meta: "Kaggle · 2025",
      link: "https://github.com/SweetySeelam2/Trojan-Horse-Hunt-Kaggle-Competition",
      img: "assets/images/projects-images/Trojan-Hunt-Kaggle-Competition.png",
      tags: ["Security", "Time-Series", "ML"],
      desc: "Backdoor and anomaly detection in multi-sensor satellite telemetry streams."
    },
    {
      title: "NeurIPS – Open Polymer Prediction 2025",
      meta: "Kaggle · 2025",
      link: "https://www.kaggle.com/competitions/neurips-open-polymer-prediction-2025",
      img: "assets/images/projects-images/neurlIPS-polymer-hackathon.png",
      tags: ["Materials ML", "Graph ML", "Chemistry"],
      desc: "Predicting polymer properties using graph neural networks and molecular representations."
    },
    {
      title: "Google Code Golf 2025",
      meta: "Kaggle · 2025",
      link: "https://www.kaggle.com/competitions/google-code-golf-2025",
      img: "assets/images/projects-images/google-golf-code-competition.png",
      tags: ["Algorithms", "Optimization", "Programming"],
      desc: "Ultra-compressed algorithmic problem solving focused on minimal code solutions."
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