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

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');
    let products = localStorage.getItem('produkter');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
    if(products){
        document.querySelector('.varukorg-div').textContent = products;
    }
} // laddar hur många produter som finns direkt när hemsidan öppnas och laddas om

function onLoadProducts(){
    let products = localStorage.getItem('produkter');

    if(products){
        document.querySelector('.varukorg-div').textContent = products;
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