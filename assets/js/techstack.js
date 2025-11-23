/* =========================================================
   techstack.js — renders "At a Glance" chips + skill bars
   Plugs into:
     - <div class="tech-grid" data-tech-grid></div>
     - <div class="skill-bars" data-skill-bars></div>
   Pairs with: assets/css/techstack.css + main.css + research.css
   ========================================================= */

(function () {
  // ---- 1) DATA -----------------------------------------------------------

  // Categories shown as cards with chips
  const TECH_GROUPS = [
    {
      title: "Languages",
      items: ["Python", "SQL", "R"]
    },
    {
      title: "ML / AI",
      items: [
        "scikit-learn",
        "XGBoost",
        "LightGBM",
        "TensorFlow",
        "PyTorch",
        "Time Series (statsmodels, Prophet)"
      ]
    },
    {
      title: "LLMs / NLP",
      items: [
        "Transformers (BERT)",
        "Phi-2",
        "RAG",
        "Prompt Engineering",
        "Tokenization / Embeddings"
      ]
    },
    {
      title: "Explainability & Causal",
      items: [
        "SHAP",
        "LIME",
        "A/B Testing",
        "Uplift Modeling",
        "DoWhy / CausalML"
      ]
    },
    {
      title: "Data & Analytics",
      items: [
        "Pandas",
        "ETL",
        "Data Warehousing",
        "BigQuery (basic)",
        "SQL Analytics"
      ]
    },
    {
      title: "APIs & Apps",
      items: [
        "FastAPI",
        "Flask",
        "Streamlit",
        "Hugging Face Spaces",
        "Railway / Deployment"
      ]
    },
    {
      title: "Visualization",
      items: [
        "Tableau",
        "Power BI",
        "Matplotlib",
        "Plotly",
        "Dashboard Storytelling"
      ]
    },
    {
      title: "Cloud & Dev",
      items: [
        "Git / GitHub",
        "Docker (basic)",
        "CI/CD (GitHub Actions)",
        "GKE (basic)"
      ]
    }
  ];

  // ---- 2) HELPERS --------------------------------------------------------

  const el = (tag, className, html) => {
    const n = document.createElement(tag);
    if (className) n.className = className;
    if (html != null) n.innerHTML = html;
    return n;
  };

  // ---- 3) RENDERERS ------------------------------------------------------

  function renderTechGrid(root) {
    root.innerHTML = ""; // clear

    TECH_GROUPS.forEach(group => {
      const card = el("article", "card tech-card");
      const h3 = el("h3", null, group.title);
      const wrap = el("div", "chip-wrap");

      group.items.forEach(name => {
        const chip = el("span", "chip", name);
        chip.title = name;
        wrap.appendChild(chip);
      });

      card.appendChild(h3);
      card.appendChild(wrap);
      root.appendChild(card);
    });
  }

  function renderSkillBars(root) {
    if (!Array.isArray(SKILLS) || SKILLS.length === 0) return;

    root.innerHTML = ""; // clear

    SKILLS.forEach(s => {
      const row = el("div", "skill");
      const head = el("div", "head");
      head.appendChild(el("span", null, s.name));
      head.appendChild(el("strong", null, s.level));

      const bar = el("div", "bar");
      const fill = el("span");
      const pct = Math.max(0, Math.min(100, s.pct));
      fill.style.setProperty("--pct", pct + "%");
      bar.appendChild(fill);

      row.appendChild(head);
      row.appendChild(bar);
      root.appendChild(row);
    });
  }

  // ---- 4) INIT -----------------------------------------------------------

  document.addEventListener("DOMContentLoaded", () => {
    const gridRoot = document.querySelector("[data-tech-grid]");
    const skillsRoot = document.querySelector("[data-skill-bars]");

    if (gridRoot) renderTechGrid(gridRoot);
    if (skillsRoot) renderSkillBars(skillsRoot);
  });
})();