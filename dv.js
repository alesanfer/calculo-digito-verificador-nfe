function stopDefAction(evt) { evt.preventDefault(); }

/**
 * 
 * @param {*} chaveSemDigito 
 */
function gerarChaveDeAcessoNfe(chaveSemDigito) {
    let dv;

    if (chaveSemDigito.length != 43) {
        let msg = document.getElementById("msgChave");
        msg.innerHTML = "A chave informada deve ter 43 dígitos";
        return;
    };

    let multiplicadores = [2, 3, 4, 5, 6, 7, 8, 9];
    let i = 42;
    let soma = 0;
    let resto = 0;

    while (i >= 0) {
        for (m = 0; m < multiplicadores.length && i >= 0; m++) {
            soma += parseInt(chaveSemDigito[i]) * multiplicadores[m];
            i--;
        }
    }

    resto = soma % 11;

    if (resto == 0 || resto == 1) { dv = 0; } else { dv = 11 - resto; }

    return { chaveFinal: chaveSemDigito + dv, dv: dv };
}
function geraDv() {
    let ret = gerarChaveDeAcessoNfe(document.getElementById('inputChaveSemDigito').value);

    document.getElementById('inputChaveFinal').value = ret.chaveFinal;
    document.getElementById('inputDV').value = ret.dv;

}


window.onload = function () {
    document.getElementById('frmChave').addEventListener('submit', stopDefAction, false);
};


// console.log(gerarChaveDeAcessoNfe("3517081835539700010855001000123051100123051"));
