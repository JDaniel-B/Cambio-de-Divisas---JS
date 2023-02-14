const monedaUno = document.getElementById('MonedaUno');
const monedaDos = document.getElementById('MonedaDos');
const cantidadUno = document.getElementById('CantidadUno');
const cantidadDos = document.getElementById('CantidadDos');
const tazaCambio = document.getElementById('Cambio');

var myHeaders = new Headers();
  myHeaders.append("apikey", "MehAvzrn85ArE4ykndrtBIup1cn2IxCI");
  
var requestOptions = {
  method: 'GET',
  redirect: 'follow',
  headers: myHeaders
};

const Calcular1 = async ()=>{
  const CantidadUno = cantidadUno.value;
  const MonedaUno = monedaUno.value;
  const MonedaDos = monedaDos.value;
  let textSelectMonedaUno = monedaUno.options[monedaUno.selectedIndex].text;
  let textSelectMonedaDos = monedaDos.options[monedaDos.selectedIndex].text;

  try {
    const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${MonedaDos}&from=${MonedaUno}&amount=${CantidadUno}`, requestOptions);
    const res = await response.json();
    tazaCambio.innerHTML = `1 ${textSelectMonedaUno} es igual a ${(res.info.rate).toFixed(2)} ${textSelectMonedaDos}`;
    cantidadDos.value = (res.result).toFixed(2);
  } catch (error) {
    console.log("error", error);
  }
}

const Calcular2 = async ()=>{
  const CantidadDos = cantidadDos.value;
  const MonedaUno = monedaUno.value;
  const MonedaDos = monedaDos.value;
  let textSelectMonedaUno = monedaUno.options[monedaUno.selectedIndex].text;
  let textSelectMonedaDos = monedaDos.options[monedaDos.selectedIndex].text;
  
  try {
    const response = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${MonedaUno}&from=${MonedaDos}&amount=${CantidadDos}`, requestOptions);
    const res = await response.json();
    tazaCambio.innerHTML = `1 ${textSelectMonedaDos} es igual a ${(res.info.rate).toFixed(2)} ${textSelectMonedaUno}`;
    cantidadDos.value = (res.result).toFixed(2);
  } catch (error) {
    console.log("error", error);
  }
}

monedaUno.addEventListener('change', Calcular1);
cantidadUno.addEventListener('input', Calcular1);
monedaDos.addEventListener('change', Calcular2);
cantidadDos.addEventListener('input', Calcular2);