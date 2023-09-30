import React from "react";
import '../styles/Competences.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Competences() {
  const competences = [
    {
      titre: "Frontend",
      description: "Maîtrise des langages HTML, CSS, JavaScript et capacité à intégrer du contenu depuis une maquette.",
      niveau: 5, 
    },
    {
      titre: "Design Graphique",
      description: "Création de designs attrayants pour divers supports.",
      niveau: 2,
    },
    {
      titre: "Gestion de Projet",
      description: "Planification et suivi de projets de A à Z.",
      niveau: 3,
    },
    {
      titre: "Backend",
      description:"Capacité à gérer le backend d'un site web en créant un serveur NodeJS.",
      niveau: 4,
    },
  ];

  return (
    <section id="mes-competences">
      <h2>Mes Compétences</h2>
      <div className="competence-list">
        {competences.map((competence, index) => (
          <div className="competence-card" key={index}>
            <h3>{competence.titre}</h3>
            <p>{competence.description}</p>
            <div className="star-icons">
              {Array.from({ length: 5 }, (_, i) => (
                <FontAwesomeIcon
                  icon={faStar}
                  key={i}
                  className={`star-icon ${
                    i >= competence.niveau ? "empty-star" : ""
                  }`}
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