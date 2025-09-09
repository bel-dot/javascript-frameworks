interface LibraryItem {
    name: string,
    author: string,
    borrow(): void,
    about(): void,
};

class Book implements LibraryItem {
    name: string;
    author: string;
    pages: number;
    borrowed: boolean = false;
    
    constructor(name: string, author: string, pages: number) {
        this.name = name;
        this.author = author;
        this.pages = pages;
    }

    borrow(): void {
        this.borrowed = true;
    }
    
    about(): void {
        console.log('Назва книги: ' + this.name);
        console.log('Автор книги: ' + this.author);
        console.log('К-ть сторінок: ' + this.pages);
        console.log('Позичена: ' + (this.borrowed ? 'Так' : 'Ні'));
    }
}

class Magazine implements LibraryItem {
    name: string;
    author: string;
    release: number;
    borrowed: boolean = false;
    
    constructor(name: string, author: string, release: number) {
        this.name = name;
        this.author = author;
        this.release = release;
    }

    borrow(): void {
        this.borrowed = true;
    }

    about(): void {
        console.log('Назва книги: ' + this.name);
        console.log('Автор книги: ' + this.author);
        console.log('Номер випуску' + this.release);
        console.log('Позичена: ' + (this.borrowed ? 'Так' : 'Ні'));
    }
}

class DVD implements LibraryItem {
    name: string;
    author: string;
    duration: number;
    borrowed: boolean = false;
    
    constructor(name: string, author: string, duration: number) {
        this.name = name;
        this.author = author;
        this.duration = duration;
    }

    borrow(): void {
        this.borrowed = true;
    }

    about(): void {
        console.log('Назва книги: ' + this.name);
        console.log('Автор книги: ' + this.author);
        console.log('Тривалість ' + this.duration + ' хв');
        console.log('Позичена: ' + (this.borrowed ? 'Так' : 'Ні'));
    }
}

class Library {
    items: LibraryItem[] = [];
    
    addItem(item: LibraryItem): void {
        this.items.push(item);
    };
    
    findItemByName(name: string): LibraryItem | undefined {
        for(let item of this.items) {
            if(item.name === name) return item;
        }
        return undefined;
    };
    
    listItems(): void {
        this.items.forEach(item => {
            item.about()
            console.log();
        });
    }
}

const library = new Library();

library.addItem(new Book('Дім листя', 'Марк Данилевський', 405))
library.addItem(new Magazine('Пригоди Спанчбоба', 'Nikelodeon', 228))
library.addItem(new DVD('Кораліна у світі кошмарів', 'Генрі Селік', 100))

console.log(library.findItemByName('Дім листя')?.about());

library.listItems();