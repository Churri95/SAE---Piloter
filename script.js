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
// Données des véhicules
const cars = {
  bentley: {
    title: "Bentley Continental GT",
    subtitle: "2022 • 12 000 km • V12 • Boîte automatique",
    price: "249 900 €",
    img: "images/bentlay.jpg",
    specs: [
      "Couleur : Blanc nacré / toit carbone",
      "Intérieur cuir full black, surpiqûres contrastées",
      "Transmission intégrale",
      "Pack audio premium",
      "Historique complet, entretien Bentley"
    ],
    description:
      "Cette Bentley Continental GT offre un niveau de confort et de performance exceptionnel. Parfaite pour les longs trajets comme pour une utilisation quotidienne haut de gamme."
  },
  mclaren: {
    title: "McLaren 720S",
    subtitle: "2021 • 8 500 km • V8 Biturbo • Propulsion",
    price: "229 000 €",
    img: "images/mclaren.avif",
    specs: [
      "Couleur : Noir métallisé",
      "0 à 100 km/h en 2,9 s",
      "Carrosserie full carbone",
      "Freins céramique",
      "Sièges baquets sport"
    ],
    description:
      "La McLaren 720S combine légèreté, aérodynamisme et puissance brute. Une supercar conçue pour les sensations fortes sur route comme sur circuit."
  },
  turboS: {
    title: "Porsche 911 Turbo S",
    subtitle: "2020 • 15 300 km • PDK • 4 roues motrices",
    price: "199 900 €",
    img: "images/turbo s.jpg",
    specs: [
      "Couleur : Vert Racing",
      "Pack Sport Chrono",
      "Échappement sport",
      "Sièges chauffants et ventilés",
      "Caméra 360°"
    ],
    description:
      "Référence absolue du grand tourisme sportif, cette 911 Turbo S allie polyvalence, sécurité et performances spectaculaires, quelles que soient les conditions."
  },
  gt3rs: {
    title: "Porsche 911 GT3 RS",
    subtitle: "2019 • 9 800 km • 4.0L atmosphérique • Boîte PDK",
    price: "219 500 €",
    img: "images/gt3rs.jpg",
    specs: [
      "Couleur : Gris Craie",
      "Aileron fixe type compétition",
      "Freins céramique PCCB",
      "Arceau et sièges carbone",
      "Préparation circuit"
    ],
    description:
      "Cette 911 GT3 RS est pensée pour la performance pure. Un châssis affûté, un moteur atmosphérique rageur et un comportement exceptionnel sur piste."
  }
};

// Sélecteurs du modal
const modal = document.getElementById("car-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalPrice = document.getElementById("modal-price");
const modalSpecs = document.getElementById("modal-specs");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");

// Ouvrir le modal au clic sur "Voir le détail"
document.querySelectorAll(".btn-detail").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const carKey = btn.dataset.car;
    const car = cars[carKey];
    if (!car) return;

    // Remplir le contenu
    modalImg.src = car.img;
    modalImg.alt = car.title;
    modalTitle.textContent = car.title;
    modalSubtitle.textContent = car.subtitle;
    modalPrice.textContent = car.price;
    modalDescription.textContent = car.description;

    // Liste des specs
    modalSpecs.innerHTML = "";
    car.specs.forEach(spec => {
      const li = document.createElement("li");
      li.textContent = spec;
      modalSpecs.appendChild(li);
    });

    // Afficher
    modal.classList.add("show");
  });
});

// Fermeture modal
function closeModal() {
  modal.classList.remove("show");
}

modalClose.addEventListener("click", closeModal);
modalOverlay.addEventListener("click", closeModal);

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
