# desafio-mks
Desafio 50%
\
|_HTML 
|_CSS
|_JAVASCRIPT
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>MKS Sistemas</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">
    <link rel="stylesheet" href="style-css.css">
</head>
<body>
    <header>
    
  <div class="logo">
    <span class="mks">MKS</span> <span class="sistemas">Sistemas</span>
  </div>

  <div class="cart-container">
    <div class="cart-icon" onclick="toggleCartPopup()">
      <i class="fas fa-shopping-cart"></i>
        <span class="item-count" id="itemCount"></span>
  </div>

  <div class="cart-popup" id="cartPopup">
    <p id="cartItemsText">Nenhum item selecionado</p>
      <button onclick="toggleCartPopup()">Fechar</button>
    <div class="cart-popup" id="cartPopup">
      <h2>Carrinho de compras</h2>
        <div id="cartItemsText">
    <p>Nenhum item selecionado</p>
    <p>Total: R$ <span id="totalAmount">0,00</span></p>
  </div>

  <button class="close-btn" onclick="toggleCartPopup()"><i class="fas fa-times"></i></button>
</div>
</div>
</div>
</div>

</header>
  <main>
        <div class="row">
            <div class="product" id="product1">
                <h2>Apple Watch Series 4 GPS</h2>
                <img src="https://cdn-cosmos.bluesoft.com.br/products/190198858696" alt="Apple Watch">
                <button onclick="addItemToCart('Apple Watch')">Adicionar ao carrinho</button>
            </div>
            <div class="product" id="product2">
                <h2>JBL Speaker</h2>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQAORzwtWOG7SpqeHlvLWilNJleD8di6jRG2OuDltBbcSwJbiJF"alt="JBL">
                <button onclick="addItemToCart('JBL')">Adicionar ao carrinho</button>
            </div>
            <div class="product" id="product3">
                <h2>Apple Iphone x 128GB</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXataCvoC9g7ZPeirX3Y7fnLHTBoV83-6OxDh8fD3JzFRnMxWK" alt="Telefone">
                <button onclick="addItemToCart('Telefone')">Adicionar ao carrinho</button>
            </div>
            <div class="product" id="product4">
                <h2>Beats Headphones</h2>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcT1EIHX73N2r79PLYSi_bt-LkwoF8BF2Sf3UatEXGHQQxgzG559" alt="Notebook">
                <button onclick="addItemToCart('Notebook')">Adicionar ao carrinho</button>
            </div>
        </div>
        <div class="row">
            <div class="product" id="product5">
                <h2>Apple Macbook Pro</h2>
                <img src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQkM1LueBVnEHrL3_xLKlzmqFpVO64y4qpH9GaBHQ9WFf-w1YIG" alt="Tablet">
                <button onclick="addItemToCart('Tablet')">Adicionar ao carrinho</button>
            </div>
            <div class="product" id="product6">
                <h2>Apple Ipad Pro 64GB</h2>
                <img src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQJYbJRLtzEJiOICKmMhMak3ouLcDDUplzLmKfwlUPsReYB2euK" alt="Apple HomePod">
                <button onclick="addItemToCart('Apple HomePod')">Adicionar ao carrinho</button>
            </div>
            <div class="product" id="product7">
                <h2>Apple Homepod</h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK2gr_VuuhT1LSMa_vbZ9uPctS8qJ2jL8QupS5yQ2Qvcp-9s0Y" alt="Smartwatch">
                <button onclick="addItemToCart('Smartwatch')">Adicionar ao carrinho</button>
            </div>
            <div class="product" id="product8">
                <h2>JBuds Air Wireless</h2>
                <img src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQRf0VYhkUrpdsm6y57Q78ibRzgmh8fnm7kVjun8mtBjmPKcZjL" alt="Fone de Ouvido">
                <button onclick="addItemToCart('Fone de Ouvido')">Adicionar ao carrinho</button>
            </div>

        </div>
    </main>
    <script src="fuction-js.js"></script>
</body>
</html>

body {
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
}

header {
  background-color: #007bff; /* Azul */
  color: #fff;
  padding: 10px 0;
  padding-left: 50px; /* Move o texto 50 pixels para a esquerda */
  display: flex;
  justify-content: space-between; /* Espaça o logo e o ícone do carrinho */
  align-items: center; /* Centraliza verticalmente os itens no header */
}

.logo {
  font-size: 35px; /* Tamanho da fonte aumentado */
  font-weight: bold; /* MKS em negrito */
}

.mks {
  font-size: 30px; /* Tamanho maior para MKS */
}

.sistemas {
  font-size: 15px; /* Metade do tamanho de MKS para Sistemas */
  font-weight: normal;
}

.cart-container {
  position: absolute;
  top: 10px;
  right: 10px;
  display: flex;
  align-items: center;
}

.cart-icon {
  font-size: 24px; /* Tamanho do ícone */
  background-color: #fff; /* Fundo branco */
  border: 1px solid #000; /* Borda preta */
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  color: #000; /* Cor preta */
  position: relative;
}

.cart-icon .item-count {
  position: absolute;
  top: -10px;
  right: -10px;
  background-color: red;
  color: white;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 12px;
  display: none; /* Inicialmente oculto */
}

.cart-popup {
  display: none; /* Oculto por padrão */
  position: absolute;
  top: 50px;
  right: 10px;
  background-color: #fff;
  border: 1px solid #000;
  color: black;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.cart-popup.active {
  display: block; /* Mostra o popup quando ativo */
}

main {
  padding: 20px;
}

.product {
  margin-bottom: 20px;
}

.product h2 {
  margin: 0 0 10px;
}

.product img {
  width: 150px;
  height: 150px;
  display: block;
  margin-bottom: 10px;
}

.product button {
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.product button:hover {
  background-color: #0056b3;
}

/* Mantenha suas outras regras de estilo aqui */

.row {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.product {
  margin: 0 10px; /* Espaço entre os produtos */
  text-align: center; /* Centraliza o texto e imagem */
  width: 200px; /* Largura dos produtos */
}

.product img {
  width: 150px;
  height: 150px;
  display: block;
  margin: 0 auto 10px; /* Centraliza a imagem verticalmente */
}

.product button {
  width: 100%; /* Botão com largura total */
  padding: 10px;
}
/* Outras regras de estilo */

header {
  background-color: #007bff; /* Alterado para azul */
}

.cart-popup {
  background-color: #f8f9fa; /* Fundo branco */
  border: 1px solid #ced4da;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.cart-container {
  position: relative;
}

.cart-icon {
  font-size: 24px; /* Tamanho do ícone */
  background-color: #fff; /* Fundo branco */
  border: 1px solid #000; /* Borda preta */
  padding: 5px;
  border-radius: 5px;
  cursor: pointer;
  color: #000; /* Cor preta */
  position: relative;
}

.close-btn {
  background-color: transparent;
  border: none;
  color: #000;
  font-size: 20px;
  position: absolute;
  top: 5px;
  right: 5px;
  cursor: pointer;
}
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



