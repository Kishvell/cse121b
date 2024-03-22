/* LESSON 3 - Programming Tasks */

/* Profile Object  */

let myProfile = {};

let myProfile = {
  name: "Santiago Benjamín Irigoyen"
}

myProfile.photo = "cse121b/images/Yo.jpg";

myProfile.favoriteFoods = [
  'Napolitan Milanese',
  'Strawberry',
  'Icecream'
];

myProfile.hobbies = [
  'Writing',
  'Reading',
  'Photography'
];

myProfile.placesLived = [];

myProfile.placesLived.push(
  {
    place: 'Argentina, Buenos Aires, Las Malvinas',
    length: '17 year'
  }
);

    myProfile.placesLived.push(
        {
        place: 'Argentina, Misiones, Posadas',
        length: '3 years'
        }
    );

/* DOM Manipulation - Output */

/* Name */

document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */

document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/

myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li'); // create an HTML <li> element
    li.textContent = food; // place the value of the favoriteFoods array element into the textContent of this new li element
    document.querySelector('#favorite-foods').appendChild(li); // append this new <li> element with content as a child of the HTML <ul> element with an ID of favorite-foods
  });

/* Hobbies List */

myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li'); // create an HTML <li> element
    li.textContent = hobby; // place the value of the hobbies array element into the textContent of this new li element
    document.querySelector('#hobbies').appendChild(li); // append this new <li> element with content as a child of the HTML <ul> element with an ID of hobbies
  });

/* Places Lived DataList */

myProfile.placesLived.forEach(place => {
  let dt = document.createElement('dt'); // create an HTML <dt> element
  dt.textContent = place.place; // put its place property in the <dt> element
  let dd = document.createElement('dd'); // create an HTML <dd> element
  dd.textContent = place.length; // put its length property in the <dd> element
  document.querySelector('#places-lived').appendChild(dt); // append the HTML <dt> element to the HTML <dl> element with an ID of places-lived
  document.querySelector('#places-lived').appendChild(dd); // append the HTML <dd> element to the HTML <dl> element with an ID of places-lived
});