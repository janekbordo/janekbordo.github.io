$(document).ready(function () {

    function getPLNData() {
        var buyPrice = $('#buy-price').html();
        var sellPrice = $('#sell-price').html();

        $.getJSON('https://blockchain.info/pl/ticker', function (data) {
            var PLNbuy = data.PLN.buy.toFixed(2);
            var PLNsell = data.PLN.sell.toFixed(2);
            var PLNsymbol = data.PLN.symbol;

            $('#buy-price').text(PLNbuy + PLNsymbol);

            $('#sell-price').text(PLNsell + PLNsymbol);

            if (buyPrice > PLNbuy + PLNsymbol) {
                $('#buy-arrow').removeClass().addClass('fa fa-arrow-down');
            } else if (buyPrice < PLNbuy + PLNsymbol) {
                $('#buy-arrow').removeClass().addClass('fa fa-arrow-up');
            } else {
                $('#buy-arrow').removeClass().addClass('fa fa-minus-square');
            }

            if (sellPrice > PLNsell + PLNsymbol) {
                $('#sell-arrow').removeClass().addClass('fa fa-arrow-down');
            } else if (sellPrice < PLNsell + PLNsymbol) {
                $('#sell-arrow').removeClass().addClass('fa fa-arrow-up');
            } else {
                $('#sell-arrow').removeClass().addClass('fa fa-minus-square');
            }

            console.log('odswiezono');

        })
    };
    getPLNData();
    setInterval(getPLNData, 3000);
});
