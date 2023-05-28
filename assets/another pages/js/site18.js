var wineImg = document.getElementById('vinho');
var wineValue = document.getElementById('pVinho');
var beerImg = document.getElementById('cerveja');
var beerValue = document.getElementById('pCerveja');
var sodaImg = document.getElementById('refri');
var sodaValue = document.getElementById('pRefri');
var totalSpent = 0;
var cart = [];

wineImg.addEventListener('mouseover', () => {
    const price = parseFloat('30.00').toFixed(2);
    wineValue.innerHTML = 'Vinho<br>R$ ' + price;
});

wineImg.addEventListener('mouseout', () => {
    wineValue.innerHTML = '';
});

beerImg.addEventListener('mouseover', () => {
    const price = parseFloat('20.00').toFixed(2);
    beerValue.innerHTML = 'Cerveja Heineken<br>R$ ' + price;
});

beerImg.addEventListener('mouseout', () => {
    beerValue.innerHTML = '';
});

sodaImg.addEventListener('mouseover', () => {
    const price = parseFloat('10.00').toFixed(2);
    sodaValue.innerHTML = 'Refrigerante Guaraná<br>R$ ' + price;
});

sodaImg.addEventListener('mouseout', () => {
    sodaValue.innerHTML = '';
});

var buttonPurchase1 = document.getElementById('buttonPurchase1');
var buttonPurchase2 = document.getElementById('buttonPurchase2');
var buttonPurchase3 = document.getElementById('buttonPurchase3');
var mCarrinho = document.getElementById('mCarrinho');

buttonPurchase1.addEventListener('click', () => {
    cart.push(parseFloat('30.00'));
    updateTotal();
});

buttonPurchase2.addEventListener('click', () => {
    cart.push(parseFloat('20.00'));
    updateTotal();
});

buttonPurchase3.addEventListener('click', () => {
    cart.push(parseFloat('10.00'));
    updateTotal();
});

mCarrinho.addEventListener('click', () => {
    var total = cart.reduce((a, b) => a + b, 0);
    var url = './total.html?total=' + encodeURIComponent(total.toFixed(2));
    window.location.href = url;
});

function updateTotal() {
    var total = cart.reduce((a, b) => a + b, 0);
    mCarrinho.innerHTML = 'Meu Carrinho (' + cart.length + ') - R$ ' + total.toFixed(2);
}
