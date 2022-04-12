function dadoRandom() {
  return Math.round(Math.random() * (6 - 1) + 1);
}

function lanzamiento() {
  console.clear();
  //// Se crea el arreglo con los dados
  let dados: number[][] = new Array(1000);
  for (let i = 0; i < dados.length; i++) {
    dados[i] = [dadoRandom(), dadoRandom()];
  }

  /// Cuando los dados sumaron siete
  let sumaSietes: number = 0;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i][0] + dados[i][1] === 7) {
      sumaSietes = sumaSietes + 1;
    }
  }

  /// Cuando salio el mismo numero
  let sumaMismo: number = 0;
  for (let i = 0; i < dados.length; i++) {
    if (dados[i][0] === dados[i][1]) {
      sumaMismo = sumaMismo + 1;
    }
  }

  /// Suma Total
  let sumaTotal: number = 0;
  for (let i = 0; i < dados.length; i++) {
    sumaTotal = sumaTotal + dados[i][0];
    sumaTotal = sumaTotal + dados[i][1];
  }

  document.getElementById("divLanzamiento")?.innerHTML =
    "<p>Dados con el mismo numero: " +
    sumaMismo +
    " veces" +
    "<p> El 7 salio:" +
    sumaSietes +
    " veces" +
    "<p>La suma total de los dados es de: " +
    sumaTotal +
    "</p>";
}

let btnLanzamiento = document.getElementById("botonLanzamiento");

btnLanzamiento?.addEventListener("click", lanzamiento);
