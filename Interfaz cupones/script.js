const reversos = Array.from(document.querySelectorAll(".cupones"));
const cupones = Array.from(document.querySelectorAll(".cupones2"));
let cont = 0;

for (let i = 1; i <= 12; i++) {
  reversos[i] = document.getElementById(`reverso${i}`);
  cupones[i] = document.getElementById(`cupon${i}`);

  reversos[i].addEventListener("click", () => {
    cont++;
    if (cont > 1) {
      alert("Estimado usuario, solo se le permite seleccionar un cupón");
      return;
    }
    replace(reversos[i], cupones[i]);
  });
}

function replace(reverso, cupon) {
  reverso.style.display = "none";
  cupon.style.display = "block";
}
