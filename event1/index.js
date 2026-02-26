import {EventEmitter} from 'events';
const myEventEmitter = new EventEmitter();


// Fungsi yang akan dijalankan ketika event 'coffee-order' terjadi
const makeCoffee = ({name}) => {
    console.log(`Kopi ${name} telah dibuat!`);
};


// Fungsi yang akan dijalankan ketika event 'coffee-order' terjadi
const makeBill = ({price}) => {
    console.log(`Bill sebesar ${price} telah dibuat!`);
}


// Mendaftarkan fungsi make coffee sebagai event listener untuk event 'coffee-order'
myEventEmitter.on('coffee-order', makeCoffee);

// Mendaftarkan fungsi make bill sebagai event listener untuk event 'coffee-order'
myEventEmitter.on('coffee-order', makeBill);


// Memicu event 'coffee-order' terjadi
myEventEmitter.emit('coffee-order', {name: 'Latte', price: 15000});



