function calculatePrice(size: string, toppings: string[], marshmallow: boolean): number {
    let price: number = 0;
    
    switch(size.toLowerCase()) {
        case 'великий':
            price += 25;
            break;  
        case 'маленький':
            price += 10;
            break;
    }
    
    toppings.forEach(topping => {
        switch(topping.toLowerCase()) {
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
    
    if(marshmallow) price += 5;
    
    return price;
}

const size: string = prompt('Розмір стаканчика (маленький, великий)?') || '';

const toppings: string[] = prompt('Начинки (можна декілька через пробіл) (шоколад, карамель, ягоди)?')?.trim().split(' ') || [];

const marshmallow: boolean = confirm('Додавати маршмелоу?');

alert(`Ціна вашого морозива - ${calculatePrice(size, toppings, marshmallow)} грн.`)