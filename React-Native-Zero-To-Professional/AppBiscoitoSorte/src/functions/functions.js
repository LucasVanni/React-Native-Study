export const gerarBiscoito = (objeto) => {
    const bilhetes = [
        "A vantagem de ter péssima memória é divertir-se muitas vezes com as mesmas coisa" +
                "s boas como se fosse a primeira vez.",
        "A vida vai ficando cada vez mais dura perto do topo.",
        "As convicções são inimigas mais perigosas da verdade do que as mentiras.",
        "É mais fácil lidar com uma má consciência do que com uma má reputação",
        "Não há fatos eternos, como não há verdades absolutas.",
        "O que não provoca minha morte faz com que eu fique mais forte.",
        "A objeção, o desvio, a desconfiança alegre, a vontade de troçar são sinais de sa" +
                "úde: tudo o que é absoluto pertence à patologia.",
        "O homem é definido como um ser que evolui, como o animal é imaturo por excelênci" +
                "a."
    ];

    let aleatorio = Math.floor(Math.random() * bilhetes.length);

    let t = objeto.state;

    t.texto = bilhetes[aleatorio];

    objeto.setState(t);

}
