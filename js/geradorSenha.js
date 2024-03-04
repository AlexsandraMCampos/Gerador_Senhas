
function admSenhas(length, addMaiChars, addNums, addSpChars) {
  let chars = "abcçdefghijklmnopqrstuvwxyz";
  const maichars = "ABCÇDEFGHIJKLMNOPQRSTUVWXYZ";
  const nums = "0123456789";
  const spchars = "!@#$%&*()+=-*./";

  if (addMaiChars) {
    chars += maichars;
  }
  if (addNums) {
    chars += nums;
  }
  if (addSpChars) {
    chars += spchars;
  }
  let senha = "";

  for (let i = 0; i < length; i++) {
    senha += chars.charAt(Math.floor(Math.random() * chars.length));

  }
  return senha;
}

function gerarSenhas() {
  let tamSenha = parseInt(document.getElementById("tamanhoSenha").value);
  let qtddSenha = parseInt(document.getElementById("qtddSenha").value);
  let addMaiChars = document.getElementById("gerarMaiChars").checked;
  let addNums = document.getElementById("gerarNum").checked;
  let addSpChars = document.getElementById("gerarSpChars").checked;
  let textArea = document.getElementById("receberSenhas");

let listaSenha = [];

  if (tamSenha < 5 || tamSenha > 20 || qtddSenha < 1 || qtddSenha > 10) {
    alert('Tamanho da senha ou quantidade de senhas inválido, favor adicionar valores válidos!');
    return false;
  }

  for (let i = 0; i < qtddSenha; i++) {
    listaSenha.push(admSenhas(tamSenha, addMaiChars, addNums, addSpChars));
  }
  textArea.value = "";

  listaSenha.forEach((senha) => {
    textArea.value += senha + "\n";
  });
}
function limparSenha() {
  document.getElementById('tamanhoSenha').value = "";
  document.getElementById('qtddSenha').value = "";
  document.getElementById('gerarMaiChars').checked = false; 
  document.getElementById('gerarNum').checked = false; 
  document.getElementById('gerarSpChars').checked = false; 
  document.getElementById('receberSenhas').value = ""; 

  listaSenha = [];
}

function atualizarTamSenha(value) {
  document.getElementById('tamanhoSenha').value = value;
}