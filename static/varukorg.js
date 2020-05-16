let carts = document.querySelectorAll('.shop-button');

function add(e){
    e = e || window.event;
    e = e.target || e.scrElement;
    alert(e.id);
    var pro = e.id;
    localStorage.setItem('produkter', pro);
    cartNumbers(pro);
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

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

}

onLoadCartNumbers();