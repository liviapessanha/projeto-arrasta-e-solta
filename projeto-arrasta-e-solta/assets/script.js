let areas = {
  a: null,
  b: null,
  c: null,
  d: null,
  e: null
};


document.querySelectorAll('.item').forEach(item => {
  item.addEventListener('dragstart', dragStart);
  item.addEventListener('dragend', dragEnd);
});

document.querySelectorAll('.area').forEach(area => {
  area.addEventListener('dragover', dragOver);
  area.addEventListener('dragleave', dragLeave);
  area.addEventListener('drop', drop);
});

document.querySelector('.neutralArea').addEventListener('dragover', dragOverNeutral);
document.querySelector('.neutralArea').addEventListener('dragleave', dragLeaveNeutral);
document.querySelector('.neutralArea').addEventListener('drop', dropNeutral);

function dragStart(e) {
  e.currentTarget.classList.add('dragging');
} 
function dragEnd(e) {
  e.currentTarget.classList.remove('dragging');
}

function dragOver(e) {
  let currentItems = e.currentTarget.querySelectorAll('.item').length;
  
  if (currentItems < 2) {
    e.preventDefault();
    e.currentTarget.classList.add('hover');

  }
}
function dragLeave(e) {
  e.currentTarget.classList.remove('hover');
}
function drop(e) {
  e.currentTarget.classList.remove('hover');

  let dragItem = document.querySelector('.item.dragging');
  let areaName = e.currentTarget.getAttribute('data-name');
  let classeItem = dragItem.classList[1];

 if( verificaFrase(areaName, classeItem)) {
     e.currentTarget.appendChild(dragItem);
     dragItem.classList.add('item-escolhido');
 } else {
  dragItem.classList.remove('item-escolhido');
 }
}
 

function dragOverNeutral(e) {
  e.preventDefault();
   e.currentTarget.classList.add('hover');
}
function dragLeaveNeutral(e) {
e.currentTarget.classList.remove('hover');

}
function dropNeutral(e) {
e.currentTarget.classList.remove('hover');
let dragItem = document.querySelector('.item.dragging');
dragItem.classList.remove('item-escolhido');
e.currentTarget.appendChild(dragItem);
}

function verificaFrase(area, classeItem) {
  const frasesPermitidas = {
    a:['frase1', 'frase2', 'frase4', 'frase5'],
    b:['frase1', 'frase2', 'frase4', 'frase5'],
    c:['frase1', 'frase2', 'frase4', 'frase5'],
  };

  if(frasesPermitidas[area].includes(classeItem)) {
    var audio1 = new Audio();
    audio1.src = "audio/aplausos.mp3";
    audio1.play();
    return true;
  } else {
    var audio2 = new Audio();
    audio2.src = "audio/bomba.mp3";
    audio2.play();
    return false;
  }
}