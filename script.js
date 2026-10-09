/* ==========================================
   Botão de tema: auto -> claro -> escuro
   ========================================== */
const botaoTema = document.getElementById("btn-tema");
const temas = ["auto", "light", "dark"];
const rotulos = { auto: "auto", light: "claro", dark: "escuro" };

// Lê o tema salvo (se o navegador bloquear o storage, usa "auto")
function lerTema() {
    try {
        return localStorage.getItem("tema") || "auto";
    } catch (e) {
        return "auto";
    }
}

function salvarTema(tema) {
    try {
        localStorage.setItem("tema", tema);
    } catch (e) {
        /* sem storage: o tema vale só nesta visita */
    }
}

// Aplica o tema na página e atualiza o texto do botão
function aplicarTema(tema) {
    if (tema === "auto") {
        document.documentElement.removeAttribute("data-theme");
    } else {
        document.documentElement.setAttribute("data-theme", tema);
    }
    botaoTema.textContent = "Tema: " + rotulos[tema];
}

let temaAtual = lerTema();
aplicarTema(temaAtual);

// A cada clique, passa para o próximo tema da lista
botaoTema.addEventListener("click", () => {
    const proximo = (temas.indexOf(temaAtual) + 1) % temas.length;
    temaAtual = temas[proximo];
    aplicarTema(temaAtual);
    salvarTema(temaAtual);
});
