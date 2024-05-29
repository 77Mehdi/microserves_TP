import React from 'react';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="holder">
        <header className="header bg-blue-500 py-8">
          <div className="container mx-auto text-center text-white">
            <h2 className="header-title text-4xl font-bold mb-4">Trouvez le livre de votre choix.</h2>
            <p className="header-text text-lg  text-[15px]">Gérez efficacement votre librairie avec notre application : Livres, emprunts, clients, notifications et paiements, tout est à portée de main pour simplifier vos opérations.</p>
          </div>
        </header>
      </div>
    </div>
  );
}
