//Declaración de variables.

const increment = document.querySelector('#increment');
const reset = document.querySelector('#reset');
const counter = document.querySelector('#counter');
const decrement = document.querySelector('#decrement');

//Variable global, declaracion del contador.
let count = 0

//Asignación de valor al HTML con su propiedad textContent.
counter.textContent = count 

//Evento para llamar a la función e incrementar el contador.
increment.onclick = function(){
  count++ //Operador para aumentar el valor en 1.
  counter.textContent = count
  
  //Altera el estilo del counter usando su propiedad style.
  counter.style.color= "#0aa257"
}

//Evento para llamar a la función y reiniciar el contador a cero.
reset.onclick = function(){
  count = 0
  counter.textContent = count 
}

//Evento para llamar a la función y que se le reste uno al valor actual.
decrement.onclick = function(){
  if (count > 0) { //Condición para que el valor mínimo sea 0, operador de mayor que >.
    count--;//Operador para disminuir el valor en 1.
  }
  counter.textContent = count 
}