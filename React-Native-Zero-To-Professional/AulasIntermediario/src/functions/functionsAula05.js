/**
 * @format
 * @JSX
 */

export const mudandoValor = (valor, objeto) => {
    let obj = objeto.state;

    obj.valorSwitch = valor;

    objeto.setState(obj);
}
