function calculoDeCerca() {// Aqui ao invés de passar o parametro dentro da função
    
    let metro = document.getElementById("numero").value;
    metro = parseFloat(metro)

    let arame = metro * 6 * 1.30;
    // console.log(arame)

    let hasteEsticadora = metro / 5 * 0.2;
    // console.log(hasteEsticadora)

    let hastePassadora = metro / 5 * 0.8;
    // console.log(hastePassadora)

    let isoladoresTipoCastanha = hasteEsticadora * 12 * 1.1;
    // console.log(isoladoresTipoCastanha)

    let ganchosPorcas = isoladoresTipoCastanha;
    // console.log(ganchosPorcas)


    let resultadoHtml = `
    <p>Arame: ${Math.ceil (arame)} metros!</P>
    <p>Hastes Esticadoras: ${Math.ceil (hasteEsticadora)} unidades!</p>
    <p>Hastes Passadoras: ${Math.ceil (hastePassadora)} unidades!</p>
    <p>Isoladores Tipo Castanha: ${Math.ceil (isoladoresTipoCastanha)} unidades!</p>
    <p>Ganchos e Porcas: ${Math.ceil(ganchosPorcas)} unidades!</p>
    `;

    document.getElementById("resultado").innerHTML = resultadoHtml;
}

function limparCalculo() {
    if(calculoDeCerca !== 0) {
        document.getElementById("resultado").innerHTML = "Conteúdo";
    }
}
