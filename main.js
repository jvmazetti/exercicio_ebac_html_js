const form = document.getElementById('formulario');
form.addEventListener('submit', function(e){
    e.preventDefault();
    const primeiroNumero = document.getElementById('numero_a');
    const segundoNumero = document.getElementById('numero_b');
    const mensagemSucesso = `Parabéns, você acertou, ${segundoNumero.value} é maior que ${primeiroNumero.value}, o formulário foi válido`;
    const mensagemFracasso = `Que pena, você errou, ${segundoNumero.value} é menor que ${primeiroNumero.value}, o formulário está inválido, tente de novo`;
    if (primeiroNumero.value <= segundoNumero.value){
        alert(mensagemSucesso);
    }else{
        alert(mensagemFracasso);
        primeiroNumero.value = ' ';
        segundoNumero.value = ' ';
    }
})