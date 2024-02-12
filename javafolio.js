document.addEventListener("DOMContentLoaded", function() {

  // Fonction qui anime le menu
  function animeMenu() {
    // ...
  }

  // Fonction qui anime le titre
  function animeTitre() {
    // ...
  }

  // Fonction qui anime les images des projets
  function animeProjets() {
    // ...
  }

  // Fonction qui anime les titres des sections
  function animeSections() {
    // ...
  }

  // Fonction pour le défilement vers la section correspondante
  function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth' // Ajout de l'effet de défilement fluide
      });
    }
  }

  // Ajout de l'événement de clic pour chaque lien de la navigation
  const navLinks = document.querySelectorAll("nav a");
  navLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien

      const sectionId = link.getAttribute("href").substring(1);
      scrollToSection(sectionId);
    });
  });

  // Initialisation des animations
  window.addEventListener("load", function() {
    animeMenu();
    animeTitre();
    animeProjets();
    animeSections();
  });
});
document.addEventListener("mousemove", function(event) {
  const cursor = document.querySelector(".cursor");
  const posX = event.clientX;
  const posY = event.clientY;
  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";
});
document.addEventListener("DOMContentLoaded", function() {
  // Sélectionne tous les éléments de texte à animer
  const textElements = document.querySelectorAll("h1, nav a, p");
  
  // Ajoute la classe "active" à chaque élément après un court délai
  setTimeout(function() {
    textElements.forEach(function(element) {
      element.classList.add("active");
    });
  }, 500); // Délai en millisecondes avant d'ajouter la classe "active"
});
// Sélectionne la bulle
const cursor = document.querySelector(".cursor");

// Ajoute un écouteur d'événements de clic à l'ensemble de la page
document.addEventListener("click", function(event) {
  // Récupère les coordonnées du clic
  const posX = event.clientX;
  const posY = event.clientY;

  // Définit les nouvelles coordonnées de la bulle
  cursor.style.left = posX + "px";
  cursor.style.top = posY + "px";

  // Ajoute une classe pour déclencher l'animation
  cursor.classList.add("clicked");

  // Supprime la classe après un court délai pour réinitialiser l'animation
  setTimeout(function() {
    cursor.classList.remove("clicked");
  }, 500); // Délai en millisecondes avant de supprimer la classe
});
document.addEventListener("scroll", function() {
  const headerHeight = document.querySelector("header").offsetHeight;
  const scrollTop = window.scrollY;

  if (scrollTop > headerHeight) {
    document.querySelector(".vertical-nav").style.display = "block";
  } else {
    document.querySelector(".vertical-nav").style.display = "none";
  }
});
document.addEventListener("DOMContentLoaded", function() {
  // Fonction pour le défilement avec animation vers la section correspondante
  function scrollToSectionWithAnimation(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      // Récupère la position de la section par rapport au haut de la page
      const sectionTop = section.getBoundingClientRect().top;

      // Durée de l'animation en millisecondes
      const duration = 300;

      // Intervalle de temps entre chaque rafraîchissement de l'animation
      const interval = 10;

      // Nombre total de rafraîchissements nécessaires pour atteindre la section
      const totalIterations = Math.ceil(duration / interval);

      // Distance à parcourir à chaque rafraîchissement
      const distancePerIteration = sectionTop / totalIterations;

      // Défilement animé
      let iterations = 0;
      const scrollInterval = setInterval(function() {
        iterations++;
        window.scrollBy(0, distancePerIteration);
        // Arrête l'animation une fois atteinte la section
        if (iterations >= totalIterations) {
          clearInterval(scrollInterval);
          window.location.hash = sectionId; // Met à jour l'URL avec l'identifiant de la section
        }
      }, interval);
    }
  }

  // Ajout de l'événement de clic pour chaque lien de la barre verticale
  const verticalNavLinks = document.querySelectorAll(".vertical-nav a");
  verticalNavLinks.forEach(link => {
    link.addEventListener("click", function(event) {
      event.preventDefault(); // Empêche le comportement par défaut du lien

      const sectionId = link.getAttribute("href").substring(1);
      scrollToSectionWithAnimation(sectionId);
    });
  });
});






