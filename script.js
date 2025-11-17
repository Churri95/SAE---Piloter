document.addEventListener('DOMContentLoaded', function () {
  const vehicleLinks = document.querySelectorAll('.vehicle-link');

  // Détails des véhicules dans un objet
  const vehicleDetails = {
    1: {
      name: "Marque A - Modèle 1",
      description: "Un SUV moderne avec un moteur 2.0L, idéal pour les familles. Confort et sécurité assurés.",
      price: "20 000 €"
    },
    2: {
      name: "Marque B - Modèle 2",
      description: "Compacte et économique, parfaite pour la ville. Consommation réduite et design épuré.",
      price: "25 000 €"
    },
    3: {
      name: "Marque C - Modèle 3",
      description: "Un véhicule spacieux avec une consommation optimisée. Idéal pour les longs trajets.",
      price: "18 000 €"
    },
    4: {
      name: "Marque D - Modèle 4",
      description: "Voiture de sport haute performance, équipée d’un moteur turbo. Vitesse et puissance au rendez-vous.",
      price: "30 000 €"
    }
  };

  // Fonction pour afficher la modale
  function openModal(vehicleId) {
    const vehicle = vehicleDetails[vehicleId];
    const modalContent = `
      <h2>${vehicle.name}</h2>
      <p>${vehicle.description}</p>
      <p><strong>Prix :</strong> ${vehicle.price}</p>
      <button id="close-modal">Fermer</button>
    `;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = modalContent;

    // Ajouter la modale au body
    document.body.appendChild(modal);

    // Fermer la modale en cliquant sur "Fermer"
    document.getElementById('close-modal').addEventListener('click', () => {
      document.body.removeChild(modal);
    });
  }

  // Ajouter l'écouteur d'événements aux liens
  vehicleLinks.forEach(link => {
    link.addEventListener('click', function (event) {
      event.preventDefault();  // Empêche le comportement par défaut du lien
      const vehicleId = this.getAttribute('data-vehicle');
      openModal(vehicleId);
    });
  });
});
