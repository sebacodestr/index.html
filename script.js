const CALCULAR = document.getElementById('calcular');
const ERROR = document.getElementById('error');
const VD= document.getElementById('vd');
const FLU = document.getElementById('flu');
const MAN = document.getElementById('man');

var radio=document.getElementById('radio-button');
var input= document.getElementById('peso');


input.addEventListener("keypress",()=>{
    var peso = input.valueAsNumber;
    if(peso>30){
        radio.style.display='block'
        
    }else{
        radio.style.display='none'
    }
    VD.style.display = 'none';
    FLU.style.display = 'none';
    MAN.style.display = 'none';
})

input.addEventListener("keypress",function(event){
    const peso=input.valueAsNumber;
    if (peso > 0){
        ERROR.style.display = 'none'
        let flujo = Math.round(calcFlujo(peso)/24);
        let mantenimiento = flujo*1.5;
        VD.innerHTML= Math.round(calcFlujo(peso))+' cc';
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        VD.style.display= 'block';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        VD.style.display = 'none';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

CALCULAR.addEventListener('click', () => {
    const DATO = document.getElementById('peso').valueAsNumber
    //validamos que se cargue un dato:
    if (DATO > 0){
        ERROR.style.display = 'none'
        let flujo = Math.round(calcFlujo(DATO)/24);
        let mantenimiento = flujo*1.5;
        VD.innerHTML= Math.round(calcFlujo(DATO))+' cc';
        FLU.innerHTML = flujo + ' cc/hr';
        MAN.innerHTML = 'm+m/2 ' + mantenimiento + ' cc/hr';
        VD.style.display= 'block';
        FLU.style.display = 'block';
        MAN.style.display = 'block';
    } else {
        ERROR.style.display = 'block';
        VD.style.display = 'none';
        FLU.style.display = 'none';
        MAN.style.display = 'none';
    }
})

function calcFlujo(peso){
    let suero=0;
    let peso2=0;
    if(peso<=30){
      if(peso<=10){
          suero= 100*peso;
      }else{
          if(peso<=20){
              peso2= peso-10;
              suero= 1000+(peso2*50);
          }else{
              peso2= peso-20;
              suero= 1000+500+(peso2*20);
          }
      }
    }else{
      let sup= ((peso*4)+7)/(parseInt(peso)+90);

      if(document.getElementById('checkbox1').checked){
        nElegido= document.getElementById('checkbox1').value;
      }else{
        nElegido= document.getElementById('checkbox2').value;
      }
      
      suero= sup*nElegido;
    }
  
    return suero;

}