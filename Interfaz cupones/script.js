const reversos = Array.from(document.querySelectorAll(".cupones"));
const cupones = Array.from(document.querySelectorAll(".cupones2"));
const recargarBoton = document.getElementById("recargar");
const botonResponsive = document.getElementById("recargar2");
let cont = 0;

for (let i = 1; i <= reversos.length; i++) {
  reversos[i] = document.getElementById(`reverso${i}`);
  cupones[i] = document.getElementById(`cupon${i}`);

  reversos[i].addEventListener("click", () => {
    cont++;
    if (cont > 1) {
      alert("Estimado usuario, solo se permite seleccionar un cupón");
      return;
    }

    recargarBoton.addEventListener("click", () => {
      location.reload();
    });

    botonResponsive.addEventListener("click", () => {
      location.reload();
    });

    reemplazar(reversos[i], cupones[i]);


  });
}

function reemplazar(reverso, cupon) {
  reverso.style.display = "none";
  cupon.style.display = "block";
}
