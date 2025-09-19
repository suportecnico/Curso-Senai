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
    <h4>Lembre-se, esse é um valor base, pois cada perímetro tem sua especifidade!</h4>
    <p><strong>Arame:</strong> ${Math.ceil (arame)} metros!</P>
    <p><strong>Hastes Esticadoras:</strong> ${Math.ceil (hasteEsticadora)} unidades!</p>
    <p><strong>Hastes Passadoras:</strong> ${Math.ceil (hastePassadora)} unidades!</p>
    <p><strong>Isoladores Tipo Castanha:</strong> ${Math.ceil (isoladoresTipoCastanha)} unidades!</p>
    <p><strong>Ganchos e Porcas: </strong>${Math.ceil(ganchosPorcas)} unidades!</p>

    `;

    document.getElementById("resultado").innerHTML = resultadoHtml;
}

function limparCalculo() {
    if(calculoDeCerca !== 0) {
        document.getElementById("resultado").innerHTML = "<p>Preencha acima &#X2b06; com os metros do perímetro onde será instalada a cerca elétrica!</p>";
    }
}
