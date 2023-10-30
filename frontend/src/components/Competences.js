import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

import "../styles/Competences.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Competences() {
  const competences = [
    {
      titre: "Frontend",
      description: "Maîtrise des langages HTML, CSS, JavaScript.",
      niveau: 5,
      categorie: "Hard",
    },
    {
      titre: "Gestion de Projet",
      description: "Planification et suivi de projets de A à Z.",
      niveau: 3,
      categorie: "Hard",
    },
    {
      titre: "Backend",
      description: "Capacité à gérer le backend d'un site web en créant un serveur NodeJS.",
      niveau: 4,
      categorie: "Hard",
    },
    {
      titre: "Communication",
      description: "Capacité à communiquer efficacement avec les membres de l'équipe et les clients.",
      niveau: 5,
      categorie: "Soft",
    },
    {
      titre: "Résolution de problèmes",
      description: "Aptitude à résoudre des problèmes de manière créative et efficace.",
      niveau: 4,
      categorie: "Soft",
    },
    {
      titre: "Travail d'équipe",
      description: "Collaboration efficace au sein d'une équipe multidisciplinaire.",
      niveau: 5,
      categorie: "Soft",
    },
  ];

  const [selectedCategory, setSelectedCategory] = useState("Hard");

  const filterCompetences = (category) => {
    setSelectedCategory(category);
  };

  const filteredCompetences = competences.filter(competence => competence.categorie === selectedCategory);

  return (
    <section id="mes-competences">
      <h2>Mes Compétences</h2>
      <div className="category-buttons">
  <button
    className={`btn ${selectedCategory === "Hard" ? "btn-primary" : "btn-secondary"} mr-2`}
    onClick={() => filterCompetences("Hard")}
  >
    Hard Skills
  </button>
  <button
    className={`btn ${selectedCategory === "Soft" ? "btn-primary" : "btn-secondary"}`}
    onClick={() => filterCompetences("Soft")}
  >
    Soft Skills
  </button>
</div>
      <div className="competence-list">
        {filteredCompetences.map((competence, index) => (
          <div className="competence-card" key={index}>
            <h3>{competence.titre}</h3>
            <p>{competence.description}</p>
            <div className="star-icons">
              {Array.from({ length: 5 }, (_, i) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={i}
                  className={`star-icon ${i >= competence.niveau ? "empty-star" : ""}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Competences;