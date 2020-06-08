function somar(atual, posterior) {
    return atual + posterior;
}

let adicionar = (...numeros) => {

    /*let total = numeros.reduce(
                              (atual, posterior) =>
                               atual + posterior
                            );

  console.log(numeros);

  console.log(total);
  */

    let somar = (numeros) => {
        let total = 0;

        for (let i in numeros) {
            total += numeros[i];
        }

        return total;

    }

    return somar(numeros);

}

console.log(adicionar(1, 2, 3, 4, 5, 6));
