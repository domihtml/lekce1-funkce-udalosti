// tady je místo pro náš program


function priKliknuti (){
  let barva = document.querySelector(".ctverecek");

  barva.style.backgroundColor = "green";
}


document.querySelector("#vysledek").innerHTML = secti(4, 5);


function zobrazVysledek (){
  let vysledek = document.querySelector("#vysledek");
  vysledek.style.display = "inline-block";
}

/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  alert("Gratulace, právě jsi spustila tuto funkci!");
  let popisek = document.querySelector (".ctverecek");
  popisek.textContent = "Gratulace, právě jsi spustila tuto funkci!";
  popisek.style.fontSize = "40%";
  console.log ("Gratulace, právě jsi spustila tuto funkci!");

}
  

  
  
 
  

