/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
const fullName = "Santiago Benjamín Irigoyen";
const currentYear = 2024;
const profilePicture = "images/Yo.jpg";

/* Step 3 - Element Variables */
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.getElementById("Santiago");
    const foodElement = document.getElementById("Milanesa");
    
    // Select element with ID starting with a number using querySelector
    const yearElement = document.querySelector("[id='2003']");
    const imageElement = document.querySelector("[src='images/Yo.jpg']");

    /* Step 4 - Adding Content */
    if (nameElement) {
        nameElement.innerHTML = `<strong>${fullName}</strong>`;
    }

    if (yearElement) {
        yearElement.textContent = currentYear;
    }

    if (imageElement) {
        imageElement.setAttribute('src', profilePicture);
        imageElement.setAttribute('alt', `Profile image of ${fullName}`);
    }

    /* Step 5 - Array */
    let favFoods = ['Pizza', 'Sushi', 'Ice Cream'];

    if (foodElement) {
        foodElement.innerHTML = favFoods.join('<br>');

        let newFavorite = 'Burger';
        favFoods.push(newFavorite);

        foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

        favFoods.shift();

        foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;

        favFoods.pop();

        foodElement.innerHTML += `<br>${favFoods.join('<br>')}`;
    }
});