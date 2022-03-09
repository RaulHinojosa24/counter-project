// Tu código aquí.
const contador = document.querySelector("#counter");

document.querySelector(".prevBtn").addEventListener("click", function () {
    +contador.textContent--;
    contadorColor();
});

document.querySelector(".nextBtn").addEventListener("click", function () {
    +contador.textContent++;
    contadorColor();
});

function contadorColor() {
    const valorContador = +contador.textContent;

    if (valorContador < 0) {
        contador.style.color = "red";
    } else if (valorContador > 0) {
        contador.style.color = "green";
    } else {
        contador.style.color = "var(--mainBlack)";
    }
};