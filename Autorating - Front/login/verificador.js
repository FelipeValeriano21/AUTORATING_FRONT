var cpf = 0;

function formatar(mascara, documento) {
    let i = documento.value.length;
    let saida = '#';
    let texto = mascara.substring(i);
    while (texto.substring(0, 1) != saida && texto.length ) {
      documento.value += texto.substring(0, 1);
      i++;
      texto = mascara.substring(i);
    }
  }

 
 
  function saudacao(){

    var inputElement = document.getElementById("cpf");
    var cpfOriginal = inputElement.value;
    cpf = limparCPF(cpfOriginal);
   
    alert(cpf)
  }


  function limparCPF(cpf) {
    // Remove todos os caracteres não numéricos
    cpf = cpf.replace(/\D/g, '');
  
    return cpf;
  }
