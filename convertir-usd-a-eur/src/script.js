//Declaración de constantes.
//Se declara la contante y se llama el valor del id para obtener los elementos del html.
const form = document.querySelector('#form')                                      
const result = document.querySelector('#result')
const dollars = document.querySelector('#dollars')

//Evento que previene el submit a otra página.
form.addEventListener('submit', (e) => {
  //Prevenir que haga submit con action
  e.preventDefault();

  //Number() convierte el string en valor numérico.
  //La const eur es estática, valor definido.
  const usd = dollars.value
  const usdNumber = Number(usd)
  const eur = 21.63

  //cosnt para almacenar la operación con los parametros establecidos.
  const converter = usdNumber * eur
  
  //Se refleja el resultado en la etiqueta <p>
  //toFixed() delimita la cantidad de ceros a utilizar después del punto.
  // se concatena el resultado con el string + " €" para imprimir el resultado con el valor euro.
  result.textContent = converter.toFixed(2) + " €"
});

