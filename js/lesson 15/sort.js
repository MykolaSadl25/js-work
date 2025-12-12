// const platforms = games.flatMap((item)=>item.platforms);
// console.log(platforms);
// const platformObject = platforms.reduce((acc,item)=>{
//     if (acc[item]) {
//         acc[item] += 1
//     }
//     else{
//         acc[item] = 1
//     }
//     return acc
// },{})
// console.log(platformObject);

// sort numbers
// const arr = [100,12,4,6,1,2,8,9,3,3];
// const copyArr = arr.slice()
// const sortedArr = [...arr].sort((a,b)=>b-a);
// console.log(arr);
// console.log(sortedArr);

// sort string
// const arr = ["PC", "Mobile", "Nintendo Switch", "PlayStation", "Xbox"];
// const sortedByAlphabet = [...arr].sort((a,b)=> a.localeCompare(b));
// console.log(sortedByAlphabet);

const games = [
  {
    title: "The Witcher 3: Wild Hunt",
    genre: "RPG",
    rating: 9.8,
    developer: "CD Projekt Red",
    year: 2015,
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    price: 40,
  },
  {
    title: "Cyberpunk 2077",
    genre: "Action RPG",
    rating: 8.6,
    developer: "CD Projekt Red",
    year: 2020,
    platforms: ["PC", "PlayStation", "Xbox"],
    price: 50,
  },
  {
    title: "Minecraft",
    genre: "Sandbox",
    rating: 9.5,
    developer: "Mojang Studios",
    year: 2011,
    platforms: ["PC", "Mobile", "PlayStation", "Xbox", "Nintendo Switch"],
    price: 30,
  },
  {
    title: "God of War: Ragnarök",
    genre: "Action Adventure",
    rating: 9.7,
    developer: "Santa Monica Studio",
    year: 2022,
    platforms: ["PlayStation 5", "PlayStation 4"],
    price: 70,
  },
  {
    title: "Red Dead Redemption 2",
    genre: "Action Adventure",
    rating: 9.9,
    developer: "Rockstar Games",
    year: 2018,
    platforms: ["PC", "PlayStation", "Xbox"],
    price: 60,
  },
  {
    title: "Fortnite",
    genre: "Battle Royale",
    rating: 8.2,
    developer: "Epic Games",
    year: 2017,
    platforms: ["PC", "Mobile", "PlayStation", "Xbox", "Nintendo Switch"],
    price: 0, // free to play
  },
  {
    title: "Elden Ring",
    genre: "Action RPG",
    rating: 9.6,
    developer: "FromSoftware",
    year: 2022,
    platforms: ["PC", "PlayStation", "Xbox"],
    price: 60,
  },
  {
    title: "GTA V",
    genre: "Open World",
    rating: 9.4,
    developer: "Rockstar North",
    year: 2013,
    platforms: ["PC", "PlayStation", "Xbox"],
    price: 35,
  },
  {
    title: "Among Us",
    genre: "Party / Social Deduction",
    rating: 8.0,
    developer: "Innersloth",
    year: 2018,
    platforms: ["PC", "Mobile", "Nintendo Switch", "PlayStation", "Xbox"],
    price: 5,
  },
  {
    title: "Hades",
    genre: "Roguelike",
    rating: 9.3,
    developer: "Supergiant Games",
    year: 2020,
    platforms: ["PC", "PlayStation", "Xbox", "Nintendo Switch"],
    price: 25,
  },
];


// Task = filter rating more than 9 and sort their name by alphabetical order 
// const filteredRating = games.filter((item)=> item.year >9).sort((a,b)=> a.year-b.year).map((item)=> item.title);
// console.log(filteredRating);
// Порахувати загальну кількість годин
// Відсортувати по кількості проведенного часу в грі

const players = [
  { id: 'player-1', name: 'Mango', timePlayed: 310, points: 54, online: false },
  { id: 'player-2', name: 'Poly', timePlayed: 470, points: 92, online: true },
  { id: 'player-3', name: 'Kiwi', timePlayed: 230, points: 48, online: true },
  { id: 'player-4', name: 'Ajax', timePlayed: 150, points: 71, online: false },
  { id: 'player-5', name: 'Chelsy', timePlayed: 80, points: 48, online: true },
];

const totalTime = players.reduce((acc,item)=>acc+=item.timePlayed,0);
console.log(totalTime);
const sortedByTime = [...players].sort((a,b)=>b.timePlayed-a.timePlayed);
console.log(sortedByTime);

// Зробити статистику всіх тегів. Назву тега потрібно зробити ключем, значення якого буде кількістьповторень тегів в масиві. Якщо властивість з ключем tag є, збільшуємо його значення на 1 якщо властивості немає с таким ключем що в tag, створити і записати 1

const tweets = [
  { id: '000', likes: 5, tags: ['js', 'nodejs'] },
  { id: '001', likes: 2, tags: ['html', 'css'] },
  { id: '002', likes: 17, tags: ['html', 'js', 'nodejs'] },
  { id: '003', likes: 8, tags: ['css', 'react'] },
  { id: '004', likes: 0, tags: ['js', 'nodejs', 'react'] },
];
const allTags = tweets.flatMap((item)=> item.tags);
console.log(allTags);
const countTags = allTags.reduce((acc,item)=>{
    if (acc[item]) {
        acc[item] += 1
    }
    else{
        acc[item] = 1
    }
    return acc
},{})
console.log(countTags);

