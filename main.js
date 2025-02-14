onload = () =>{
    document.body.classList.remove("container");
};

document.getElementById('descargarCarta').addEventListener('click', function() {
    // Ruta de la carta que deseas descargar
    const urlCarta = 'carta.pdf'; // Cambia 'carta.pdf' por la ruta correcta de tu archivo
  
    // Crear un enlace temporal
    const link = document.createElement('a');
    link.href = urlCarta;
    link.download = 'carta_bonita.pdf'; // Nombre del archivo que se descargará
  
    // Simular clic en el enlace para iniciar la descarga
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });