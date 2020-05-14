var product = [
    {name: 'bubblizz', 
    inCart: 0},
    {name: 'Kexchoklad mini', 
    inCart: 0},
    {name: 'Rosa jordgubbsremmar', 
    inCart: 0},
    {name: 'Sockerbitar', 
    inCart: 0},
    {name: 'Riesen', 
    inCart: 0}
];

let carts = document.querySelectorAll('.shop-button');

function add(e){
    e = e || window.event;
    e = e.target || e.scrElement;
    alert(e.id);
    var pro = e.id;
    localStorage.setItem('produkter', pro);
}

function onLoadCartNumbers(){
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers){
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

for (let i = 0; i < carts.length; i++){
    carts[i].addEventListener('click', () =>{
        cartNumbers();
    })
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
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