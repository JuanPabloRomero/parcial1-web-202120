const { json } = require('body-parser');
const { response, request } = require('express');

const getPairsOfPlayers = async (req = request, resp = response, next) => {
  //Implementar logica aquí
  const url = "https://gist.githubusercontent.com/jhonatan89/bc554ec3ded15407609714e8b7b8f1c8/raw/5ab1e3e5b45e99aabcbbdd30f55d2ae5eafb9cbe/nba-players"
  var datos;
  fetch(url).then(res=>res.json()).then(res=>
  {
    datos = res
  })
  resp = []
  height = req[0]
  for (let i = 0; i < datos.length; i++) {
    const element = datos.values[i].h_in
    for (let j = i; j < datos.length; j++) {
      const element2 = datos.values[j].h_in
      if(element+element2 == req)
      {
        resp.push(datos.values[i])
        resp.push(datos.values[j])
      }
    }
  }

  return resp
};

module.exports = { getPairsOfPlayers };
