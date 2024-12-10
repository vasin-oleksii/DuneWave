
document.getElementById("reserve-button").addEventListener("click", function () {
  const reservationDate = document.getElementById("date-location").value;
  const duree = document.getElementById("duree").value;
  const unite = document.getElementById("unite-duree").value;

  if (reservationDate && duree) {
    alert(
      `Votre réservation est bien prise en compte à partir du ${reservationDate} pour ${duree} ${
        duree > 1 ? unite : unite.slice(0, -1)
      }.`
    );
  } else {
alert("Veuillez remplir tous les champs pour réserver !"); 
  }
});
