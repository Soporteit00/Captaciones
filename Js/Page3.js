const wordContainers = document.querySelectorAll('.word');
        
let draggedLetter = null;

function handleDragStart(event) {
  draggedLetter = event.target;
  event.dataTransfer.effectAllowed = 'move';
}

function handleDragOver(event) {
  event.preventDefault();
  event.dataTransfer.dropEffect = 'move';
}

function handleDrop(event) {
  event.preventDefault();
  if (event.target.classList.contains('letter')) {
    const targetLetter = event.target;
    const parentWord = targetLetter.parentNode;
    const parentWordArray = Array.from(parentWord.children);

    const startIndex = parentWordArray.indexOf(draggedLetter);
    const targetIndex = parentWordArray.indexOf(targetLetter);

    if (startIndex > targetIndex) {
      parentWord.insertBefore(draggedLetter, targetLetter);
    } else {
      parentWord.insertBefore(draggedLetter, targetLetter.nextSibling);
    }
  }
  draggedLetter = null;
}

wordContainers.forEach(wordContainer => {
  const letters = Array.from(wordContainer.children);
  letters.forEach(letter => {
    letter.addEventListener('dragstart', handleDragStart);
    letter.addEventListener('dragover', handleDragOver);
    letter.addEventListener('drop', handleDrop);
  });
});