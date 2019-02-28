function stopDefAction(evt) { evt.preventDefault(); }
function gerarChaveDeAcessoNfe(chaveSemDigito) {
    if (chaveSemDigito.length != 43) {
        // alert("A chave informada possui : " + chaveSemDigito.length + " dígitos");
        let msg = document.getElementById("msgChave");
        msg.innerHTML = "A chave informada deve ter 43 dígitos";

    };
    let aux = new Array();
    let variavel = 2;
    let total = 0;
    let dv = 0;
    for (let i = aux.length - 1; i >= 0; i--) {
        aux[i] = Integer.parseInt("" + chaveSemDigito.charAt(i));
        aux[i] = aux[i] * variavel;
        variavel++;
        if (variavel > 9)
            variavel = 2;
        total += aux[i];
    }
    if (total == 0 || total == 1)
        dv = 0;
    else
        dv = 11 - (total % 11);
    chaveFinal = (chaveSemDigito + dv);

    return {chaveFinal: chaveFinal, dv:dv};
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
