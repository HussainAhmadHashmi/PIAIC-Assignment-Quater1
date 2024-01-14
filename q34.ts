// Question : Print the array of favourite pizza and the print the statement along with it

const pizzas:string[] = ["Vegtables", 'Chicken Tikka', "pepperoni " ]

for (const names of pizzas) {
    console.log(`this pizza name is: ${names}`);
    
}

console.log(`\n Print the statement with pizza!`);
for (const favourite of pizzas) {
    
    if (favourite == "Vegtables") {
        console.log(`"${favourite}" is my favourite pizza`);
        
    }
    else if (favourite == "Chicken Tikka"){
        console.log(`"${favourite}" is my favourite pizza`);
    }
     else {
        console.log(`"${favourite}" is my favourite pizza`);
    }
}

console.log(` such as I really love pizza!`);
