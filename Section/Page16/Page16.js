function checkGuess1() {
    const userGuess1 = document.getElementById('userGuess1').value.toLowerCase();
    const answer = 'con un 3.0% de un smmlv';
    const message1 = document.getElementById('message1');

    if (userGuess1 === answer) {
      message1.textContent = '¡Correcto! ¡Has adivinado la respuesta!';
      message1.style.color = 'green';
    } else {
      message1.textContent = 'Incorrecto. Inténtalo de nuevo.';
      message1.style.color = 'red';
    }
  }

  function checkGuess2() {
    const userGuess2 = document.getElementById('userGuess2').value.toLowerCase();
    const answer = 'indefinido';
    const message2 = document.getElementById('message2');

    if (userGuess2 === answer) {
      message2.textContent = '¡Correcto! ¡Has adivinado la respuesta!';
      message2.style.color = 'green';
    } else {
      message2.textContent = 'Incorrecto. Inténtalo de nuevo.';
      message2.style.color = 'red';
    }
  }

  function checkGuess3() {
    const userGuess3 = document.getElementById('userGuess3').value.toLowerCase();
    const answer = 'dos dias habiles para gestion';
    const message3 = document.getElementById('message3');

    if (userGuess3 === answer) {
      message3.textContent = '¡Correcto! ¡Has adivinado la respuesta!';
      message3.style.color = 'green';
    } else {
      message3.textContent = 'Incorrecto. Inténtalo de nuevo.';
      message3.style.color = 'red';
    }
  }