const inputText = document.getElementById('inputText') as HTMLInputElement;
const createBtn = document.getElementById('createBtn') as HTMLButtonElement;
const cardContainer = document.getElementById('cardContainer') as HTMLElement;

function fechtimage() { 
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve('https://picsum.photos/200/300'); 
      } else {
        reject('Failed to fetch image.'); 
      }
    }, 2000);
  }
  )
  .then((resolvedImage) => {
    const image = document.createElement('img');
    image.src = resolvedImage; 
    cardContainer.appendChild(image);
  })
  .catch((error) => {
    alert(error);
    console.error(error);
  });

}

createBtn.addEventListener('click', fechtimage);


function createCard(): void {
  const cardText = inputText.value; 

  if (cardText.trim() === '') {
    alert('Please enter some text.');
    return;
  }
  new Promise<string>((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() < 0.5) {
        resolve(cardText); 
      } else {
        reject('Failed to create card.'); 
      }
    }, 2000);
  })
  .then((resolvedText) => {
   
    const card = document.createElement('ion-card');
    const cardHeader = document.createElement('ion-card-header');
    const cardTitle = document.createElement('ion-card-title');
    cardTitle.textContent = resolvedText; 

    cardHeader.appendChild(cardTitle);
    card.appendChild(cardHeader);
    cardContainer.appendChild(card);

    inputText.value = ''; 
  })
  .catch((error) => {

    alert(error);
    console.error(error);
  });
}

createBtn.addEventListener('click', createCard);
