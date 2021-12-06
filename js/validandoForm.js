function Enviar() {
    var nome = document.getElementById("nome").value; 
    var email = document.getElementById("email").value; 
    var endereco = document.getElementById("endereço").value;
    var numero = document.getElementById("numero").value;
    var cidade = document.getElementById("cid").value;
    var telefone = document.getElementById("telefone").value; 
    var strCPF = document.getElementById("cpf").value; 
    var pais = document.getElementById("pais").value;

    function TestaCPF(strCPF) {
        var Soma;
        var Resto;
        Soma = 0;
        if (strCPF == "00000000000") return false;
        for (i=1; i<=9; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) * (11 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(9, 10)) ) return false;
        Soma = 0;
        for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i-1, i)) *
       (12 - i);
        Resto = (Soma * 10) % 11;
        if ((Resto == 10) || (Resto == 11)) Resto = 0;
        if (Resto != parseInt(strCPF.substring(10, 11) ) ) return false;
        return true;
       }
       var testacpf1 = TestaCPF(strCPF);
       if (testacpf1 != true)
        alert(' CPF Incorreto ' + strCPF);
       else {
        alert('---Preechimento do Formulário---');
        alert('Você digitou na aba Nome Completo: ' + nome);
        alert('Você digitou na aba CPF: ' + strCPF);
        alert('Você digitou na aba Email: ' + email);
        alert('Você digitou na aba Telefone: ' + telefone);
        alert('Você digitou na aba Endereço: ' + endereco);
        alert('Você digitou na aba Número: ' + numero);
        alert('Você digitou na aba Cidade: ' + cidade);
        alert('Você digitou na aba País: ' + pais);
        alert(' ---OBRIGADO PELO CADASTRO--- ');
       }
   }