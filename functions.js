function reset() {

    document.getElementById("pedra").checked = false;
    document.getElementById("papel").checked = false;
    document.getElementById("tesoura").checked = false;
    document.getElementById("resultado").innerHTML = "Veja aqui o resultado da rodada";

    placarVitoria = 1;
    placarDerrota = 0;
    placarEmpate = 1;  
    document.getElementById("empates").innerHTML = "-";
    document.getElementById("vitorias").innerHTML = "-";
    document.getElementById("derrotas").innerHTML = "-";
    
    document.getElementById("imgPc").src="";

}

placarVitoria = 1;
placarDerrota = 0;
placarEmpate = 1;  

function jogar() {


    if ( document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false ) {

        alert("Escolha uma opção");
        return;  

    }


    var pcEscolheu = Math.floor(Math.random() * 3);
   
    if (pcEscolheu == 0) {
       document.getElementById("imgPc").src="img/pedra.png";
        
    }else if (pcEscolheu == 1) { 
        document.getElementById("imgPc").src="img/papel.png";
    
    }else if (pcEscolheu == 2 ) {
        document.getElementById("imgPc").src="img/tesoura.png";
        
    }




    if ( document.getElementById("pedra").checked == true && pcEscolheu == 0  ||  document.getElementById("papel").checked == true && pcEscolheu == 1  ||  document.getElementById("tesoura").checked == true && pcEscolheu == 2 )  {


       
        document.getElementById("resultado").innerHTML = "Empate";
        var empates = placarEmpate++;
        document.getElementById("empates").innerHTML = empates;
        
        return;
        

        
    }else if ( document.getElementById("pedra").checked == true && pcEscolheu == 2 || document.getElementById("papel").checked == true && pcEscolheu == 0 || document.getElementById("tesoura").checked && pcEscolheu == 1 ) { 

        document.getElementById("resultado").innerHTML = "Parabéns, você venceu!" ;
        var vitorias = placarVitoria++;
        document.getElementById("vitorias").innerHTML = vitorias;

        return;



    }else if ( document.getElementById("pedra").checked == true && pcEscolheu == 1 || document.getElementById("papel").checked && pcEscolheu == 2 || document.getElementById("tesoura").checked && pcEscolheu == 0 ) {

        document.getElementById("resultado").innerHTML = "Você perdeu, tente novamente!" ;
        var derrotas = ++placarDerrota;
        document.getElementById("derrotas").innerHTML = derrotas;

        return;

    } 

}



/*function jogar() {

    if ( document.getElementById("pedra").checked == false && document.getElementById("papel").checked == false && document.getElementById("tesoura").checked == false ) {

        alert("Escolha umua opção");
       
      
    }else {

    var pcEscolheu = Math.floor(Math.random() * 3);
    //alert (pcEscolheu);

    switch (pcEscolheu) {

    case 0 :
        document.getElementById("imgPc").src="img/pedra.png";
        break;
    case 1 :
        document.getElementById("imgPc").src="img/papel.png";
        break;  
     case 2 :
        document.getElementById("imgPc").src="img/tesoura.png";
        break;
}

}

}
*/
