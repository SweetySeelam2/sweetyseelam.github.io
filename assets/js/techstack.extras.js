/* assets/js/techstack.extras.js — enriches "What I Use" & "Skill Buckets" */
(function(){
  const WHAT_I_USE = [
    {
      title: "Languages",
      img: "assets/images/techstack/languages.png",
      desc: "Python for ML/ETL/apps; SQL for warehousing & analytics; R for stats & coursework; JS for UI glue.",
      tags: ["Python","SQL","R","JavaScript"],
      links: [
        {label:"LLM Recommender", href:"https://github.com/SweetySeelam2/LLM_Recommendation_Amazon"},
        {label:"Netflix Revenue", href:"https://github.com/SweetySeelam2/NetflixRevenuePredictor"}
      ]
    },
    {
      title: "Frameworks",
      img: "assets/images/techstack/frameworks.png",
      desc: "TensorFlow/PyTorch for DL; scikit-learn/XGBoost/LightGBM for tabular; Streamlit/FastAPI for apps.",
      tags: ["TensorFlow","PyTorch","scikit-learn","XGBoost","Streamlit","FastAPI"],
      links: [
        {label:"BERT Sentiment", href:"https://github.com/SweetySeelam2/NLP_SentimentAnalysis"},
        {label:"Fraud App", href:"https://github.com/SweetySeelam2/Fraud_Detection_Analytics"}
      ]
    },
    {
      title: "Libraries",
      img: "assets/images/techstack/libraries.png",
      desc: "Pandas/Polars for data; SHAP/LIME for explainability; DoWhy/EconML for causal inference; Plotly/Matplotlib for viz.",
      tags: ["Pandas","Polars","SHAP","LIME","DoWhy","EconML","Plotly"],
      links: [
        {label:"Causal App", href:"https://github.com/SweetySeelam2/Casual_Inference_streamlit"},
        {label:"A/B + Conversion", href:"https://github.com/SweetySeelam2/Marketing_Strategy_AB_Testing"}
      ]
    },
    {
      title: "Tools",
      img: "assets/images/techstack/tools.png",
      desc: "Tableau/Power BI for BI; Docker/GitHub Actions for delivery; BigQuery/Postgres for data; Hugging Face for demos.",
      tags: ["Tableau","Power BI","Docker","GitHub Actions","BigQuery","PostgreSQL","Hugging Face"],
      links: [
        {label:"Retail Forecast BI", href:"https://medium.com/@sweetyseelam/%EF%B8%8F-forecasting-retail-sales-with-power-bi-driving-150k-growth-with-94-7-accuracy-f06a35e4ede8"},
        {label:"HF Profile", href:"https://huggingface.co/SweetySeelam"}
      ]
    }
  ];

  const SKILL_BUCKETS = [
    {
      title: "Experimentation & Causal",
      img: "assets/images/techstack/causal.png",
      desc: "A/B testing, uplift models, and propensity scoring to drive trustworthy product decisions.",
      tags: ["A/B","Uplift","PSM","DoWhy","EconML"],
      links: [{label:"Prime Causal Impact", href:"https://medium.com/@sweetyseelam/causal-impact-of-amazon-prime-membership-on-customer-behavior-8a48884eea30"}]
    },
    {
      title: "Explainability",
      img: "assets/images/techstack/explainability.png",
      desc: "Model transparency for trust & adoption: SHAP/LIME across tabular, text, and vision.",
      tags: ["SHAP","LIME"],
      links: [{label:"IMDb SHAP", href:"https://medium.com/@sweetyseelam/nlp-sentiment-classification-explainability-with-bert-and-shap-604bc998cee8"}]
    },
    {
      title: "Recommenders",
      img: "assets/images/techstack/recsys.png",
      desc: "Retrieve → Rank → Explain with embeddings and ML ranking for credible suggestions.",
      tags: ["Embeddings","Ranking","LLM"],
      links: [{label:"LLM Recsys", href:"https://github.com/SweetySeelam2/LLM_Recommendation_Amazon"}]
    },
    {
      title: "Computer Vision",
      img: "assets/images/techstack/cv.png",
      desc: "CNNs & transfer learning for classification; LIME-style visual explanations.",
      tags: ["CNN","Transfer Learning"],
      links: [{label:"Product Image CNN", href:"https://github.com/SweetySeelam2/Amazon-CNN-Product-Classification"}]
    }
  ];

  const card = (x) => `
    <article class="card">
      ${x.img ? `<img src="${x.img}" alt="${x.title}">` : ""}
      <h3>${x.title}</h3>
      <p>${x.desc}</p>
      ${x.tags?.length ? `<div class="tag-row">${x.tags.map(t=>`<span class="chip">${t}</span>`).join("")}</div>` : ""}
      ${x.links?.length ? `<div class="actions" style="margin-top:.6rem">${x.links.map(l=>`<a class="btn small" target="_blank" rel="noopener" href="${l.href}">${l.label}</a>`).join("")}</div>` : ""}
    </article>
  `;

  document.addEventListener("DOMContentLoaded", () => {
    const useRoot = document.querySelector("[data-what-i-use]");
    if (useRoot) useRoot.innerHTML = WHAT_I_USE.map(card).join("");
    const bucketRoot = document.querySelector("[data-skill-buckets]");
    if (bucketRoot) bucketRoot.innerHTML = SKILL_BUCKETS.map(card).join("");
  });
})();