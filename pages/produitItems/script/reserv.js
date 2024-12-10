document
  .getElementById("reserve-button")
  .addEventListener("click", function () {
    const reservationDate = document.getElementById("date-location").value;
    const duree = parseInt(document.getElementById("duree").value, 10);
    const unite = document.getElementById("unite-duree").value;

    if (reservationDate && duree) {
      const startDate = new Date(reservationDate);
      let endDate = new Date(startDate);

      switch (unite) {
        case "jours":
          endDate.setDate(startDate.getDate() + duree);
          break;
        case "semaines":
          endDate.setDate(startDate.getDate() + duree * 7);
          break;
        case "mois":
          endDate.setMonth(startDate.getMonth() + duree);
          break;
        case "années":
          endDate.setFullYear(startDate.getFullYear() + duree);
          break;
        default:
          alert("Unité de durée inconnue !");
          return;
      }

      const endDateStr = endDate.toLocaleDateString();

      alert(
        `Votre réservation est bien prise en compte à partir du ${reservationDate} pour ${duree} ${
          duree > 1 ? unite : unite.slice(0, -1)
        }. Elle se termine le ${endDateStr}.`
      );
    } else {
      alert("Veuillez remplir tous les champs pour réserver !");
    }
  });

document
  .getElementById("favorite-button")
  .addEventListener("click", function () {
    alert("Ce produit est maintenant dans vos favoris !");
  });
