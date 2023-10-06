/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Ashleigh Bester';
let currentYear = '';
let profilePicture = 'images\profile pic.jpg';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('#home picture img');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong> ${fullName} </strong>`;
yearElement.textContent = '2023';
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);

/* Step 5 - Array */
let favoriteFoods = ['Potatoes', 'Donuts', 'Sushi', 'Pasta', 'Strawberries']
foodElement.innerHTML = favoriteFoods;
let newFood = favoriteFoods.push('Taco Salad');
foodElement.innerHTML += `<br>${favoriteFoods}`;
let firstFood = favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods}`;
let lastFood = favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods}`;
