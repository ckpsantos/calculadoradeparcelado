function calcular(){
    /* Nessa parte ele irá realizar o primeiro calculo, o residual */

    var valtot = window.document.querySelector('input#price').value;


    var din = window.document.querySelector('input#dinheiro').value; // Inserir entrada em dinheiro
        //var din = Number
    var deb = window.document.querySelector('input#debito').value; // Inserir entrada em débito
        //var deb = Number
    var res1deb = deb * 0.02 - deb // Valor do débito x 2% - o valor do débito
        //var res1deb = Number
    var resdeb = res1deb * -1 // Inverte o valor negativo
        //var resdeb = Number
    var residual = valtot - din - resdeb // Resultado da equacao
        //var residual = Number   

    if (valtot == 0 || null ){
            window.alert('[ERRO]Você precisa inserir o valor total da compra!')
    } else {
        document.getElementById("resposta").innerHTML = (`Residual: R$ ${residual.toFixed(2)}`) //resposta do residual
        
        }
    
    /* Fim do Cálculo do Residual */
    // Início do Cálculo de Parcelas 
var valtotDeb = residual * 0.02 + residual
        document.getElementById("finDeb").innerHTML =(`R$ ${valtotDeb.toFixed(2)}`)

var valtotCred1x = residual * 0.04 + residual
    document.getElementById("fin1x").innerHTML =(`R$ ${valtotCred1x.toFixed(2)}`)

var valtotCred2x = residual * 0.065 + residual
    document.getElementById("fin2x").innerHTML =(`R$ ${valtotCred2x.toFixed(2)}`)

var valtotCred3x = residual * 0.065 + residual
    document.getElementById("fin3x").innerHTML =(`R$ ${valtotCred3x.toFixed(2)}`)

var valtotCred4x = residual * 0.091 + residual
    document.getElementById("fin4x").innerHTML =(`R$ ${valtotCred4x.toFixed(2)}`)

var valtotCred5x = residual * 0.091 + residual
    document.getElementById("fin5x").innerHTML =(`R$ ${valtotCred5x.toFixed(2)}`)

var valtotCred6x = residual * 0.091 + residual
    document.getElementById("fin6x").innerHTML =(`R$ ${valtotCred6x.toFixed(2)}`)

var valtotCred7x = residual * 0.12 + residual
    document.getElementById("fin7x").innerHTML =(`R$ ${valtotCred7x.toFixed(2)}`)

var valtotCred8x = residual * 0.12 + residual
    document.getElementById("fin8x").innerHTML =(`R$ ${valtotCred8x.toFixed(2)}`)

var valtotCred9x = residual * 0.12 + residual
    document.getElementById("fin9x").innerHTML =(`R$ ${valtotCred9x.toFixed(2)}`)

var valtotCred10x = residual * 0.15 + residual
    document.getElementById("fin10x").innerHTML =(`R$ ${valtotCred10x.toFixed(2)}`)

var valtotCred11x = residual * 0.18 + residual
    document.getElementById("fin11x").innerHTML =(`R$ ${valtotCred11x.toFixed(2)}`)

var valtotCred12x = residual * 0.18 + residual
    document.getElementById("fin12x").innerHTML =(`R$ ${valtotCred12x.toFixed(2)}`)

var parcDeb = valtotDeb / 1
        document.getElementById("parDeb").innerHTML =(`R$ ${parcDeb.toFixed(2)}`)

var parcCred1x = valtotCred1x / 1
    document.getElementById("par1x").innerHTML =(`R$ ${parcCred1x.toFixed(2)}`)

var parcCred2x = valtotCred2x / 2
    document.getElementById("par2x").innerHTML =(`R$ ${parcCred2x.toFixed(2)}`)

var parcCred3x = valtotCred3x / 3
    document.getElementById("par3x").innerHTML =(`R$ ${parcCred3x.toFixed(2)}`)

var parcCred4x = valtotCred4x / 4
    document.getElementById("par4x").innerHTML =(`R$ ${parcCred4x.toFixed(2)}`)

var parcCred5x = valtotCred5x / 5
    document.getElementById("par5x").innerHTML =(`R$ ${parcCred5x.toFixed(2)}`)

var parcCred6x = valtotCred6x / 6
    document.getElementById("par6x").innerHTML =(`R$ ${parcCred6x.toFixed(2)}`)

var parcCred7x = valtotCred7x / 7
    document.getElementById("par7x").innerHTML =(`R$ ${parcCred7x.toFixed(2)}`)

var parcCred8x = valtotCred8x / 8
    document.getElementById("par8x").innerHTML =(`R$ ${parcCred8x.toFixed(2)}`)

var parcCred9x = valtotCred9x / 9
    document.getElementById("par9x").innerHTML =(`R$ ${parcCred9x.toFixed(2)}`)

var parcCred10x = valtotCred10x / 10
    document.getElementById("par10x").innerHTML =(`R$ ${parcCred10x.toFixed(2)}`)

var parcCred11x = valtotCred11x / 11
    document.getElementById("par11x").innerHTML =(`R$ ${parcCred11x.toFixed(2)}`)

var parcCred12x = valtotCred12x / 12
    document.getElementById("par12x").innerHTML =(`R$ ${parcCred12x.toFixed(2)}`)


    
}


