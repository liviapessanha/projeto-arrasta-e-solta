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
  if(e.currentTarget.querySelector('.item') === null) {
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
    if(!dragItem.classList.contains('cloned')) {
      let clonedItem = dragItem.cloneNode(true);
      clonedItem.classList.add('cloned');
      document.querySelector('.neutralArea').appendChild(clonedItem);
    }

  e.currentTarget.appendChild(dragItem);
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
e.currentTarget.appendChild(dragItem);
}

function verificaFrase(area, classeItem) {
  const frasesPermitidas = {
    a:['frase1', 'frase2'],
    b:['frase3', 'frase4', 'frase1'],
    c:['frase5', 'frase6', 'frase1'],
  };

  if(frasesPermitidas[area].includes(classeItem)) {
    return true;
  } else {
    return false;
  }
}