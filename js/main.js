const form = document.querySelector('.form');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  const inputPeso = e.target.querySelector('#input-peso');
  const inputAltura = e.target.querySelector('#input-altura');

  const peso = Number(inputPeso.value);
  const altura = Number(inputAltura.value);

  if (!peso) {
    setResult('Peso inválido', false);
    return
  }

  if (!altura) {
    setResult('Altura inválido', false);
    return
  }

  const imc = getImc(peso, altura);
  const nivelImc = getNivelImc(imc);

  const msg = `Seu IMC é ${imc} (${nivelImc}).`;

  setResult(msg, true);

});

function getNivelImc (imc) {
  const nivel = ['Abaixo do peso', 'Peso Normal "Eutrófico"', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3 "mórbida"'];

  if (imc >= 40.0) {
    return nivel[5];
  }
  
  if (imc <= 39.9 && imc >= 35.0) {
    return nivel[4];
  }
  
  if (imc <= 34.9 && imc >= 30.0) {
    return nivel[3];
  }
  
  if (imc <= 29.9 && imc >= 25.0) {
    return nivel[2];
  }
  
  if (imc <= 24.9 && imc >= 18.5) {
    return nivel[1];
  }
  
  if (imc <= 18.4) {
    return nivel[0];
  }
}
function getImc (peso, altura) {
  const imc = peso / altura ** 2;
  return imc.toFixed(2);
}

function criaP () {
  const p = document.createElement('p');
  return p;
}

function setResult (msg, isValid) {
  const result = document.querySelector('.result');
  result.innerHTML = '';

  const p = criaP();

  if (isValid) {
    p.classList.add('p-result');
  } else {
    p.classList.add('p-result-bad');
  }
  p.innerHTML = msg;
  result.appendChild(p);
}