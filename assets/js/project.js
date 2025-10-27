/* PATH: assets/js/project.js
   Renders project cards into #projects .grid (home or projects page) */

window.PortfolioProjects = (function () {
  const data = [
    {
      title: "LLM Retrieve–Rank–Explain Recommender",
      meta: "Phi-2 · Llama-3 · SHAP · Streamlit",
      img: "assets/images/llm_recsys.jpg",
      text: "Hybrid recommender with explainable summaries; ~20% increase in user interaction.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/LLM_Recommendation_Amazon" }
      ]
    },
    {
      title: "CancelSense API (Flight Delays/Cancellations)",
      meta: "FastAPI · Railway · Random Forest · SHAP",
      img: "assets/images/cancelsense.jpg",
      text: "Real-time delay/cancel probabilities with interpretable outputs; developer-ready.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/Flight-Cancellation-Delay-Prediction-API" }
      ]
    },
    {
      title: "Fraud Detection with Explainable AI",
      meta: "XGBoost · SHAP · Streamlit",
      img: "assets/images/fraud.jpg",
      text: "Business-facing risk scoring with explanations; accelerates reviews and trust.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/Fraud_Detection_Analytics" }
      ]
    },
    {
      title: "IMDb Sentiment (BERT + SHAP/LIME)",
      meta: "Transformers · Tableau",
      img: "assets/images/bert.jpg",
      text: "NLP model with explainability; +25% improvement in feedback interpretation accuracy.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/NLP_SentimentAnalysis" }
      ]
    },
    {
      title: "Netflix Revenue Predictor",
      meta: "XGBoost · Tableau · SHAP",
      img: "assets/images/projects/netflix_rev.jpg",
      text: "ROI forecast model with SHAP + Tableau dashboard for title-level revenue insights.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/NetflixRevenuePredictor" }
      ]
    },
    {
      title: "ARC Prize — Meta-Learning & Abstract Reasoning",
      meta: "ARC Prize 2025 · Meta-Learning · AI Reasoning",
      img: "assets/images/projects/arc.jpg",
      text: "Systems that learn new skills efficiently and generalize to novel tasks.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/ARC_Prize_Hackathon" }
      ]
    },
    {
      title: "Trojan Horse Hunt — Model Backdoor Detection",
      meta: "Security · Model Audit",
      img: "assets/images/projects/trojan.jpg",
      text: "Detects poisoned models that behave normally on clean inputs but fail on triggers.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/Trojan-Horse-Hunt-Kaggle-Competition" }
      ]
    },
    {
      title: "Medi-Hack — HeartRisk Assist",
      meta: "Streamlit · Calibration · Explainability",
      img: "assets/images/projects/medihack.jpg",
      text: "Calibrated cardiac risk probabilities with per-patient explanations in one app.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/Medi-Hack-Devpost-Hackathon" }
      ]
    },
    {
      title: "Marketing A/B + Conversion Prediction",
      meta: "Stat tests · LR/XGBoost · SHAP",
      img: "assets/images/projects/ab.jpg",
      text: "Guardrails + ML uplift; recall 69%, AUC 0.85 on conversion prediction.",
      links: [
        { label: "Live App", href: "https://marketingstrategyabtesting-eu4hug4vbgnflcdfxxdcyh.streamlit.app/" },
        { label: "GitHub", href: "https://github.com/SweetySeelam2/Marketing_Strategy_AB_Testing" }
      ]
    },
    {
      title: "Customer Segmentation (Streamlit)",
      meta: "KMeans · Streamlit",
      img: "assets/images/projects/segmentation.jpg",
      text: "Interactive segmentation for marketing and retention focus.",
      links: [
        { label: "Live App", href: "https://customer-segmentation-ml.streamlit.app/" },
        { label: "GitHub", href: "https://github.com/SweetySeelam2/customer-segmentation-ML" }
      ]
    },
    {
      title: "Retail Sales Prediction",
      meta: "XGBoost · SHAP · Time Series",
      img: "assets/images/projects/retail_sales.jpg",
      text: "Transaction-level forecasting with explainability for SKU/channel planning.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/Retail_Sales_Prediction" }
      ]
    },
    {
      title: "Cancer Prediction ML",
      meta: "Logistic Regression · SHAP · Streamlit",
      img: "assets/images/projects/cancer.jpg",
      text: "Interpretable, deployed ML for early tumor classification and clinical insights.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/Cancer_Prediction_ML" }
      ]
    },
    {
      title: "Amazon — CNN Product Classification",
      meta: "CNN · Transfer Learning · LIME",
      img: "assets/images/projects/product_cnn.jpg",
      text: "Classifies product images (boots/shoes/shirts/bags) with visual explanations.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/Amazon-CNN-Product-Classification" }
      ]
    },
    {
      title: "LLM AutoPitchGPT",
      meta: "LLM · Generation · Automation",
      img: "assets/images/projects/autopitch.jpg",
      text: "Generate 5,000+ investor-ready startup pitches automatically with quality controls.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/LLM_AutoPitchGPT" }
      ]
    },
    {
      title: "Causal Inference — Streamlit App",
      meta: "DoWhy/EconML · Uplift · PSM",
      img: "assets/images/projects/causal.jpg",
      text: "Quantifies causal impact and uplift with interactive visualizations and controls.",
      links: [
        { label: "GitHub", href: "https://github.com/SweetySeelam2/Casual_Inference_streamlit" }
      ]
    }
  ];

  const createCard = (p) => {
    const el = document.createElement("article");
    el.className = "card";
    el.innerHTML = `
      <img src="${p.img}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p class="meta">${p.meta}</p>
      <p>${p.text}</p>
      <div class="actions">
        ${p.links.map(l => `<a class="btn" target="_blank" rel="noopener" href="${l.href}">${l.label}</a>`).join("")}
      </div>
    `;
    return el;
  };

  const ensureGrid = () => {
    const section = document.querySelector("#projects") || document.querySelector("#projects.section");
    if (!section) return null;
    let grid = section.querySelector(".grid");
    if (!grid) {
      grid = document.createElement("div");
      grid.className = "grid";
      section.appendChild(grid);
    }
    return grid;
  };

  const init = () => {
    const gridParent = ensureGrid();
    if (!gridParent) return;
    gridParent.innerHTML = "";
    data.forEach(p => gridParent.appendChild(createCard(p)));
  };

  return { init };
})();

document.addEventListener("DOMContentLoaded", () => {
  if (window.PortfolioProjects && window.PortfolioProjects.init) {
    window.PortfolioProjects.init();
  }
});