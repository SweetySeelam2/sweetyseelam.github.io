document.addEventListener("DOMContentLoaded", () => {
  const eduTarget = document.querySelector("[data-education-target]");
  const certTarget = document.querySelector("[data-cert-target]");

  const degrees = [
    {
      title: "Executive Master’s in Data Science",
      school: "University of the Cumberlands",
      years: "2024 – 2026",
      meta: "Specialization in Machine Learning and AI"
    },
    {
      title: "Executive MBA in Business Data Analytics",
      school: "Ottawa University",
      years: "2022 – 2024",
      meta: "Focus on Business Intelligence and Strategic Analytics"
    }
  ];

  const certs = [
    { name: "Microsoft Power BI Data Analyst" },
    { name: "Tableau Business Intelligence Analyst" }
  ];

  degrees.forEach(d => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <h3>${d.title}</h3>
      <p class="meta">${d.school} · ${d.years}</p>
      <p>${d.meta}</p>
    `;
    eduTarget.appendChild(item);
  });

  certs.forEach(c => {
    const card = document.createElement("div");
    card.className = "cert-card";
    card.innerHTML = `<h4>${c.name}</h4>`;
    certTarget.appendChild(card);
  });
});