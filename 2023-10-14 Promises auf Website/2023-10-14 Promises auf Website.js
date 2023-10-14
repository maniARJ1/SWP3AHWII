function zufalligeAktion() {
    return new Promise((resolve, reject) => {
      const zufallszahl = Math.random();
      if (zufallszahl > 0.5) {
        resolve('Geschafft!');
      } else {
        reject('Ojeee, etwas ist schief gelaufen!');
      }
    });
  }
  
  const ausloesenButton = document.getElementById('ausloesenButton');
  const ergebnisAnzeige = document.getElementById('ergebnisAnzeige');
  
  ausloesenButton.addEventListener('click', () => {
    ergebnisAnzeige.innerHTML = '';
    ergebnisAnzeige.classList.remove('error');
  
    zufalligeAktion()
      .then((ergebnis) => {
        ergebnisAnzeige.textContent = ergebnis;
      })
      .catch((fehler) => {
        ergebnisAnzeige.textContent = fehler;
        ergebnisAnzeige.classList.add('error');
      });
  });
  