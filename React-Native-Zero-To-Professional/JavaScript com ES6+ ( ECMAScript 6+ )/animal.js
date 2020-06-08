/*
 Para poder utilizar a classe Animal no código é necessário exportar
 Sem exportá-la, a classe somente terá utilidade se for extendida,
 o que é seu principal foco...
*/
class Animal {

    // Função chamada no momento em que a classe é instanciada
    constructor(tipo, pernas) {
        // Definição de propriedades da classe...
        this.tipo = tipo;
        this.pernas = pernas;
    }

    falar(som = 'Som qualquer') {
        return som;
    }

    // Função para resgatar os dados de uma classe
    get dados() {
        return `O animal é um ${this.tipo} e tem ${this.pernas} e emite o som ${falar('Miau')}`;
    }

}

/*
  O extends tem o papel de fazer com que a classe Gato e Cachorro herdem
  todas as propriedades e métodos da classe animal (Classe PAI)
*/
export class Gato extends Animal {
    /*
    Para não reescrever o método "constructor"
    existe a função "super", que força o herdamento
    das propriedades da classe.
  */
    constructor(pernas, pele) {

        super('Gato', pernas);

        this.pele = pele;

    }

    /*
    Quando crio um método que já existe na classe pai,
    estarei reescrevendo esse método
  */
    falar(som = 'Miau') {
        return som;
    }

    get Cor() {
        return this.pele;
    }

}

export class Cachorro extends Animal {}