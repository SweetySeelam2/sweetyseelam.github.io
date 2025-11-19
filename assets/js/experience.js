// Renders the timeline from the data below into <ol id="experience-list">

const EXPERIENCE = [
  {
    title: "Professional Development — Career Break (Master’s in Data Science)",
    org: "University of the Cumberlands",
    period: "Nov 2024 – Present",
    location: "Michigan, United States",
    icon: "assets/images/experience-page/cumberlands.png",
    bullets: [
      "Pursuing a Master’s in Data Science with courses in Statistics, SQL for Data Analysis, Machine Learning with Python, and Data Visualization (Tableau, Power BI, Excel, R).",
      "Developed and executed causal inference models and experimentation frameworks to evaluate product success.",
      "Designed success metrics and uplift analysis for digital products, improving strategic decisions by 20%.",
      "Automated ETL pipelines and reporting using SQL and Python, reducing data delivery time by 30%.",
      "Built interactive Tableau and Power BI dashboards to communicate impact and insights.",
      "Developed and scaled A/B testing infrastructure, enabling 20% faster experiment deployment and ~5–7% lift in key engagement metrics across tested features.",
      "Built churn prediction and customer segmentation models, boosting retention by ~10% and contributing an estimated $1.2M+ annual CLV."
    ],
    tags: ["Master’s", "Causal Inference", "A/B Testing", "Python", "SQL", "Tableau", "Power BI"]
  },
  {
    title: "Business Analyst (Contract)",
    org: "Agile IT Services",
    period: "Feb 2024 – Oct 2024",
    location: "Michigan, United States · Remote",
    icon: "assets/images/experience-page/agile-it-services.png",
    bullets: [
      "Designed experimentation pipelines improving conversion rates by 15% and engagement by 20%.",
      "Built ML-driven recommendation systems for personalization (≈20% higher interaction).",
      "Developed real-time Power BI/Tableau dashboards for leadership.",
      "Partnered with engineering on scalable ETL pipelines, cutting manual prep by 40%."
    ],
    tags: ["SQL","Python","A/B Testing","ETL","Tableau","Power BI"]
  },
  {
    title: "Business Analyst II",
    org: "Amazon",
    period: "Nov 2021 – Feb 2024",
    location: "Michigan, United States · Hybrid",
    icon: "assets/images/experience-page/amazon.png",
    bullets: [
      "Automated Python–SQL pipelines, reducing manual reporting by 50% (~300+ hours/year).",
      "Defined experimentation KPIs and performed feature impact analysis; accelerated launches by 15%.",
      "Built executive dashboards (Power BI/Tableau), improving decision speed by 20% and ROI by 5–7%."
    ],
    tags: ["SQL","Python","Power BI","Tableau","Experimentation"]
  },
  {
    title: "Environmental Health & Safety Specialist",
    org: "Amazon",
    period: "Nov 2019 – Oct 2021",
    location: "Kentucky, United States · On-site",
    icon: "assets/images/experience-page/amazon.png",
    bullets: [
      "Developed dashboards (Tableau/QuickSight) enabling injury trend visibility; 12% incident reduction.",
      "Built Power BI budget dashboards for a $500K+ department; reduced reporting errors by 25%.",
      "Aggregated multi-system data with SQL; cut incident analysis time by 30%.",
      "Automated daily incident communications with Excel macros; ~200 hours saved annually."
    ],
    tags: ["Tableau","Power BI","SQL","AWS"]
  },
  {
    title: "Research Volunteer",
    org: "Western Kentucky University",
    period: "Jun 2019 – Oct 2019",
    location: "Kentucky, United States · On-site",
    icon: "assets/images/experience-page/wku.png",
    bullets: [
      "Statistical analysis & hypothesis testing on large datasets.",
      "Automated recurring reports with SQL (40% manual workload reduction).",
      "Built Tableau/Power BI trend dashboards (20% improvement in analysis efficiency)."
    ],
    tags: ["Research","Hypothesis Testing","Tableau","SQL"]
  }
];

function renderExperience(){
  const root = document.getElementById('experience-list');
  if (!root) return;

  root.innerHTML = EXPERIENCE.map(item => `
    <li class="timeline-item">
      <span class="timeline-dot"></span>
      <div class="exp-card">
        
        <div class="exp-header">
          ${item.icon ? `<img src="${item.icon}" alt="${item.org} logo" class="exp-icon" />` : ""}
          <h3>${item.title}</h3>
        </div>

        <div class="org">${item.org}</div>
        <div class="period">${item.period}</div>
        <div class="location">${item.location}</div>

        <ul>
          ${item.bullets.map(b => `<li>${b}</li>`).join("")}
        </ul>

        <div class="row wrap" style="margin-top:10px;">
          ${item.tags.map(t => `<span class="pill">${t}</span>`).join("")}
        </div>
      </div>
    </li>
  `).join("");
}

document.addEventListener('DOMContentLoaded', renderExperience);