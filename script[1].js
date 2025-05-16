function mostrarPregunta() {
  document.getElementById('pregunta-container').classList.remove('oculto');
  document.getElementById('resultado').textContent = '';
}

function verificarRespuesta(correcto) {
  const resultado = document.getElementById('resultado');
  if (correcto) {
    resultado.textContent = "¡Correcto! Siempre debes verificar la fuente antes de hacer clic.";
    resultado.style.color = "green";
  } else {
    resultado.textContent = "¡Incorrecto! Podrías estar cayendo en una trampa.";
    resultado.style.color = "red";
  }
}
