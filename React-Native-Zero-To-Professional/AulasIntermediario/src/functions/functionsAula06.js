export const mudandoValor = (valor, objeto) => {
    let obj = objeto.state;

    let valorAlterado = Math.floor(valor);

    obj.valorSlider = valorAlterado;

    objeto.setState(obj);
};

export const mudandoValorR = (valor, objeto, objeto2) => {
    let obj = objeto.state;

    let valorAlterado = Math.floor(valor);

    obj.valor = valorAlterado;

    let objPA = objeto2.state;

    objPA.valorR = valorAlterado.toString();

    objeto2.setState(objPA);

    objeto.setState(obj);
};

export const mudandoValorB = (valor, objeto, objeto2) => {
    let obj = objeto.state;

    let valorAlterado = Math.floor(valor);

    obj.valor = valorAlterado;

    let objPA = objeto2.state;

    objPA.valorB = valorAlterado.toString();

    objeto2.setState(objPA);

    objeto.setState(obj);
};

export const mudandoValorG = (valor, objeto, objeto2) => {
    let obj = objeto.state;

    let valorAlterado = Math.floor(valor);

    obj.valor = valorAlterado;

    let objPA = objeto2.state;

    objPA.valorG = valorAlterado.toString();

    objeto2.setState(objPA);

    objeto.setState(obj);
};
