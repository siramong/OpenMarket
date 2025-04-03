// Obtener el formulario de registro
const registroForm = document.getElementById('registro-formulario');

// Obtener el botón de enviar registro
const enviarRegistroBtn = document.getElementById('enviar-registro');

// Agregar evento de clic al botón de enviar registro
enviarRegistroBtn.addEventListener('click', (e) => {
  e.preventDefault();

  // Obtener los valores de los campos del formulario
  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const telefono = document.getElementById('telefono').value;
  const direccion = document.getElementById('direccion').value;
  const ciudad = document.getElementById('ciudad').value;
  const pais = document.getElementById('pais').value;
  const contraseña = document.getElementById('contraseña').value;
  const confirmarContraseña = document.getElementById('confirmar_contraseña').value;

  // Validar los campos del formulario
  if (nombre === '' || apellido === '' || email === '' || telefono === '' || direccion === '' || ciudad === '' || pais === '' || contraseña === '' || confirmarContraseña === '') {
    alert('Por favor, complete todos los campos.');
  } else if (contraseña !== confirmarContraseña) {
    alert('Las contraseñas no coinciden.');
  } else {
    alert('Registro exitoso!');
    localStorage.setItem('userName', nombre);
  }
});