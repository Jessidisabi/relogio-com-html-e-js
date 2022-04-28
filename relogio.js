    function relogio (){
    var data   = new Date();
    var hora   = data.getHours();
    var minuto = data.getSMinutes();
    var segundo = data.getSeconds();

            if (hora <10){
                hora = "0" + hora;
            }
            if (minuto <10){
                minuto = "0" + minuto;
            }
            if (segundo <10){
                segundo = "0" + segundo;
            }
                


    
  document.getElementById ("relogio").innerHTML = hora+":"+minuto+":"+segundo;
        }
 window.setInterval("relogio()", 1000);
    