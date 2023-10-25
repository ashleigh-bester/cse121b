/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
const templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach((temple) => {
        const article = document.createElement('article');
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName + 'Temple';
        const img = document.createElement('img');
        img.src = temple.imageURL;
        img.alt = temple.location;
        article.appendChild(h3);
        article.appendChild(img);
        templesElement.appendChild(article);
    })
};

/* async getTemples Function using fetch()*/
let getTemples = async () => {
    const response = await fetch('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json')
    if (response.ok) {
        const data = await response.json();
        displayTemples(data);
    }
}

/* reset Function */
let reset = () => {
    templesElement = [];
};

/* sortBy Function */
let sortBy = async (temples) => {
    reset();

    let filter = await document.getElementById('#sortBy').value;

    switch (filter) {
        case templeList.filter(templeList.includes('Utah')):
            displayTemples(temples)
    }
};


getTemples();

/* Event Listener */
document.querySelector('#sortBy').addEventListener('change', () => { sortBy(templeList) });