let itemCount = 0;
const cartItems = [];

function toggleCartPopup() {
    const cartPopup = document.getElementById('cartPopup');
    cartPopup.classList.toggle('active');
    updateCartText();
}

function updateCartText() {
    const cartItemsText = document.getElementById('cartItemsText');
    if (itemCount === 0) {
        cartItemsText.textContent = 'Nenhum item selecionado';
    } else {
        cartItemsText.innerHTML = ''; // Limpa o conteúdo existente
        for (let i = 0; i < cartItems.length; i++) {
            const item = cartItems[i];
            const listItem = document.createElement('div');
            listItem.textContent = item;
            const removeButton = document.createElement('button');
            removeButton.textContent = 'Remover';
            removeButton.addEventListener('click', () => removeItemFromCart(i));
            listItem.appendChild(removeButton);
            cartItemsText.appendChild(listItem);
        }
        const itemCountDisplay = document.createElement('p');
        itemCountDisplay.textContent = `${itemCount} item(s) selecionado(s):`;
        cartItemsText.insertBefore(itemCountDisplay, cartItemsText.firstChild);
    }
}

function updateItemCountDisplay() {
    const itemCountElement = document.getElementById('itemCount');
    if (itemCount > 0) {
        itemCountElement.textContent = itemCount;
        itemCountElement.style.display = 'inline';
    } else {
        itemCountElement.textContent = '';
        itemCountElement.style.display = 'none';
    }
}

function addItemToCart(item) {
    itemCount++;
    cartItems.push(item);
    updateItemCountDisplay();
    updateCartText();
}

function removeItemFromCart(index) {
    cartItems.splice(index, 1);
    itemCount--;
    updateItemCountDisplay();
    updateCartText();
}

function adjustImageSize() {
  var windowWidth = window.innerWidth;

 
  var imageSize = windowWidth * 0.1; 

  
  var images = document.querySelectorAll('.product img');

 
  images.forEach(function(image) {
      image.style.width = imageSize + 'px';
      image.style.height = 'auto'; 
  });
}


window.onload = adjustImageSize;


window.onresize = adjustImageSize;
