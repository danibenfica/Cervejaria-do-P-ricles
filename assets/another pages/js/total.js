window.addEventListener('DOMContentLoaded', () => {
    var params = new URLSearchParams(window.location.search);
    var total = params.get('total');

    var totalElement = document.getElementById('pTotal');
    totalElement.textContent = 'Olá! Você comprou o total de: R$' + total + ' em bebidas!';
});

var btInicio = document.getElementById('btInicio');

btInicio.addEventListener('click', () => {
    window.location.href = '../../index.html';
});
