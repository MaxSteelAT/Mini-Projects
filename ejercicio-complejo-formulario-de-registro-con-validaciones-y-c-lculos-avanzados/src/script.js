/*
Ejercicio Complejo: Formulario de Registro con Validaciones y Cálculos Avanzados TAREA
Descripción
El formulario tiene:
😊Dos campos de tipo input para números (edad y salario).
😊Un campo de tipo select para elegir el país.
😊Un campo de tipo radio para seleccionar género.
😊Un campo de tipo checkbox para aceptar términos y condiciones.
😊Un botón para enviar el formulario.

Validaciones:
😊Los campos de números deben contener valores y ser mayores que 0.
😊El país debe estar seleccionado.
😕Debe seleccionar el género.
😊Debe aceptar los términos y condiciones.
Validar que la edad esté dentro del rango de 18 a 65.
Validar que el salario esté dentro de un rango (ej., entre 500 y 10000).
Operaciones:
Si todo es correcto, calcular el impuesto estimado en base al salario y el país seleccionado.
Mostrar un mensaje de resumen con la información y los cálculos realizados en un div.
*/
const ageInput = document.querySelector('#age')
const salaryInput = document.querySelector('#salary')
const countrySelect = document.querySelector('#country')
const termsCheckbox= document.querySelector('#terms')
// Errores
const ageError = document.querySelector('#ageError')
const salaryError = document.querySelector('#salaryError')
const countryError = document.querySelector('#countryError')
const termsError = document.querySelector('#termsError')
// General
const result = document.querySelector('#result')
const button = document.querySelector('button')

button.addEventListener('click', function () {
	// Limpiar errores
  ageError.textContent = ''
  salaryError.textContent = ''
  countryError.textContent = ''
  termsError.textContent = ''
  
	// Flag
  let isValid = true;

	// Obtener valores
  const age = parseFloat(ageInput.value)
  const salary = parseFloat(salaryInput.value)

  const country = countrySelect.value;
  const termsAccepted = termsCheckbox.checked;
  
  // Validar que la edad esté entre 18 y 65
  
  if (age === '' || isNaN(age)) {
  	ageError.textContent = 'Ingresa tu edad.';
    isValid = false;
  }
  
  if (age < 18 || age > 65) {
    ageError.textContent = 'La edad debe estar entre 18 y 65 años.';
    isValid = false;
  }
  
  // Validar que el salario esté entre 500 y 10000
  if (salary === '' || isNaN(salary)) {
  	salaryError.textContent = 'Ingresa tu salario.';
    isValid = false;
  }
  
  if(salary < 500 || salary > 10000) {
    salaryError.textContent = 'El salario debe estar entre 500 y 10000'
    isValid = false;
  }
  // Validar que se haya seleccionado un país
  
  if (country === '') {
  	countryError.textContent = 'Selecciona tu país.'
  	isValid = false
  }
  
  // Validar que los términos y condiciones hayan sido aceptados
  
  if (termsAccepted === false) {
  	termsError.textContent = 'Aceptas las condiciones.'
  	isValid = false
  }
  
  // Si todas las validaciones son correctas, realizar el cálculo de impuesto
  
  if (isValid) {
    // Calculos
    // Asignar la tasa de impuesto basada en el país seleccionado
    
    let taxRate = 0
    
    switch (country) { //mx, ca
      case 'mx': // México
        taxRate = 0.16; // 16% de impuesto
        break;
      case 'us': // Estados Unidos
        taxRate = 0.12; // 12% de impuesto
        break;
      case 'ca': // Canadá
        taxRate = 0.15; // 15% de impuesto
        break;
    }
    
    // Calcular el impuesto estimado
    const estimatedTax = salary * taxRate;
    const netSalary = salary - estimatedTax;
    // Mostrar resultado
    
   /*result.innerHTML = 
     `
      Edad: ${age} <br>
      Salario Bruto: ${salary} <br>
      Impuesto Estimado: ${estimatedTax} <br> 
      Salario Neto: ${netSalary} <br>
      País: ${country} <br>
      
      <br>¡Gracias por registrar tus datos!
    `*/
    result.innerHTML = 
     `
      Edad: ${age}
      Salario Bruto: ${salary}
      Impuesto Estimado: ${estimatedTax} 
      Salario Neto: ${netSalary}
      País: ${country}
      
      ¡Gracias por registrar tus datos!
    `
  }
})

