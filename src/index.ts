const inputText = document.getElementById('inputText') as HTMLInputElement;
const createBtn = document.getElementById('createBtn') as HTMLButtonElement;
const cardContainer = document.getElementById('cardContainer') as HTMLElement;

function createCard(): void {
  const cardText = inputText.value; 

  if (cardText.trim() === '') {
    alert('Please enter some text.');
    return;
  }

  const card = document.createElement('ion-card');
  const cardHeader = document.createElement('ion-card-header');
  const cardTitle = document.createElement('ion-card-title');
  cardTitle.textContent = cardText;
  
  cardHeader.appendChild(cardTitle);
  card.appendChild(cardHeader);
  
  cardContainer.appendChild(card);

  inputText.value = '';
}

createBtn.addEventListener('click', createCard);
