/* W05: Programming Tasks */

/* Declare and initialize global variables */

// Declare a const variable named templesElement that references the HTML div element
const templesElement = document.getElementById('temples'); // Assuming 'temples' is the id of the div element

// Declare a global empty array variable to store a list of temples
let templeList = [];

/* async displayTemples Function */

// Function to display temples
const displayTemples = (temples) => {
    temples.forEach(temple => {
        // Create <article> element
        const article = document.createElement('article');

        // Create <h3> element for temple name
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        // Create <img> element for image
        const img = document.createElement('img');
        img.src = temple.imageUrl;
        img.alt = temple.location;

        // Append <h3> and <img> to <article>
        article.appendChild(h3);
        article.appendChild(img);

        // Append <article> to templesElement
        templesElement.appendChild(article);
    });
};

/* async getTemples Function using fetch()*/

// Function to fetch temple data
const getTemples = async () => {
    try {
        const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
        if (!response.ok) {
            throw new Error('Failed to fetch temple data');
        }
        const data = await response.json();
        templeList = data; // Assign the fetched data to the templeList array

        // Call the displayTemples function to display the fetched temples
        displayTemples(templeList);
    } catch (error) {
        console.error(error);
    }
};

// Call the getTemples function to fetch and display the temple data
getTemples();

/* reset Function */

// Function to reset the displayed list of temples
const reset = () => {
    templesElement.innerHTML = ''; // Clear all child elements inside the templesElement
};

/* filterTemples Function */

// Function to filter and display temples based on the selected value
const filterTemples = (temples) => {
    reset(); // Clear the displayed temples

    const filter = document.getElementById("filtered").value; // Get the selected value from the dropdown

    switch(filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            displayTemples(temples);
    }
};

getTemples();

/* Event Listener */

// Event listener for the filtered element
document.querySelector("#filtered").addEventListener("change", () => {
    filterTemples(templeList);
});