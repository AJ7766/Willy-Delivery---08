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
  },
  {
    name: "Bubblizz",
    tag: "bubblizz",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/bubblizz_picture-6-560x560.png"
  },
  {
    name: "Chokladfudge",
    tag: "chokladfudge",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/vaniljfudge_picture-7-560x560.jpg"
  },
  {
    name: "Daim mini",
    tag: "daimmini",
    price: 7,
    inCart: 0,
    image: "https://www.happycandy.se/images/normal/daimmini.jpeg"
  },
  {
    name: "Djungelvrål",
    tag: "djungelvrål",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/djungelvral_picture-10-560x560.png"
  },
  {
    name: "Ferrari",
    tag: "ferrari",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/ferrari_picture-7-560x560.png"
  },
  {
    name: "Gele hallon",
    tag: "gelehallon",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/gelehallon_picture-14-560x560.png"
  },
  {
    name: "Gummibjörnar",
    tag: "gummibjörnar",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/gummibjornar_picture-4-560x560.png"
  },
  {
    name: "Hallonfilurer",
    tag: "hallonfilurer",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/hallonfilurer_picture-8-560x560.png"
  },
  {
    name: "Hallon lakritsskallar",
    tag: "hallonlakritsskallar",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/hallon-lakritsskallar_picture-12-560x560.png"
  },
  {
    name: "Halloweenskalle",
    tag: "halloweenskalle",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/halloweenskalle_picture-7.jpg"
  },
  {
    name: "Hockeypuck",
    tag: "hockeypuck",
    price: 7,
    inCart: 0,
    image: "https://www.happycandy.se/images/list/hockeypuck-22049.jpg"
  },
  {
    name: "Jordgubbsfudge",
    tag: "jordgubbsfudge",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/jordgubbsfudge_picture-7-560x560.png"
  },
  {
    name: "Juleskum",
    tag: "juleskum",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/juleskum_picture-7-560x560.png"
  },
  {
    name: "Kexchoklad mini",
    tag: "kexchokladmini",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/kexchoklad-mini_picture-11-560x560.png"
  },
  {
    name: "Kitkat mini",
    tag: "kitkatmini",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/kit-kat-mini_picture-10-560x560.png"
  },
  {
    name: "Körsbär",
    tag: "körsbär",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/korsbar_picture-11-560x560.png"
  },
  {
    name: "Lakritspinnar",
    tag: "lakritspinnar",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/lakritspinnar_picture-6-560x560.png"
  },
  {
    name: "M&M's",
    tag: "m&M's",
    price: 7,
    inCart: 0,
    image: "https://www.happycandy.se/images/normal/m.jpg"
  },
  {
    name: "Nogger",
    tag: "nogger",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/nogger_picture-560x560.png"
  },
  {
    name: "Pez",
    tag: "pez",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/pez_picture-8-560x560.png"
  },
  {
    name: "Piggelin",
    tag: "piggelin",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/piggelin_picture-1-560x560.png"
  },
  {
    name: "Polly bilar",
    tag: "pollybilar",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/polly-bilar_picture-8-560x560.png"
  },
  {
    name: "Regnbågsmeter",
    tag: "regnbågsmeter",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/regnbagsmeter_picture-8-560x560.png"
  },
  {
    name: "Riesen",
    tag: "riesen",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/riesen-dark_picture-8-560x560.png"
  },
  {
    name: "Rosa jordgubbsremmar",
    tag: "rosajordgubbsremmar",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/rosa-jordgubbsremmar_picture-8-560x560.png"
  },
  {
    name: "Skittles",
    tag: "skittles",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/skittles_picture-9-560x560.png"
  },
  {
    name: "Skumkantareller",
    tag: "skumkantareller",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/skumkantareller_picture-9-560x560.jpg"
  },
  {
    name: "Snicker mini",
    tag: "snickermini",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/snickers-minis_picture-8-560x560.png"
  },
  {
    name: "Sockerbitar",
    tag: "sockerbitar",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/sockerbitar-original_picture-8-560x560.png"
  },
  {
    name: "Sockrade jordgubbar",
    tag: "sockradejordgubbar",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/sockrade-jordgubbar_picture-11-560x560.png"
  },
  {
    name: "Soda pops",
    tag: "sodapops",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/soda-pops_picture-8-560x560.png"
  },
  {
    name: "Sportlunch",
    tag: "sportlunch",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/sportlunch_picture-6-560x560.png"
  },
  {
    name: "Sura patroner",
    tag: "surapatroner",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/sura-patroner_picture-8-560x560.png"
  },
  {
    name: "Sweethearts",
    tag: "sweethearts",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/sweethearts_picture-7-560x560.png"
  },
  {
    name: "Tuggummikulor",
    tag: "tuggummikulor",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/tuggummikulor_picture-8-560x560.png"
  },
  {
    name: "Twix mini",
    tag: "twixmini",
    price: 7,
    inCart: 0,
    image: "http://candyking.com/ckse/wp-content/uploads/sites/2/2019/08/twix-minis_picture-8-560x560.png"
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
    document.querySelector('.cart-span').textContent = productNumbers; 
  }

}

function cartNumbers(product, action) { //en funktion för att hålla koll på antal produkter i varukorgen
     let productNumbers = localStorage.getItem('cartNumbers'); //productNumbers = hämtar localstorage värden för "cartNumbers"
     productNumbers = parseInt(productNumbers); //sträng till int

     let cartItems = localStorage.getItem('productsInCart'); // carItems = hämtar localstorage värden för antalet produkter i "productsInCart"
     cartItems = JSON.parse(cartItems); //omvandlar cartItems till en json-sträng

     if( action ) {
        localStorage.setItem("cartNumbers", productNumbers - 1);
        document.querySelector('.cart-span').textContent = productNumbers - 1;
   } else if( productNumbers ) { // om det redan finns något i varukorgen, +1
        localStorage.setItem("cartNumbers", productNumbers + 1);
        document.querySelector('.cart-span').textContent = productNumbers + 1;
  } else { // finns det inga produkter i varukorgen så sätt värdet till "1"
        localStorage.setItem("cartNumbers", 1);
        document.querySelector('.cart-span').textContent = 1;
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

function clearStorage(){
  localStorage.clear();
  document.getElementById('Thanks').style.visibility='visible';
}
function clearBox(){
  document.getElementById('Thankscontact').style.visibility='visible';
  document.getElementById('text').innerHTML = "";
}

onLoadCartNumbers()
displayCart()