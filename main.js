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
    //Create a input element
    let input = document.createElement('input');
    //Create a label element
    let label = document.createElement('label');

    //Add input attributes
    input.classList.add('form-check-input', 'me-3');
    input.setAttribute('type', 'checkbox');

    //Add label attributes
    input.classList.add('form-check-label');
    //Insert label list content
    label.append(shoppingList[count]);

    // Add li attributes
    li.classList.add('list-group-item');
    //Insert input and label to li
    li.appendChild(input);
    li.appendChild(label);

    //Insert li to ul
    elementList.append(li);

    count++;
}