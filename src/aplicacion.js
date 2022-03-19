import html2canvas from 'html2canvas';
window.onload = function () {


    let evento = document.getElementById('download')
    evento.addEventListener('click', descargarCanvas, false)

    function descargarCanvas(evento) {
      html2canvas(document.querySelector("#previsualizador")).then(canvas => {
          // document.body.appendChild(canvas)
          let img = canvas.toDataURL("image/png");
          let link = document.createElement('a');
          link.download = 'meme.png';
          link.href = img;
          link.click();
      });
    }

  }

function cargarImagen(e) {
    e.preventDefault();
    let inputFile = document.getElementById('file');
    inputFile.addEventListener('change', mostrarImagen, false);
}


function eliminarImg(eve){
    eve.preventDefault();
    let eliminar = document.getElementById('upload');
    eliminar.addEventListener('click', onClick, false);
}
function onClick(ev) {
    let texto = document.getElementById('textoPrevio');
    texto.style.display = 'blok'
    let imagen = document.getElementById('img');
    imagen.style.display = 'none'
    ev.preventDefault();
}

function mostrarImagen(e) {
    let file = e.target.files[0];
    // console.log(file)
    let reader = new FileReader();
    reader.onload = function (ev) {
        let img = document.getElementById('img');
        // console.log(img)
        img.src = ev.target.result;
    }
    let texto = document.getElementById('textoPrevio');
    texto.style.display = 'none'
    let imagen = document.getElementById('img');
    imagen.style.display = 'block'
    let previsualizador = document.getElementById('previsualizador');
    previsualizador.style.border = '0px'
    previsualizador.style.background = 'none'
    let boton = document.getElementById('download');
    boton.style.visibility = 'visible'
    reader.readAsDataURL(file);
}




window.addEventListener('load', cargarImagen, eliminarImg, false);