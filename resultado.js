function obterParametros() {
    const params = new URLSearchParams(window.location.search);

    const vitorias = Number(params.get("vitorias"));
    const derrotas = Number(params.get("derrotas"));

    return { vitorias, derrotas };
}

function calcularSaldo(vitorias, derrotas) {
    return vitorias - derrotas;
}

function definirNivel(saldo) { 
    if (saldo <= 10) return "Ferro";
    if (saldo <= 20) return "Bronze";
    if (saldo <= 50) return "Prata";
    if (saldo <= 80) return "Ouro";
    if (saldo <= 90) return "Diamante";
    if (saldo <= 100) return "Lendário";
    return "Imortal";
}

function mostrarResultado() {
    const { vitorias, derrotas } = obterParametros();

    if (isNaN(vitorias) || isNaN(derrotas)) {
        document.getElementById("resultado").innerText =
            "Dados inválidos. Volte e preencha corretamente.";
        return;
    }

    const saldo = calcularSaldo(vitorias, derrotas);
    const nivel = definirNivel(saldo);

    document.getElementById("resultado").innerText =
        `O Herói tem saldo de ${saldo} e está no nível de ${nivel}.`;
}

function voltar() {
    window.location.href = "index.html";
}

// Executa automaticamente ao carregar a página
mostrarResultado();
