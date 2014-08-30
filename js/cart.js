var items = 0;
var sum = 0;
var shoppingList = [];

var addToCart = function(element) {
	var itemName = $(element).siblings('label').attr('for').split('-')[0];
	var price = $(element).siblings('.price').html();
	var priceDigital = parseFloat(price.split("£")[1]);
	var quantity = parseInt($(element).siblings('label').find('select').val());

	items = items + quantity;
	$('#cart').html(items);

	var newCartItem = "<li>" + itemName + " (" + quantity + ")<span>£" + priceDigital * quantity + "</span></li>";

	$('form.summary ul').prepend(newCartItem);

	sum = sum + priceDigital * quantity;
	sum = Math.round(sum*100)/100;

	$('#total span').html('£' + sum);
	
}

var removeFromCart = function(element) {
	var itemCost = $(element).children('span').html();
	var itemCostDigital = parseFloat(itemCost.split("£")[1]);
	var quantity = parseInt($(element).html().split("(")[1].split(")")[0]);

	items = items - quantity;
	$('#cart').html(items);

	sum = sum - itemCostDigital;
	sum = Math.round(sum*100)/100;
	
	$('#total span').html('£' + sum);
	$(element).remove();
}

$(document).ready(function(){

	$('button').click(function(event) {
		var button = event.currentTarget;
		addToCart(button);
		$('form.summary ul').css('display', 'block');
	});

	$('body').on('click', 'form.summary ul li', function(event) {
		var listItem = event.currentTarget;
		removeFromCart(listItem);
	})

});