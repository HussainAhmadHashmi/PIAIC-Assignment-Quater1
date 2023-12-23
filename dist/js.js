
const myarr = ["h", "a"]
const myarr2 = ["ahmad", "hamza"]
myarr.push(myarr2)
// console.log(myarr);
// console.log(myarr [2]);

const mySym = Symbol("key1")

const user = {
    fname: "Hussain",
    "fullname": "Faraz",
    age: 18,
    email: "ahmad@gmail.com",
    isLoggedIn: false,
    lastLogIN: ["monday", "Saturday"],
    [mySym]: "myKey1"
}

user.greeting= function(){
    // console.log("hello user");
}
// console.log(user.greeting());

const fbUser = new Object ()

fbUser.id = "123abc"
fbUser.name = "same"
fbUser.isLoggedIn = false
// console.log(fbUser);
// console.log(typeof fbUser);
const newObj2 = Object.assign(fbUser)

// console.log(Object.keys(fbUser));
// console.log(Object.values(fbUser)); //Not in TypeScript
// console.log(Object.entries(fbUser)); //Not in TypeScript



function loginUserMsg(username){
    if (username === undefined) {
        console.log("enter user name");
    }
    return `${username} just logger in`
}
// console.log(loginUserMsg());

function calculateCartPrice(...number1) {
    return number1
} 
// console.log(calculateCartPrice(200, 400, 700));

// function box() {
//     let username = "faraz"
//     console.log(this); 
// }
// box()

const box = () => {
    let username = "faraz"
    // console.log(this);
}
box()


const arr = [1,2,3,4,5]
// for of
for (const num of arr) {
    // console.log(num);
}


const map = new Map();
map.set("in", "India");
map.set("PK", "Pakistan");
map.set("IR", "Iran");

// console.log(map);
for (const [key, value] of map) {
    // console.log(key, ":-", value);
}

const myObj = {
    Game1: "Taken",
    Game2: "GTA 5",
    Game3: "Angry Bird"
}
for (const key in myObj) {
    // console.log(`${key} :- ${myObj[key]}`);
    
}


const programing = ["html", "css", "javaScript", "html", "css", "javaScript"]
for (const key in programing) {
    // console.log(key);
    // console.log(programing[key]);
    
}


const map2 = new Map()
map2.set("in", "India")
map2.set("PK", "Pakistan")
map2.set("IR", "IR")

for (const key in map2) {
    // console.log(key);
}



const programs = [1,2,3,4,5,6,7,8,9]

const newNums = []
programs.forEach( (num)=> {
    if (num>4) {
        newNums.push(num)
    }
} )
console.log(newNums);
console.log([] == ![]);












