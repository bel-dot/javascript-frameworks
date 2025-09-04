var _a;
function calculatePrice(size, toppings, marshmallow) {
    var price = 0;
    switch (size.toLowerCase()) {
        case 'великий':
            price += 25;
            break;
        case 'маленький':
            price += 10;
            break;
    }
    toppings.forEach(function (topping) {
        switch (topping.toLowerCase()) {
            case 'шоколад':
                price += 5;
                break;
            case 'карамель':
                price += 6;
                break;
            case 'ягоди':
                price += 10;
                break;
        }
    });
    if (marshmallow)
        price += 5;
    return price;
}
var size = prompt('Розмір стаканчика (маленький, великий)?') || '';
var toppings = ((_a = prompt('Начинки (можна декілька через пробіл) (шоколад, карамель, ягоди)?')) === null || _a === void 0 ? void 0 : _a.trim().split(' ')) || [];
var marshmallow = confirm('Додавати маршмелоу?');
alert("\u0426\u0456\u043D\u0430 \u0432\u0430\u0448\u043E\u0433\u043E \u043C\u043E\u0440\u043E\u0437\u0438\u0432\u0430 - ".concat(calculatePrice(size, toppings, marshmallow), " \u0433\u0440\u043D."));
