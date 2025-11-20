// --------- Données des véhicules pour la modale ----------

const cars = {
  bentley: {
    title: "Bentley Continental GT",
    subtitle: "2022 • 12 000 km • W12 • Boîte automatique",
    price: "249 900 €",
    img: "images/bentlay.jpg",
    specs: [
      "Couleur : Blanc nacré / toit carbone",
      "Intérieur cuir noir, surpiqûres contrastées",
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
      "0 à 100 km/h en 2,9 s",
      "Carrosserie à forte proportion de carbone",
      "Freins carbone-céramique",
      "Mode Track, Sport et Comfort",
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
      "Boîte PDK 8 rapports",
      "Pack Sport Chrono",
      "Échappement sport",
      "Caméra 360° et aides au stationnement"
    ],
    description:
      "Référence absolue du grand tourisme sportif, cette 911 Turbo S allie polyvalence, sécurité et performances spectaculaires, quelles que soient les conditions."
  },

  gt3rs: {
    title: "Porsche 911 GT3 RS",
    subtitle: "2019 • 9 800 km • 4.0L atmosphérique • PDK",
    price: "219 500 €",
    img: "images/gt3rs.jpg",
    specs: [
      "Couleur : Gris Craie",
      "Aileron fixe type compétition",
      "Freins céramique PCCB",
      "Arceau et sièges carbone",
      "Préparation piste, réglages châssis affûtés"
    ],
    description:
      "Cette 911 GT3 RS est pensée pour la performance pure. Un châssis affûté, un moteur atmosphérique rageur et un comportement exceptionnel sur circuit."
  },

  f8: {
    title: "Ferrari F8 Tributo",
    subtitle: "2022 • 6 200 km • V8 Biturbo • Propulsion",
    price: "289 900 €",
    img: "images/f8.jpg",
    specs: [
      "Moteur V8 3.9L biturbo",
      "Boîte F1 double embrayage",
      "0 à 100 km/h en 2,9 s",
      "Intérieur cuir & Alcantara",
      "Jantes forgées, freins carbone-céramique"
    ],
    description:
      "La F8 Tributo rend hommage au V8 Ferrari, plusieurs fois élu moteur de l’année. Une supercar qui combine style, efficacité et émotion pure."
  },

  huracan: {
    title: "Lamborghini Huracán STO",
    subtitle: "2023 • 3 800 km • V10 atmosphérique • Propulsion",
    price: "339 900 €",
    img: "images/huracan.jpg",
    specs: [
      "Moteur V10 5.2L atmosphérique",
      "Aérodynamique inspirée des modèles de course",
      "Freins carbone-céramique",
      "Intérieur entièrement orienté piste",
      "Échappement sport à la sonorité unique"
    ],
    description:
      "Version la plus radicale de la Huracán, pensée comme une voiture de course homologuée pour la route, avec un V10 atmosphérique au caractère explosif."
  },

  chiron300: {
    title: "Bugatti Chiron Super Sport 300+",
    subtitle: "2021 • 2 100 km • W16 8.0 Quadri-Turbo • 490 km/h",
    price: "3 990 000 €",
    img: "images/Bugatti.jpg",
    specs: [
    "Version Super Sport 300+ limitée",
    "1578 ch • 0 à 300 km/h en 12,1 s",
    "Carrosserie carbone apparent",
    "Édition record du monde 490,48 km/h",
    "Intérieur cuir et fibre de carbone"
  ],
  description:
    "La Bugatti Chiron Super Sport 300+ est une hypercar d’exception, détentrice du record absolu des 300 mph. Une pièce rare, brutalement performante et luxueusement conçue."
},
bmwm8: {
  title: "BMW M8 Competition",
  subtitle: "2022 • 9 400 km • V8 4.4L Biturbo • 625 chevaux",
  price: "149 900 €",
  img: "images/BMWM8.jpg",
  specs: [
    "Couleur : Noir Sapphire métallisé",
    "Transmission xDrive intégrale",
    "0 à 100 km/h : 3,2 secondes",
    "Intérieur cuir Merino / Alcantara",
    "Échappement M Sport",
    "Pack carbone extérieur"
  ],
  description:
    "La BMW M8 Competition est le parfait équilibre entre performances extrêmes et raffinement. Avec son V8 de 625 chevaux, sa transmission intégrale xDrive et son intérieur luxueux, elle offre une expérience de conduite unique alliant puissance et confort haut de gamme."
}

};

// --------- Sélecteurs de la modale ----------

const modal = document.getElementById("car-modal");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalSubtitle = document.getElementById("modal-subtitle");
const modalPrice = document.getElementById("modal-price");
const modalSpecs = document.getElementById("modal-specs");
const modalDescription = document.getElementById("modal-description");
const modalClose = document.querySelector(".modal-close");
const modalOverlay = document.querySelector(".modal-overlay");

// --------- Ouverture de la modale ----------

document.querySelectorAll(".btn-detail").forEach(btn => {
  btn.addEventListener("click", e => {
    e.preventDefault();
    const key = btn.dataset.car;
    const car = cars[key];
    if (!car) return;

    // Remplissage des infos
    modalImg.src = car.img;
    modalImg.alt = car.title;
    modalTitle.textContent = car.title;
    modalSubtitle.textContent = car.subtitle;
    modalPrice.textContent = car.price;
    modalDescription.textContent = car.description;

    // Specs
    modalSpecs.innerHTML = "";
    car.specs.forEach(spec => {
      const li = document.createElement("li");
      li.textContent = spec;
      modalSpecs.appendChild(li);
    });

    modal.classList.add("show");
  });
});

// --------- Fermeture de la modale ----------

function closeModal() {
  modal.classList.remove("show");
}

if (modalClose) {
  modalClose.addEventListener("click", closeModal);
}

if (modalOverlay) {
  modalOverlay.addEventListener("click", closeModal);
}

document.addEventListener("keydown", e => {
  if (e.key === "Escape") closeModal();
});
