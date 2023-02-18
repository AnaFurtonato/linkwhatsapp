function gerarLink() {
  let numero = document.getElementById("numero").value;
  let mensagem = document.getElementById("mensagem").value;
  let url = "https://wa.me/";
  let final = `${url}${numero}?text=${mensagem}`;
  alert(final);
}
