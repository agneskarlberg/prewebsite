/* Hämtar faktaknappen och faktarutan från HTML.
   När besökaren klickar på knappen visas eller döljs
   faktarutan, och knappens text uppdateras. */
const knapp = document.getElementById("fakta-knapp");
const faktaruta = document.getElementById("faktaruta");

if (knapp && faktaruta) {
    knapp.addEventListener("click", function() {
       faktaruta.hidden = !faktaruta.hidden;
       knapp.setAttribute("aria-expanded", String(!faktaruta.hidden));

         if (faktaruta.hidden) {
          knapp.textContent = "Visa mer fakta";
      } else {
          knapp.textContent = "Dölj fakta";
      }
   });
}
/* Bildspelet innehåller tre bilder som lagras i en array.
   Variabeln bildIndex håller reda på vilken bild som visas.
   JavaScript använder HTML-elementens ID för att styra
   bildbytena och uppdatera bildspelets navigering. */
const bilder = [
      "Bildspel 3.jpg",
      "bildspel-solnedgang.jpg",
      "bildspel2.jpg"
];
const bildBeskrivningar = [
    "Grå PRE-häst med träns som blickar bakåt i en grönskande hage.",
    "Ljus PRE-häst med ryttare som utför en upphöjd rörelse i solnedgången.",
    "Skimmel med svart vintertäcke som rör sig genom snön framför en röd stallbyggnad."

];
const bildtexter = [
  "PRE-hästens vackra profil",
  "PRE i rörelse.",
  "PRE-häst i snön."
];
let bildIndex = 0;

const galleriBild = document.getElementById("gallery-image");
const prickar = document.querySelectorAll(".dot");
const nästaKnapp = document.getElementById("next-image");
const förraKnapp = document.getElementById("prev-image");
const galleriBildtext = document.getElementById("gallery-caption");
if (galleriBild && nästaKnapp && förraKnapp) {
/* Funktionen bytBild skapar en mjuk övergång mellan bilderna.
   Först görs bilden osynlig, sedan byts bildfilen och
   bilden visas igen. Prickarna uppdateras för att visa
   vilken bild som är aktiv. */
    function bytBild() {
        galleriBild.style.opacity = "0";

        setTimeout(function() {
            galleriBild.src = bilder[bildIndex];
            galleriBild.alt = bildBeskrivningar[bildIndex];
            document.getElementById("gallery-caption").textContent = bildtexter[bildIndex];
            galleriBild.style.opacity = "1";
        }, 300);

        prickar.forEach(function(prick, index) {
            prick.classList.toggle("active", index === bildIndex);
        });
    }
/* Knapparna låter besökaren bläddra framåt och bakåt.
   Bildindex uppdateras vid varje klick och börjar om
   när besökaren når första eller sista bilden. */
    nästaKnapp.addEventListener("click", function() {
        bildIndex = (bildIndex + 1) % bilder.length;
        bytBild();
    });

    förraKnapp.addEventListener("click", function() {
        bildIndex = (bildIndex - 1 + bilder.length) % bilder.length;
        bytBild();
    });

}
