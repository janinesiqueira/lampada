const turnOn = document.getElementById('turnOn')
const turnOff = document.getElementById('turnOff')
const lamp = document.getElementById('lamp')

function isBroken(){
  return lamp.src.indexOf ('quebrada') > -1
}

function lampOn(){
  if(!isBroken()){
     lamp.src = 'img/ligada.jpg'
  }
}

function lampOff(){
  if(!isBroken()){
    lamp.src = 'img/desligada.jpg'
  }
}

function lampBroke(){
  lamp.src = 'img/quebrada.jpg'
}

turnOn.addEventListener('click', lampOn)
turnOff.addEventListener('click', lampOff)
lamp.addEventListener('mouseover', lampOn)
lamp.addEventListener('mouseleave', lampOff)
lamp.addEventListener('dblclick', lampBroke)