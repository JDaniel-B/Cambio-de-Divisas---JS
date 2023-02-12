const monedaUno = document.getElementById('MonedaUno');
const monedaDos = document.getElementById('MonedaDos');
const cantidadUno = document.getElementById('CantidadUno');
const cantidadDos = document.getElementById('CantidadDos');
const tazaCambio = document.getElementById('Cambio');
const divMoneda1 = document.getElementById('container1');

var myHeaders = new Headers();
  myHeaders.append("apikey", "MehAvzrn85ArE4ykndrtBIup1cn2IxCI");
  
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const Calcular1 = ()=>{
  const CantidadUno = cantidadUno.value;
  const MonedaUno = monedaUno.value;
  const MonedaDos = monedaDos.value;

  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${MonedaDos}&from=${MonedaUno}&amount=${CantidadUno}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      const taza = result.info.rate
      tazaCambio.innerHTML = `1 ${MonedaUno} es igual a ${(taza).toFixed(2)} ${MonedaDos}`
      cantidadDos.value = result.result;
    }).catch(error => console.log('error', error));
}

const Calcular2 = ()=>{
  const CantidadDos = cantidadDos.value;
  const MonedaUno = monedaUno.value;
  const MonedaDos = monedaDos.value;
  
  fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${MonedaUno}&from=${MonedaDos}&amount=${CantidadDos}`, requestOptions)
    .then(response => response.json())
    .then(result => {
      const taza = result.info.rate
      tazaCambio.innerHTML = `1 ${MonedaDos} es igual a ${(taza).toFixed(2)} ${MonedaUno}`
      cantidadUno.value = result.result;
    }).catch(error => console.log('error', error));
}

monedaUno.addEventListener('change', Calcular1);
cantidadUno.addEventListener('input', Calcular1);
monedaDos.addEventListener('change', Calcular2);
cantidadDos.addEventListener('input', Calcular2);