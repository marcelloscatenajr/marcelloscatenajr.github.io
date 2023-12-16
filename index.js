function precoKaraoke() {
    var preco = Number(600/document.getElementById("quantidade").value).toFixed(2);
    document.getElementById("preco").innerHTML = `R$${preco} para cada um!`
}
