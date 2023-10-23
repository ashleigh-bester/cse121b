/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Ashleigh Bester',
    photo: 'images\profile pic.jpg',
    favoriteFoods: [
        'Potatoes', 
        'Donuts', 
        'Sushi', 
        'Pasta', 
        'Strawberries'
    ],
    hobbies: [
        'Hiking',
        'Game drives',
        'Animal rehabilitation',
        'Ukulele',
        'Public speaking'
    ],
    placesLived: ['']
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Gauteng, South Africa',
        length: '11 years'
    },
    {
        place: 'Melbourne, Australia',
        length: '1 year'
    },
    {
        place: 'Eastern Cape, South Africa',
        length: '2-3 months'
    },
    {
        place: 'Mpumalanga, South Africa',
        length: 'Almost 7 years'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
const imageElement = document.querySelector('#home picture img');
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
}
    )

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
}
    )

/* Places Lived DataList */
let dt = document.createElement('dt');
dt.innerHTML = placesLived.place;
document.querySelector('#places-lived').appendChild(dt);

let dd = document.createElement('dd');
dd.innerHTML = placesLived.length;
document.querySelector('#places-lived').appendChild(dd);

