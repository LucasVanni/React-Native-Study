
export const gerenciarNumeros = (objeto, numero, sinal) => {

  let estado = objeto.state;
    let nA = numero;

    console.log(nA);

    if (numero == 'C'){
      estado.resultado = '';
    }else
    if (estado.resultado == 'n') {
      estado.resultado = `-${numero}`;
    }else
      if (numero == '=') {
        estado.resultado = eval(estado.resultado);
    }else
      if (estado.resultado == '0'){
        estado.resultado = numero;
      }else
        estado.resultado += numero;

  objeto.setState(estado);
};
