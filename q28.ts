// Question 28: Print the stages of life a person

const age:number = 100
if (age < 2 ) {
    console.log(`${age} years old,  person is a baby`);
}
else if(age >=2 && age < 4){
    console.log(`${age} years old,  person is a toddler.`);  
} 
else if(age >=4 && age < 13){
    console.log(`${age} years old,  the person is a kid.`);  
} 
else if(age >=13 && age < 20){
    console.log(`${age} years old,  the person is a teenager.`);  
} 
else if(age >=20 && age < 65){
    console.log(`${age} years old,  the person is an adult.`);  
} 
else if( age > 65){
    console.log(`${age} years old,  the person is an elder.`);  
}
else{
    console.log('person is no more');
} 