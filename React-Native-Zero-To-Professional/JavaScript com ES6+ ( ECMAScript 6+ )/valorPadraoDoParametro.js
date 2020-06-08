let setInfo = (nome, sobrenome = "", status = false) => {
  console.log({ nome, sobrenome, status });
};

setInfo("Lucas", "Vanni", true);

/*
  Sem o valor padãro, se a variável
  status não for definida
  ficará "undefined"
*/
setInfo("Lucas");
