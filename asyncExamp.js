//CODE IN PROMISE METHOD

// console.log("Person 1: shows the Ticket");
// console.log("Person 2: shows the Ticket");

// const promiseFatherBringTickets = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("the Ticket");
//     },2000);
// })
// const getPopCorn = promiseFatherBringTickets.then((t) => {
//     console.log("father : Let's go into theater");
//     console.log("son: No, I was Hungary");
//     return new Promise ((resolve, reject) => {
//         resolve(`Take this popcorn, give me ${t}`);
//     })
// });
// const getButterPopCorn = promiseFatherBringTickets.then((t) => {
//     console.log("father : Ok son, you got your food. Let's go into theater");
//     console.log("son: No, I want Butter on popcorn");
//     return new Promise ((resolve, reject) => {
//         resolve(`Ok no worries dear, keep ${t} with you. I will bring Butter popcorp`);
//     })
// });


// getButterPopCorn.then((t) => {
//     console.log(t);
// });

// console.log("Person 4: shows the Ticket");
// console.log("Person 5: shows the Ticket");




//CODE IN ASUNC/WAIT METHOD
console.log("Person 1: shows the Ticket");
console.log("Person 2: shows the Ticket");
const preMovie = async () => {
const promiseFatherBringTickets = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Ticket");
    },1000)
});
const getPopCorn =  new Promise ((resolve, reject) => {
        resolve("Popcorn");
});

const getButterPopCorn = new Promise ((resolve, reject) => {
            resolve("Butter");
        });

const getCoolDrink = new Promise ((resolve, reject) => {
            resolve("CoolDrink");
});        
    


let ticket = await promiseFatherBringTickets;
console.log(`son : I have Tickets ${ticket}`);
console.log("father : Let's go into theater");
console.log("son: No, I was Hungary");


let popCorn = await getPopCorn;
console.log(`father: I can get ${popCorn}`);
console.log("father : Ok son, you got your food. Let's go into theater");
console.log("son: No, I want Butter on popcorn");


let butterPopcorn = await getButterPopCorn;
console.log(`father: I got  ${butterPopcorn}`);
console.log("son : Ok, Thank you ");

let drinks = await getCoolDrink;
console.log(`son : Father, i need ${drinks}`);
console.log("father : Ok son, wait i will bring");
return ticket;

//how to handle Promise.all with async await
// let [Popcorn, Butter, CoolDrink] = await Promise.all([getPopCorn, getButterPopCorn, getCoolDrink]);
// console.log(`${Popcorn},${Butter},${CoolDrink}`);

}
preMovie().then((m) => {
    console.log(m);
})



console.log("Person 4: shows the Ticket");
console.log("Person 5: shows the Ticket");
