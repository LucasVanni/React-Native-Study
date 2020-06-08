function addEndereco1(endereco) {
    const {
        rua,
        numero,
        bairro,
        cidade: municipio,
        estado,
        pais,
        cep
    } = endereco;

    console.log(`O presente morador mora na rua ${rua}, no bairro ${bairro} e de número residecial ${numero}, disse obter problemas com a água do município residido atualmente ${municipio}`);

}

addEndereco1({
    rua: "José Florenzano",
    numero: 196,
    bairro: "Jardim Panorama",
    cidade: "Macatuba",
    estado: "São Paulo",
    pais: "Brasil",
    cep: "17290-000"
});

// Função antiga
function addEndereco(endereco) {
    const novoEndereco = {
        cidade: endereco.cidade,
        estado: endereco.estado,
        pais: "Brasil"
    };

    console.log(novoEndereco.cidade + ", " + novoEndereco.estado + ", " + novoEndereco.pais);
}

addEndereco({cidade: "Campina Grande", estado: "Paraíba"});

// Nova função
function novaAddEndereco(endereco) {

    const {cidade, estado} = endereco;

    const enderecoNovo = {
        cidade,
        estado,
        pais: "Brasil"
    };

    // Desconstruindo a constante enderecoNovo
    const {cidade: novaCidade, estado: novoEstado, pais: novoPais} = enderecoNovo;

    console.log(`${novaCidade}, ${novoEstado}, ${novoPais}`);
}

novaAddEndereco({cidade: "Macatuba", estado: "SãoPaulo"});
