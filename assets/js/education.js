document.addEventListener("DOMContentLoaded", () => {
  const eduTarget = document.querySelector("[data-education-target]");
  const certTarget = document.querySelector("[data-cert-target]");

  const degrees = [
    {
      title: "Executive Master’s in Data Science",
      school: "University of the Cumberlands",
      years: "2024 – 2026",
      logo: "assets/images/education-page/cumberlands.png",
      meta: "Specialization in Machine Learning and Artificial Intelligence.",
      description:
        "Advanced coursework in predictive modeling, deep learning, cloud data systems, and applied AI for enterprise decision-making."
    },
    {
      title: "Executive MBA in Business Data Analytics",
      school: "Ottawa University",
      years: "2022 – 2024",
      logo: "assets/images/education-page/ottawa-university.png",
      meta: "Focus on Business Intelligence and Strategic Analytics.",
      description:
        "Training in BI frameworks, data-driven strategy, visualization, experiment analysis, and enterprise-level decision support."
    }
  ];

  const certs = [
    {
      name: "Microsoft Power BI Data Analyst",
      logo: "assets/images/education-page/powerbi.png",
      desc:
        "Validated skills in building KPI dashboards, DAX measures, data modeling, and enterprise reporting systems."
    },
    {
      name: "Tableau Business Intelligence Analyst",
      logo: "assets/images/education-page/tableau.png",
      desc:
        "Expertise in creating interactive dashboards, advanced calculations, and visual analytics for executive insights."
    }
  ];

  degrees.forEach(d => {
    const item = document.createElement("div");
    item.className = "timeline-item";

    item.innerHTML = `
      <div class="timeline-header">
        <img src="${d.logo}" class="school-logo" alt="${d.school}">
        <div>
          <h3>${d.title}</h3>
          <p class="meta">${d.school} · ${d.years}</p>
        </div>
      </div>
      <p class="description">${d.meta}</p>
      <p class="description">${d.description}</p>
    `;

    eduTarget.appendChild(item);
  });

  certs.forEach(c => {
    const card = document.createElement("div");
    card.className = "cert-card";

    card.innerHTML = `
      <div class="cert-header">
        <img src="${c.logo}" class="cert-icon" alt="${c.name}">
        <h4>${c.name}</h4>
      </div>
      <p>${c.desc}</p>
    `;

    certTarget.appendChild(card);
  });
});
