const user = {
    name:"Mykola",
    age: 15,
    location: "Ukraine",
    city: "Khmelnitskiy"
}

// for (const el in user) {
//     // console.log(el); властивість
//     // console.log(user[el]); значення
//     console.log(`key:${el} = ${user[el]}`);
// }

const objKeys = Object.keys(user);// отримати ключі
console.log(objKeys);
for (const key of objKeys) {
    console.log(key); 
}

const objValues = Object.values(user);// отримати значення
console.log(objValues);

for (const key of objValues) {
    console.log(key);
    
}

const objEntries = Object.entries(user);// отимати властивість і значення
for (const element of objEntries) {
    console.log(element[0]);
    
}

console.log(objEntries);

// ============================= PRACTICEEE =================================

// Дано масив об’єктів
const friends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

// Написати функція яка буде отримувати масив та ім’я друга якого потрібно знайти 
function findFriendByName(array,friendName){
    for (let i = 0; i < array.length; i++) {
        if (array[i].name === friendName) {
            return `${friendName} found in the list`
        }
    }
    return `${friendName} is not in the list`
}
console.log(findFriendByName(friends, 'Poly'));
console.log(findFriendByName(friends, 'Chelsy'));

const friendList = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];
// Написати функцію яка буде повертати масив всіх імен друзів
const getAllNames = (array) => {
    const friendName = [];
    for (let i = 0; i < array.length; i++) {
        friendName.push(array[i].name);
    }
    return friendName
}
console.log(getAllNames(friends))

//Написати функцію яка буде повертати масив імен друзів які онлайн
const listOfFriends = [
    { name: 'Mango', online: false },
    { name: 'Kiwi', online: true },
    { name: 'Poly', online: false },
    { name: 'Ajax', online: false },
  ];

  function getOnlineFriends(array) {
    let onlineName = []
    for (const name of array) {
        if (name.online) {
            onlineName.push(name.name)
        }
        
    }
    return onlineName;
  }
  console.log(getOnlineFriends(friends));