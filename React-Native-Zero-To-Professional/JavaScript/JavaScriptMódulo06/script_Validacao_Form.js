// Função que é gerada ao carregar a página
function carregou() {
  // É criado o elemento form e armazenado na variável 'formulario'
  var formulario = document.createElement("form");

  // É adicionado o id 'formulario' ao formulario 'form'
  formulario.setAttribute("id", "formulario");

  // É adicionado o método 'POST' de envio ao formulário.
  formulario.setAttribute("method", "POST");

  /*
    É adicionado o evento onSubmit que é chamado ao enviar o formulário.
    E retorna o que a função validarFormulario() retornará, no caso poderá
    retornar true ou false.
  */
  formulario.setAttribute("onSubmit", "return validarFormulario()");

  // Enfim o formulário é adicionado como filho do corpo do texto, 'BODY'
  document.body.appendChild(formulario);

  // É criado o título tipo h1 e armazenado na variável 'h1'
  var h1 = document.createElement("h1");

  // É criado um nó de texto e armazenado na variável 'textH1'
  var textH1 = document.createTextNode("Digite um número de 2 algarismos: ");

  // A variável 'textoH1' é inserido ao código como filhor de 'h1'
  h1.appendChild(textH1);

  // O título h1 é adicionado ao formulário
  document.getElementById("formulario").appendChild(h1);

  // É criado o elemento 'input' e será armazenado na variável 'input'
  var input = document.createElement("input");

  // É adicionado o id 'numeros' ao elemento 'input'
  input.setAttribute("id", "numeros");

  // A variável 'input' é inserida no formulário
  document.getElementById("formulario").appendChild(input);

  // É criado o elemento 'br' e armazenado na variável 'espaco'
  var espaco = document.createElement("br");

  // A variável 'espaco' é inserida no formulário
  document.getElementById("formulario").appendChild(espaco);

  // É criado o elemento 'br' e armazenado na variável 'espaco'
  var espaco2 = document.createElement("br");

  // A variável 'espaco' é inserida no formulário
  document.getElementById("formulario").appendChild(espaco2);

  // É criado o elemento 'button' e armazenado na variável enviar
  var enviar = document.createElement("button");

  // É criado um nó de texto 'Enviar' e armazenado na variável 'textButton'
  var textButton = document.createTextNode("Enviar");

  // A variável 'textButton' é inserido no código como filho do botão enviar
  enviar.appendChild(textButton);

  // O botão enviar é adicionado ao código como filho do formulário
  document.getElementById("formulario").appendChild(enviar);
}

// Função que será chamada pelo evento 'onSubmit'
function validarFormulario() {
  // É recuperado o que o valor do que o usuário digitou no input
  var valor = document.getElementById("numeros").value;

  // É verificado se o usuário não digitou algum número
  if (valor.length == 0) {
    // Alerta para o usário que nada foi digitado
    alert("Parece que nada foi digitado...");

    // Não envia o formulário;
    // Verifica se o usuário digitou um valor abaixo de 2 algarismos
    return false;
  } else if (valor.length <= 2) {
    // Envia o formulário
    // Verifica se o valor digitado está acima de 2 algarismos
    return true;
  } else if (valor.length > 2) {
    // Alerta o usuário que o valor digitado foi maior que 2 algarismos
    alert("Foi digitado um valor que contém mais do que 2 algarismos");

    // Não envia o formulário
    return false;
  }
}
