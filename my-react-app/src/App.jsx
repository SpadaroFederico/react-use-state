import React, { useState } from "react";

const languages = [
  { id: 1, title: "HTML", description: "HTML è il linguaggio standard per creare pagine web." },
  { id: 2, title: "CSS", description: "CSS è un linguaggio di stile usato per controllare l'aspetto delle pagine web." },
  { id: 3, title: "JavaScript", description: "JavaScript è un linguaggio di programmazione per rendere i siti interattivi." },
  { id: 4, title: "Node.js", description: "Node.js è un runtime per eseguire JavaScript lato server." },
  { id: 5, title: "Express", description: "Express è un framework per creare API con Node.js." },
  { id: 6, title: "ReactJS", description: "ReactJS è una libreria per costruire interfacce utente." }
];

function App() {
  
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);

  return (
    <div className="container">
      <h1>Learn Web Development</h1>

      <div className="buttons">
        {languages.map((lang) => (
          <button
            key={lang.id}
            className={selectedLanguage.id === lang.id ? "active" : ""}
            onClick={() => setSelectedLanguage(lang)}
          >
            {lang.title}
          </button>
        ))}
      </div>

      <div className="card">
        <h2>{selectedLanguage.title}</h2>
        <p>{selectedLanguage.description}</p>
      </div>
    </div>
  );
}

export default App;
