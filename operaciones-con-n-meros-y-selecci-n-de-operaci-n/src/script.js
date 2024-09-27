/*Descripción
El formulario tiene dos campos input para ingresar números.
Tiene un select que permite elegir una operación matemática (suma, resta, multiplicación, división).
Al hacer clic en el botón, se debe:
😊Validar que ambos campos tengan valores numéricos.
Realizar la operación seleccionada y mostrar el resultado.
😊Si hay errores (inputs vacíos o valores no numéricos), mostrar mensajes de error.*/

const numberInput1 = document.querySelector("#number1")
const numberInput2 = document.querySelector('#number2')
const operation = document.querySelector('#operation')
const number1Error  = document.querySelector('#number1Error')
const number2Error  = document.querySelector('#number2Error')
const button = document.querySelector("button")
const result = document.querySelector('#result')

button.addEventListener('click', function() {
  let isValid = true
  number1Error.textContent = ''
  number2Error.textContent = ''
  result.textContent = ''

  const numberInput1 = parseFloat(number1.value)
  const numberInput2 = parseFloat(number2.value)
 
  if(isNaN(numberInput1)){
    isValid = false
    number1Error.textContent = 'Ingresa un número'
  }
  
  if(isNaN(numberInput2)){
    isValid = false
    number2Error.textContent = 'Ingresa un número'
  }
 
  if(isValid) {
   let total = 0
    
   if(operation.value === "sum") {
     total = numberInput1 + numberInput2
   }

   if(operation.value === "subtract") {
     total = numberInput1 - numberInput2 
   }

   if(operation.value === "multiply") {
     total = numberInput1 * numberInput2 
   }

   if(operation.value === "divide") {
     total = numberInput1 / numberInput2
   }
   
   result.textContent = 'El resultado de la operación es ' + total
  } 
})

