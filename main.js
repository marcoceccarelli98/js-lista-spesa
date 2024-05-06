'use strict'

//SHOPPING LIST
const shoppingList = [
    'Pane',
    'Latte',
    'Gelato',
    'Fettine di vitello',
    'Vino',
    'Biscotti'
];

//LIST ELEMENT
const elementList = document.querySelector('.list-group');


let count = 0;

while (count < shoppingList.length) {
    //Create a li element
    let li = document.createElement('li');
    //Insert list content to li element
    li.append(shoppingList[count]);
    //Insert li to ul
    elementList.append(li);

    count++;
}