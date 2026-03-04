// const user = {
//     name:"Mykola",
//     age:15,
//     friend:["Vlad","Maksim","Yarik"],
//     isStudent: false,
//     location:{
//         country: "Ukraine",
//         region:"Khemnitskiy region",
//         city:"Dunaivtsi",
//         street:"Shevchenko Street",
//         flat: 45,
//     },
// }

// const {friend:[item1,item2,item3],location={country,region,city,street,flat},name,age,isStudent} = user;

// console.log(item1);
// console.log(item2);
// console.log(item3);
// console.log(country);
// console.log(city);
// console.log(region);
// console.log(street);

// const arr = [100,150,200];

// const [el,...rest]= arr;
// console.log(el);
// console.log(rest);

const user = ["Mykola","Sadlii"];
console.log(user[0]);
console.log(user[1]);

const [name,surname] = user;
console.log(name);
console.log(surname);


// Об’єкт movie
const movie = {
  title: 'The Shawshank Redemption',
  director: {
    name: 'Frank Darabont',
    nationality: 'American'
  },
  actors: ['Tim Robbins', 'Morgan Freeman'],
  release_year: 1994,
  ratings: {
    imdb: 9.3,
    rotten_tomatoes: 90
  }
}

const {title,director={name,nationality}, actors:[item1,item2],release_year,ratings={imdb,rotten_tomatoes}} = movie;
console.log(title);
console.log(name);
console.log(item1);
console.log(item2);
console.log(release_year);