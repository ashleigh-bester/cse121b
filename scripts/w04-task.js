/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: 'Ashleigh Bester'
    photo: 'images\profile pic.jpg'
    favoriteFoods: [
        'Potatoes', 
        'Donuts', 
        'Sushi', 
        'Pasta', 
        'Strawberries'
    ]
    hobbies: [
        'hiking',
        'game drives',
        'animal rehabilitation',
        'ukulele',
        'public speaking'
    ]
    placesLived: ['']
};



/* Populate Profile Object with placesLive objects */
myProfile.placesLived.push(
    {
        place: 'Gauteng, South Africa'
        length: '11 years'
    },
    {
        place: 'Melbourne, Australia'
        length: '1 year'
    },
    {
        place: 'Eastern Cape, South Africa'
        length: '2-3 months'
    },
    {
        place: 'Mpumalanga, South Africa'
        length: 'Almost 7 years'
    }
);



/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
imageElement.setAttribute('src', myProfile.photo);
imageElement.setAttribute('alt', `Profile image of ${myProfile.name}`);

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('favorite-foods').appendChild(li);
}
    )

/* Hobbies List */


/* Places Lived DataList */


