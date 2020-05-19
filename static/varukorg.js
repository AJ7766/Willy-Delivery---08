let carts = document.querySelectorAll('.shop-button');
//sparar alla buttons i en variabel

function add(e){ 
    e = e || window.event;
    e = e.target || e.scrElement;
    alert(e.id);
    var pro = e.id;
    localStorage.setItem('produkter', pro); //läger in i localstorage vilket produkt som tryckts på
    cartNumbers(pro);
} // Fuktionen hämtar id från knappen som användaren tryck på och skickar vidare den till en annan funktion

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
} // laddar hur många produter som finns direkt när hemsidan öppnas och laddas om

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