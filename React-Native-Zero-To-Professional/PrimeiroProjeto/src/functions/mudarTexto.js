export const mudarTexto = (props, nome) => {
          /*
            A variável s receberá o objeto state
            criado pelo construtor do objeto que
            foi passado como parâmetro...
          */
          let s = props.state;
            /*
              É verificado se dentro do campo TextInput
              está sendo digitado algo
            */
          if(nome.length > 0) {
              /*
                É introduzido a chave texto
                o valor Olá, juntamente com o
                nome digitado e três pontos...
              */
              s.texto = `Olá, ${nome}...`;
            }else{
              /* Se o tamanho do que foi inserido
                 no TextInput for igual a zero irá
                 receber vazio...
              */
              s.texto = '';
          }

        // É introduzido o valor de s no state criado pelo elemento
        props.setState(s);
};
