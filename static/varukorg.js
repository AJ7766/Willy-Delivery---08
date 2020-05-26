let carts = document.querySelectorAll('.shop-button');
//sparar alla buttons i en variabel
let pro = [];


function add(e){ 
    e = e || window.event;
    e = e.target || e.scrElement;
    pro.push(localStorage.getItem('produkter'));
    pro.push(e.id);
    localStorage.setItem('produkter', pro); //läger in i localstorage vilket produkt som tryckts på
    cartNumbers(pro);
    pro = []
} // Fuktionen hämtar id från knappen som användaren tryck på och skickar vidare den till en annan funktion

function remove(e){ 
    e = e || window.event;
    e = e.target || e.scrElement;
    /*
    pro.pop(localStorage.getItem('produkter'));
    pro.pop(e.id);
    localStorage.setItem('produkter', pro); //läger in i localstorage vilket produkt som tryckts på
    cartNumbers(pro);
    pro = []
    */
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
} // laddar hur många produter som finns direkt när hemsidan öppnas och laddas om

function onLoadProducts(){
    let products = localStorage.getItem('produkter');

    if(products){
        document.querySelector('.varukorg-div').innerHTML = ''
        products = products.split(")");
        products.pop();
        for (i in products){
            products[i] = products[i].split(",")
            console.log('the', products[i]);
            products[i].shift();
            // products.shift() ta bort första i listan
        }
        for (i in products){
            namn = products[i][0];
            namn = namn.substr(2);
            namn = namn.substring(0, namn.length - 1);
            //var s = "0000test";
           // while(s.charAt(0) === '0'){
           //     s = s.substr(1);
           // }
            
            bild = products[i][1];
            bild = bild.substr(2);
            bild = bild.substring(0, bild.length - 1);

            pris = products[i][2];
            
            document.querySelector('.varukorg-div').innerHTML += '<div class="produkt"><img width="160" height="160" src='+bild+'> <p>'+namn+'</p>  <p>Pris:'+pris+'kr/100g</p>  <button class="shop-button" id='+namn+' type="button" onclick="remove(this.class);">Ta bort</button></div>';
        } 
    }
} // laddar vilka produter som finns i varukorgen direkt när hemsidan öppnas och laddas om

function cartNumbers(pro){
    console.log('the product clicked is', pro);

    productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
    } 
    else{
        localStorage.setItem('cartNumbers',  1);
        document.querySelector('.cart span').textContent = 1;
    }
}// funktionen håller koll på hur många varor som lagts till i varukorgen


onLoadCartNumbers();

onLoadProducts();