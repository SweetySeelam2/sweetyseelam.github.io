/* assets/js/design.js — fills UI/UX & Mockups with real visuals */
(function(){
  const UIUX = [
    {
      title:"Marketing A/B – Streamlit UI",
      img:"assets/images/projects-images/ab-testing-conversion-app.png",
      desc:"Clear guardrails + uplift visuals for business users.",
      tags:["Streamlit","UX","A/B"],
      link:{label:"Live App", href:"https://marketingstrategyabtesting-eu4hug4vbgnflcdfxxdcyh.streamlit.app/"}
    },
    {
      title:"Causal Dashboard",
      img:"assets/images/projects-images/causal-inference-dashboard.png",
      desc:"Uplift segments & policy targeting views.",
      tags:["Causal","Uplift","Dashboard"],
      link:{label:"Article", href:"https://medium.com/@sweetyseelam/amazon-prime-campaigns-causal-inference-dashboard-to-maximize-roi-minimize-wasted-spend-8e445b961adf"}
    },
    {
      title:"LLM Recommender – Explain Panel",
      img:"assets/images/projects-images/llm-recommender-app.png",
      desc:"Retrieve→Rank→Explain layout with human-readable reasons.",
      tags:["Recsys","Explainability"],
      link:{label:"Repo", href:"https://github.com/SweetySeelam2/LLM_Recommendation_Amazon"}
    }
  ];

  const MOCKS = [
    {
      title:"Retail Sales BI",
      img:"assets/images/projects-images/retail-sales-bi.png",
      desc:"Executive KPI mock with forecast & drivers.",
      tags:["Power BI","Forecast"],
      link:{label:"Article", href:"https://medium.com/@sweetyseelam/%EF%B8%8F-forecasting-retail-sales-with-power-bi-driving-150k-growth-with-94-7-accuracy-f06a35e4ede8"}
    },
    {
      title:"Netflix Revenue Predictor",
      img:"assets/images/projects-images/revenue-predictor-app.jpg",
      desc:"Title-level ROI forecast mock with SHAP drivers.",
      tags:["XGBoost","SHAP","Analytics"],
      link:{label:"Repo", href:"https://github.com/SweetySeelam2/NetflixRevenuePredictor"}
    }
  ];

  const card = (x) => `
    <article class="card">
      <img src="${x.img}" alt="${x.title}">
      <h3>${x.title}</h3>
      <p>${x.desc}</p>
      ${x.tags?.length ? `<div class="tag-row">${x.tags.map(t=>`<span class="chip">${t}</span>`).join("")}</div>` : ""}
      ${x.link ? `<div class="actions" style="margin-top:.6rem"><a class="btn small" target="_blank" rel="noopener" href="${x.link.href}">${x.link.label}</a></div>` : ""}
    </article>
  `;

  document.addEventListener("DOMContentLoaded", () => {
    const a = document.querySelector("[data-gallery-uiux]");
    const b = document.querySelector("[data-gallery-mockups]");
    if (a) a.innerHTML = UIUX.map(card).join("");
    if (b) b.innerHTML = MOCKS.map(card).join("");
  });
})();