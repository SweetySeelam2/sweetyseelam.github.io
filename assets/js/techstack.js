/* =========================================================
   techstack.js — renders your Tech Stack chips + skill bars
   Plugs into:
     - <div class="tech-grid" data-tech-grid></div>
     - <div class="skill-bars" data-skill-bars></div>  (optional)
   Pairs with: assets/css/techstack.css + main.css
   ========================================================= */

(function () {
  // ---- 1) DATA -------------------------------------------------------------

  // Chips grouped by category (what shows in the grid)
  const TECH_GROUPS = [
    {
      title: "Languages",
      items: ["Python", "SQL", "R""]
    },
    {
      title: "ML / AI",
      items: [
        "Scikit-learn",
        "XGBoost",
        "TensorFlow",
        "PyTorch",
        "LightGBM",
        "Time Series (statsmodels, prophet)"
      ]
    },
    {
      title: "LLMs / NLP",
      items: [
        "Transformers (BERT)",
        "Llama 3",
        "Phi-2",
        "RAG",
        "Prompt Engineering",
        "SHAP / LIME for text"
      ]
    },
    {
      title: "Explainability & Causal",
      items: ["SHAP", "LIME", "A/B Testing", "Uplift Modeling", "DoWhy / CausalML"]
    },
    {
      title: "Data / Engineering",
      items: ["ETL", "Pandas", "BigQuery (basic)"]
    },
    {
      title: "APIs / Apps",
      items: ["FastAPI", "Flask", "Streamlit", "Railway", "Hugging Face Spaces"]
    },
    {
      title: "Visualization",
      items: ["Tableau", "Power BI", "Matplotlib", "Plotly", "Seaborn"]
    },
    {
      title: "Cloud & Dev",
      items: ["Git/GitHub", "GKE (basic)", "Docker (basic)", "CI/CD (GitHub Actions)"]
    }
  ];

  // ---- 2) HELPERS ----------------------------------------------------------

  const el = (tag, className, html) => {
    const n = document.createElement(tag);
    if (className) n.className = className;
    if (html != null) n.innerHTML = html;
    return n;
  };

  // ---- 3) RENDERERS --------------------------------------------------------

  function renderTechGrid(root) {
    root.innerHTML = ""; // clear

    TECH_GROUPS.forEach(group => {
      const card = el("article", "card tech-card");
      const h3 = el("h3", null, group.title);
      const wrap = el("div", "chip-wrap");

      group.items.forEach(name => {
        const chip = el("span", "chip", name);
        chip.title = name; // native tooltip
        wrap.appendChild(chip);
      });

      card.appendChild(h3);
      card.appendChild(wrap);
      root.appendChild(card);
    });
  }

  function renderSkillBars(root) {
    if (!SKILLS || SKILLS.length === 0) return;

    root.innerHTML = ""; // clear
    SKILLS.forEach(s => {
      const row = el("div", "skill");
      const head = el("div", "head");
      head.appendChild(el("span", null, s.name));
      head.appendChild(el("strong", null, s.level));

      const bar = el("div", "bar");
      const fill = el("span");
      // Use CSS custom property for width to enable transitions
      fill.style.setProperty("--pct", `${Math.max(0, Math.min(100, s.pct))}%`);
      bar.appendChild(fill);

      row.appendChild(head);
      row.appendChild(bar);
      root.appendChild(row);
    });
  }

  // ---- 4) INIT -------------------------------------------------------------

  document.addEventListener("DOMContentLoaded", () => {
    const gridRoot = document.querySelector("[data-tech-grid]");
    const skillsRoot = document.querySelector("[data-skill-bars]");

    if (gridRoot) renderTechGrid(gridRoot);
    if (skillsRoot) renderSkillBars(skillsRoot);
  });
})();