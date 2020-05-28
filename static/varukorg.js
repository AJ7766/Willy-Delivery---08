console.log("running")
let carts = document.querySelectorAll('.add-cart'); // ger "lägg till button" en variabel "carts"

let products =[ // en array med produkter
  {
    name: "Apelsinflaska",
    tag: "apelsinflaska",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/apelsinflaska_picture-5-560x560.png"
  },
  {
    name: "Banana Bubs",
    tag: "bananabubs",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/banana-bubs_picture-8-560x560.png"
  },
  {
    name: "Blåbärskulor",
    tag: "blåbärskulor",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/blabarskulor_picture-8-560x560.png"
  },
  {
    name: "Bounty mini",
    tag: "bountymini",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/bounty-minis_picture-9-560x560.png"
  }
];

for (let i=0; i< carts.length; i++){ //loopar igenom alla produkter
    carts[i].addEventListener('click', ()=> { //lägger till en actionlistener för "klick"

    cartNumbers(products[i]); // skickar med produkten från rätt index i arrayen
    totalCost(products[i]); // skickar priset från rätt index i arrayen
    console.log(carts[i]);
  })
}

function onLoadCartNumbers() { //funktionen hämtar antalet "value" från cartNumbers i local storage och överför antalet till "span" som i detta fallet är varukorgen
    let productNumbers = localStorage.getItem('cartNumbers')

    if(productNumbers){ //om det finns ett värde i productnumber så överför datan till span
    document.querySelector('.varukorgbild span').textContent = productNumbers; 
  }

}

function cartNumbers(product, action) { //en funktion för att hålla koll på antal produkter i varukorgen
     let productNumbers = localStorage.getItem('cartNumbers'); //productNumbers = hämtar localstorage värden för "cartNumbers"
     productNumbers = parseInt(productNumbers); //sträng till int

     let cartItems = localStorage.getItem('productsInCart'); // carItems = hämtar localstorage värden för antalet produkter i "productsInCart"
     cartItems = JSON.parse(cartItems); //omvandlar cartItems till en json-sträng

     if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart span').textContent = productNumbers - 1;
   } else if( productNumbers ) { // om det redan finns något i varukorgen, +1
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
  } else { // finns det inga produkter i varukorgen så sätt värdet till "1"
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart span').textContent = 1;
  }
  setItems(product);
}


function setItems(product){
     let cartItems = localStorage.getItem('productsInCart') //cartItems = hämtar localstorage produkter i varukorgen

     cartItems = JSON.parse(cartItems);

      console.log("my cart items are", cartItems)

     if(cartItems !=null){ //om cartItems inte är null
        let currentProduct = product.tag;

        if(cartItems[currentProduct] == undefined){ //om en ny produkt blir "click" så läggs den till i cartItems
        cartItems = {
          ...cartItems
          ,[currentProduct]: product
        }
    }

    cartItems[currentProduct].inCart += 1; //öka med 1 om det redan finns något i inCart
  }else{
    product.inCart = 1; //första gången man lägger till en pryl så blir inCart = 1
    cartItems = {
      [product.tag]: product
  }
}

  localStorage.setItem("productsInCart", JSON.stringify(cartItems)); //sätter värden i productsInCart till cartItems
}

function totalCost( product, action ) { //hämtar totalCost[i] från loopen och sedan skapar ett annat objekt action
  let cart = localStorage.getItem("totalCost");

  if( action) {
      cart = parseInt(cart);

      localStorage.setItem("totalCost", cart - product.price);
  } else if(cart != null) {
      
      cart = parseInt(cart);
      localStorage.setItem("totalCost", cart + product.price);
  
  } else {
      localStorage.setItem("totalCost", product.price);
  }
}

function displayCart(){
  
    let cartItems = localStorage.getItem("productsInCart")
    cartItems = JSON.parse(cartItems);

    let productContainer = document.querySelector(".products");
    let carCost = localStorage.getItem('totalCost');

    if(cartItems && productContainer){
      
      productContainer.innerHTML = '';
      Object.values(cartItems).map(item => {
        productContainer.innerHTML += `
        <div class="products">
        
        <div class="product-title">
              <img src="http://pluspng.com/img-png/exit-button-png-button-cancel-close-delete-exit-remove-stop-x-icon-512.png" class="remove-item" id="close-button">
              <img src="${item.image}" id="product-image">
              <span id="itemName">${item.name}</span></div>
              <div class="price">${item.price}kr</div>
              <div class="quantity"><span>${item.inCart * 100}g</span></div>
              <div class="total">${item.inCart * item.price}kr</div>
              </div>`;
      });

  productContainer.innerHTML +=`
        <div class="basketTotalContainer">
          <h4 class="basketTotalTitle">Totala Summan:</h4>
          <h4 class="basketTotal">  ${carCost}kr</h4>
         </div>`;
  deleteButtons();
}
}

function deleteButtons() {
  let deleteButtons = document.querySelectorAll('#close-button');
  let productNumbers = localStorage.getItem('cartNumbers');
  let cartCost = localStorage.getItem("totalCost");
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  let productName;
  
  console.log(cartItems);

  for(let i=0; i < deleteButtons.length; i++) {
      deleteButtons[i].addEventListener('click', () => {
          productName = deleteButtons[i].parentElement.textContent.toLocaleLowerCase().replace(/ /g,'').trim();

          console.log(productName, "DeleteButton fungerar!");

          localStorage.setItem('cartNumbers', productNumbers - cartItems[productName].inCart);
          localStorage.setItem('totalCost', cartCost - ( cartItems[productName].price * cartItems[productName].inCart));

          delete cartItems[productName];
          localStorage.setItem('productsInCart', JSON.stringify(cartItems));

          displayCart();
          onLoadCartNumbers();
      })
  }
}

onLoadCartNumbers()
displayCart()