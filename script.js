const form = document.getElementById("form");
const vitoriasInput = document.getElementById("vitorias");
const derrotasInput = document.getElementById("derrotas");

form.addEventListener("submit", function (evento) {
    const vitorias = Number(vitoriasInput.value);
    const derrotas = Number(derrotasInput.value);

    // Validação simples
    if (vitorias < 0 || derrotas < 0) {
        evento.preventDefault();
        alert("Os valores não podem ser negativos.");
        return;
    }

    if (isNaN(vitorias) || isNaN(derrotas)) {
        evento.preventDefault();
        alert("Preencha os campos corretamente.");
        return;
    }

    // Se passar na validação,
    // o formulário será enviado automaticamente para resultado.html
});
