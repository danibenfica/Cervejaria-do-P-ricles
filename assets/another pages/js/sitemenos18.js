var refriImg = document.getElementById('refri');
var refriValor = document.getElementById('pRefri');
var totalGasto = 0;

refriImg.addEventListener('mouseover', () => {
    const price = parseFloat('10.00').toFixed(2);
    refriValor.innerHTML = 'Refrigerante <br> R$' + price;
});

refriImg.addEventListener('mouseout', () => {
    refriValor.innerHTML = '';
});

var buttonPurchase = document.getElementById('buttonPurchase');
var mCarrinho = document.getElementById('mCarrinho');
var carrinho = [];

buttonPurchase.addEventListener('click', () => {
    carrinho.push(parseFloat('10.00'));
    updateTotal();
});

mCarrinho.addEventListener('click', () => {
var total = carrinho.reduce((a, b) => a + b, 0);
var url = './total.html?total=' + encodeURIComponent(total.toFixed(2));
window.location.href = url;
});


function updateTotal() {
    var total = carrinho.reduce((a, b) => a + b, 0);
    mCarrinho.innerHTML = 'Meu Carrinho (' + carrinho.length + ') - R$' + total.toFixed(2);
}