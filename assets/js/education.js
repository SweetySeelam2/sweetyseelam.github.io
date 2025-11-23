// PATH: assets/js/education.js

document.addEventListener("DOMContentLoaded", () => {
  const eduTarget = document.querySelector("[data-education-target]");
  const certTarget = document.querySelector("[data-cert-target]");

  const degrees = [
    {
      title: "Executive Master’s in Data Science",
      school: "University of the Cumberlands",
      years: "2024 – 2026",
      meta: "Specialization in Machine Learning and AI",
      icon: "assets/images/education-page/University of Cumberlands.png",
      blurb:
        "Graduate curriculum in statistics, machine learning, deep learning, and data engineering, with hands-on projects in experimentation, forecasting, and real-world analytics problems."
    },
    {
      title: "Executive MBA in Business Data Analytics",
      school: "Ottawa University",
      years: "2022 – 2024",
      meta: "Focus on Business Intelligence and Strategic Analytics",
      icon: "assets/images/education-page/ottawa-university.png",
      blurb:
        "MBA program combining strategy, finance, and leadership with BI, dashboard design, and data-driven decision-making across marketing, operations, and executive reporting."
    }
  ];

  const certs = [
    {
      name: "Microsoft Power BI Data Analyst",
      icon: "assets/images/education-page/microsoft-powerbi.png",
      desc:
        "Covers data modeling, DAX, semantic models, and enterprise-ready dashboards for self-service analytics in Power BI."
    },
    {
      name: "Tableau Business Intelligence Analyst",
      icon: "assets/images/education-page/tableau.png",
      desc:
        "Focus on visual best practices, interactive dashboards, and storytelling with data for technical and business stakeholders."
    }
  ];

  // render degrees
  degrees.forEach(d => {
    const item = document.createElement("article");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="degree-header">
        <img class="degree-icon" src="${d.icon}" alt="${d.school} logo">
        <div>
          <h3>${d.title}</h3>
          <p class="meta">${d.school} · ${d.years}</p>
        </div>
      </div>
      <p class="meta">${d.meta}</p>
      <p class="degree-desc">${d.blurb}</p>
    `;
    eduTarget.appendChild(item);
  });

  // render certs
  certs.forEach(c => {
    const card = document.createElement("article");
    card.className = "cert-card";
    card.innerHTML = `
      <div class="cert-inner">
        <img class="cert-icon" src="${c.icon}" alt="${c.name}">
        <div>
          <h4>${c.name}</h4>
          <p class="cert-desc">${c.desc}</p>
        </div>
      </div>
    `;
    certTarget.appendChild(card);
  });
});