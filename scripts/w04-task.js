/* LESSON 3 - Programming Tasks */

/* Profile Object */

let myProfile = {
  name: "Santiago Benjamín Irigoyen",
  photo: "cse121b/images/Yo.jpg",
  favoriteFoods: [
    'Napolitan Milanese',
    'Strawberry',
    'Icecream'
  ],
  hobbies: [
    'Writing',
    'Reading',
    'Photography'
  ],
  placesLived: [
    {
      place: 'Argentina, Buenos Aires, Las Malvinas',
      length: '17 years'
    },
    {
      place: 'Argentina, Misiones, Posadas',
      length: '3 years'
    }
  ]
};

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List */
const favoriteFoodsList = document.querySelector('#favorite-foods');
myProfile.favoriteFoods.forEach(food => {
  let li = document.createElement('li');
  li.textContent = food;
  favoriteFoodsList.appendChild(li);
});

/* Hobbies List */
const hobbiesList = document.querySelector('#hobbies');
myProfile.hobbies.forEach(hobby => {
  let li = document.createElement('li');
  li.textContent = hobby;
  hobbiesList.appendChild(li);
});

/* Places Lived DataList */
const placesLivedList = document.querySelector('#places-lived');
myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;
  let dd = document.createElement('dd');
  dd.textContent = place.length;
  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});
